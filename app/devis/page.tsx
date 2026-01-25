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
      {/* Header with Home Button */}
      <header className="border-b border-gray-200 sticky top-0 bg-white z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl md:text-2xl font-bold text-gray-900">
              NASH369
            </Link>
            <Link
              href="/"
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg font-medium transition-all text-sm"
            >
              ← Accueil
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm font-semibold text-gray-700 mb-4">
            DEVIS GRATUIT
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
            Obtiens ton devis en 24h
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Site vitrine, e-commerce ou automatisation sur-mesure
          </p>
        </div>

        {status === 'success' ? (
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-900 rounded-xl p-8 text-center shadow-xl">
              <div className="text-6xl mb-6">✓</div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Demande envoyée !</h2>
              <p className="text-lg text-gray-600 mb-8">
                Je reviens vers toi sous <strong className="text-gray-900">24h maximum</strong> avec un devis détaillé et personnalisé.
              </p>
              <div className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
                <h3 className="font-bold text-gray-900 mb-3">Prochaines étapes</h3>
                <ul className="text-left text-gray-700 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span>1.</span>
                    <span>Analyse de ton projet et calcul du devis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>2.</span>
                    <span>Envoi du devis détaillé par email</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>3.</span>
                    <span>Discussion pour affiner le projet si besoin</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/"
                className="inline-block px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-semibold transition-all"
              >
                ← Retour à l'accueil
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Value Props */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Pourquoi demander un devis ?</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <span className="text-2xl">⚡</span>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Livraison rapide</h3>
                      <p className="text-sm text-gray-600">Site vitrine en 48-72h, e-commerce en 5-7 jours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <span className="text-2xl">💰</span>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Prix transparent</h3>
                      <p className="text-sm text-gray-600">À partir de 299€, sans frais cachés ni abonnements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <span className="text-2xl">🎓</span>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Formation incluse</h3>
                      <p className="text-sm text-gray-600">Tu gardes le contrôle total de ton site après livraison</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <span className="text-2xl">✓</span>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Support inclus</h3>
                      <p className="text-sm text-gray-600">30 jours de support après livraison</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Box - Visible on mobile/tablet */}
              <div className="lg:hidden bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-lg p-6">
                <p className="text-center text-gray-700 mb-4">
                  <strong>Pas sûr de ton projet ?</strong>
                </p>
                <Link
                  href="/#formations"
                  className="block text-center px-6 py-3 bg-white border-2 border-gray-900 text-gray-900 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-all"
                >
                  Voir les formations →
                </Link>
                <p className="text-center text-sm text-gray-600 mt-3">
                  Formations pour créer toi-même
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900 transition-all"
                    placeholder="Ton nom"
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
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900 transition-all"
                    placeholder="ton@email.com"
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
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900 transition-all"
                  >
                    <option value="">Sélectionner</option>
                    <option value="site-vitrine">🌐 Site vitrine (299€+)</option>
                    <option value="e-commerce">🛒 Site e-commerce (999€+)</option>
                    <option value="automatisation">⚡ Automatisation (sur devis)</option>
                    <option value="autre">💡 Autre (dis-moi tout)</option>
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
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900 transition-all"
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
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900 transition-all resize-none"
                    placeholder="Décris ton projet, tes objectifs, ton deadline...&#10;&#10;Exemple: Je veux un site vitrine pour mon activité de coach sportif avec formulaire de contact et Google Maps."
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
                  className="w-full bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:hover:scale-100"
                >
                  {status === 'loading' ? 'Envoi en cours...' : 'Recevoir mon devis gratuit →'}
                </button>

                <p className="text-center text-xs text-gray-500">
                  ✓ Réponse sous 24h • Sans engagement
                </p>
              </form>

              {/* CTA Box - Desktop only */}
              <div className="hidden lg:block mt-6 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-lg p-6">
                <p className="text-center text-gray-700 mb-4">
                  <strong>Pas sûr de ton projet ?</strong>
                </p>
                <Link
                  href="/#formations"
                  className="block text-center px-6 py-3 bg-white border-2 border-gray-900 text-gray-900 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-all"
                >
                  Voir les formations →
                </Link>
                <p className="text-center text-sm text-gray-600 mt-3">
                  Formations pour créer toi-même
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
