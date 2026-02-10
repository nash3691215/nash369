'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, Twitter } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    budget: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const formDataObj = new FormData()
    Object.entries(formData).forEach(([key, value]) => {
      formDataObj.append(key, value)
    })

    try {
      // Replace with actual webhook URL
      const response = await fetch('[WEBHOOK_URL]', {
        method: 'POST',
        body: formDataObj,
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', message: '', budget: '' })
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.log('Form submission (webhook will be configured later)')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold font-display text-center mb-4 text-slate-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Parlons de ton projet
        </motion.h2>
        <motion.p
          className="text-center text-slate-400 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Remplis le formulaire ou contacte-moi directement. Je te réponds dans les 24h.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass p-6 rounded-xl">
              <Mail className="w-6 h-6 text-orange-500 mb-3" />
              <p className="text-slate-400 text-sm mb-1">Email</p>
              <p className="text-slate-300">contact@nash369.com</p>
            </div>

            <div className="glass p-6 rounded-xl">
              <Phone className="w-6 h-6 text-blue-600 mb-3" />
              <p className="text-slate-400 text-sm mb-1">Support</p>
              <p className="text-slate-300">24/7 via formulaire</p>
            </div>

            <div className="glass p-6 rounded-xl">
              <MapPin className="w-6 h-6 text-violet-600 mb-3" />
              <p className="text-slate-400 text-sm mb-1">Service</p>
              <p className="text-slate-300">France entière</p>
            </div>

            <div className="glass p-6 rounded-xl">
              <Twitter className="w-6 h-6 text-blue-400 mb-3" />
              <p className="text-slate-400 text-sm mb-1">Communauté</p>
              <p className="text-slate-300">@nash369_</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="md:col-span-2 glass p-8 rounded-xl space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <motion.div
                className="p-6 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                ✓ Message envoyé avec succès ! Je te contacte sous 24h.
              </motion.div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Ton nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-orange-500 focus:outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Ton email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-orange-500 focus:outline-none"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Ton téléphone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-orange-500 focus:outline-none"
                  />
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 focus:border-orange-500 focus:outline-none"
                  >
                    <option value="">Budget estimé</option>
                    <option value="< 1000">Moins de 1 000€</option>
                    <option value="1000-5000">1 000€ - 5 000€</option>
                    <option value="5000-10000">5 000€ - 10 000€</option>
                    <option value="> 10000">Plus de 10 000€</option>
                  </select>
                </div>

                <textarea
                  name="message"
                  placeholder="Dis-moi tout. Quel est ton projet ? Tes défis ?"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-orange-500 focus:outline-none resize-none"
                ></textarea>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-slate-600 text-slate-900 py-3 rounded-lg font-semibold transition"
                >
                  {loading ? 'Envoi en cours...' : 'Envoyer mon message'}
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
