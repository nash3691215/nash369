import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { Resend } from 'resend'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '')

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy')

export async function POST(req: NextRequest) {
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

  // Gérer l'événement payment success
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session

    // Récupérer les infos du produit
    const productId = session.metadata?.productId
    const productFile = session.metadata?.productFile
    const customerEmail = session.customer_details?.email

    if (customerEmail && productId && productFile) {
      try {
        // Envoyer l'email avec le produit
        await resend.emails.send({
          from: 'NASH369 <noreply@nash369.com>',
          to: customerEmail,
          subject: `🎉 Ton accès est prêt !`,
          html: `
            <h1>Merci pour ton achat !</h1>
            <p>Ton produit est prêt à être utilisé.</p>
            <p><strong>Fichier :</strong> ${productFile}</p>
            <p>Tu peux télécharger ton produit en cliquant sur le lien ci-dessous :</p>
            <a href="${process.env.NEXT_PUBLIC_BASE_URL}/products/${productFile}">Télécharger maintenant</a>
            <br><br>
            <p>Des questions ? Réponds à cet email.</p>
            <p>À bientôt,<br>Nash</p>
          `,
        })

        console.log(`Email envoyé à ${customerEmail} pour ${productId}`)
      } catch (error) {
        console.error('Erreur envoi email:', error)
      }
    }
  }

  return NextResponse.json({ received: true })
}
