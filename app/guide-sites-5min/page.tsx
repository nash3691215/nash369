'use client'

import Link from 'next/link'
import { useState } from 'react'
import Header from '@/components/Header'

export default function GuideSites5MinPage() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-lead-magnet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, leadMagnet: 'guide-sites-5min' })
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        alert('Erreur lors de l\'envoi. Réessaye.')
      }
    } catch (error) {
      alert('Erreur lors de l\'envoi. Réessaye.')
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
            <div className="text-6xl mb-6">🎉</div>
            <h1 className="text-4xl font-bold mb-4 text-gray-900">Check ton email !</h1>
            <p className="text-xl text-gray-600 mb-8">
              Je viens de t'envoyer le guide sur <strong className="text-indigo-600">{email}</strong>
            </p>
            <div className="bg-indigo-50 rounded-xl p-6 mb-8">
              <p className="text-gray-700 mb-4 text-sm">
                📧 Vérifie tes spams si tu ne le vois pas dans quelques minutes
              </p>
              <p className="text-gray-700 text-sm">
                💡 <strong>Prochaine étape :</strong> Découvre mes formations complètes pour maîtriser la création de sites avec l'IA
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                href="/#produits"
                className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Voir les formations
              </Link>
              <Link
                href="/"
                className="text-gray-600 hover:text-indigo-600 font-medium"
              >
                Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-emerald-50">
      <Header />

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-12 md:py-20">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-yellow-100 border-2 border-yellow-400 rounded-full text-yellow-800 text-sm font-bold">
            🎁 GUIDE GRATUIT
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-gray-900 leading-tight">
            Les Opportunités <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 text-transparent bg-clip-text">IA 2026</span> vues par NASH369
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comment profiter de la vague IA pour générer des revenus (création de sites, automatisations, vente de services)
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Left - Benefits */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-indigo-100">
              <div className="text-3xl mb-3">💎</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">3 opportunités concrètes</h3>
              <p className="text-gray-600">
                Les niches exactes pour monétiser l'IA en 2026. Sites, automatisations, services à forte marge.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-emerald-100">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Vendre sans coder</h3>
              <p className="text-gray-600">
                Comment utiliser Claude AI et les outils no-code pour créer et vendre sans compétences techniques.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-purple-100">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Le framework complet</h3>
              <p className="text-gray-600">
                Le plan exact pour passer de zéro à vivre de ton activité IA. Étape par étape, sans bullshit.
              </p>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-gray-200 sticky top-24">
            <div className="text-center mb-6">
              <div className="text-5xl mb-3">📥</div>
              <h2 className="text-2xl font-bold mb-2 text-gray-900">Télécharge le guide</h2>
              <p className="text-gray-600">100% gratuit. Reçois-le par email instantanément.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Ton meilleur email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors text-base"
                  placeholder="ton@email.com"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white font-bold text-lg rounded-xl hover:shadow-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Recevoir le guide gratuit'}
              </button>

              <p className="text-xs text-gray-500 text-center">
                ✓ Pas de spam • ✓ Désinscription en 1 clic • ✓ Accès immédiat
              </p>
            </form>

            <div className="mt-6 pt-6 border-t-2 border-gray-100">
              <p className="text-sm text-gray-600 text-center">
                <strong className="text-indigo-600">Bonus :</strong> Tu recevras aussi des tips exclusifs sur les nouvelles opportunités IA chaque semaine
              </p>
            </div>
          </div>
        </div>

        {/* What's Inside */}
        <div className="bg-gradient-to-br from-indigo-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Ce que tu vas découvrir dans le guide
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <span className="text-yellow-300 text-xl flex-shrink-0">✓</span>
              <div>
                <strong>Opportunité #1 : Sites IA automatisés</strong> - Comment créer et vendre des sites e-commerce qui tournent seuls (500€ à 2500€ par site)
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-yellow-300 text-xl flex-shrink-0">✓</span>
              <div>
                <strong>Opportunité #2 : Services d'automation</strong> - Les automatisations les plus demandées en 2026 et comment les vendre sans coder
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-yellow-300 text-xl flex-shrink-0">✓</span>
              <div>
                <strong>Opportunité #3 : Formation & conseil IA</strong> - Vendre ton expertise en IA (même en tant que débutant)
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-yellow-300 text-xl flex-shrink-0">✓</span>
              <div>
                <strong>Le framework 0 → Revenu</strong> - Les 4 étapes pour passer de zéro à tes premiers 1000€ avec l'IA
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-yellow-300 text-xl flex-shrink-0">✓</span>
              <div>
                <strong>Les outils gratuits à maîtriser</strong> - Claude AI, ChatGPT, Cursor, Vercel... La stack complète pour démarrer sans budget
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-yellow-300 text-xl flex-shrink-0">✓</span>
              <div>
                <strong>Comment trouver tes premiers clients</strong> - Les canaux qui marchent vraiment pour vendre tes services IA
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-indigo-100 mb-4">
              ⚠️ Ce guide te donne une <strong>vision complète des opportunités</strong>. Pour maîtriser chaque méthode en détail, découvre mes formations.
            </p>
          </div>
        </div>

        {/* Social Proof Mini */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Plus de <strong className="text-indigo-600">500+ personnes</strong> ont déjà téléchargé ce guide
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>⭐⭐⭐⭐⭐ "Opportunités concrètes"</span>
            <span>⭐⭐⭐⭐⭐ "Vision claire"</span>
            <span>⭐⭐⭐⭐⭐ "Très inspirant"</span>
          </div>
        </div>
      </section>
    </div>
  )
}
