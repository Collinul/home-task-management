import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ taskId: string }> }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const userId = session.user.id
    const { taskId } = await params
    const body = await request.json()

    // First, verify the user has access to this task
    const task = await prisma.task.findFirst({
      where: {
        id: taskId,
        OR: [
          { userId }, // User's personal task
          { 
            household: {
              members: {
                some: { userId }
              }
            }
          } // Task from a household where user is a member
        ]
      }
    })

    if (!task) {
      return NextResponse.json(
        { error: "Task not found or access denied" },
        { status: 404 }
      )
    }

    // Update the task
    const updatedTask = await prisma.task.update({
      where: { id: taskId },
      data: {
        title: body.title !== undefined ? body.title : task.title,
        description: body.description !== undefined ? body.description : task.description,
        isCompleted: body.isCompleted !== undefined ? body.isCompleted : task.isCompleted,
        completedAt: body.isCompleted !== undefined 
          ? (body.isCompleted ? new Date() : null)
          : task.completedAt,
        dueDate: body.dueDate !== undefined ? new Date(body.dueDate) : task.dueDate,
        estimatedMinutes: body.estimatedMinutes !== undefined ? body.estimatedMinutes : task.estimatedMinutes,
        actualMinutes: body.actualMinutes !== undefined ? body.actualMinutes : task.actualMinutes,
        priority: body.priority !== undefined ? body.priority : task.priority,
        categoryId: body.categoryId !== undefined ? body.categoryId : task.categoryId,
        assignedToId: body.assignedToId !== undefined ? body.assignedToId : task.assignedToId,
      },
      include: {
        category: {
          select: {
            id: true,
            name: true,
            emoji: true,
            color: true
          }
        },
        user: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
        household: {
          select: {
            id: true,
            name: true
          }
        }
      }
    })

    // Log the action in task history if it was completed
    if (body.isCompleted === true && !task.isCompleted) {
      await prisma.taskHistory.create({
        data: {
          taskId: taskId,
          action: "completed",
          completedBy: userId,
          completionTime: new Date()
        }
      })
    }

    return NextResponse.json(updatedTask)
  } catch (error) {
    console.error("Error updating task:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ taskId: string }> }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const userId = session.user.id
    const { taskId } = await params

    // First, verify the user has access to this task
    const task = await prisma.task.findFirst({
      where: {
        id: taskId,
        OR: [
          { userId }, // User's personal task
          { 
            household: {
              members: {
                some: { 
                  userId,
                  role: { in: ["admin", "owner"] } // Only admin/owner can delete household tasks
                }
              }
            }
          }
        ]
      }
    })

    if (!task) {
      return NextResponse.json(
        { error: "Task not found or insufficient permissions" },
        { status: 404 }
      )
    }

    // Delete the task (cascade will handle related records)
    await prisma.task.delete({
      where: { id: taskId }
    })

    return NextResponse.json({ message: "Task deleted successfully" })
  } catch (error) {
    console.error("Error deleting task:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ taskId: string }> }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const userId = session.user.id
    const { taskId } = await params

    // Get the task with full details
    const task = await prisma.task.findFirst({
      where: {
        id: taskId,
        OR: [
          { userId }, // User's personal task
          { 
            household: {
              members: {
                some: { userId }
              }
            }
          } // Task from a household where user is a member
        ]
      },
      include: {
        category: {
          select: {
            id: true,
            name: true,
            emoji: true,
            color: true
          }
        },
        user: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
        household: {
          select: {
            id: true,
            name: true
          }
        },
        subTasks: {
          include: {
            category: true
          }
        },
        taskHistory: {
          orderBy: {
            createdAt: 'desc'
          },
          take: 10
        },
        recurrenceRule: true
      }
    })

    if (!task) {
      return NextResponse.json(
        { error: "Task not found or access denied" },
        { status: 404 }
      )
    }

    return NextResponse.json(task)
  } catch (error) {
    console.error("Error fetching task:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}