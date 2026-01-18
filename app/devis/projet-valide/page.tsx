'use client'

import Link from 'next/link'
import { useState } from 'react'
import Header from '@/components/Header'

export default function ProjetValidePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Site vitrine',
    budget: '',
    timeline: '',
    description: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-quote-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        alert('Erreur lors de l\'envoi. Réessaye ou contacte-moi directement.')
      }
    } catch (error) {
      alert('Erreur lors de l\'envoi. Réessaye ou contacte-moi directement.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-emerald-50 flex items-center justify-center px-6">
          <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-12 text-center">
            <div className="text-6xl mb-6">🎯</div>
            <h1 className="text-4xl font-bold mb-4 text-gray-900">Demande reçue !</h1>
            <p className="text-xl text-gray-600 mb-8">
              Je te réponds sous <strong className="text-indigo-600">24h</strong> avec un devis détaillé.
            </p>
            <div className="bg-indigo-50 rounded-xl p-6 mb-8">
              <p className="text-gray-700 mb-2">📧 Tu recevras un email de confirmation à :</p>
              <p className="font-semibold text-indigo-900">{formData.email}</p>
            </div>
            <Link href="/" className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-emerald-50">
      <Header />

      {/* Form Section */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Devis <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">personnalisé</span>
          </h1>
          <p className="text-lg text-gray-600">
            Remplis ce formulaire et reçois ton devis sous 24h
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 md:p-12">

          {/* Contact Info */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Tes coordonnées</h2>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                  placeholder="+33 6 12 34 56 78"
                />
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="mb-8 pt-8 border-t-2 border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Ton projet</h2>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Type de projet *
                </label>
                <select
                  required
                  value={formData.projectType}
                  onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors bg-white"
                >
                  <option>Site vitrine</option>
                  <option>Site e-commerce</option>
                  <option>Application web</option>
                  <option>Automation / IA</option>
                  <option>Autre (précise en dessous)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Budget disponible *
                </label>
                <select
                  required
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors bg-white"
                >
                  <option value="">Sélectionne ton budget</option>
                  <option value="299€ - 500€">299€ - 500€</option>
                  <option value="500€ - 1000€">500€ - 1000€</option>
                  <option value="1000€ - 2000€">1000€ - 2000€</option>
                  <option value="2000€ - 5000€">2000€ - 5000€</option>
                  <option value="5000€+">5000€+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Date de livraison souhaitée *
                </label>
                <input
                  type="text"
                  required
                  value={formData.timeline}
                  onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                  placeholder="Ex: Dans 2 semaines, Avant fin mars, Pas urgent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Décris ton besoin *
                </label>
                <textarea
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                  placeholder="Exemple : J'ai besoin d'un site vitrine pour mon salon de coiffure avec page accueil, services, galerie photos, formulaire de contact et intégration Google Maps. J'aimerais aussi un système de prise de rdv en ligne."
                />
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white font-bold text-lg rounded-xl hover:shadow-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Envoi en cours...' : 'Obtenir mon devis gratuit'}
          </button>

          <p className="text-sm text-gray-500 text-center mt-4">
            Réponse sous 24h · Devis gratuit et sans engagement
          </p>
        </form>

        {/* Trust badges */}
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl mb-2">⚡</div>
            <p className="text-sm font-semibold text-gray-700">Réponse 24h</p>
          </div>
          <div>
            <div className="text-3xl mb-2">💯</div>
            <p className="text-sm font-semibold text-gray-700">Devis gratuit</p>
          </div>
          <div>
            <div className="text-3xl mb-2">🎯</div>
            <p className="text-sm font-semibold text-gray-700">Sur-mesure</p>
          </div>
        </div>
      </section>
    </div>
  )
}
