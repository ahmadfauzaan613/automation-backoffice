import { db } from '@/app/lib/db'
import { NextResponse } from 'next/server'
import { parse } from 'json2csv'

export async function GET(req: Request) {
  try {
    const allTasks = await db.dataDummy.findMany()

    // Mengonversi data ke format CSV
    const csv = parse(allTasks)

    // Mengatur header respons untuk menentukan jenis konten dan memberikan nama file
    const headers = {
      'Content-Type': 'text/csv',
      'Content-Disposition': 'attachment; filename="data_dummy.csv"',
    }

    // Mengembalikan file CSV sebagai respons dengan header yang ditetapkan
    return new NextResponse(csv, { headers })
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: 'Failed to Download Tasks' }), { status: 400 })
  }
}
