import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { prisma } from "@/lib/prisma"
import { validatePassword, sanitizeInput, validateEmail } from "@/lib/validation"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const name = sanitizeInput(body.name || "")
    const email = sanitizeInput(body.email || "")
    const password = body.password || ""

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      )
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { message: "Invalid email address" },
        { status: 400 }
      )
    }

    const passwordValidation = validatePassword(password)
    if (!passwordValidation.isValid) {
      return NextResponse.json(
        { message: "Password requirements not met", errors: passwordValidation.errors },
        { status: 400 }
      )
    }

    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      )
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })

    return NextResponse.json(
      { message: "User created successfully", userId: user.id },
      { status: 201 }
    )
  } catch {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    )
  }
}