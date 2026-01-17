export async function createCheckoutSession(productId: string) {
  try {
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId }),
    })

    if (!res.ok) {
      const errorText = await res.text()
      console.error('Stripe API Error:', errorText)
      throw new Error('Erreur de configuration du paiement. Contactez le support.')
    }

    const data = await res.json()

    if (data.error) {
      throw new Error(data.error)
    }

    if (!data.sessionId) {
      throw new Error('Session Stripe invalide')
    }

    // Rediriger vers Stripe Checkout
    const stripe = (window as any).Stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
    if (!stripe) {
      throw new Error('Stripe non chargé. Rechargez la page.')
    }

    await stripe.redirectToCheckout({ sessionId: data.sessionId })
  } catch (err: any) {
    console.error('Stripe checkout error:', err)
    alert('Erreur lors du paiement: ' + err.message)
  }
}

export async function sendLeadMagnetEmail(email: string) {
  try {
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, type: 'lead_magnet' }),
    })

    const { error } = await res.json()

    if (error) {
      throw new Error(error)
    }

    return true
  } catch (err: any) {
    console.error(err)
    throw err
  }
}
