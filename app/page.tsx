'use client'

import Link from 'next/link'
import products from '@/data/products.json'
import Footer from '@/components/Footer'

export default function Home() {
  const formations = products.products.filter(p => p.id !== 'guide-sites-5min' && p.priority !== 'hidden')

  return (
    <main className="min-h-screen bg-gray-950">
      {/* Futuristic Header */}
      <header className="sticky top-0 z-50 glass border-b border-amber-500/10 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo futuriste */}
            <Link href="/" className="group flex items-center gap-2">
              <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-white via-amber-100 to-white text-transparent bg-clip-text transition-all group-hover:scale-105 animate-gradient">
                NASH369
              </div>
              <span className="hidden md:inline-block px-2 py-1 glass border border-amber-500/30 rounded text-xs font-bold text-amber-400">
                PRO
              </span>
            </Link>

            {/* Navigation futuriste */}
            <nav className="flex items-center gap-2 md:gap-4">
              <Link
                href="/"
                className="px-3 md:px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              >
                Accueil
              </Link>
              <a
                href="#services"
                className="px-3 md:px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              >
                Services
              </a>
              <a
                href="#formations"
                className="px-3 md:px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              >
                Formations
              </a>
              <Link
                href="/a-propos"
                className="hidden md:block px-3 md:px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              >
                À propos
              </Link>
              <Link
                href="/devis"
                className="px-4 md:px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-gray-900 text-sm font-bold rounded-lg transition-all transform hover:scale-105 glow-amber"
              >
                Devis gratuit
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - Futuristic */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
        {/* Grid futuriste en arrière-plan */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-amber-400/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Badge futuriste */}
          <div className="inline-block mb-8 animate-fade-in">
            <div className="px-6 py-2.5 glass border border-amber-500/20 rounded-full glow-amber">
              <span className="text-sm font-bold bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-transparent bg-clip-text animate-gradient">
                ⚡ Pour créateurs & micro-entrepreneurs
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="bg-gradient-to-r from-white via-amber-100 to-white text-transparent bg-clip-text animate-gradient">
              Nash369
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4 leading-relaxed font-medium animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Transforme ton audience en revenus
          </p>

          <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Sites e-commerce automatisés · Formations pratiques · Stack moderne 100% gratuite<br />
            <span className="text-amber-400 font-semibold">Pour créateurs, influenceurs et petits entrepreneurs du web</span>
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a
              href="#formations"
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-gray-900 rounded-xl font-bold text-lg transition-all transform hover:scale-105 glow-amber-strong"
            >
              Voir les formations →
            </a>
            <Link
              href="/devis"
              className="px-8 py-4 glass border border-amber-500/30 hover:border-amber-500/50 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105"
            >
              Devis gratuit
            </Link>
          </div>

          {/* Stats futuristes */}
          <div className="flex justify-center gap-6 md:gap-12 flex-wrap animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="group">
              <div className="px-8 py-4 glass border border-amber-500/20 rounded-xl hover:border-amber-500/40 transition-all hover:glow-amber neon-border">
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-amber-400 to-amber-300 text-transparent bg-clip-text mb-1">300+</div>
                <div className="text-sm text-gray-400 font-medium">Créateurs accompagnés</div>
              </div>
            </div>
            <div className="group">
              <div className="px-8 py-4 glass border border-amber-500/20 rounded-xl hover:border-amber-500/40 transition-all hover:glow-amber neon-border">
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-amber-400 to-amber-300 text-transparent bg-clip-text mb-1">0€</div>
                <div className="text-sm text-gray-400 font-medium">Coûts mensuels</div>
              </div>
            </div>
            <div className="group">
              <div className="px-8 py-4 glass border border-amber-500/20 rounded-xl hover:border-amber-500/40 transition-all hover:glow-amber neon-border">
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-amber-400 to-amber-300 text-transparent bg-clip-text mb-1">24h</div>
                <div className="text-sm text-gray-400 font-medium">Pour lancer ton site</div>
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

      {/* Services Section - Modernisé */}
      <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 glass border border-amber-500/20 rounded-full">
              <span className="text-sm font-bold bg-gradient-to-r from-amber-400 to-amber-300 text-transparent bg-clip-text">
                SERVICES
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 bg-gradient-to-r from-white via-amber-100 to-white text-transparent bg-clip-text">
              L'offre clés en main
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Pour créateurs de contenu et micro-entrepreneurs qui veulent monétiser leur audience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Site Vitrine */}
            <div className="glass border border-amber-500/20 rounded-xl p-8 hover:border-amber-500/40 transition-all hover:glow-amber neon-border group">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                Site Vitrine
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Site professionnel qui génère des leads. Design moderne, formulaires opérationnels, Google Maps intégré.
              </p>
              <div className="space-y-2 mb-6 text-sm text-gray-300">
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
              <div className="pt-6 border-t border-amber-500/20">
                <p className="text-3xl font-bold text-white mb-4">À partir de 299€</p>
                <Link
                  href="/devis"
                  className="block text-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-gray-900 py-3 rounded-lg font-bold transition-all transform hover:scale-105 glow-amber"
                >
                  Demander un devis →
                </Link>
              </div>
            </div>

            {/* Site E-commerce - Featured */}
            <div className="glass border-2 border-amber-500/40 rounded-xl p-8 glow-amber-strong relative overflow-hidden group">
              <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 text-xs font-bold rounded-full">
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
                <p className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-amber-300 text-transparent bg-clip-text mb-4">À partir de 999€</p>
                <Link
                  href="/devis"
                  className="block text-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-gray-900 py-3 rounded-lg font-bold transition-all transform hover:scale-105 glow-amber"
                >
                  Demander un devis →
                </Link>
              </div>
            </div>

            {/* Automatisations */}
            <div className="glass border border-amber-500/20 rounded-xl p-8 hover:border-amber-500/40 transition-all hover:glow-amber neon-border group">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                Automatisations
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Workflows personnalisés pour récupérer du temps. Email automation, lead scoring, sync data entre outils.
              </p>
              <div className="space-y-2 mb-6 text-sm text-gray-300">
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
              <div className="pt-6 border-t border-amber-500/20">
                <p className="text-3xl font-bold text-white mb-4">Sur devis</p>
                <Link
                  href="/devis"
                  className="block text-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-gray-900 py-3 rounded-lg font-bold transition-all transform hover:scale-105 glow-amber"
                >
                  Demander un devis →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Le Projet Section - Modernisé */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 glass border border-amber-500/20 rounded-full">
              <span className="text-sm font-bold bg-gradient-to-r from-amber-400 to-amber-300 text-transparent bg-clip-text">
                LE PROJET
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white via-amber-100 to-white text-transparent bg-clip-text">
              Pour créateurs & entrepreneurs du web
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column - Description */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                <strong className="text-white">NASH369 démocratise l'accès aux systèmes de vente automatisés.</strong>
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Notre mission : rendre la tech accessible aux <span className="text-amber-400 font-semibold">créateurs de contenu, micro-influenceurs et petits entrepreneurs</span>, sans compétences techniques, sans abonnements mensuels, sans passer des semaines à tout configurer.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Stack moderne gratuite (Next.js, Vercel, Stripe) + IA comme accélérateur = sites qui tournent en 24h.
              </p>
            </div>

            {/* Right Column - Stats & CTA */}
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="glass border border-amber-500/20 rounded-lg p-4 text-center hover:border-amber-500/40 transition-all">
                  <div className="text-3xl font-black bg-gradient-to-r from-amber-400 to-amber-300 text-transparent bg-clip-text mb-1">300+</div>
                  <div className="text-xs text-gray-400 font-medium">Créateurs accompagnés</div>
                </div>
                <div className="glass border border-amber-500/20 rounded-lg p-4 text-center hover:border-amber-500/40 transition-all">
                  <div className="text-3xl font-black bg-gradient-to-r from-amber-400 to-amber-300 text-transparent bg-clip-text mb-1">0€</div>
                  <div className="text-xs text-gray-400 font-medium">Coûts mensuels</div>
                </div>
                <div className="glass border border-amber-500/20 rounded-lg p-4 text-center hover:border-amber-500/40 transition-all">
                  <div className="text-3xl font-black bg-gradient-to-r from-amber-400 to-amber-300 text-transparent bg-clip-text mb-1">24h</div>
                  <div className="text-xs text-gray-400 font-medium">Pour lancer</div>
                </div>
              </div>
              <div className="glass border border-amber-500/20 rounded-xl p-6">
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Développeur devenu entrepreneur. Je partage les méthodes exactes que j'utilise pour aider les créateurs à construire leur indépendance financière.
                </p>
                <Link
                  href="/a-propos"
                  className="block text-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-gray-900 py-3 rounded-lg font-bold transition-all glow-amber"
                >
                  En savoir plus sur Nash369 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formations Section - Futuriste */}
      <section id="formations" className="py-16 md:py-24 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 glass border border-amber-500/20 rounded-full">
              <span className="text-sm font-bold bg-gradient-to-r from-amber-400 to-amber-300 text-transparent bg-clip-text">
                FORMATIONS
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 bg-gradient-to-r from-white via-amber-100 to-white text-transparent bg-clip-text">
              Construis toi-même ton système
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Les méthodes exactes pour monétiser ton audience sans coder
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {formations.map((product) => (
              <Link
                key={product.id}
                href={`/produits/${product.id}`}
                className="group glass border border-amber-500/20 rounded-xl p-6 hover:border-amber-500/40 transition-all hover:glow-amber neon-border"
              >
                <div className="text-4xl mb-4">
                  {product.type === 'ebook' && '💰'}
                  {product.type === 'formation' && '🚀'}
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">
                  {product.name}
                </h3>

                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-2 mb-6 text-sm text-gray-300">
                  {product.benefits.slice(0, 3).map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-amber-400">✓</span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-amber-500/20">
                  {product.originalPrice && (
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg text-gray-500 line-through">{product.originalPrice.toFixed(2).replace('.', ',')}€</span>
                      <span className="px-2 py-0.5 bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 text-xs font-bold rounded">-50%</span>
                    </div>
                  )}
                  <p className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-amber-300 text-transparent bg-clip-text mb-4">
                    {product.price.toFixed(2).replace('.', ',')}€
                  </p>
                  <div className="bg-gradient-to-r from-amber-500 to-amber-600 group-hover:from-amber-400 group-hover:to-amber-500 text-gray-900 text-center py-3 rounded-lg font-bold transition-all glow-amber">
                    Accéder maintenant →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
