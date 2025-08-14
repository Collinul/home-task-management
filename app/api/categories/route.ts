import { NextRequest, NextResponse } from "next/server"
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

    // Get user's personal categories and categories from their households
    const userCategories = await prisma.category.findMany({
      where: {
        OR: [
          // Personal categories
          { userId },
          // Household categories where user is a member
          {
            household: {
              members: {
                some: {
                  userId
                }
              }
            }
          }
        ]
      },
      include: {
        _count: {
          select: {
            tasks: {
              where: {
                OR: [
                  { userId }, // User's personal tasks
                  { 
                    household: {
                      members: {
                        some: { userId }
                      }
                    }
                  }
                ]
              }
            }
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
        { name: "asc" }
      ]
    })

    // Transform categories to include task counts and household info
    const formattedCategories = userCategories.map(category => ({
      id: category.id,
      name: category.name,
      emoji: category.emoji,
      color: category.color,
      taskCount: category._count.tasks,
      isPersonal: !!category.userId,
      household: category.household ? {
        id: category.household.id,
        name: category.household.name
      } : null,
      createdAt: category.createdAt,
      updatedAt: category.updatedAt
    }))

    return NextResponse.json(formattedCategories)
  } catch (error) {
    console.error("Error fetching categories:", error)
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
    
    const { name, emoji, color, householdId } = body

    if (!name || typeof name !== 'string') {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      )
    }

    // Check if user has access to the household (if householdId is provided)
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

    // Create the category
    const newCategory = await prisma.category.create({
      data: {
        name,
        emoji: emoji || null,
        color: color || null,
        userId: householdId ? null : userId, // If it's a household category, don't set userId
        householdId: householdId || null
      }
    })

    return NextResponse.json(newCategory, { status: 201 })
  } catch (error) {
    console.error("Error creating category:", error)
    
    // Handle unique constraint violation
    if (error && typeof error === 'object' && 'code' in error && error.code === 'P2002') {
      return NextResponse.json(
        { error: "A category with this name already exists" },
        { status: 409 }
      )
    }
    
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}