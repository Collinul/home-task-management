import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const userId = session.user.id

    // Get current date boundaries
    const now = new Date()
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const endOfToday = new Date(startOfToday.getTime() + 24 * 60 * 60 * 1000)
    
    // Get start of this week (Monday)
    const startOfWeek = new Date(now)
    const day = startOfWeek.getDay()
    const diff = startOfWeek.getDate() - day + (day === 0 ? -6 : 1)
    startOfWeek.setDate(diff)
    startOfWeek.setHours(0, 0, 0, 0)

    // Run all queries in parallel for better performance
    const [
      totalTasks,
      overdueTasks,
      dueTodayTasks,
      completedThisWeek,
      totalCompletedThisWeek
    ] = await Promise.all([
      // Total active tasks for user
      prisma.task.count({
        where: {
          userId,
          isCompleted: false
        }
      }),
      
      // Overdue tasks (due date passed and not completed)
      prisma.task.count({
        where: {
          userId,
          isCompleted: false,
          dueDate: {
            lt: now
          }
        }
      }),
      
      // Tasks due today
      prisma.task.count({
        where: {
          userId,
          isCompleted: false,
          dueDate: {
            gte: startOfToday,
            lt: endOfToday
          }
        }
      }),
      
      // Tasks completed this week
      prisma.task.count({
        where: {
          userId,
          isCompleted: true,
          completedAt: {
            gte: startOfWeek
          }
        }
      }),
      
      // Total completed tasks this week (for percentage calculation)
      prisma.task.count({
        where: {
          userId,
          isCompleted: true,
          completedAt: {
            gte: new Date(startOfWeek.getTime() - 7 * 24 * 60 * 60 * 1000)
          }
        }
      })
    ])

    // Calculate percentage change from last week
    const lastWeekCompleted = totalCompletedThisWeek - completedThisWeek
    const percentageChange = lastWeekCompleted > 0 
      ? Math.round(((completedThisWeek - lastWeekCompleted) / lastWeekCompleted) * 100)
      : completedThisWeek > 0 ? 100 : 0

    const stats = {
      totalTasks,
      overdueTasks,
      dueTodayTasks,
      completedThisWeek,
      completedThisWeekChange: percentageChange
    }

    return NextResponse.json(stats)
  } catch (error) {
    console.error("Error fetching dashboard stats:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}