'use client'

import Link from 'next/link'
import products from '@/data/products.json'
import { createCheckoutSession } from '@/lib/stripe'

export default function ZeroVivrePage() {
  const product = products.products.find(p => p.id === 'zero-vivre')
  if (!product) return null

  const handleBuy = () => createCheckoutSession('zero-vivre')

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-indigo-400 mb-12 transition-colors">
          <span>←</span>
          <span>Retour</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
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
              <h3 className="text-red-400 font-bold mb-4 uppercase text-sm tracking-wider">La réalité actuelle</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl mt-0.5">✗</span>
                  <span>Tu as une idée mais 0€ de revenus récurrents</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl mt-0.5">✗</span>
                  <span>Tu sais pas par où commencer pour monétiser</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl mt-0.5">✗</span>
                  <span>Chaque mois tu te demandes si tu vas tenir</span>
                </li>
              </ul>
            </div>

            {/* Le système */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">Le système exact pour passer de 0 à 1K€/mois :</h2>
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
              <h3 className="text-2xl font-bold">Ils ont lancé et vivent de leur activité</h3>
              <div className="space-y-4">
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center font-bold">A</div>
                    <div>
                      <div className="font-bold">Alex M.</div>
                      <div className="text-gray-500 text-sm">Ex-salarié</div>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">
                    "J'ai suivi le framework étape par étape. 1er client en 2 semaines, 1.2K€/mois en 90 jours. Je vis enfin de mon activité."
                  </p>
                  <div className="text-green-400 font-bold mt-2">1.2K€/mois</div>
                </div>

                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center font-bold">L</div>
                    <div>
                      <div className="font-bold">Laura P.</div>
                      <div className="text-gray-500 text-sm">Freelance</div>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">
                    "Le chapitre sur la monétisation m'a débloquée. 3 clients payants dès le 1er mois. Enfin des revenus stables."
                  </p>
                  <div className="text-green-400 font-bold mt-2">3 clients en 30j</div>
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
                  Générer mes premiers 1K€/mois
                </button>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-gray-300">
                    <span className="text-green-400 text-xl">✓</span>
                    <span>Paiement sécurisé Stripe</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <span className="text-green-400 text-xl">✓</span>
                    <span>Guide interactif livré immédiatement</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <span className="text-green-400 text-xl">✓</span>
                    <span>Accès à vie + mises à jour gratuites</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <span className="text-green-400 text-xl">✓</span>
                    <span>Garantie satisfait ou remboursé 30j</span>
                  </div>
                </div>

                <div className="bg-black/50 rounded-xl p-6 border border-gray-800">
                  <h4 className="font-bold mb-3 text-center">ROI de ton investissement :</h4>
                  <div className="text-center space-y-2 text-sm text-gray-400">
                    <p>9€ aujourd'hui → 1K€/mois récurrent</p>
                    <p>ROI = x111 dès le 1er mois</p>
                    <p>Framework rentabilisé en 2 heures de travail</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-yellow-900/20 border border-yellow-600/30 rounded-xl p-4 text-center">
              <p className="text-yellow-400 text-sm">
                🔥 +180 personnes vivent déjà de leur activité grâce à ce framework
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
