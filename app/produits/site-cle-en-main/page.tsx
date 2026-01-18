'use client'

import { useState } from 'react'
import Link from 'next/link'
import products from '@/data/products.json'
import Header from '@/components/Header'

export default function SiteCleEnMainPage() {
  const product = products.products.find(p => p.id === 'site-cle-en-main')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    description: '',
    budget: '',
    timeline: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  if (!product) return null

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
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          projectType: '',
          description: '',
          budget: '',
          timeline: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-12 max-w-6xl">

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Service Description */}
          <div className="space-y-8">
            <div>
              <div className="inline-block mb-4 px-3 py-1 bg-green-100 border border-green-200 rounded-full text-green-700 text-sm font-semibold">
                Service Premium
              </div>
              <div className="text-6xl mb-6">🎯</div>
              <h1 className="text-5xl font-black mb-4 leading-tight text-gray-900">{product.name}</h1>
              <p className="text-2xl text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
              <h3 className="text-red-600 font-bold mb-4 uppercase text-sm tracking-wider">Sans ce service</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl mt-0.5">✗</span>
                  <span>Des semaines à galérer avec le code et les bugs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl mt-0.5">✗</span>
                  <span>Risque de configurations mal faites (Stripe, emails)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl mt-0.5">✗</span>
                  <span>Site qui ne convertit pas ou bugs en production</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Ce que tu reçois :</h2>
              <ul className="space-y-4">
                {product.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-emerald-50 border-2 border-indigo-200 rounded-2xl p-8">
              <h3 className="text-indigo-700 font-bold mb-4">Stack technique incluse :</h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">▸</span>
                  <span>Next.js 16 (React 19)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">▸</span>
                  <span>TypeScript + Tailwind</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">▸</span>
                  <span>Stripe Payments</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">▸</span>
                  <span>Resend Email</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">▸</span>
                  <span>Supabase Database</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">▸</span>
                  <span>Google Analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">▸</span>
                  <span>Vercel Hosting</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">▸</span>
                  <span>0€/mois de coûts</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Ils ont lancé leur site en 7 jours</h3>
              <div className="space-y-4">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center font-bold text-white">T</div>
                    <div>
                      <div className="font-bold text-gray-900">Thomas L.</div>
                      <div className="text-gray-600 text-sm">Coach en nutrition</div>
                      <div className="flex gap-0.5 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-sm">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    "J'ai reçu mon site e-commerce en 6 jours. Tout était déjà configuré : Stripe, emails, analytics. <span className="font-bold text-green-600">Première vente 24h après la livraison.</span> Le support de 30 jours m'a rassuré pour mes débuts."
                  </p>
                  <div className="text-green-600 font-bold mt-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Première vente en 24h
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center font-bold text-white">E</div>
                    <div>
                      <div className="font-bold text-gray-900">Emma P.</div>
                      <div className="text-gray-600 text-sm">Créatrice d'ebooks</div>
                      <div className="flex gap-0.5 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-sm">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    "2500€ au lieu de galérer 3 mois à apprendre le code ? Deal. <span className="font-bold text-indigo-600">Mon site est plus pro que 90% de la concurrence.</span> La formation m'a permis de gérer les ajouts de produits seule."
                  </p>
                  <div className="text-green-600 font-bold mt-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Autonome en 7 jours
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Quote Form */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-1 shadow-2xl">
              <div className="bg-white rounded-xl p-8">
                <div className="mb-6 text-center">
                  <div className="text-gray-500 line-through text-lg mb-2">Économise 3 mois de dev</div>
                  <div className="text-6xl font-black bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text mb-2">
                    {product.price}€
                  </div>
                  <p className="text-gray-600">Paiement unique. Livraison en 7 jours.</p>
                </div>

                <div className="mb-8">
                  <h3 className="font-bold text-xl mb-4 text-gray-900">Demande ton devis personnalisé</h3>

                  {submitStatus === 'success' ? (
                    <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
                      <div className="text-green-600 text-5xl mb-3">✓</div>
                      <p className="text-green-700 font-bold mb-2">Demande envoyée !</p>
                      <p className="text-gray-600 text-sm">Je te réponds sous 24h avec un devis détaillé.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                          placeholder="Jean Dupont"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                          placeholder="jean@email.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                          Type de projet *
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          required
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                        >
                          <option value="">Sélectionne...</option>
                          <option value="ebooks">Vente d'ebooks</option>
                          <option value="formations">Vente de formations</option>
                          <option value="coaching">Coaching/Consulting</option>
                          <option value="saas">SaaS/Abonnements</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                          Décris ton projet *
                        </label>
                        <textarea
                          id="description"
                          name="description"
                          required
                          value={formData.description}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none resize-none"
                          placeholder="Nombre de produits, fonctionnalités spécifiques..."
                        />
                      </div>

                      <div>
                        <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
                          Date de lancement souhaitée
                        </label>
                        <input
                          type="text"
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                          placeholder="Ex: Dans 2 semaines"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Envoi en cours...' : 'Recevoir mon devis gratuit'}
                      </button>

                      {submitStatus === 'error' && (
                        <p className="text-red-600 text-sm text-center">
                          Une erreur est survenue. Réessaye ou contacte-moi directement.
                        </p>
                      )}
                    </form>
                  )}
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-gray-700">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>Réponse sous 24h garantie</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>Devis détaillé et transparent</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>Aucun engagement avant signature</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                  <h4 className="font-bold mb-3 text-center text-gray-900">Livraison express :</h4>
                  <div className="text-center space-y-2 text-sm text-gray-600">
                    <p>✅ Jour 1-2 : Maquette et validation</p>
                    <p>✅ Jour 3-5 : Développement complet</p>
                    <p>✅ Jour 6-7 : Tests et mise en ligne</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-yellow-50 border-2 border-yellow-300 rounded-xl p-4 text-center">
              <p className="text-yellow-700 text-sm font-semibold">
                🔥 Seulement 3 slots disponibles ce mois-ci
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
