'use client'

import Link from 'next/link'
import products from '@/data/products.json'

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
                className="px-3 md:px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all"
              >
                Accueil
              </Link>
              <a
                href="#services"
                className="px-3 md:px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all"
              >
                Services
              </a>
              <a
                href="#formations"
                className="px-3 md:px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all"
              >
                Formations
              </a>
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

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-gray-50 via-amber-50/30 to-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Badge animé */}
          <div className="inline-block mb-6 animate-bounce">
            <div className="px-4 py-2 bg-gradient-to-r from-amber-100 to-amber-50 border border-amber-200 rounded-full">
              <span className="text-sm font-bold bg-gradient-to-r from-amber-600 to-amber-800 text-transparent bg-clip-text">
                ✨ Build systems. Not noise.
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-gray-900 via-amber-900 to-gray-800 text-transparent bg-clip-text animate-fade-in">
            Nash369
          </h1>

          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-6 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Je transforme des créateurs de contenu en entrepreneurs rentables.
          </p>

          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Sites e-commerce clés en main, automatisations de vente, formations pour construire toi-même.<br />
            Stack moderne gratuite (Next.js, Stripe, Vercel) + IA = systèmes qui tournent en 24h sans abonnements mensuels.
          </p>

          {/* Stats avec effet doré */}
          <div className="flex justify-center gap-8 flex-wrap animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="group">
              <div className="px-6 py-3 bg-gradient-to-br from-amber-50 to-white border border-amber-200/50 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105">
                <span className="text-2xl font-black bg-gradient-to-r from-amber-600 to-amber-800 text-transparent bg-clip-text">300+</span>
                <span className="text-sm text-gray-600 ml-2">créateurs</span>
              </div>
            </div>
            <div className="group">
              <div className="px-6 py-3 bg-gradient-to-br from-amber-50 to-white border border-amber-200/50 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105">
                <span className="text-2xl font-black bg-gradient-to-r from-amber-600 to-amber-800 text-transparent bg-clip-text">0€</span>
                <span className="text-sm text-gray-600 ml-2">/mois</span>
              </div>
            </div>
            <div className="group">
              <div className="px-6 py-3 bg-gradient-to-br from-amber-50 to-white border border-amber-200/50 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105">
                <span className="text-2xl font-black bg-gradient-to-r from-amber-600 to-amber-800 text-transparent bg-clip-text">24h</span>
                <span className="text-sm text-gray-600 ml-2">pour lancer</span>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fade-in 0.8s ease-out forwards;
            opacity: 0;
          }
        `}</style>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              L'offre
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Solutions pour micro & petites entreprises qui veulent améliorer leur CA
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Site Vitrine */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:border-gray-900 transition-all hover:shadow-lg">
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
                <p className="text-3xl font-bold text-gray-900 mb-4">À partir de 299€</p>
                <Link
                  href="/devis"
                  className="block text-center bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  Demander un devis →
                </Link>
              </div>
            </div>

            {/* Site E-commerce */}
            <div className="bg-white border-2 border-gray-900 rounded-lg p-8 shadow-lg">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                Site E-commerce
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Site qui vend, encaisse et livre automatiquement. Stripe configuré, email automation, analytics inclus.
              </p>
              <div className="space-y-2 mb-6 text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <span>✓</span>
                  <span>Livraison 5-7 jours</span>
                </div>
                <div className="flex items-start gap-2">
                  <span>✓</span>
                  <span>Paiements automatiques</span>
                </div>
                <div className="flex items-start gap-2">
                  <span>✓</span>
                  <span>Support 30 jours</span>
                </div>
              </div>
              <div className="pt-6 border-t border-gray-200">
                <p className="text-3xl font-bold text-gray-900 mb-4">À partir de 999€</p>
                <Link
                  href="/devis"
                  className="block text-center bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  Demander un devis →
                </Link>
              </div>
            </div>

            {/* Automatisations */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:border-gray-900 transition-all hover:shadow-lg">
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
                <p className="text-3xl font-bold text-gray-900 mb-4">Sur devis</p>
                <Link
                  href="/devis"
                  className="block text-center bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  Demander un devis →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Le Projet Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Le projet
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column - Description */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-gray-900">NASH369 démocratise l'accès aux systèmes de vente automatisés.</strong>
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Notre mission : rendre la tech accessible aux créateurs, sans compétences techniques, sans abonnements mensuels, sans passer des semaines à tout configurer.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Stack moderne gratuite (Next.js, Vercel, Stripe) + IA comme accélérateur = sites qui tournent en 24h.
              </p>
            </div>

            {/* Right Column - Stats & CTA */}
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                  <div className="text-3xl font-black text-gray-900 mb-1">300+</div>
                  <div className="text-xs text-gray-600 font-medium">Créateurs accompagnés</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                  <div className="text-3xl font-black text-gray-900 mb-1">0€</div>
                  <div className="text-xs text-gray-600 font-medium">Coûts mensuels</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                  <div className="text-3xl font-black text-gray-900 mb-1">24h</div>
                  <div className="text-xs text-gray-600 font-medium">Pour lancer</div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Développeur devenu entrepreneur. Je partage les méthodes exactes que j'utilise pour aider les créateurs à construire leur indépendance financière.
                </p>
                <Link
                  href="/a-propos"
                  className="block text-center bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg font-semibold transition-all"
                >
                  En savoir plus sur Nash369 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formations Section */}
      <section id="formations" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Formations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Si tu veux créer toi-même, voici les méthodes exactes que j'utilise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {formations.map((product) => (
              <Link
                key={product.id}
                href={`/produits/${product.id}`}
                className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-900 transition-all hover:shadow-lg"
              >
                <div className="text-4xl mb-4">
                  {product.type === 'ebook' && '💰'}
                  {product.type === 'formation' && '🚀'}
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {product.name}
                </h3>

                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-2 mb-6 text-sm text-gray-700">
                  {product.benefits.slice(0, 3).map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span>✓</span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-gray-200">
                  {product.originalPrice && (
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg text-gray-400 line-through">{product.originalPrice.toFixed(2).replace('.', ',')}€</span>
                      <span className="px-2 py-0.5 bg-gray-900 text-white text-xs font-semibold rounded">-50%</span>
                    </div>
                  )}
                  <p className="text-3xl font-bold text-gray-900 mb-4">
                    {product.price.toFixed(2).replace('.', ',')}€
                  </p>
                  <div className="bg-gray-900 group-hover:bg-gray-800 text-white text-center py-3 rounded-lg font-semibold transition-all">
                    Accéder maintenant →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                NASH369
              </h3>
              <p className="text-gray-600 text-sm">Build systems. Not noise.</p>
            </div>
            <div className="flex gap-8 text-sm">
              <Link href="/a-propos" className="text-gray-600 hover:text-gray-900">
                À propos
              </Link>
              <Link href="/mentions-legales" className="text-gray-600 hover:text-gray-900">
                Mentions légales
              </Link>
              <a href="https://twitter.com/nash3691215" target="_blank" className="text-gray-600 hover:text-gray-900">
                Twitter/X
              </a>
              <a href="mailto:contact@nash369.com" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
            © 2026 NASH369. Tous droits réservés.
          </div>
        </div>
      </footer>
    </main>
  )
}
