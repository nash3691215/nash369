'use client'

import Link from 'next/link'
import products from '@/data/products.json'
import Footer from '@/components/Footer'

export default function Home() {
  const formations = products.products.filter(p => p.id !== 'guide-sites-5min' && p.priority !== 'hidden')

  return (
    <main className="min-h-screen bg-white">
      {/* Premium Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo avec dégradé doré */}
            <Link href="/" className="group flex items-center gap-2">
              <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-gray-900 via-amber-900 to-gray-800 text-transparent bg-clip-text transition-all group-hover:scale-105">
                NASH369
              </div>
              <span className="hidden md:inline-block px-2 py-1 bg-amber-50 border border-amber-200 rounded text-xs font-bold text-amber-800">
                PRO
              </span>
            </Link>

            {/* Navigation */}
            <nav className="flex items-center gap-2 md:gap-4">
              <Link
                href="/"
                className="px-3 md:px-4 py-2 text-sm font-medium bg-amber-50 text-amber-700 border border-amber-200 rounded-lg transition-all"
              >
                Accueil
              </Link>
              <a
                href="#services"
                className="px-3 md:px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all"
              >
                Services
              </a>
              <Link
                href="/ebooks"
                className="px-3 md:px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all"
              >
                eBooks
              </Link>
              <Link
                href="/a-propos"
                className="hidden md:block px-3 md:px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all"
              >
                À propos
              </Link>
              <Link
                href="/devis"
                className="px-4 md:px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-sm font-bold rounded-lg transition-all transform hover:scale-105 shadow-sm hover:shadow-md"
              >
                Devis gratuit
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - Agence */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-amber-100 to-amber-50 border border-amber-200 rounded-full">
              <span className="text-sm font-bold bg-gradient-to-r from-amber-600 to-amber-800 text-transparent bg-clip-text">
                🎯 Agence digitale pour petits entrepreneurs
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 via-amber-900 to-gray-800 text-transparent bg-clip-text">
              On aide les petits à capter leur vraie valeur
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Sites web, outils sur mesure, automatisations intelligentes.<br />
              Tout pour optimiser ton business sans te ruiner.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column - Description */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Notre mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-gray-900">NASH369</strong> est une agence digitale qui rend la tech accessible aux <span className="text-amber-700 font-semibold">micro-entrepreneurs, PME et micro-influenceurs</span>.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                On crée des solutions simples et efficaces : sites web performants, outils personnalisés, automatisations qui te font gagner du temps. Sans jargon technique, sans abonnements cachés.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Stack moderne (Next.js, Vercel, Stripe) + IA = systèmes qui tournent sans frais mensuels.
              </p>
            </div>

            {/* Right Column - Stats & CTA */}
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-amber-300 hover:shadow-lg transition-all">
                  <div className="text-3xl font-black bg-gradient-to-r from-amber-600 to-amber-800 text-transparent bg-clip-text mb-1">50+</div>
                  <div className="text-xs text-gray-600 font-medium">Projets livrés</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-amber-300 hover:shadow-lg transition-all">
                  <div className="text-3xl font-black bg-gradient-to-r from-amber-600 to-amber-800 text-transparent bg-clip-text mb-1">0€</div>
                  <div className="text-xs text-gray-600 font-medium">Frais mensuels</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-amber-300 hover:shadow-lg transition-all">
                  <div className="text-3xl font-black bg-gradient-to-r from-amber-600 to-amber-800 text-transparent bg-clip-text mb-1">7j</div>
                  <div className="text-xs text-gray-600 font-medium">Délai moyen</div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Développeur devenu entrepreneur. Je construis des outils digitaux pour aider les petits à grandir sans se faire plumer par les gros.
                </p>
                <Link
                  href="/devis"
                  className="block text-center px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-lg font-bold transition-all shadow-md hover:shadow-lg"
                >
                  Demander un devis gratuit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-amber-100 to-amber-50 border border-amber-200 rounded-full">
              <span className="text-sm font-bold bg-gradient-to-r from-amber-600 to-amber-800 text-transparent bg-clip-text">
                SERVICES
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 via-amber-900 to-gray-800 text-transparent bg-clip-text">
              Nos services sur mesure
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Solutions digitales adaptées à ton budget et tes besoins. Tarifs sur devis uniquement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Site Vitrine */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-amber-300 transition-all hover:shadow-xl group">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                Site Vitrine
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Site professionnel qui génère des leads. Design moderne, formulaires opérationnels, Google Maps intégré.
              </p>
              <div className="space-y-2 mb-6 text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <span>✓</span>
                  <span>Livraison 48-72h</span>
                </div>
                <div className="flex items-start gap-2">
                  <span>✓</span>
                  <span>0€/mois d'hébergement</span>
                </div>
                <div className="flex items-start gap-2">
                  <span>✓</span>
                  <span>Formation incluse</span>
                </div>
              </div>
              <div className="pt-6 border-t border-gray-200">
                <Link
                  href="/devis"
                  className="block text-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-3 rounded-lg font-bold transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  Demander un devis
                </Link>
              </div>
            </div>

            {/* Site E-commerce - Featured */}
            <div className="bg-gradient-to-br from-amber-50 to-white border-2 border-amber-300 rounded-xl p-8 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all">
              <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold rounded-full shadow-md">
                POPULAIRE
              </div>
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                Site E-commerce
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Site qui vend, encaisse et livre automatiquement. Stripe configuré, email automation, analytics inclus.
              </p>
              <div className="space-y-2 mb-6 text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <span className="text-amber-600">✓</span>
                  <span>Livraison 5-7 jours</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-600">✓</span>
                  <span>Paiements automatiques</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-600">✓</span>
                  <span>Support 30 jours</span>
                </div>
              </div>
              <div className="pt-6 border-t border-amber-200">
                <Link
                  href="/devis"
                  className="block text-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-3 rounded-lg font-bold transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  Demander un devis
                </Link>
              </div>
            </div>

            {/* Automatisations */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-amber-300 transition-all hover:shadow-xl group">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                Automatisations
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Workflows personnalisés pour récupérer du temps. Email automation, lead scoring, sync data entre outils.
              </p>
              <div className="space-y-2 mb-6 text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <span>✓</span>
                  <span>Audit gratuit</span>
                </div>
                <div className="flex items-start gap-2">
                  <span>✓</span>
                  <span>ROI calculé avant</span>
                </div>
                <div className="flex items-start gap-2">
                  <span>✓</span>
                  <span>Maintenance incluse</span>
                </div>
              </div>
              <div className="pt-6 border-t border-gray-200">
                <Link
                  href="/devis"
                  className="block text-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-3 rounded-lg font-bold transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
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
