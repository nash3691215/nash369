'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 flex items-center justify-center px-6">
      {/* Gradient background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="relative z-10 text-center max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="mb-8"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        >
          <div className="text-6xl">🚀</div>
        </motion.div>

        <h1 className="text-5xl md:text-6xl font-bold font-display text-slate-100 mb-6">
          En cours de mise à jour
        </h1>

        <p className="text-xl text-slate-400 mb-8 leading-relaxed">
          NASH369 se refait une beauté. On revient très bientôt avec des améliorations incroyables.
        </p>

        <div className="glass p-8 rounded-xl border border-slate-700 mb-8">
          <p className="text-slate-300 mb-4">
            ⏱️ <span className="font-semibold">Revenez dans quelques heures</span>
          </p>
          <p className="text-slate-400 text-sm">
            Pendant ce temps, tu peux nous rejoindre sur Twitter pour les dernières news.
          </p>
        </div>

        <motion.a
          href="https://twitter.com/nash369_"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-slate-900 px-8 py-4 rounded-lg font-semibold transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Suivre sur Twitter →
        </motion.a>
      </motion.div>
    </div>
  )
}
