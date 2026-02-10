'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Resultats() {
  const [counts, setCounts] = useState({ reviews: 0, companies: 0, hours: 0 })

  useEffect(() => {
    const intervals = [
      setInterval(() => {
        setCounts(prev => ({
          ...prev,
          reviews: Math.min(prev.reviews + 10, 200)
        }))
      }, 30),
      setInterval(() => {
        setCounts(prev => ({
          ...prev,
          companies: Math.min(prev.companies + 2, 50)
        }))
      }, 50),
      setInterval(() => {
        setCounts(prev => ({
          ...prev,
          hours: Math.min(prev.hours + 200, 10000)
        }))
      }, 20),
    ]

    return () => intervals.forEach(clearInterval)
  }, [])

  const testimonials = [
    {
      name: 'Marie Dupont',
      role: 'Restauratrice',
      text: 'J\'ai réduit mon temps administratif de 20h/semaine à 2h. Mon business tourne tout seul maintenant.',
      avatar: '👩‍💼',
    },
    {
      name: 'Pierre Bernard',
      role: 'E-commerce',
      text: 'Après le setup N8N, mes ventes ont augmenté de 40% sans effort supplémentaire. Incroyable !',
      avatar: '👨‍💼',
    },
    {
      name: 'Sophie Martin',
      role: 'Coach digital',
      text: 'Plus besoin de suivre chaque client manuellement. Les workflows font le boulot.',
      avatar: '👩‍🏫',
    },
  ]

  return (
    <section id="resultats" className="py-20 px-6 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        {/* Counters */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div className="text-center glass p-8 rounded-xl">
            <p className="text-5xl font-bold text-orange-500 mb-2">{counts.reviews}+</p>
            <p className="text-slate-400">Avis Google générés</p>
          </motion.div>
          <motion.div className="text-center glass p-8 rounded-xl">
            <p className="text-5xl font-bold text-blue-600 mb-2">{counts.companies}+</p>
            <p className="text-slate-400">Entreprises automatisées</p>
          </motion.div>
          <motion.div className="text-center glass p-8 rounded-xl">
            <p className="text-5xl font-bold text-violet-600 mb-2">{(counts.hours / 1000).toFixed(1)}k+</p>
            <p className="text-slate-400">Heures économisées</p>
          </motion.div>
        </motion.div>

        {/* Testimonials */}
        <motion.h2
          className="text-4xl font-bold font-display text-center mb-16 text-slate-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Ce que disent mes clients
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="glass p-8 rounded-xl border border-slate-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{testimonial.avatar}</span>
                <div>
                  <p className="font-bold text-slate-100">{testimonial.name}</p>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-slate-300 italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
