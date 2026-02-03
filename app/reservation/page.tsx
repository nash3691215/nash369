'use client'

import Link from 'next/link'
import { useState } from 'react'
import Footer from '@/components/Footer'

export default function ReservationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/send-call-reservation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', company: '', message: '' })
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
            Appel Gratuit
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 leading-tight">
            Réserve ton appel <span className="text-blue-600">découverte gratuit</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">
            30 minutes pour comprendre ton projet, explorer les possibilités et voir comment NASH369 peut t'aider à te lancer. Gratuit et sans engagement.
          </p>
        </div>

        {status === 'success' ? (
          <div className="max-w-2xl mx-auto animate-fade-in-up">
            <div className="bg-white border border-green-100 rounded-3xl p-10 text-center shadow-2xl shadow-green-500/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full blur-3xl opacity-50 -mr-10 -mt-10"></div>
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 relative z-10">✓</div>
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Appel réservé !</h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Vérifie ton email, tu vas recevoir une confirmation avec les détails de notre appel. On se parle très bientôt !
              </p>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 mb-8 text-left">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                  Ce qu'il va se passer
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 p-3 bg-white rounded-xl border border-slate-100">
                    <div className="font-bold text-blue-600 text-lg">1</div>
                    <span className="text-slate-600 text-sm">Tu vas recevoir un email de confirmation avec le lien de l'appel</span>
                  </li>
                  <li className="flex items-start gap-4 p-3 bg-white rounded-xl border border-slate-100">
                    <div className="font-bold text-blue-600 text-lg">2</div>
                    <span className="text-slate-600 text-sm">On prend 30 minutes pour discuter de ton projet et comprendre tes besoins</span>
                  </li>
                  <li className="flex items-start gap-4 p-3 bg-white rounded-xl border border-slate-100">
                    <div className="font-bold text-blue-600 text-lg">3</div>
                    <span className="text-slate-600 text-sm">Je te propose des solutions adaptées et on voit si on peut bosser ensemble</span>
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
                  <span className="text-3xl">📞</span>
                  Pourquoi cet appel ?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-white rounded-xl border border-slate-100 flex items-center justify-center text-2xl shadow-sm text-blue-600 group-hover:scale-110 transition-transform">🎯</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1 text-lg">On comprend ton contexte</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">Pas de solution générique. On discute de ta situation, tes objectifs, tes défis.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-white rounded-xl border border-slate-100 flex items-center justify-center text-2xl shadow-sm text-blue-600 group-hover:scale-110 transition-transform">💡</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1 text-lg">On te propose la meilleure approche</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">Selon ton budget et tes délais, on explore les options qui te correspondent.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-white rounded-xl border border-slate-100 flex items-center justify-center text-2xl shadow-sm text-blue-600 group-hover:scale-110 transition-transform">✨</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1 text-lg">Sans pression, sans engagement</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">C'est un appel de découverte. Pas d'obligation d'acheter. Juste du conseil honnête.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-white rounded-xl border border-slate-100 flex items-center justify-center text-2xl shadow-sm text-blue-600 group-hover:scale-110 transition-transform">⏱️</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1 text-lg">Seulement 30 minutes</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">Pas de réunion interminable. Direct au but. Utile ou remboursé (c'est gratuit 😉).</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl shadow-slate-200/50 border border-slate-100 animate-fade-in-right relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">
                      Ton nom *
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
                      Ton email *
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

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">
                      Ton téléphone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-medium text-slate-900 placeholder:text-slate-400"
                      placeholder="+33 6 XX XX XX XX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">
                      Ton entreprise / projet
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-medium text-slate-900 placeholder:text-slate-400"
                      placeholder="Ma super idée"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">
                    Comment je peux t'aider ? *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none font-medium text-slate-900 placeholder:text-slate-400"
                    placeholder="Ex: Je veux créer un site vitrine, j'ai un budget de 500€, j'ai besoin que ce soit fait rapidement..."
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
                      Réservation en cours...
                    </>
                  ) : (
                    <>
                      <span>Réserver mon appel gratuit</span>
                      <span className="group-hover:translate-x-1 transition-transform">📅</span>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-400 mt-4 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  30 minutes • Gratuit • Sans engagement
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}
