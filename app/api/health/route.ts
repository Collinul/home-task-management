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

    // Quick health check: get counts of user data
    const [userTasksCount, userCategoriesCount, userHouseholdsCount] = await Promise.all([
      prisma.task.count({
        where: {
          OR: [
            { userId },
            {
              household: {
                members: {
                  some: { userId }
                }
              }
            }
          ]
        }
      }),
      prisma.category.count({
        where: {
          OR: [
            { userId },
            {
              household: {
                members: {
                  some: { userId }
                }
              }
            }
          ]
        }
      }),
      prisma.household.count({
        where: {
          members: {
            some: { userId }
          }
        }
      })
    ])

    return NextResponse.json({
      status: "healthy",
      user: {
        id: userId,
        email: session.user.email,
        name: session.user.name
      },
      data: {
        tasks: userTasksCount,
        categories: userCategoriesCount,
        households: userHouseholdsCount
      },
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error("Health check error:", error)
    return NextResponse.json(
      { 
        status: "unhealthy", 
        error: "Database connection failed",
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}