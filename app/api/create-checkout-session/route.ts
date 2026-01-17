import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import products from '@/data/products.json'

export async function POST(req: NextRequest) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '')
    const { productId } = await req.json()

    const product = products.products.find(p => p.id === productId)

    if (!product || product.type === 'lead_magnet') {
      return NextResponse.json(
        { error: 'Produit introuvable' },
        { status: 404 }
      )
    }

    if (!product.stripe_price_id) {
      return NextResponse.json(
        { error: 'Price ID Stripe manquant' },
        { status: 400 }
      )
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: product.stripe_price_id,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/produits/${productId}`,
      metadata: {
        productId: product.id,
        productFile: product.file || '',
      },
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (error: any) {
    console.error('Erreur création session Stripe:', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}
