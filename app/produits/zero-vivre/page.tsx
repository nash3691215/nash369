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
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-indigo-600 mb-12 transition-colors">
          <span>←</span>
          <span>Retour</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <div className="inline-block mb-4 px-3 py-1 bg-indigo-100 border border-indigo-200 rounded-full text-indigo-700 text-sm font-semibold">
                E-Book Premium
              </div>
              <div className="text-6xl mb-6">💰</div>
              <h1 className="text-5xl font-black mb-4 leading-tight text-gray-900">{product.name}</h1>
              <p className="text-2xl text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
              <h3 className="text-red-600 font-bold mb-4 uppercase text-sm tracking-wider">La réalité actuelle</h3>
              <ul className="space-y-3 text-gray-700">
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

            <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Le système exact pour passer de 0 à 1K€/mois :</h2>
              <ul className="space-y-4">
                {product.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">+180 personnes vivent maintenant de leur activité</h3>
              <div className="space-y-4">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center font-bold text-white">S</div>
                    <div>
                      <div className="font-bold text-gray-900">Sophie B.</div>
                      <div className="text-gray-600 text-sm">Ex-RH → Créatrice</div>
                      <div className="flex gap-0.5 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-sm">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    "J'étais en CDI à crever d'ennui. Le framework m'a montré exactement quoi faire. <span className="font-bold text-indigo-600">Premier client semaine 3. 2.8K€/mois au mois 4.</span> J'ai quitté mon job. Ma seule regret ? Pas l'avoir fait avant."
                  </p>
                  <div className="text-green-600 font-bold mt-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Liberté en 4 mois
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center font-bold text-white">K</div>
                    <div>
                      <div className="font-bold text-gray-900">Karim T.</div>
                      <div className="text-gray-600 text-sm">Coach</div>
                      <div className="flex gap-0.5 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-sm">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    "9€ pour un framework qui t'explique comment trouver ton modèle rentable. <span className="font-bold text-purple-600">J'ai trouvé mon système en 48h.</span> Aujourd'hui 5.2K€/mois récurrent. ROI x577. Achète les yeux fermés."
                  </p>
                  <div className="text-green-600 font-bold mt-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    5.2K€/mois récurrent
                  </div>
                </div>
              </div>
            </div>
          </div>

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
                  Générer mes premiers 1K€/mois
                </button>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-gray-700">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>Paiement sécurisé Stripe</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>Guide interactif livré immédiatement</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>Accès à vie + mises à jour gratuites</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>Garantie satisfait ou remboursé 30j</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                  <h4 className="font-bold mb-3 text-center text-gray-900">ROI de ton investissement :</h4>
                  <div className="text-center space-y-2 text-sm text-gray-600">
                    <p>9€ aujourd'hui → 1K€/mois récurrent</p>
                    <p>ROI = x111 dès le 1er mois</p>
                    <p>Framework rentabilisé en 2 heures de travail</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-yellow-50 border-2 border-yellow-300 rounded-xl p-4 text-center">
              <p className="text-yellow-700 text-sm font-semibold">
                🔥 +180 personnes vivent déjà de leur activité grâce à ce framework
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
