'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import products from '@/data/products.json'

function SuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (sessionId) {
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    } else {
      setError(true)
      setLoading(false)
    }
  }, [sessionId])

  if (loading) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Vérification du paiement...</p>
        </div>
      </main>
    )
  }

  if (error) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="text-6xl mb-6">❌</div>
          <h1 className="text-3xl font-bold mb-4">Erreur</h1>
          <p className="text-gray-600 mb-8">
            Une erreur s'est produite. Contacte-moi si le problème persiste.
          </p>
          <Link href="/" className="text-indigo-600 hover:underline">
            ← Retour à l'accueil
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 py-20 max-w-3xl">
        <div className="text-center mb-12">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-4xl font-bold mb-4">Paiement Confirmé !</h1>
          <p className="text-xl text-gray-600">
            Ton accès est en route vers ton email
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Prochaines étapes :</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-green-500 mr-3 text-xl">✓</span>
              <div>
                <strong>Vérifie ton email</strong>
                <p className="text-gray-600">Tu vas recevoir un email avec ton accès dans les 2 prochaines minutes.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 text-xl">✓</span>
              <div>
                <strong>Check les spams</strong>
                <p className="text-gray-600">Si tu ne vois pas l'email, regarde dans tes spams ou promotions.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 text-xl">✓</span>
              <div>
                <strong>Commence à lire</strong>
                <p className="text-gray-600">Applique les stratégies et partage-moi tes résultats !</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-indigo-50 rounded-xl p-8 border-2 border-indigo-200">
          <h3 className="text-xl font-bold mb-4">Besoin d'aide ?</h3>
          <p className="text-gray-700 mb-4">
            Des questions ? Une suggestion ? Réponds simplement à l'email que tu vas recevoir.
          </p>
          <p className="text-gray-700">
            Tu peux aussi me contacter sur{' '}
            <a href="https://twitter.com/nash3691215" target="_blank" className="text-indigo-600 hover:underline">
              Twitter @nash3691215
            </a>
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Intéressé par d'autres produits ?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {products.products
              .filter(p => p.type !== 'lead_magnet')
              .slice(0, 3)
              .map((product) => (
                <Link
                  key={product.id}
                  href={`/produits/${product.id}`}
                  className="bg-white rounded-xl p-6 shadow hover:shadow-xl transition border border-gray-100"
                >
                  <div className="text-3xl mb-3">
                    {product.type === 'ebook' && '📚'}
                    {product.type === 'formation' && '🎓'}
                    {product.type === 'saas' && '⚡'}
                  </div>
                  <h4 className="font-bold mb-2">{product.name}</h4>
                  <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                  <div className="text-xl font-bold text-indigo-600">
                    {product.price}€
                  </div>
                </Link>
              ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/" className="text-indigo-600 hover:underline">
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </main>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </main>
    }>
      <SuccessContent />
    </Suspense>
  )
}
