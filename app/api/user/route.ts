import { db } from '@/app/lib/db'
import { NextResponse } from 'next/server'
import { hash } from 'bcrypt'

export async function GET() {
  try {
    const allUsers = await db.user.findMany({
      select: {
        id: true,
        username: true,
        first_name: true,
        last_name: true,
        role: true,
      },
    })
    return NextResponse.json({ data: allUsers, message: 'All Users Retrieved Successfully' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Failed to Retrieve Users' }, { status: 400 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { username, first_name, last_name, password, role } = body

    // CEK USERNAME
    const existingUsername = await db.user.findUnique({
      where: { username: username },
    })
    if (existingUsername) {
      return NextResponse.json({ data: null, message: 'Username Already Used' }, { status: 404 })
    }

    const hashedPassword = await hash(password, 10)
    const newUser = await db.user.create({
      data: {
        username,
        first_name,
        last_name,
        role,
        password: hashedPassword,
      },
    })
    const { password: newUserPassword, ...rest } = newUser
    return NextResponse.json({ data: rest, message: 'User Created Successfully' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Failed to Created Users' }, { status: 400 })
  }
}

export async function PUT(req: Request) {
  try {
    const { id, username, first_name, last_name, password, role } = await req.json()

    const hashedPassword = await hash(password, 10)
    const updatedUser = await db.user.update({
      where: { id },
      data: {
        username,
        first_name,
        last_name,
        role,
        password: hashedPassword,
      },
    })

    const { password: updatedUserPassword, ...rest } = updatedUser
    return NextResponse.json({ data: rest, message: 'User Updated Successfully' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Failed to Update User' }, { status: 400 })
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json()
    await db.user.delete({
      where: { id },
    })
    return NextResponse.json({ message: 'User Deleted Successfully' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Failed to Delete User' }, { status: 400 })
  }
}
