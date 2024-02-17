import { db } from '@/app/lib/db'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name_task, status } = body
    const newTask = await db.task.create({
      data: {
        name_task,
        status,
      },
    })
    return NextResponse.json({ data: newTask, message: 'Task Created Successfully' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Failed to Create Task' }, { status: 400 })
  }
}

export async function GET() {
  try {
    const allTask = await db.task.findMany()
    return NextResponse.json({ data: allTask, message: 'All Tasks Retrieved Successfully' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Failed to Retrieve Tasks' }, { status: 400 })
  }
}

export async function PUT(req: Request) {
  try {
    const { id, name_task, status } = await req.json()
    const updatedTask = await db.task.update({
      where: { id },
      data: {
        name_task,
        status,
      },
    })
    return NextResponse.json({ data: updatedTask, message: 'Task Updated Successfully' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Failed to Update Task' }, { status: 400 })
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json()
    await db.task.delete({
      where: { id },
    })
    return NextResponse.json({ message: 'Task Deleted Successfully' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Failed to Delete Task' }, { status: 400 })
  }
}
