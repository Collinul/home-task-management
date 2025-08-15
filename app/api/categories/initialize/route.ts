import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

// Default categories with emojis and colors
const DEFAULT_CATEGORIES = [
  { name: "Cleaning", emoji: "🧹", color: "#3B82F6" },
  { name: "Kitchen", emoji: "🍳", color: "#10B981" },
  { name: "Laundry", emoji: "👕", color: "#8B5CF6" },
  { name: "Shopping", emoji: "🛒", color: "#F59E0B" },
  { name: "Maintenance", emoji: "🔧", color: "#6B7280" },
  { name: "Outdoor", emoji: "🌳", color: "#059669" },
  { name: "Organizing", emoji: "📦", color: "#EC4899" },
  { name: "Pet Care", emoji: "🐾", color: "#F97316" },
  { name: "Other", emoji: "📌", color: "#64748B" },
]

export async function POST() {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const userId = session.user.id

    // Check if user already has categories
    const existingCategories = await prisma.category.count({
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
    })

    if (existingCategories > 0) {
      return NextResponse.json(
        { message: "User already has categories" },
        { status: 200 }
      )
    }

    // Create default personal categories for the user
    const createdCategories = await prisma.category.createMany({
      data: DEFAULT_CATEGORIES.map(cat => ({
        name: cat.name,
        emoji: cat.emoji,
        color: cat.color,
        userId: userId,
        householdId: null
      }))
    })

    // Fetch and return the created categories
    const categories = await prisma.category.findMany({
      where: { userId },
      orderBy: { name: "asc" }
    })

    return NextResponse.json({
      message: "Default categories created successfully",
      categories,
      count: createdCategories.count
    }, { status: 201 })
    
  } catch (error) {
    console.error("Error initializing categories:", error)
    return NextResponse.json(
      { error: "Failed to initialize categories" },
      { status: 500 }
    )
  }
}