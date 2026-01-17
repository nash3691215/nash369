import { NextResponse } from 'next/server'
import { getLeadMagnetEmails } from '@/lib/db'

export async function GET() {
  try {
    const emails = await getLeadMagnetEmails()
    return NextResponse.json({
      success: true,
      count: emails.length,
      emails
    })
  } catch (error: any) {
    console.error('Error fetching emails:', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}
