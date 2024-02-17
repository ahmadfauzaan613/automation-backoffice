import { db } from '@/app/lib/db'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { first_name, last_name, day, month, year, gender, username, password, noTlp } = body
    const newDummy = await db.dataDummy.create({
      data: {
        first_name,
        last_name,
        day,
        month,
        year,
        gender,
        username,
        password,
        noTlp,
      },
    })
    return NextResponse.json({ data: newDummy, message: 'Dummy Created Successfully' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Failed to Create Dummy' }, { status: 400 })
  }
}

export async function GET() {
  try {
    const allDummy = await db.dataDummy.findMany()
    return NextResponse.json({ data: allDummy, message: 'All Dummy Retrieved Successfully' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Failed to Retrieve Dummy' }, { status: 400 })
  }
}

export async function PUT(req: Request) {
  try {
    const { id, first_name, last_name, day, month, year, gender, username, password, noTlp } = await req.json()
    const updatedDummy = await db.dataDummy.update({
      where: { id },
      data: {
        first_name,
        last_name,
        day,
        month,
        year,
        gender,
        username,
        password,
        noTlp,
      },
    })
    return NextResponse.json({ data: updatedDummy, message: 'Dummy Updated Successfully' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Failed to Update Dummy' }, { status: 400 })
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json()
    await db.dataDummy.delete({
      where: { id },
    })
    return NextResponse.json({ message: 'Dummy Deleted Successfully' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Failed to Delete Dummy' }, { status: 400 })
  }
}
