'use client'

import Link from 'next/link'
import products from '@/data/products.json'
import { createCheckoutSession } from '@/lib/stripe'

export default function ZeroVivrePage() {
  const product = products.products.find(p => p.id === 'zero-vivre')
  if (!product) return null

  const handleBuy = () => createCheckoutSession('zero-vivre')

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            NASH369
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Product Header */}
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">💰</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">{product.name}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{product.description}</p>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 text-center">Ce que tu obtiens</h2>
          <div className="space-y-4">
            {product.benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <span className="text-gray-900 mt-0.5">✓</span>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Box */}
        <div className="bg-white border-2 border-gray-900 rounded-lg p-8 max-w-md mx-auto">
          <div className="mb-6 text-center">
            {product.originalPrice && (
              <div className="text-gray-400 line-through text-lg mb-2">
                {product.originalPrice.toFixed(2).replace('.', ',')}€
              </div>
            )}
            <div className="text-5xl font-bold text-gray-900 mb-2">
              {product.price.toFixed(2).replace('.', ',')}€
            </div>
            <p className="text-gray-600 text-sm">Paiement unique • Accès immédiat</p>
          </div>

          <button
            onClick={handleBuy}
            className="w-full bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-lg font-semibold text-lg transition-all mb-6"
          >
            Acheter maintenant
          </button>

          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>Paiement sécurisé Stripe</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>Livraison immédiate par email</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>Accès à vie</span>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </main>
  )
}
