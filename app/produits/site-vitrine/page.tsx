'use client'

import Link from 'next/link'
import products from '@/data/products.json'
import { createCheckoutSession } from '@/lib/stripe'
import Header from '@/components/Header'

export default function SiteVitrinePage() {
  const product = products.products.find(p => p.id === 'site-vitrine')
  if (!product) return null

  const handleBuy = () => createCheckoutSession('site-vitrine')

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-12 max-w-6xl">

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-yellow-100 border border-yellow-300 rounded-full">
                <span className="text-yellow-700 text-sm font-bold">⭐ BEST SELLER</span>
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
                  <span>500€+ pour une agence qui te livre en 2 semaines</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl mt-0.5">✗</span>
                  <span>Des jours à galérer avec les builders no-code</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl mt-0.5">✗</span>
                  <span>Un site basique qui ne convertit pas</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">La méthode pour créer ton site vitrine en 5h :</h2>
              <ul className="space-y-4">
                {product.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-2xl p-8">
              <h3 className="text-blue-700 font-bold mb-4">Stack technique moderne :</h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">▸</span>
                  <span>Next.js 14</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">▸</span>
                  <span>Tailwind CSS</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">▸</span>
                  <span>Claude/ChatGPT</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">▸</span>
                  <span>Vercel (gratuit)</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Déjà +150 sites vitrines créés</h3>
              <div className="space-y-4">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white">S</div>
                    <div>
                      <div className="font-bold text-gray-900">Sophie L.</div>
                      <div className="text-gray-600 text-sm">Coach bien-être</div>
                      <div className="flex gap-0.5 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-sm">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    "Mon site est en ligne depuis hier. <span className="font-bold text-blue-600">3 demandes de devis reçues ce matin.</span> J'ai suivi la formation tranquillement samedi après-midi. Tellement simple que j'ai aidé 2 amies à faire pareil."
                  </p>
                  <div className="text-green-600 font-bold mt-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    3 leads en 24h
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center font-bold text-white">T</div>
                    <div>
                      <div className="font-bold text-gray-900">Thomas B.</div>
                      <div className="text-gray-600 text-sm">Photographe</div>
                      <div className="flex gap-0.5 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-sm">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    "Je voulais juste un site propre pour mon portfolio. <span className="font-bold text-purple-600">C'est fait en 4h.</span> Design pro, rapide, responsive. Les clients me demandent qui l'a fait. Je leur dis 'moi' avec un grand sourire."
                  </p>
                  <div className="text-green-600 font-bold mt-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Site pro en 4h
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-8">
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-1 shadow-2xl">
              <div className="bg-white rounded-xl p-8">
                <div className="mb-6">
                  <div className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-4">
                    -50%
                  </div>
                  <div className="text-gray-500 line-through text-lg mb-2">{product.originalPrice}€</div>
                  <div className="text-6xl font-black bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-2">
                    {product.price}€
                  </div>
                  <p className="text-sm font-semibold text-red-600 mb-2">Prix de lancement</p>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-green-700 font-semibold">Paiement sécurisé</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-600">Accès immédiat</span>
                  </div>
                </div>

                <button
                  onClick={handleBuy}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-5 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg mb-6"
                >
                  Accéder maintenant →
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
                    <p>49€ → Économise 500€+ d'agence</p>
                    <p>ROI = x10 immédiatement</p>
                    <p>Site en ligne en quelques heures</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 border-2 border-blue-300 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <p className="font-bold text-blue-700 mb-1">Bonus inclus :</p>
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
                🔥 +150 sites vitrines créés avec cette méthode
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
