'use client'

import Link from 'next/link'
import products from '@/data/products.json'
import { createCheckoutSession } from '@/lib/stripe'

export default function SiteIAPage() {
  const product = products.products.find(p => p.id === 'site-ia')
  if (!product) return null

  const handleBuy = () => createCheckoutSession('site-ia')

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
              <div className="inline-block mb-4 px-3 py-1 bg-purple-100 border border-purple-200 rounded-full text-purple-700 text-sm font-semibold">
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
              <h2 className="text-3xl font-bold mb-6 text-gray-900">La méthode pour créer ton site pro en 24h :</h2>
              <ul className="space-y-4">
                {product.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-2xl p-8">
              <h3 className="text-purple-700 font-bold mb-4">Stack technique moderne :</h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <span className="text-purple-600">▸</span>
                  <span>Next.js 14 App Router</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-600">▸</span>
                  <span>Tailwind CSS</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-600">▸</span>
                  <span>Stripe Payments</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-600">▸</span>
                  <span>Vercel Hosting</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Ils ont lancé leur site en 24h</h3>
              <div className="space-y-4">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center font-bold text-white">M</div>
                    <div>
                      <div className="font-bold text-gray-900">Maxime D.</div>
                      <div className="text-gray-600 text-sm">Coach</div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "J'ai créé mon site en une journée. L'IA a fait 90% du taff. Économisé 1200€ d'agence. Formation rentabilisée x24."
                  </p>
                  <div className="text-green-600 font-bold mt-2">1200€ économisés</div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center font-bold text-white">C</div>
                    <div>
                      <div className="font-bold text-gray-900">Clara L.</div>
                      <div className="text-gray-600 text-sm">Infopreneure</div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "Formation ultra claire. J'avais 0 compétence tech. Mon site est en ligne et je vends mes produits. Dingue."
                  </p>
                  <div className="text-green-600 font-bold mt-2">Site pro en 1 jour</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-8">
            <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-1 shadow-2xl">
              <div className="bg-white rounded-xl p-8">
                <div className="mb-6">
                  <div className="text-gray-500 line-through text-lg mb-2">Prix agence: 1000€+</div>
                  <div className="text-6xl font-black bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text mb-2">
                    {product.price}€
                  </div>
                  <p className="text-gray-600">Investissement unique. Accès à vie.</p>
                </div>

                <button
                  onClick={handleBuy}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white py-5 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg mb-6"
                >
                  Créer mon site pro maintenant
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
                  <h4 className="font-bold mb-3 text-center text-gray-900">ROI immédiat :</h4>
                  <div className="text-center space-y-2 text-sm text-gray-600">
                    <p>49€ → Économise 1000€+ d'agence</p>
                    <p>ROI = x20 immédiatement</p>
                    <p>Site en ligne en 24h au lieu de 3 semaines</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-purple-50 border-2 border-purple-300 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <p className="font-bold text-purple-700 mb-1">Bonus inclus :</p>
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
