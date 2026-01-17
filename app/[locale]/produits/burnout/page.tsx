'use client'

import Link from 'next/link'
import products from '@/data/products.json'
import { createCheckoutSession } from '@/lib/stripe'

export default function BurnoutPage() {
  const product = products.products.find(p => p.id === 'burnout')

  if (!product) return null

  const handleBuy = () => createCheckoutSession('burnout')

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-indigo-600 mb-12 transition-colors">
          <span>←</span>
          <span>Retour</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-block mb-4 px-3 py-1 bg-indigo-100 border border-indigo-200 rounded-full text-indigo-700 text-sm font-semibold">
                E-Book Premium
              </div>
              <div className="text-6xl mb-6">💰</div>
              <h1 className="text-5xl font-black mb-4 leading-tight text-gray-900">{product.name}</h1>
              <p className="text-2xl text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Le problème */}
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
              <h3 className="text-red-600 font-bold mb-4 uppercase text-sm tracking-wider">Tu te reconnais ?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl mt-0.5">✗</span>
                  <span>Tu bosses 12h/jour mais ton business stagne</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl mt-0.5">✗</span>
                  <span>Tu ressens une fatigue constante, même après vacances</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl mt-0.5">✗</span>
                  <span>La motivation n'est plus là, juste l'obligation</span>
                </li>
              </ul>
            </div>

            {/* Ce que tu vas apprendre */}
            <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Ce que tu vas débloquer :</h2>
              <ul className="space-y-4">
                {product.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Proof */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Ils ont évité le crash</h3>
              <div className="space-y-4">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center font-bold text-white">M</div>
                    <div>
                      <div className="font-bold text-gray-900">Marc L.</div>
                      <div className="text-gray-600 text-sm">Entrepreneur</div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "Ce guide m'a sauvé. J'étais au bord du burnout sans le savoir. Maintenant je construis sereinement."
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center font-bold text-white">T</div>
                    <div>
                      <div className="font-bold text-gray-900">Thomas R.</div>
                      <div className="text-gray-600 text-sm">Créateur</div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "Meilleur investissement de 9€ que j'ai fait cette année. J'ai sauvé ma santé mentale et mon business."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - CTA */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-1 shadow-2xl">
              <div className="bg-white rounded-xl p-8">
                <div className="mb-6">
                  <div className="text-gray-500 line-through text-lg mb-2">Valeur réelle: 97€</div>
                  <div className="text-6xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text mb-2">
                    {product.price}€
                  </div>
                  <p className="text-gray-600">Investissement unique. Accès à vie.</p>
                </div>

                <button
                  onClick={handleBuy}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white py-5 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg mb-6"
                >
                  Sauver ma santé mentale maintenant
                </button>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-gray-700">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>Paiement sécurisé Stripe</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>PDF téléchargeable immédiatement</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>Accès à vie, aucun abonnement</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>Garantie satisfait ou remboursé 30j</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                  <h4 className="font-bold mb-3 text-center text-gray-900">Ton investissement aujourd'hui :</h4>
                  <div className="text-center space-y-2 text-sm text-gray-600">
                    <p>9€ → Pour éviter des milliers d'€ perdus</p>
                    <p>9€ → Pour sauver des mois de souffrance</p>
                    <p>9€ → Pour construire durablement</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-yellow-50 border-2 border-yellow-300 rounded-xl p-4 text-center">
              <p className="text-yellow-700 text-sm font-semibold">
                🔥 +200 entrepreneurs ont déjà sauvé leur santé mentale
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
