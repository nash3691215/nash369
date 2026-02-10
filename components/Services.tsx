'use client'

import { motion } from 'framer-motion'
import { Zap, Settings, Globe } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Zap,
      title: 'Audit Automatisation',
      description: 'Analyse complète de tes processus. Je te dis exactement où tu perds du temps et comment les automatiser.',
      features: ['Rapport détaillé', 'Recommandations IA', 'Plan d\'action'],
      price: 'GRATUIT',
      color: 'from-orange-500 to-orange-600',
      cta: 'Réserve maintenant',
    },
    {
      icon: Settings,
      title: 'Setup N8N Complet',
      description: 'Je construis ton système d\'automatisation complet: réseaux sociaux, emails, facturation, et plus. Tout automatisé et prêt à tourner.',
      fullDescription: 'Configuration complète de ton système N8N avec tous tes processus automatisés. Je mets en place les workflows pour tes réseaux sociaux (posts schedulés, commentaires auto), emails (newsletter, relances clients), facturation automatique, leads nurturing, et tout ce qui te prend du temps actuellement.',
      features: [
        'Audit + Architecture custom',
        'Automatisation réseaux sociaux',
        'Automation emails & newsletters',
        'Système de facturation auto',
        'Leads nurturing workflow',
        'CRM integration',
        'Formation complète',
        'Support 3 mois inclus',
      ],
      price: 'À partir de',
      priceAmount: '299€',
      color: 'from-blue-500 to-blue-600',
      cta: 'Réserve une consultation',
    },
    {
      icon: Globe,
      title: 'Création Site Web',
      description: 'Je crée ton site web complet. Design moderne, responsive, et optimisé pour vendre. Prêt en 30 jours.',
      fullDescription: 'Je crée ton site web professionnel de A à Z. Audit du besoin, design personnalisé, intégration avec tes systèmes (email, paiement, forms), et optimisation SEO. Ton site est terminé en 30 jours et prêt à générer des leads et des ventes.',
      features: [
        'Audit + stratégie site',
        'Design personnalisé modern',
        'Responsive mobile-first',
        'Intégration paiement Stripe',
        'Formulaires + webhooks',
        'SEO optimization',
        'SSL + domaine inclus',
        'Formation + support 3 mois',
      ],
      price: '30 jours',
      priceAmount: '199€',
      priceAfter: 'Après: 399€/mois',
      color: 'from-violet-500 to-violet-600',
      cta: 'Lancer mon site',
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="py-20 px-6 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold font-display text-center mb-4 text-slate-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Mes Services
        </motion.h2>
        <motion.p
          className="text-center text-slate-400 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Commence par un audit gratuit. Ensuite, je construis ton système complet.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.div
                key={idx}
                className="glass p-8 rounded-xl hover:border-orange-500/50 transition border border-slate-700 hover:shadow-lg hover:shadow-orange-500/10 group"
                variants={itemVariants}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-slate-100 mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-6 text-sm">{service.description}</p>

                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="text-slate-400 text-sm flex items-center gap-2">
                      <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">{service.price}</p>
                  <p className="text-2xl font-bold text-slate-100">{service.priceAmount || service.price}</p>
                  {service.priceAfter && <p className="text-slate-400 text-xs mt-1">{service.priceAfter}</p>}
                </div>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-slate-900 py-3 rounded-lg font-semibold transition"
                >
                  {service.cta}
                </button>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
