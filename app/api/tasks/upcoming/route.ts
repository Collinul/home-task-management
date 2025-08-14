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
    const limit = parseInt(searchParams.get("limit") || "10")

    // Get upcoming tasks (not completed, ordered by due date)
    const upcomingTasks = await prisma.task.findMany({
      where: {
        userId,
        isCompleted: false
      },
      include: {
        category: {
          select: {
            id: true,
            name: true,
            emoji: true,
            color: true
          }
        }
      },
      orderBy: [
        { dueDate: "asc" },
        { priority: "desc" }
      ],
      take: limit
    })

    // Transform tasks to match the expected format
    const formattedTasks = upcomingTasks.map(task => {
      const dueDate = new Date(task.dueDate)
      const now = new Date()
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000)
      
      let dueDateDisplay: string
      
      if (dueDate < now && dueDate >= today) {
        // Due today
        dueDateDisplay = `Today, ${dueDate.toLocaleTimeString('en-US', { 
          hour: 'numeric', 
          minute: '2-digit',
          hour12: true 
        })}`
      } else if (dueDate >= tomorrow && dueDate < new Date(tomorrow.getTime() + 24 * 60 * 60 * 1000)) {
        // Due tomorrow
        dueDateDisplay = `Tomorrow, ${dueDate.toLocaleTimeString('en-US', { 
          hour: 'numeric', 
          minute: '2-digit',
          hour12: true 
        })}`
      } else if (dueDate < today) {
        // Overdue
        dueDateDisplay = `Overdue (${dueDate.toLocaleDateString('en-US', { 
          weekday: 'short',
          month: 'short', 
          day: 'numeric'
        })})`
      } else {
        // Future date
        dueDateDisplay = dueDate.toLocaleDateString('en-US', { 
          weekday: 'long',
          month: 'short', 
          day: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        })
      }

      return {
        id: task.id,
        title: task.title,
        description: task.description,
        dueDate: dueDateDisplay,
        priority: task.priority,
        category: task.category.name,
        categoryColor: task.category.color,
        categoryEmoji: task.category.emoji,
        estimatedMinutes: task.estimatedMinutes,
        isOverdue: dueDate < now
      }
    })

    return NextResponse.json(formattedTasks)
  } catch (error) {
    console.error("Error fetching upcoming tasks:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}