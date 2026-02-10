'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen pt-20 pb-20 flex items-center justify-center overflow-hidden gradient-mesh">
      {/* Gradient background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold font-display text-slate-100 mb-6 leading-tight">
            Automatise ton business.
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 bg-clip-text text-transparent"> Libère ton temps.</span> Scale tes revenus.
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Je crée des systèmes d'automatisation IA + N8N pour entrepreneurs qui veulent bosser moins et gagner plus.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('services')}
              className="bg-orange-500 hover:bg-orange-600 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition transform hover:scale-105"
            >
              Réserve ton audit gratuit
            </button>
            <button
              onClick={() => scrollToSection('boutique')}
              className="glass px-8 py-4 rounded-lg font-semibold text-lg text-slate-100 hover:bg-slate-700/30 transition"
            >
              Découvre les formations
            </button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-20 grid grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div>
            <p className="text-3xl font-bold text-orange-500">50+</p>
            <p className="text-slate-400 text-sm">Clients automatisés</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-600">10k+</p>
            <p className="text-slate-400 text-sm">Heures économisées</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-violet-600">₹5M+</p>
            <p className="text-slate-400 text-sm">Revenus générés</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
