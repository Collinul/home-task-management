import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const userId = session.user.id
    const { searchParams } = new URL(request.url)
    
    // Query parameters
    const status = searchParams.get("status") // 'all', 'completed', 'pending'
    const priority = searchParams.get("priority") // 'high', 'medium', 'low'
    const categoryId = searchParams.get("categoryId")
    const householdId = searchParams.get("householdId")
    const limit = parseInt(searchParams.get("limit") || "50")
    const offset = parseInt(searchParams.get("offset") || "0")

    // Build where clause
    const where: any = {
      OR: [
        { userId }, // User's personal tasks
        { 
          household: {
            members: {
              some: { userId }
            }
          }
        } // Tasks from households where user is a member
      ]
    }

    // Add status filter
    if (status === 'completed') {
      where.isCompleted = true
    } else if (status === 'pending') {
      where.isCompleted = false
    }

    // Add priority filter
    if (priority && ['high', 'medium', 'low'].includes(priority)) {
      where.priority = priority
    }

    // Add category filter
    if (categoryId) {
      where.categoryId = categoryId
    }

    // Add household filter
    if (householdId) {
      where.householdId = householdId
    }

    // Get tasks with categories
    const tasks = await prisma.task.findMany({
      where,
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
      },
      orderBy: [
        { isCompleted: "asc" }, // Incomplete tasks first
        { dueDate: "asc" },
        { priority: "desc" },
        { createdAt: "desc" }
      ],
      skip: offset,
      take: limit
    })

    // Get total count for pagination
    const totalCount = await prisma.task.count({ where })

    return NextResponse.json({
      tasks,
      totalCount,
      hasMore: offset + tasks.length < totalCount
    })
  } catch (error) {
    console.error("Error fetching tasks:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const userId = session.user.id
    const body = await request.json()
    
    const { 
      title, 
      description, 
      dueDate, 
      estimatedMinutes, 
      priority = 'medium',
      categoryId,
      householdId,
      assignedToId 
    } = body

    // Validate required fields
    if (!title || !dueDate || !categoryId) {
      return NextResponse.json(
        { error: "Title, due date, and category are required" },
        { status: 400 }
      )
    }

    // Validate category access
    const category = await prisma.category.findFirst({
      where: {
        id: categoryId,
        OR: [
          { userId }, // User's personal category
          {
            household: {
              members: {
                some: { userId }
              }
            }
          }
        ]
      }
    })

    if (!category) {
      return NextResponse.json(
        { error: "Invalid category or access denied" },
        { status: 403 }
      )
    }

    // If household task, validate household access
    if (householdId) {
      const membership = await prisma.householdMember.findFirst({
        where: {
          userId,
          householdId
        }
      })

      if (!membership) {
        return NextResponse.json(
          { error: "Access denied to household" },
          { status: 403 }
        )
      }
    }

    // Create the task
    const newTask = await prisma.task.create({
      data: {
        title,
        description: description || null,
        dueDate: new Date(dueDate),
        estimatedMinutes: estimatedMinutes || null,
        priority,
        categoryId,
        userId: householdId ? null : userId, // If household task, don't set userId
        householdId: householdId || null,
        assignedToId: assignedToId || null
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

    return NextResponse.json(newTask, { status: 201 })
  } catch (error) {
    console.error("Error creating task:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}