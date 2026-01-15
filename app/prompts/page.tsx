'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function PromptsPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // TODO: Appel API pour envoyer email
    setTimeout(() => {
      setSuccess(true)
      setLoading(false)
    }, 1000)
  }

  if (success) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-3xl font-bold mb-4">Check ton email !</h1>
          <p className="text-gray-600 mb-8">
            Tes 100 prompts ChatGPT t'attendent dans ta boîte mail.
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
      <div className="container mx-auto px-4 py-20 max-w-2xl">
        <Link href="/" className="text-indigo-600 hover:underline mb-8 inline-block">
          ← Retour
        </Link>

        <div className="text-center mb-12">
          <div className="text-6xl mb-6">🎁</div>
          <h1 className="text-4xl font-bold mb-4">100 Prompts ChatGPT Gratuits</h1>
          <p className="text-xl text-gray-600">
            Reçois instantanément 100 prompts prêts à l'emploi pour booster ta productivité.
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-6">Ce que tu vas recevoir :</h2>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>100 prompts testés et validés</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Catégorisés par usage (Marketing, Code, Business, etc.)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Prêts à copier-coller dans ChatGPT</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Gain de temps immédiat</span>
            </li>
          </ul>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Ton email :
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                placeholder="ton@email.com"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-4 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:opacity-50"
            >
              {loading ? 'Envoi en cours...' : 'Recevoir les 100 Prompts Gratuits'}
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-4 text-center">
            Pas de spam. Juste tes prompts + quelques emails utiles.
          </p>
        </div>
      </div>
    </main>
  )
}
