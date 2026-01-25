import Link from 'next/link'
import products from '@/data/products.json'

export default function Home() {
  const formations = products.products.filter(p => p.id !== 'guide-sites-5min' && p.priority !== 'hidden')

  return (
    <main className="min-h-screen bg-white">
      {/* Simple Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              NASH369
            </Link>
            <nav className="flex gap-8">
              <a href="#services" className="text-gray-600 hover:text-gray-900 font-medium">
                Services
              </a>
              <a href="#formations" className="text-gray-600 hover:text-gray-900 font-medium">
                Formations
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-gray-900">
            Nash369
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            Build systems. Not noise.
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            J'aide les créateurs à transformer leur audience en revenus.<br />
            Sites, automatisations & systèmes de vente.
          </p>
        </div>
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
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:border-gray-900 transition-all">
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
                  className="block text-center bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg font-semibold transition-all"
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
                  className="block text-center bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg font-semibold transition-all"
                >
                  Demander un devis →
                </Link>
              </div>
            </div>

            {/* Automatisations */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:border-gray-900 transition-all">
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
                  className="block text-center bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg font-semibold transition-all"
                >
                  Demander un devis →
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
