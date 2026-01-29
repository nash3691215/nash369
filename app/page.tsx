'use client'

import Link from 'next/link'
import products from '@/data/products.json'
import Footer from '@/components/Footer'

export default function Home() {
  const formations = products.products.filter(p => p.id !== 'guide-sites-5min' && p.priority !== 'hidden')

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">

      {/* Hero Section - Futuriste */}
      <section className="relative py-16 md:py-32 overflow-hidden">
        {/* Grid futuriste en arrière-plan */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-amber-400/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-6 px-6 py-2.5 glass-dark border border-amber-500/20 rounded-full glow-amber">
              <span className="text-sm font-bold bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-transparent bg-clip-text animate-gradient">
                🎯 Agence digitale pour petits entrepreneurs
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-white via-amber-100 to-white text-transparent bg-clip-text animate-gradient">
              On aide les petits à capter<br />leur vraie valeur
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Sites web, outils sur mesure, automatisations intelligentes.<br />
              <span className="text-amber-400 font-semibold">Tout pour optimiser ton business sans te ruiner.</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column - Description */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Notre mission</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                <strong className="text-white">NASH369</strong> est une agence digitale qui rend la tech accessible aux <span className="text-amber-400 font-semibold">micro-entrepreneurs, PME et micro-influenceurs</span>.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                On crée des solutions simples et efficaces : sites web performants, outils personnalisés, automatisations qui te font gagner du temps. Sans jargon technique, sans abonnements cachés.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Stack moderne (Next.js, Vercel, Stripe) + IA = systèmes qui tournent sans frais mensuels.
              </p>
            </div>

            {/* Right Column - Stats & CTA */}
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="glass-dark border border-amber-500/20 rounded-xl p-4 text-center hover:border-amber-500/40 hover:glow-amber transition-all neon-border">
                  <div className="text-3xl font-black bg-gradient-to-r from-amber-400 to-amber-300 text-transparent bg-clip-text mb-1">50+</div>
                  <div className="text-xs text-gray-400 font-medium">Projets livrés</div>
                </div>
                <div className="glass-dark border border-amber-500/20 rounded-xl p-4 text-center hover:border-amber-500/40 hover:glow-amber transition-all neon-border">
                  <div className="text-3xl font-black bg-gradient-to-r from-amber-400 to-amber-300 text-transparent bg-clip-text mb-1">0€</div>
                  <div className="text-xs text-gray-400 font-medium">Frais mensuels</div>
                </div>
                <div className="glass-dark border border-amber-500/20 rounded-xl p-4 text-center hover:border-amber-500/40 hover:glow-amber transition-all neon-border">
                  <div className="text-3xl font-black bg-gradient-to-r from-amber-400 to-amber-300 text-transparent bg-clip-text mb-1">7j</div>
                  <div className="text-xs text-gray-400 font-medium">Délai moyen</div>
                </div>
              </div>
              <div className="glass-dark border border-amber-500/20 rounded-xl p-6 hover:border-amber-500/30 transition-all">
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Développeur devenu entrepreneur. Je construis des outils digitaux pour aider les petits à grandir sans se faire plumer par les gros.
                </p>
                <Link
                  href="/devis"
                  className="block text-center px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-gray-900 rounded-lg font-bold transition-all glow-amber-strong"
                >
                  Demander un devis gratuit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Futuriste */}
      <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 glass-dark border border-amber-500/20 rounded-full">
              <span className="text-sm font-bold bg-gradient-to-r from-amber-400 to-amber-300 text-transparent bg-clip-text">
                SERVICES
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 bg-gradient-to-r from-white via-amber-100 to-white text-transparent bg-clip-text">
              Nos services sur mesure
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Solutions digitales adaptées à ton budget et tes besoins. <span className="text-amber-400">Tarifs sur devis uniquement.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Site Vitrine */}
            <div className="glass-dark border border-amber-500/20 rounded-xl p-8 hover:border-amber-500/40 transition-all hover:glow-amber neon-border group">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                Site Vitrine
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Site professionnel qui génère des leads. Design moderne, formulaires opérationnels, Google Maps intégré.
              </p>
              <div className="space-y-2 mb-6 text-sm text-gray-300">
                <div className="flex items-start gap-2">
                  <span className="text-amber-400">✓</span>
                  <span>Livraison 48-72h</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-400">✓</span>
                  <span>0€/mois d'hébergement</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-400">✓</span>
                  <span>Formation incluse</span>
                </div>
              </div>
              <div className="pt-6 border-t border-amber-500/20">
                <Link
                  href="/devis"
                  className="block text-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-gray-900 py-3 rounded-lg font-bold transition-all transform hover:scale-105 glow-amber"
                >
                  Demander un devis
                </Link>
              </div>
            </div>

            {/* Site E-commerce - Featured */}
            <div className="glass-dark border-2 border-amber-500/40 rounded-xl p-8 glow-amber-strong relative overflow-hidden group">
              <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 text-xs font-bold rounded-full shadow-md">
                POPULAIRE
              </div>
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                Site E-commerce
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Site qui vend, encaisse et livre automatiquement. Stripe configuré, email automation, analytics inclus.
              </p>
              <div className="space-y-2 mb-6 text-sm text-gray-300">
                <div className="flex items-start gap-2">
                  <span className="text-amber-400">✓</span>
                  <span>Livraison 5-7 jours</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-400">✓</span>
                  <span>Paiements automatiques</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-400">✓</span>
                  <span>Support 30 jours</span>
                </div>
              </div>
              <div className="pt-6 border-t border-amber-500/30">
                <Link
                  href="/devis"
                  className="block text-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-gray-900 py-3 rounded-lg font-bold transition-all transform hover:scale-105 glow-amber"
                >
                  Demander un devis
                </Link>
              </div>
            </div>

            {/* Automatisations */}
            <div className="glass-dark border border-amber-500/20 rounded-xl p-8 hover:border-amber-500/40 transition-all hover:glow-amber neon-border group">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                Automatisations
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Workflows personnalisés pour récupérer du temps. Email automation, lead scoring, sync data entre outils.
              </p>
              <div className="space-y-2 mb-6 text-sm text-gray-300">
                <div className="flex items-start gap-2">
                  <span className="text-amber-400">✓</span>
                  <span>Audit gratuit</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-400">✓</span>
                  <span>ROI calculé avant</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-400">✓</span>
                  <span>Maintenance incluse</span>
                </div>
              </div>
              <div className="pt-6 border-t border-amber-500/20">
                <Link
                  href="/devis"
                  className="block text-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-gray-900 py-3 rounded-lg font-bold transition-all transform hover:scale-105 glow-amber"
                >
                  Demander un devis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </main>
  )
}
