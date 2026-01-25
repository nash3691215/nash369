'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

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
      <main className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Vérification du paiement...</p>
        </div>
      </main>
    )
  }

  if (error) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="text-6xl mb-6">❌</div>
          <h1 className="text-3xl font-bold mb-4 text-gray-900">Erreur</h1>
          <p className="text-gray-600 mb-8">
            Une erreur s'est produite. Contacte-moi si le problème persiste.
          </p>
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            ← Retour à l'accueil
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            NASH369
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16 max-w-2xl">
        <div className="text-center mb-12">
          <div className="text-6xl mb-6">✓</div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Paiement confirmé</h1>
          <p className="text-xl text-gray-600">
            Ton accès est en route vers ton email
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Prochaines étapes</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-gray-900">1.</span>
              <div>
                <strong className="text-gray-900">Vérifie ton email</strong>
                <p className="text-gray-600">Tu vas recevoir un email avec ton accès dans les 2 prochaines minutes.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-900">2.</span>
              <div>
                <strong className="text-gray-900">Check les spams</strong>
                <p className="text-gray-600">Si tu ne vois pas l'email, regarde dans tes spams.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-900">3.</span>
              <div>
                <strong className="text-gray-900">Commence</strong>
                <p className="text-gray-600">Applique les stratégies et partage-moi tes résultats.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-bold mb-2 text-gray-900">Besoin d'aide ?</h3>
          <p className="text-gray-600">
            Réponds à l'email que tu vas recevoir ou contacte-moi sur{' '}
            <a href="https://twitter.com/nash3691215" target="_blank" className="text-gray-900 hover:underline font-semibold">
              Twitter
            </a>
          </p>
        </div>

        <div className="text-center mt-12">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
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
      <main className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </main>
    }>
      <SuccessContent />
    </Suspense>
  )
}
