import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { saveLeadMagnetEmail } from '@/lib/db'

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY || '')
    const { email, type, productName } = await req.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email requis' },
        { status: 400 }
      )
    }

    if (type === 'lead_magnet') {
      // Enregistrer l'email dans la base de données
      await saveLeadMagnetEmail(email, type)

      // Envoyer l'email
      await resend.emails.send({
        from: 'NASH369 <noreply@nash369.com>',
        to: email,
        subject: '🎁 Ton guide gratuit est prêt !',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #6366f1;">Salut ! 👋</h1>
            <p style="font-size: 16px; line-height: 1.6;">Merci pour ton intérêt ! Ton guide gratuit sera disponible sous 24H maximum.</p>

            <div style="background: #f3f4f6; padding: 20px; border-radius: 12px; margin: 24px 0;">
              <p style="margin: 0; font-size: 14px; color: #6b7280;">⏱️ <strong>Livraison</strong> : Sous 24H max dans ta boîte mail</p>
            </div>

            <h3 style="color: #111827; margin-top: 32px;">En attendant, découvre mes formations :</h3>
            <ul style="line-height: 2;">
              <li><a href="https://nash369.com/produits/zero-vivre" style="color: #6366f1; text-decoration: none;">De Zéro à Vivre de Ton Activité</a> - 9.90€</li>
              <li><a href="https://nash369.com/produits/site-vitrine" style="color: #6366f1; text-decoration: none;">Créer un Site Pro avec l'IA</a> - 49.90€</li>
              <li><a href="https://nash369.com/produits/site-ia" style="color: #6366f1; text-decoration: none;">Crée ton Site Prêt à Vendre sans Shopify</a> - 199.90€</li>
            </ul>

            <p style="margin-top: 32px; color: #6b7280;">Des questions ? Réponds simplement à cet email.</p>

            <p style="margin-top: 24px;">À très vite,<br><strong>NASH369</strong><br><a href="https://twitter.com/nash3691215" style="color: #6366f1;">@nash3691215</a></p>
          </div>
        `,
      })

      return NextResponse.json({ success: true })
    }

    if (type === 'purchase_confirmation') {
      // Email de confirmation d'achat
      await resend.emails.send({
        from: 'NASH369 <noreply@nash369.com>',
        to: email,
        subject: '✅ Merci pour ton achat - Livraison sous 24H',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #10b981;">Merci pour ton achat ! 🎉</h1>
            <p style="font-size: 16px; line-height: 1.6;">Ton paiement a bien été reçu pour : <strong>${productName || 'ta formation'}</strong></p>

            <div style="background: #d1fae5; border-left: 4px solid #10b981; padding: 20px; margin: 24px 0;">
              <p style="margin: 0; font-size: 16px; color: #065f46;">
                ✅ <strong>Paiement confirmé</strong><br>
                📦 <strong>Livraison sous 24H maximum</strong>
              </p>
            </div>

            <p style="font-size: 14px; color: #6b7280; background: #fef3c7; padding: 16px; border-radius: 8px; margin: 24px 0;">
              ⚠️ <strong>Mode test</strong> : Nous validons actuellement les commandes manuellement pour garantir la meilleure qualité. Ton accès sera envoyé dans les 24H.
            </p>

            <h3 style="color: #111827; margin-top: 32px;">Ce qui va se passer :</h3>
            <ol style="line-height: 2; color: #374151;">
              <li>Tu recevras un email avec ton accès dans les 24H</li>
              <li>Tu pourras accéder immédiatement à ta formation</li>
              <li>Support disponible si besoin via email</li>
            </ol>

            <p style="margin-top: 32px; color: #6b7280;">Une question ? Réponds simplement à cet email, je suis là pour t'aider !</p>

            <p style="margin-top: 24px;">Merci de ta confiance,<br><strong>NASH369</strong><br><a href="https://twitter.com/nash3691215" style="color: #6366f1;">@nash3691215</a></p>
          </div>
        `,
      })

      return NextResponse.json({ success: true })
    }

    return NextResponse.json(
      { error: 'Type email non reconnu' },
      { status: 400 }
    )
  } catch (error: any) {
    console.error('Erreur envoi email:', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}
