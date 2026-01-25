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
      {/* Header with Home Button */}
      <header className="border-b border-gray-200 sticky top-0 bg-white z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl md:text-2xl font-bold text-gray-900">
              NASH369
            </Link>
            <Link
              href="/"
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg font-medium transition-all text-sm"
            >
              ← Accueil
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 md:py-20 max-w-5xl">
        {/* Product Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm font-semibold text-gray-700 mb-4">
            E-BOOK PREMIUM
          </div>
          <div className="text-6xl md:text-7xl mb-6">💰</div>
          <h1 className="text-3xl md:text-5xl font-black mb-6 text-gray-900 leading-tight">{product.name}</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">{product.description}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Benefits */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Ce que tu vas obtenir</h2>
              <div className="space-y-4">
                {product.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-gray-900 transition-all">
                    <span className="text-gray-900 mt-0.5 text-lg">✓</span>
                    <span className="text-gray-700 leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  <span className="text-yellow-400 text-xl">★</span>
                  <span className="text-yellow-400 text-xl">★</span>
                  <span className="text-yellow-400 text-xl">★</span>
                  <span className="text-yellow-400 text-xl">★</span>
                  <span className="text-yellow-400 text-xl">★</span>
                </div>
                <span className="text-sm font-semibold text-gray-700">+180 créateurs</span>
              </div>
              <p className="text-gray-700 italic leading-relaxed">
                "Le framework le plus clair que j'ai vu. J'ai trouvé mon modèle rentable en 3 semaines."
              </p>
              <p className="text-sm text-gray-600 mt-2">— Sophie B., ex-RH devenue créatrice</p>
            </div>
          </div>

          {/* Right Column - CTA Box */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-white border-2 border-gray-900 rounded-xl p-8 shadow-xl">
              <div className="mb-6 text-center">
                {product.originalPrice && (
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="text-xl text-gray-400 line-through">
                      {product.originalPrice.toFixed(2).replace('.', ',')}€
                    </span>
                    <span className="px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-full">
                      -50%
                    </span>
                  </div>
                )}
                <div className="text-6xl font-black text-gray-900 mb-3">
                  {product.price.toFixed(2).replace('.', ',')}€
                </div>
                <p className="text-gray-600">Paiement unique • Accès immédiat</p>
              </div>

              <button
                onClick={handleBuy}
                className="w-full bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg mb-6"
              >
                Télécharger maintenant →
              </button>

              <div className="space-y-3 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Paiement 100% sécurisé Stripe</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Livraison instantanée par email</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Accès à vie + mises à jour</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="text-center text-sm text-gray-700">
                  <strong>🎁 Bonus:</strong> Mises à jour gratuites à vie
                </p>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <p className="text-sm text-green-800 font-semibold">
                ✓ Garantie satisfait ou remboursé 30 jours
              </p>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-16 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium">
            <span>←</span>
            <span>Retour à l'accueil</span>
          </Link>
        </div>
      </div>
    </main>
  )
}
