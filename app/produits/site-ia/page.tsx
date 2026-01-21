'use client'

import Link from 'next/link'
import products from '@/data/products.json'
import { createCheckoutSession } from '@/lib/stripe'
import Header from '@/components/Header'

export default function SiteIAPage() {
  const product = products.products.find(p => p.id === 'site-ia')
  if (!product) return null

  const handleBuy = () => createCheckoutSession('site-ia')

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-12 max-w-6xl">

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <div className="inline-block mb-4 px-3 py-1 bg-emerald-100 border border-emerald-200 rounded-full text-emerald-700 text-sm font-semibold">
                Formation Premium
              </div>
              <div className="text-6xl mb-6">🚀</div>
              <h1 className="text-5xl font-black mb-4 leading-tight text-gray-900">{product.name}</h1>
              <p className="text-2xl text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
              <h3 className="text-red-600 font-bold mb-4 uppercase text-sm tracking-wider">Sans cette formation</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl mt-0.5">✗</span>
                  <span>1000€+ pour une agence qui te livre en 3 semaines</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl mt-0.5">✗</span>
                  <span>Des semaines à apprendre le code par toi-même</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl mt-0.5">✗</span>
                  <span>Un site qui ressemble à tous les autres templates</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Crée ton système de vente automatique en 24h :</h2>
              <ul className="space-y-4">
                {product.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-emerald-50 border-2 border-emerald-200 rounded-2xl p-8">
              <h3 className="text-emerald-700 font-bold mb-4">Stack technique moderne :</h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">▸</span>
                  <span>Next.js 14 App Router</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">▸</span>
                  <span>Tailwind CSS</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">▸</span>
                  <span>Stripe Payments</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">▸</span>
                  <span>Vercel Hosting</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Déjà +120 sites créés avec cette méthode</h3>
              <div className="space-y-4">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center font-bold text-white">A</div>
                    <div>
                      <div className="font-bold text-gray-900">Alexandre R.</div>
                      <div className="text-gray-600 text-sm">Formateur</div>
                      <div className="flex gap-0.5 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-sm">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    "48h après l'achat, mon site vendait mes formations. <span className="font-bold text-emerald-600">J'ai économisé 3 mois de galère et 1500€ d'agence.</span> Meilleur investissement de 2024."
                  </p>
                  <div className="text-green-600 font-bold mt-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Site en ligne en 48h
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center font-bold text-white">M</div>
                    <div>
                      <div className="font-bold text-gray-900">Marie C.</div>
                      <div className="text-gray-600 text-sm">Créatrice de contenu</div>
                      <div className="flex gap-0.5 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-sm">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    "Zéro ligne de code écrite. L'IA a tout fait. <span className="font-bold text-indigo-600">Site en ligne en 1 journée.</span> Mes ebooks se vendent pendant que je crée du contenu. Si j'avais su que c'était aussi simple..."
                  </p>
                  <div className="text-green-600 font-bold mt-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Ventes automatiques
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-8">
            <div className="bg-gradient-to-br from-indigo-600 to-emerald-700 rounded-2xl p-1 shadow-2xl">
              <div className="bg-white rounded-xl p-8">
                <div className="mb-6">
                  <div className="text-gray-500 line-through text-lg mb-2">Prix agence: 1000€+</div>
                  <div className="text-6xl font-black bg-gradient-to-r from-indigo-600 to-emerald-600 text-transparent bg-clip-text mb-2">
                    {product.price}€
                  </div>
                  <p className="text-gray-600">Investissement unique. Accès à vie.</p>
                </div>

                <button
                  onClick={handleBuy}
                  className="w-full bg-gradient-to-r from-indigo-600 to-emerald-600 hover:from-indigo-500 hover:to-emerald-500 text-white py-5 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg mb-6"
                >
                  Accéder à la formation complète →
                </button>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-gray-700">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>Paiement sécurisé Stripe</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>Formation complète + templates</span>
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
                  <h4 className="font-bold mb-3 text-center text-gray-900">Ce que tu gagnes :</h4>
                  <div className="text-center space-y-2 text-sm text-gray-600">
                    <p>199,90€ vs 1500€ d'agence</p>
                    <p>Site prêt à vendre en 24h vs 3 semaines</p>
                    <p>Stack 0€/mois vs 87€/mois (Shopify + outils)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-emerald-50 border-2 border-emerald-300 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <p className="font-bold text-emerald-700 mb-1">Bonus inclus :</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Templates Next.js prêts à l'emploi</li>
                    <li>• Checklist déploiement Vercel</li>
                    <li>• Prompts IA ultra-optimisés</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-yellow-50 border-2 border-yellow-300 rounded-xl p-4 text-center">
              <p className="text-yellow-700 text-sm font-semibold">
                🔥 +120 sites créés avec cette formation
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
