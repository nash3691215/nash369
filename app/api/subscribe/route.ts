import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { Resend } from "resend";
import { getWelcomeEmailHtml, getWelcomeEmailText } from "@/lib/emails/welcome";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json({ ok: false, error: "Email invalide" }, { status: 400 });
    }

    const normalizedEmail = email.toLowerCase().trim();

    // 1. Check if already subscribed
    const { data: existing } = await supabase
      .from("subscribers")
      .select("id")
      .eq("email", normalizedEmail)
      .single();

    if (existing) {
      return NextResponse.json({ ok: true, message: "Deja inscrit" });
    }

    // 2. Save to Supabase
    const { error: dbError } = await supabase
      .from("subscribers")
      .insert({
        email: normalizedEmail,
        source: "lead_magnet",
        subscribed_at: new Date().toISOString()
      });

    if (dbError) {
      console.error("Supabase error:", dbError);
      return NextResponse.json({ ok: false, error: "Erreur base de donnees" }, { status: 500 });
    }

    // 3. Send welcome email via Resend
    try {
      await resend.emails.send({
        from: "NASH369 <onboarding@resend.dev>",
        replyTo: "nash3691215@gmail.com",
        to: [normalizedEmail],
        subject: "🎉 Bienvenue ! Ton guide IA arrive sous 24h",
        html: getWelcomeEmailHtml(normalizedEmail),
        text: getWelcomeEmailText(normalizedEmail)
      });
      console.log("✅ Email de bienvenue envoye a:", normalizedEmail);
    } catch (emailError) {
      // Don't fail the subscription if email fails — we still have the lead in DB
      console.error("Resend email error:", emailError);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json({ ok: false, error: "Erreur serveur" }, { status: 500 });
  }
}
