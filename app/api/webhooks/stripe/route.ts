import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '')
  const resend = new Resend(process.env.RESEND_API_KEY || '')
  
  const body = await req.text()
  const signature = req.headers.get('stripe-signature')

  if (!signature) {
    return NextResponse.json({ error: 'Signature manquante' }, { status: 400 })
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET || ''
    )
  } catch (err: any) {
    console.error('Erreur webhook:', err.message)
    return NextResponse.json({ error: err.message }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const productId = session.metadata?.productId
    const customerEmail = session.customer_details?.email

    // Mapper les IDs de produits vers leurs noms
    const productNames: Record<string, string> = {
      'zero-vivre': 'De Zéro à Vivre de Ton Activité',
      'site-vitrine': 'Créer un Site Pro avec l\'IA',
      'site-ia': 'Crée ton Site Prêt à Vendre sans Shopify',
      'site-cle-en-main': 'Site E-Commerce Clé en Main'
    }

    const productName = productId ? productNames[productId] : 'ta formation'

    if (customerEmail && productId) {
      try {
        // Envoyer l'email de confirmation d'achat
        await resend.emails.send({
          from: 'NASH369 <noreply@nash369.com>',
          to: customerEmail,
          subject: '✅ Merci pour ton achat - Livraison sous 24H',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h1 style="color: #10b981;">Merci pour ton achat ! 🎉</h1>
              <p style="font-size: 16px; line-height: 1.6;">Ton paiement a bien été reçu pour : <strong>${productName}</strong></p>

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

              <div style="background: #f3f4f6; padding: 16px; border-radius: 8px; margin: 24px 0;">
                <p style="margin: 0; font-size: 14px; color: #6b7280;">
                  📧 <strong>Référence de commande :</strong> ${session.id}
                </p>
              </div>

              <p style="margin-top: 32px; color: #6b7280;">Une question ? Réponds simplement à cet email, je suis là pour t'aider !</p>

              <p style="margin-top: 24px;">Merci de ta confiance,<br><strong>NASH369</strong><br><a href="https://twitter.com/nash3691215" style="color: #6366f1;">@nash3691215</a></p>
            </div>
          `,
        })

        console.log(`✅ Email de confirmation envoyé à ${customerEmail} pour ${productName}`)
      } catch (error) {
        console.error('Erreur envoi email:', error)
      }
    }
  }

  return NextResponse.json({ received: true })
}
