'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function ProblemSolution() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold font-display text-center mb-16 text-slate-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Tu bosses trop. Tes systèmes sont trop manuels.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Problèmes */}
          <motion.div
            className="glass p-8 rounded-xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2" variants={itemVariants}>
              <span className="text-2xl">⚡</span> Le Problème
            </motion.h3>
            <motion.ul className="space-y-4" variants={containerVariants}>
              <motion.li className="flex items-start gap-3 text-slate-300" variants={itemVariants}>
                <span className="text-red-400 mt-1">✕</span>
                <span>Tu bosses 12+ heures par jour</span>
              </motion.li>
              <motion.li className="flex items-start gap-3 text-slate-300" variants={itemVariants}>
                <span className="text-red-400 mt-1">✕</span>
                <span>Tu fais tout manuellement</span>
              </motion.li>
              <motion.li className="flex items-start gap-3 text-slate-300" variants={itemVariants}>
                <span className="text-red-400 mt-1">✕</span>
                <span>Tu perds des clients</span>
              </motion.li>
              <motion.li className="flex items-start gap-3 text-slate-300" variants={itemVariants}>
                <span className="text-red-400 mt-1">✕</span>
                <span>Pas de scalabilité</span>
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Arrow */}
          <div className="hidden md:flex items-center justify-center">
            <div className="text-center">
              <ArrowRight className="w-8 h-8 text-orange-500 mb-2" />
              <p className="text-orange-500 font-semibold">Transformation</p>
              <ArrowRight className="w-8 h-8 text-orange-500 mt-2 rotate-180" />
            </div>
          </div>

          {/* Solutions */}
          <motion.div
            className="glass p-8 rounded-xl border border-green-500/30"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2" variants={itemVariants}>
              <span className="text-2xl">✓</span> La Solution
            </motion.h3>
            <motion.ul className="space-y-4" variants={containerVariants}>
              <motion.li className="flex items-start gap-3 text-slate-300" variants={itemVariants}>
                <span className="text-green-400 mt-1">✓</span>
                <span>Systèmes automatisés qui travaillent pour toi</span>
              </motion.li>
              <motion.li className="flex items-start gap-3 text-slate-300" variants={itemVariants}>
                <span className="text-green-400 mt-1">✓</span>
                <span>IA + N8N font le boulot</span>
              </motion.li>
              <motion.li className="flex items-start gap-3 text-slate-300" variants={itemVariants}>
                <span className="text-green-400 mt-1">✓</span>
                <span>Zéro client perdu</span>
              </motion.li>
              <motion.li className="flex items-start gap-3 text-slate-300" variants={itemVariants}>
                <span className="text-green-400 mt-1">✓</span>
                <span>Revenu 24/7 sans intervention</span>
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>

        {/* Bottom tagline */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400">
            <span className="text-orange-500 font-bold">Build systems. Not noise.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
