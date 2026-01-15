export async function createCheckoutSession(productId: string) {
  try {
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId }),
    })

    const { sessionId, error } = await res.json()

    if (error) {
      throw new Error(error)
    }

    // Rediriger vers Stripe Checkout
    const stripe = (window as any).Stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
    await stripe.redirectToCheckout({ sessionId })
  } catch (err: any) {
    console.error(err)
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
