import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { rateLimit, getClientIdentifier, RateLimitError } from '@/lib/rate-limit'
import { sanitizeEmail, isValidEmail, validateFormData, isPotentialBot } from '@/lib/security'
import { getLeadMagnetHTML } from '@/lib/email-templates'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    // Get client identifier for rate limiting
    const clientId = getClientIdentifier(request)

    // Rate limiting: 3 requests per hour per IP
    try {
      await rateLimit(clientId, {
        interval: 60 * 60 * 1000, // 1 hour
        uniqueTokenPerInterval: 3, // 3 requests max
      })
    } catch (error) {
      if (error instanceof RateLimitError) {
        return NextResponse.json(
          { error: 'Trop de tentatives. Réessaye dans 1 heure.' },
          { status: 429 }
        )
      }
      throw error
    }

    // Check for bot activity
    const userAgent = request.headers.get('user-agent')
    if (isPotentialBot(userAgent)) {
      // Still process, but flag it
      console.warn('Potential bot detected:', userAgent)
    }

    const body = await request.json()
    const { email, leadMagnet, honeypot } = body

    // Honeypot check (anti-spam)
    if (honeypot) {
      // Silently reject spam
      return NextResponse.json({ success: true })
    }

    // Validate email
    if (!email) {
      return NextResponse.json(
        { error: 'Email requis' },
        { status: 400 }
      )
    }

    const sanitizedEmail = sanitizeEmail(email)

    if (!isValidEmail(sanitizedEmail)) {
      return NextResponse.json(
        { error: 'Format d\'email invalide' },
        { status: 400 }
      )
    }

    // Validate all form data
    const validation = validateFormData({ email: sanitizedEmail })
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.errors[0] },
        { status: 400 }
      )
    }

    // Load the lead magnet HTML file
    const leadMagnetHTML = getLeadMagnetHTML()

    // Send lead magnet to user
    await resend.emails.send({
      from: 'Nash @ NASH369 <noreply@nash369.com>',
      to: sanitizedEmail,
      subject: '🎁 Voici ton guide : Les Opportunités IA 2026',
      html: leadMagnetHTML
    })

    // Notify yourself about new lead
    await resend.emails.send({
      from: 'noreply@nash369.com',
      to: 'nash3691215@gmail.com',
      subject: `🎯 Nouveau lead: ${email} (Opportunités IA 2026)`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #059669;">🔥 Nouveau lead capturé !</h2>

          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Email:</strong> ${sanitizedEmail}</p>
            <p><strong>Lead Magnet:</strong> Opportunités IA 2026</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString('fr-FR')}</p>
            <p><strong>IP:</strong> ${clientId}</p>
            <p><strong>User Agent:</strong> ${userAgent || 'Unknown'}</p>
          </div>

          <div style="background: #ecfdf5; padding: 20px; border-radius: 8px; border-left: 4px solid #059669;">
            <p style="margin: 0;"><strong>⚡ Action:</strong> Ajoute ${sanitizedEmail} à ta liste email et prépare le follow-up pour vendre les formations.</p>
          </div>
        </div>
      `
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending lead magnet:', error)
    return NextResponse.json(
      { error: 'Failed to send lead magnet' },
      { status: 500 }
    )
  }
}
