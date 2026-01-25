'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function DevisPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    budget: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/send-quote-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', project: '', budget: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            NASH369
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16 max-w-2xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Demande de devis
          </h1>
          <p className="text-lg text-gray-600">
            Site vitrine, e-commerce ou automatisation
          </p>
        </div>

        {status === 'success' ? (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
            <div className="text-5xl mb-4">✓</div>
            <h2 className="text-2xl font-bold mb-2 text-gray-900">Demande envoyée</h2>
            <p className="text-gray-600 mb-6">
              Je reviens vers toi sous 24h avec un devis détaillé.
            </p>
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              ← Retour à l'accueil
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Nom
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Type de projet
              </label>
              <select
                required
                value={formData.project}
                onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900"
              >
                <option value="">Sélectionner</option>
                <option value="site-vitrine">Site vitrine</option>
                <option value="e-commerce">Site e-commerce</option>
                <option value="automatisation">Automatisation</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Budget estimé
              </label>
              <select
                required
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900"
              >
                <option value="">Sélectionner</option>
                <option value="moins-500">Moins de 500€</option>
                <option value="500-1000">500€ - 1000€</option>
                <option value="1000-2000">1000€ - 2000€</option>
                <option value="plus-2000">Plus de 2000€</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Description du projet
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900"
                placeholder="Décris ton projet, tes objectifs, ton deadline..."
              />
            </div>

            {status === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
                Une erreur est survenue. Réessaye ou contacte-moi directement.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-lg font-semibold text-lg transition-all disabled:opacity-50"
            >
              {status === 'loading' ? 'Envoi en cours...' : 'Envoyer la demande'}
            </button>
          </form>
        )}

        {/* Back to Home */}
        {status !== 'success' && (
          <div className="mt-8 text-center">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              ← Retour à l'accueil
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
