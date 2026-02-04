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
    message: '',
    preferredDate: '',
    preferredTime: '',
    preferredContact: 'phone'
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  // Générer les dates disponibles (7 prochains jours, en excluant les dimanches)
  const getAvailableDates = () => {
    const dates = []
    const today = new Date()
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today)
      date.setDate(date.getDate() + i)
      if (date.getDay() !== 0) { // Exclure les dimanches
        dates.push(date)
      }
      if (dates.length >= 7) break
    }
    return dates
  }

  const availableDates = getAvailableDates()
  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
  ]

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
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Appel réservé ! 🎉</h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Parfait ! On se parle <strong>{formData.preferredDate ? new Date(formData.preferredDate).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' }) : 'bientôt'}</strong> à <strong>{formData.preferredTime || 'l\'heure convenue'}</strong>.
              </p>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 mb-8 text-left">
                <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                  Récapitulatif
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-100">
                    <span className="text-slate-600">📅 Date</span>
                    <span className="font-bold text-slate-900">{formData.preferredDate ? new Date(formData.preferredDate).toLocaleDateString('fr-FR') : '-'}</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-100">
                    <span className="text-slate-600">⏰ Heure</span>
                    <span className="font-bold text-slate-900">{formData.preferredTime || '-'}</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-100">
                    <span className="text-slate-600">📞 Contact par</span>
                    <span className="font-bold text-slate-900">
                      {formData.preferredContact === 'phone' && 'Téléphone'}
                      {formData.preferredContact === 'email' && 'Email'}
                      {formData.preferredContact === 'zoom' && 'Zoom'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-100">
                    <span className="text-slate-600">👤 Nom</span>
                    <span className="font-bold text-slate-900">{formData.name}</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 mb-8 text-left">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="text-xl">📧</span>
                  Ce qu'il va se passer
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-4 text-slate-600 text-sm">
                    <span className="font-bold text-blue-600 mt-0.5">1</span>
                    <span>Tu vas recevoir un email de confirmation avec tous les détails</span>
                  </li>
                  <li className="flex items-start gap-4 text-slate-600 text-sm">
                    <span className="font-bold text-blue-600 mt-0.5">2</span>
                    <span>On prend 30 minutes pour discuter de ton projet et tes objectifs</span>
                  </li>
                  <li className="flex items-start gap-4 text-slate-600 text-sm">
                    <span className="font-bold text-blue-600 mt-0.5">3</span>
                    <span>Je te propose une solution adaptée à ta situation</span>
                  </li>
                  <li className="flex items-start gap-4 text-slate-600 text-sm">
                    <span className="font-bold text-blue-600 mt-0.5">4</span>
                    <span>Pas de pression, juste du conseil honnête et sans engagement</span>
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
                      <h3 className="font-bold text-slate-900 mb-1 text-lg">Optimiser tout ton business</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">Pas juste un devis de site. On regarde comment tu vends, comment tu acquiers tes clients et comment gagner plus en travaillant moins.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-white rounded-xl border border-slate-100 flex items-center justify-center text-2xl shadow-sm text-blue-600 group-hover:scale-110 transition-transform">💡</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1 text-lg">Une stratégie sur mesure</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">Analyse de ta situation actuelle, identifier tes goulots, proposer des solutions qui ont fait leurs preuves.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-white rounded-xl border border-slate-100 flex items-center justify-center text-2xl shadow-sm text-blue-600 group-hover:scale-110 transition-transform">🚀</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1 text-lg">Passer à l'action</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">On ne te vend pas de la théorie. Tu repartiras avec un plan d'action concret et réaliste pour ton contexte.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-white rounded-xl border border-slate-100 flex items-center justify-center text-2xl shadow-sm text-blue-600 group-hover:scale-110 transition-transform">⏱️</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1 text-lg">30 minutes, gratuit, sans engagement</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">Direct au but. Si on ne peut pas t'aider, je te le dirai honnêtement. C'est pour toi que je le fais.</p>
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
                    Quand préfères-tu qu'on se parle ? *
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <select
                        required
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-medium text-slate-900"
                      >
                        <option value="">Choisir une date...</option>
                        {availableDates.map((date) => (
                          <option key={date.toISOString()} value={date.toISOString().split('T')[0]}>
                            {date.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' })}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <select
                        required
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-medium text-slate-900"
                      >
                        <option value="">Choisir une heure...</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3 ml-1">
                    Comment préfères-tu être contacté ? *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="contact"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="text-slate-700 font-medium">Par téléphone</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="contact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="text-slate-700 font-medium">Par email</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="contact"
                        value="zoom"
                        checked={formData.preferredContact === 'zoom'}
                        onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="text-slate-700 font-medium">Par vidéo (Zoom)</span>
                    </label>
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
