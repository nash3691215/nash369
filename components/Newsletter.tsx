'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // This will be configured with the actual webhook URL
    const formData = new FormData()
    formData.append('email', email)
    formData.append('type', 'newsletter')

    try {
      // Replace with actual webhook URL
      const response = await fetch('[WEBHOOK_URL]', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setSubmitted(true)
        setEmail('')
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.log('Form submission (webhook will be configured later)')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-20 px-6 bg-slate-800/50">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="glass p-12 rounded-2xl text-center border border-slate-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Mail className="w-12 h-12 text-orange-500 mx-auto mb-6" />

          <h2 className="text-3xl font-bold font-display text-slate-100 mb-4">
            Reçois mes meilleures stratégies
          </h2>

          <p className="text-slate-400 mb-8">
            Rejoins 500+ entrepreneurs. 1 email par semaine. Zéro spam.
          </p>

          {submitted ? (
            <motion.div
              className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ✓ Merci ! Tu vas recevoir un email de confirmation.
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Ton email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-orange-500 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-orange-500 hover:bg-orange-600 disabled:bg-slate-600 text-slate-900 px-6 py-3 rounded-lg font-semibold transition"
                >
                  {loading ? 'Inscription...' : "S'inscrire"}
                </button>
              </div>
              <p className="text-xs text-slate-500">
                Nous respectons ta vie privée. Désinscription en 1 clic.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
