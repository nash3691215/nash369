import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  console.log("Waitlist submission", body);
  // TODO: brancher Resend ou Google Sheets ici.
  return NextResponse.json({ ok: true });
}
