import Link from 'next/link'
import products from '@/data/products.json'
import Header from '@/components/Header'

export default function Home() {
  const formations = products.products.filter(p => p.id !== 'guide-sites-5min' && p.priority !== 'hidden')

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              J'aide les créateurs à transformer<br />
              <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 text-transparent bg-clip-text">
                leur audience en revenus
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed">
              Sites, automatisations & systèmes de vente.
            </p>

            <p className="text-lg text-gray-400 mb-12">
              Pas de bruit. Juste du levier.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#services"
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl"
              >
                Voir mes services
              </a>
              <a
                href="#formations"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white/30 rounded-xl font-bold text-lg transition-all"
              >
                Formations
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-white/60 text-sm">↓ Systèmes en public</div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
              Ce que je crée pour <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 text-transparent bg-clip-text">tes clients</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Solutions complètes pour micro & petites entreprises qui veulent améliorer leur CA
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {/* Service 1 */}
            <div className="bg-white border-2 border-gray-200 hover:border-indigo-500 rounded-2xl p-8 transition-all hover:shadow-2xl group">
              <div className="text-5xl mb-6">🌐</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-indigo-600">
                Sites Vitrines
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Site professionnel qui génère des leads. Design moderne, formulaires opérationnels, Google Maps intégré.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-green-500">✓</span>
                  <span>Livraison 48-72h</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-green-500">✓</span>
                  <span>0€/mois d'hébergement</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-green-500">✓</span>
                  <span>Formation incluse</span>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-3xl font-black text-gray-900 mb-2">À partir de 299€</p>
                <Link
                  href="/devis"
                  className="block text-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white py-3 rounded-xl font-bold transition-all"
                >
                  Demander un devis →
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white border-2 border-indigo-500 rounded-2xl p-8 transition-all shadow-2xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                ⭐ PLUS DEMANDÉ
              </div>
              <div className="text-5xl mb-6">🛒</div>
              <h3 className="text-2xl font-bold mb-4 text-indigo-600">
                Sites E-commerce
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Site qui vend, encaisse et livre automatiquement. Stripe configuré, email automation, analytics inclus.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-green-500">✓</span>
                  <span>Livraison 5-7 jours</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-green-500">✓</span>
                  <span>Paiements automatiques</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-green-500">✓</span>
                  <span>Support 30 jours</span>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-3xl font-black text-indigo-600 mb-2">À partir de 999€</p>
                <Link
                  href="/devis"
                  className="block text-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white py-3 rounded-xl font-bold transition-all"
                >
                  Demander un devis →
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white border-2 border-gray-200 hover:border-indigo-500 rounded-2xl p-8 transition-all hover:shadow-2xl group">
              <div className="text-5xl mb-6">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-indigo-600">
                Automatisations
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Workflows personnalisés pour récupérer du temps. Email automation, lead scoring, sync data entre outils.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-green-500">✓</span>
                  <span>Audit gratuit</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-green-500">✓</span>
                  <span>ROI calculé avant</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-green-500">✓</span>
                  <span>Maintenance incluse</span>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-3xl font-black text-gray-900 mb-2">Sur devis</p>
                <Link
                  href="/devis"
                  className="block text-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white py-3 rounded-xl font-bold transition-all"
                >
                  Demander un devis →
                </Link>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-3xl mx-auto mt-16 text-center bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border-2 border-indigo-200">
            <p className="text-lg text-gray-700 mb-4">
              💡 <strong>Besoin de quelque chose de spécifique?</strong>
            </p>
            <p className="text-gray-600 mb-6">
              Je peux créer n'importe quel système pour améliorer ton CA. Chatbots, landing pages, CRM custom... Explique-moi ton besoin.
            </p>
            <Link
              href="/devis"
              className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Discuter de mon projet →
            </Link>
          </div>
        </div>
      </section>

      {/* Formations Section */}
      <section id="formations" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
              Formations <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 text-transparent bg-clip-text">pour apprendre</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Si tu veux créer toi-même, voici les méthodes exactes que j'utilise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {formations.map((product) => (
              <Link
                key={product.id}
                href={`/produits/${product.id}`}
                className="group relative bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
              >
                {product.price >= 40 && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    ⭐ BEST SELLER
                  </div>
                )}

                <div className="text-4xl md:text-5xl mb-4">
                  {product.type === 'ebook' && '💰'}
                  {product.type === 'formation' && '🚀'}
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {product.name}
                </h3>

                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-2 mb-6">
                  {product.benefits.slice(0, 3).map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="mb-4">
                    {product.originalPrice && (
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg text-gray-400 line-through">{product.originalPrice.toFixed(2).replace('.', ',')}€</span>
                        <span className="px-2 py-0.5 bg-red-500 text-white text-xs font-bold rounded">-50%</span>
                      </div>
                    )}
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-3xl md:text-4xl font-black bg-gradient-to-r from-indigo-600 to-emerald-600 text-transparent bg-clip-text">
                        {product.price.toFixed(2).replace('.', ',')}€
                      </span>
                    </div>
                    <p className="text-xs text-green-600 font-semibold">💳 Paiement sécurisé • Accès immédiat</p>
                  </div>

                  <div className="bg-gradient-to-r from-indigo-600 to-emerald-600 text-white text-center py-3 px-4 rounded-xl font-bold group-hover:from-indigo-500 group-hover:to-emerald-500 transition-all shadow-lg">
                    <div className="flex items-center justify-center gap-2">
                      <span>Accéder maintenant</span>
                      <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">
                NASH<span className="bg-gradient-to-r from-indigo-400 to-emerald-400 text-transparent bg-clip-text">369</span>
              </h3>
              <p className="text-gray-400">Construis ton système. Vends en automatique.</p>
            </div>
            <div className="flex gap-8">
              <Link
                href="/a-propos"
                className="text-gray-400 hover:text-indigo-400 transition-colors font-medium"
              >
                À propos
              </Link>
              <Link
                href="/mentions-legales"
                className="text-gray-400 hover:text-indigo-400 transition-colors font-medium"
              >
                Mentions légales
              </Link>
              <a
                href="https://twitter.com/nash3691215"
                target="_blank"
                className="text-gray-400 hover:text-indigo-400 transition-colors font-medium"
              >
                Twitter/X
              </a>
              <a
                href="mailto:contact@nash369.com"
                className="text-gray-400 hover:text-indigo-400 transition-colors font-medium"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            © 2026 NASH369. Tous droits réservés.
          </div>
        </div>
      </footer>
    </main>
  )
}
