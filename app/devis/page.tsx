'use client'

import Link from 'next/link'
import { useState } from 'react'
import Footer from '@/components/Footer'

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

      <div className="container mx-auto px-4 py-32 max-w-5xl">
        {/* Page Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-xs font-bold text-blue-600 uppercase tracking-widest mb-6">
            Projet Sur Mesure
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 leading-tight">
            Obtiens ton devis <span className="text-blue-600">en 24h</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">
            Site vitrine, e-commerce ou automatisation complète. Décris ton besoin, je m'occupe du reste.
          </p>
        </div>

        {status === 'success' ? (
          <div className="max-w-2xl mx-auto animate-fade-in-up">
            <div className="bg-white border border-green-100 rounded-3xl p-10 text-center shadow-2xl shadow-green-500/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full blur-3xl opacity-50 -mr-10 -mt-10"></div>
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 relative z-10">✓</div>
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Demande envoyée !</h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Je reviens vers toi sous <strong className="text-slate-900 border-b-2 border-green-200">24h maximum</strong> avec un devis détaillé et personnalisé.
              </p>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 mb-8 text-left">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                  Prochaines étapes
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 p-3 bg-white rounded-xl border border-slate-100">
                    <div className="font-bold text-blue-600 text-lg">1</div>
                    <span className="text-slate-600 text-sm">Analyse de ton projet et calcul du meilleur tarif</span>
                  </li>
                  <li className="flex items-start gap-4 p-3 bg-white rounded-xl border border-slate-100">
                    <div className="font-bold text-blue-600 text-lg">2</div>
                    <span className="text-slate-600 text-sm">Envoi du devis détaillé par email avec options</span>
                  </li>
                  <li className="flex items-start gap-4 p-3 bg-white rounded-xl border border-slate-100">
                    <div className="font-bold text-blue-600 text-lg">3</div>
                    <span className="text-slate-600 text-sm">Discussion pour affiner le projet si besoin</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold transition-all shadow-lg shadow-slate-900/20 group"
              >
                <span>Retour à l'accueil</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Value Props */}
            <div className="space-y-8 animate-fade-in-left">
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                <h2 className="text-2xl font-bold mb-8 text-slate-900 flex items-center gap-3">
                  <span className="text-3xl">✨</span>
                  Pourquoi passer par Nash ?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-white rounded-xl border border-slate-100 flex items-center justify-center text-2xl shadow-sm text-blue-600 group-hover:scale-110 transition-transform">⚡</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1 text-lg">Livraison ultra-rapide</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">Site vitrine en 48-72h, e-commerce complet en 5-7 jours ouvrés.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-white rounded-xl border border-slate-100 flex items-center justify-center text-2xl shadow-sm text-blue-600 group-hover:scale-110 transition-transform">💰</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1 text-lg">Prix transparents</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">À partir de 299€. Pas de frais cachés, pas d'abonnements.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-white rounded-xl border border-slate-100 flex items-center justify-center text-2xl shadow-sm text-blue-600 group-hover:scale-110 transition-transform">🎓</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1 text-lg">Formation incluse</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">Tu gardes le contrôle total de ton site. Je t'apprends à le gérer.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-white rounded-xl border border-slate-100 flex items-center justify-center text-2xl shadow-sm text-blue-600 group-hover:scale-110 transition-transform">🤝</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1 text-lg">Support inclus</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">30 jours de support dédié après la livraison du projet.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Box - Visible on mobile/tablet */}
              <div className="lg:hidden bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white text-center shadow-xl">
                <p className="font-bold text-xl mb-6">
                  Pas sûr de ton projet ?
                </p>
                <Link
                  href="/ebooks"
                  className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg"
                >
                  Voir les formations
                </Link>
                <p className="text-sm text-blue-200 mt-4 font-light">
                  Apprends à créer ton site toi-même
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl shadow-slate-200/50 border border-slate-100 animate-fade-in-right relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">
                      Nom
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-medium text-slate-900 placeholder:text-slate-400"
                      placeholder="Jean Dupont"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-medium text-slate-900 placeholder:text-slate-400"
                      placeholder="jean@exemple.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">
                    Type de projet
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={formData.project}
                      onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-medium text-slate-900 appearance-none cursor-pointer"
                    >
                      <option value="">Sélectionner un type...</option>
                      <option value="site-vitrine">🌐 Site vitrine (Présentation d'activité)</option>
                      <option value="e-commerce">🛒 Site e-commerce (Vente en ligne)</option>
                      <option value="automatisation">⚡ Automatisation & IA</option>
                      <option value="autre">💡 Autre projet spécifique</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">
                    Budget estimé
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-medium text-slate-900 appearance-none cursor-pointer"
                    >
                      <option value="">Sélectionner une fourchette...</option>
                      <option value="moins-500">Moins de 500€</option>
                      <option value="500-1000">500€ - 1000€</option>
                      <option value="1000-2000">1000€ - 2000€</option>
                      <option value="plus-2000">Plus de 2000€</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">
                    Description du projet
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none font-medium text-slate-900 placeholder:text-slate-400"
                    placeholder="Décris ton projet en quelques lignes : tes objectifs, tes délais, tes inspirations..."
                  />
                </div>

                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-600 text-sm font-medium flex items-center gap-2">
                    <span className="text-xl">⚠️</span> Une erreur est survenue. Réessaye ou contacte-moi directement à contact@nash369.com
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-blue-600/30 disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2 group"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <span>Recevoir mon devis gratuit</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-400 mt-4 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  Réponse garantie sous 24h • Sans engagement
                </p>
              </form>

              {/* CTA Box - Desktop only */}
              <div className="hidden lg:block mt-8 bg-slate-900 rounded-2xl p-6 text-white text-center shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                <p className="font-bold text-lg mb-4">
                  Tu préfères le faire toi-même ?
                </p>
                <Link
                  href="/ebooks"
                  className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl font-bold hover:bg-white/20 transition-all text-sm"
                >
                  Voir les formations →
                </Link>
                <p className="text-xs text-slate-400 mt-3">
                  Apprends à créer ton site de A à Z
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}
