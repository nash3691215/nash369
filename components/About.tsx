'use client'

import { motion } from 'framer-motion'

export default function About() {
  const stack = [
    'N8N',
    'Claude AI',
    'ChatGPT',
    'Make',
    'Zapier',
    'Next.js',
    'Supabase',
    'Stripe',
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold font-display text-center mb-16 text-slate-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          À propos
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-orange-500 to-violet-600 flex items-center justify-center text-9xl shadow-xl shadow-orange-500/30">
              🚀
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-100 mb-4">NASH369</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Je crée des systèmes d'automatisation pour entrepreneurs qui veulent bosser moins et gagner plus.
            </p>
            <p className="text-slate-300 mb-6 leading-relaxed">
              N8N + IA + automatisation = tu transformes ton business manuel en machine autonome qui tourne 24/7.
            </p>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Audit gratuit. Setup à 299€. Site web à 199€ (puis 399€/mois). Aucun engagement. Résultats garantis.
            </p>

            <div>
              <p className="text-slate-400 text-sm font-semibold mb-4 uppercase tracking-wider">Stack</p>
              <div className="flex flex-wrap gap-3">
                {stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 glass rounded-lg text-sm text-slate-300 hover:border-orange-500/50 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
