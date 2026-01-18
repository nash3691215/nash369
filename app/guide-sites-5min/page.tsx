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
            Comment je crée des sites en <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 text-transparent bg-clip-text">5 minutes</span> pour mes clients
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            La méthode exacte que j'utilise avec Claude AI + Hostinger pour livrer des sites pros rapidement
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Left - Benefits */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-indigo-100">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">La stack complète</h3>
              <p className="text-gray-600">
                Claude AI pour générer le code + Hostinger pour l'hébergement. Simple, rapide, efficace.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-emerald-100">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Le process étape par étape</h3>
              <p className="text-gray-600">
                De la commande client jusqu'à la livraison. Sans prise de tête, sans code compliqué.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-purple-100">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Comment bien facturer</h3>
              <p className="text-gray-600">
                Les astuces pour livrer vite ET vendre à bon prix. La rapidité = valeur ajoutée.
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
                <strong className="text-indigo-600">Bonus :</strong> Tu recevras aussi mes meilleurs tips pour automatiser ton business avec l'IA
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
                <strong>Ma stack technique exacte</strong> - Claude AI + Hostinger (pourquoi cette combo est imbattable)
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-yellow-300 text-xl flex-shrink-0">✓</span>
              <div>
                <strong>Le workflow complet</strong> - De la consultation client jusqu'au déploiement
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-yellow-300 text-xl flex-shrink-0">✓</span>
              <div>
                <strong>Les prompts que j'utilise</strong> - Pour générer des sites pros en quelques minutes
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-yellow-300 text-xl flex-shrink-0">✓</span>
              <div>
                <strong>Comment livrer rapidement</strong> - Sans sacrifier la qualité ni ton pricing
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-yellow-300 text-xl flex-shrink-0">✓</span>
              <div>
                <strong>Les erreurs à éviter</strong> - Ce que j'aurais aimé savoir avant de me lancer
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-yellow-300 text-xl flex-shrink-0">✓</span>
              <div>
                <strong>Comment bien facturer tes services</strong> - Le pricing qui marche pour gagner sans galérer
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-indigo-100 mb-4">
              ⚠️ Ce guide te donne un <strong>aperçu de la méthode</strong>. Pour le process complet, check mes formations payantes.
            </p>
          </div>
        </div>

        {/* Social Proof Mini */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Plus de <strong className="text-indigo-600">500+ personnes</strong> ont déjà téléchargé ce guide
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>⭐⭐⭐⭐⭐ "Très actionnable"</span>
            <span>⭐⭐⭐⭐⭐ "Méthode claire"</span>
            <span>⭐⭐⭐⭐⭐ "Je recommande"</span>
          </div>
        </div>
      </section>
    </div>
  )
}
