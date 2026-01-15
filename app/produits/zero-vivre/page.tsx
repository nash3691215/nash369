'use client'

import Link from 'next/link'
import products from '@/data/products.json'
import { createCheckoutSession } from '@/lib/stripe'

export default function ZeroVivrePage() {
  const product = products.products.find(p => p.id === 'zero-vivre')
  if (!product) return null

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <Link href="/" className="text-indigo-600 hover:underline mb-8 inline-block">← Retour</Link>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="text-6xl mb-6">📚</div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl text-gray-600 mb-8">{product.description}</p>
            <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">Ce que tu vas apprendre :</h2>
              <ul className="space-y-3">
                {product.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-indigo-50 rounded-xl p-6">
              <h3 className="font-bold mb-2">Format</h3>
              <p className="text-gray-600">Guide HTML interactif • Accès à vie</p>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-xl p-8 shadow-xl sticky top-8">
              <div className="text-4xl font-bold text-indigo-600 mb-6">{product.price}€</div>
              <button onClick={() => createCheckoutSession('zero-vivre')} className="w-full bg-indigo-600 text-white py-4 rounded-lg font-semibold hover:bg-indigo-700 transition mb-4">
                Acheter Maintenant
              </button>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center"><span className="mr-2">🔒</span><span>Paiement sécurisé</span></div>
                <div className="flex items-center"><span className="mr-2">📥</span><span>Livraison instantanée</span></div>
                <div className="flex items-center"><span className="mr-2">✓</span><span>Garantie 30j</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
