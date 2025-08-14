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

    // Get households where the user is a member
    const households = await prisma.household.findMany({
      where: {
        members: {
          some: {
            userId
          }
        }
      },
      include: {
        members: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true
              }
            }
          }
        },
        _count: {
          select: {
            tasks: {
              where: {
                isCompleted: false
              }
            },
            categories: true
          }
        }
      },
      orderBy: {
        name: "asc"
      }
    })

    // Transform the data to include user's role and additional info
    const formattedHouseholds = households.map(household => {
      const userMembership = household.members.find(member => member.userId === userId)
      
      return {
        id: household.id,
        name: household.name,
        description: household.description,
        createdAt: household.createdAt,
        updatedAt: household.updatedAt,
        userRole: userMembership?.role || 'member',
        userJoinedAt: userMembership?.joinedAt,
        members: household.members.map(member => ({
          id: member.id,
          role: member.role,
          joinedAt: member.joinedAt,
          user: {
            id: member.user.id,
            name: member.user.name,
            email: member.user.email
          }
        })),
        stats: {
          activeTasks: household._count.tasks,
          categories: household._count.categories,
          members: household.members.length
        }
      }
    })

    return NextResponse.json(formattedHouseholds)
  } catch (error) {
    console.error("Error fetching households:", error)
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
    
    const { name, description } = body

    if (!name || typeof name !== 'string') {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      )
    }

    // Create household and add user as admin in a transaction
    const newHousehold = await prisma.$transaction(async (tx) => {
      const household = await tx.household.create({
        data: {
          name,
          description: description || null
        }
      })

      // Add the creator as an admin member
      await tx.householdMember.create({
        data: {
          userId,
          householdId: household.id,
          role: 'admin'
        }
      })

      // Return household with member info
      return await tx.household.findUnique({
        where: { id: household.id },
        include: {
          members: {
            include: {
              user: {
                select: {
                  id: true,
                  name: true,
                  email: true
                }
              }
            }
          }
        }
      })
    })

    if (!newHousehold) {
      throw new Error("Failed to create household")
    }

    // Format the response
    const userMembership = newHousehold.members.find(member => member.userId === userId)
    const formattedHousehold = {
      id: newHousehold.id,
      name: newHousehold.name,
      description: newHousehold.description,
      createdAt: newHousehold.createdAt,
      updatedAt: newHousehold.updatedAt,
      userRole: userMembership?.role || 'member',
      userJoinedAt: userMembership?.joinedAt,
      members: newHousehold.members.map(member => ({
        id: member.id,
        role: member.role,
        joinedAt: member.joinedAt,
        user: {
          id: member.user.id,
          name: member.user.name,
          email: member.user.email
        }
      })),
      stats: {
        activeTasks: 0,
        categories: 0,
        members: 1
      }
    }

    return NextResponse.json(formattedHousehold, { status: 201 })
  } catch (error) {
    console.error("Error creating household:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}