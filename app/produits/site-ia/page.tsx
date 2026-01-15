'use client'

import Link from 'next/link'
import products from '@/data/products.json'

export default function SiteIAPage() {
  const product = products.products.find(p => p.id === 'site-ia')

  if (!product) return null

  const handleBuy = async () => {
    alert('Stripe checkout à intégrer')
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <Link href="/" className="text-indigo-600 hover:underline mb-8 inline-block">
          ← Retour
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="text-6xl mb-6">🎓</div>
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

            <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-400">
              <h3 className="font-bold mb-2 text-yellow-900">🎯 Valeur réelle : 1000€+</h3>
              <p className="text-yellow-800">C'est le prix d'une agence pour créer ton site. Avec cette formation, tu le fais toi-même pour 49€.</p>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl p-8 shadow-xl sticky top-8">
              <div className="text-sm text-gray-500 line-through mb-2">299€</div>
              <div className="text-4xl font-bold text-indigo-600 mb-6">{product.price}€</div>
              <button
                onClick={handleBuy}
                className="w-full bg-indigo-600 text-white py-4 rounded-lg font-semibold hover:bg-indigo-700 transition mb-4"
              >
                Acheter Maintenant
              </button>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="mr-2">🔒</span>
                  <span>Paiement sécurisé</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">📥</span>
                  <span>Accès immédiat</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">♾️</span>
                  <span>Accès à vie</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
