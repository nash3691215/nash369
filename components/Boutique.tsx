'use client'

import { motion } from 'framer-motion'
import { BookOpen, Zap } from 'lucide-react'

export default function Boutique() {
  const products = [
    {
      icon: BookOpen,
      badge: 'BEST-SELLER',
      title: 'Sites Web Express',
      description: 'Créez votre site pro en 5 minutes avec Claude + Hostinger',
      originalPrice: 49,
      price: 9.9,
      features: [
        'Template prêt à l\'emploi',
        'Configuration Claude AI',
        'Hébergement inclus (1 an)',
        'Support email',
      ],
      stripeLink: '[STRIPE_LINK_1]',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: Zap,
      badge: 'NOUVEAU',
      title: 'Automatise Ton Business en 7 Jours',
      description: 'Le guide pratique pour entrepreneurs. De zéro à hero en N8N.',
      originalPrice: 99,
      price: 29,
      features: [
        '30 leçons vidéo',
        'Workflows N8N ready-to-use',
        'Groupe privé Slack',
        'Certification incluse',
      ],
      stripeLink: '[STRIPE_LINK_2]',
      color: 'from-orange-600 to-orange-700',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="boutique" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold font-display text-slate-100 mb-4">
            Apprends à le faire toi-même
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Des formations pratiques pour que tu sois autonome et que ton business tourne tout seul.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product, idx) => {
            const Icon = product.icon
            return (
              <motion.div
                key={idx}
                className={`glass p-8 rounded-xl border border-slate-700 hover:border-orange-500/50 transition overflow-hidden relative group`}
                variants={itemVariants}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition duration-300`}></div>

                {/* Badge */}
                <div className="relative z-10 mb-6">
                  <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-bold rounded-full uppercase">
                    {product.badge}
                  </span>
                </div>

                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${product.color} flex items-center justify-center mb-6`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-100 mb-2">{product.title}</h3>
                  <p className="text-slate-400 mb-6 text-sm">{product.description}</p>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl font-bold text-orange-500">{product.price}€</span>
                      <span className="text-lg text-slate-500 line-through">{product.originalPrice}€</span>
                    </div>
                    {product.price < product.originalPrice && (
                      <p className="text-xs text-green-400 font-semibold">
                        Économise {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="mb-8 space-y-2">
                    {product.features.map((feature, fidx) => (
                      <li key={fidx} className="text-slate-400 text-sm flex items-center gap-2">
                        <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={product.stripeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-orange-500 hover:bg-orange-600 text-slate-900 py-3 rounded-lg font-semibold transition text-center"
                  >
                    Acheter maintenant
                  </a>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Social proof */}
        <motion.div
          className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="text-2xl font-bold text-orange-500">200+</p>
            <p className="text-slate-400 text-sm">Avis Google générés</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-600">50+</p>
            <p className="text-slate-400 text-sm">Entreprises automatisées</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-violet-600">10k+</p>
            <p className="text-slate-400 text-sm">Heures économisées</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
