'use client'

import Link from 'next/link'
import products from '@/data/products.json'
import { createCheckoutSession } from '@/lib/stripe'

export default function BurnoutPage() {
  const product = products.products.find(p => p.id === 'burnout')

  if (!product) return null

  const handleBuy = () => createCheckoutSession('burnout')

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-indigo-400 mb-12 transition-colors">
          <span>←</span>
          <span>Retour</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-block mb-4 px-3 py-1 bg-indigo-600/20 border border-indigo-500/30 rounded-full text-indigo-400 text-sm font-semibold">
                E-Book Premium
              </div>
              <div className="text-6xl mb-6">💰</div>
              <h1 className="text-5xl font-black mb-4 leading-tight">{product.name}</h1>
              <p className="text-2xl text-gray-400 leading-relaxed">{product.description}</p>
            </div>

            {/* Le problème */}
            <div className="bg-gradient-to-br from-red-900/20 to-red-950/10 border border-red-800/30 rounded-2xl p-8">
              <h3 className="text-red-400 font-bold mb-4 uppercase text-sm tracking-wider">Tu te reconnais ?</h3>
              <ul className="space-y-3 text-gray-300">
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
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">Ce que tu vas débloquer :</h2>
              <ul className="space-y-4">
                {product.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-400 text-xl mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Proof */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Ils ont évité le crash</h3>
              <div className="space-y-4">
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center font-bold">M</div>
                    <div>
                      <div className="font-bold">Marc L.</div>
                      <div className="text-gray-500 text-sm">Entrepreneur</div>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">
                    "Ce guide m'a sauvé. J'étais au bord du burnout sans le savoir. Maintenant je construis sereinement."
                  </p>
                </div>

                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center font-bold">T</div>
                    <div>
                      <div className="font-bold">Thomas R.</div>
                      <div className="text-gray-500 text-sm">Créateur</div>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">
                    "Meilleur investissement de 9€ que j'ai fait cette année. J'ai sauvé ma santé mentale et mon business."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - CTA */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-1 shadow-2xl shadow-indigo-900/50">
              <div className="bg-gray-900 rounded-xl p-8">
                <div className="mb-6">
                  <div className="text-gray-500 line-through text-lg mb-2">Valeur réelle: 97€</div>
                  <div className="text-6xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text mb-2">
                    {product.price}€
                  </div>
                  <p className="text-gray-400">Investissement unique. Accès à vie.</p>
                </div>

                <button
                  onClick={handleBuy}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white py-5 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-indigo-600/50 mb-6"
                >
                  Sauver ma santé mentale maintenant
                </button>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-gray-300">
                    <span className="text-green-400 text-xl">✓</span>
                    <span>Paiement sécurisé Stripe</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <span className="text-green-400 text-xl">✓</span>
                    <span>PDF téléchargeable immédiatement</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <span className="text-green-400 text-xl">✓</span>
                    <span>Accès à vie, aucun abonnement</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <span className="text-green-400 text-xl">✓</span>
                    <span>Garantie satisfait ou remboursé 30j</span>
                  </div>
                </div>

                <div className="bg-black/50 rounded-xl p-6 border border-gray-800">
                  <h4 className="font-bold mb-3 text-center">Ton investissement aujourd'hui :</h4>
                  <div className="text-center space-y-2 text-sm text-gray-400">
                    <p>9€ → Pour éviter des milliers d'€ perdus</p>
                    <p>9€ → Pour sauver des mois de souffrance</p>
                    <p>9€ → Pour construire durablement</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-yellow-900/20 border border-yellow-600/30 rounded-xl p-4 text-center">
              <p className="text-yellow-400 text-sm">
                🔥 +200 entrepreneurs ont déjà sauvé leur santé mentale
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
