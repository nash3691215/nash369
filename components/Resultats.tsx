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

      </div>
    </section>
  )
}
