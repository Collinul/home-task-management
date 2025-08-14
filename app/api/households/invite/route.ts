import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const userId = session.user.id
    const body = await request.json()
    
    const { email, householdId, role = 'member' } = body

    // Validate required fields
    if (!email || !householdId) {
      return NextResponse.json(
        { error: "Email and household ID are required" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    // Check if user has permission to invite to this household (must be admin)
    const membership = await prisma.householdMember.findFirst({
      where: {
        userId,
        householdId,
        role: 'admin'
      },
      include: {
        household: {
          select: {
            name: true
          }
        }
      }
    })

    if (!membership) {
      return NextResponse.json(
        { error: "You don't have permission to invite members to this household" },
        { status: 403 }
      )
    }

    // Check if the user being invited already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    // If user exists, check if they're already a member of this household
    if (existingUser) {
      const existingMembership = await prisma.householdMember.findFirst({
        where: {
          userId: existingUser.id,
          householdId
        }
      })

      if (existingMembership) {
        return NextResponse.json(
          { error: "This user is already a member of the household" },
          { status: 400 }
        )
      }

      // If user exists but isn't a member, add them directly
      const newMembership = await prisma.householdMember.create({
        data: {
          userId: existingUser.id,
          householdId,
          role
        },
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true
            }
          }
        }
      })

      // TODO: Send notification email to existing user about being added to household
      
      return NextResponse.json({
        message: "User added to household successfully",
        member: {
          id: newMembership.id,
          role: newMembership.role,
          joinedAt: newMembership.joinedAt,
          user: newMembership.user
        }
      }, { status: 201 })
    }

    // For new users, we would typically:
    // 1. Create an invitation record in the database
    // 2. Send an invitation email with a signup link
    // For now, we'll return a message that the invitation system needs to be implemented

    return NextResponse.json({
      message: "Invitation system for new users is not implemented yet. Only existing users can be added to households.",
      suggestion: "Ask the person to create an account first, then invite them using their registered email."
    }, { status: 501 })

  } catch (error) {
    console.error("Error sending household invitation:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}