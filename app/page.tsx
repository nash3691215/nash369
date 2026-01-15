import Link from 'next/link'
import products from '@/data/products.json'

export default function Home() {
  const paidProducts = products.products.filter(p => p.id !== 'prompts')
  const leadMagnet = products.products.find(p => p.id === 'prompts')

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-black"></div>
        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-indigo-600/20 border border-indigo-500/30 rounded-full text-indigo-400 text-sm font-semibold">
              Architecte de systèmes autonomes
            </div>
            <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tight">
              Construis des systèmes qui
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                génèrent du cash
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Pas de bullshit. Juste des frameworks concrets pour automatiser tes revenus et scaler sans cramer.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">+500</div>
                <div className="text-gray-500 text-sm">Entrepreneurs formés</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-500 text-sm">Systèmes autonomes</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">ROI x10</div>
                <div className="text-gray-500 text-sm">En moyenne</div>
              </div>
            </div>

            {/* Lead Magnet CTA */}
            {leadMagnet && (
              <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-1 max-w-2xl mx-auto mb-8 shadow-2xl shadow-indigo-900/50">
                <div className="bg-black rounded-xl p-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="text-4xl">⚡</span>
                    <h3 className="text-2xl md:text-3xl font-bold">Débloque tes premiers {leadMagnet.name}</h3>
                  </div>
                  <p className="text-gray-400 mb-6 text-lg">{leadMagnet.description}</p>
                  <Link
                    href="/prompts"
                    className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-indigo-600/50"
                  >
                    Récupère-les maintenant (Gratuit)
                  </Link>
                  <p className="text-gray-500 text-sm mt-4">✓ Aucune CB requise • ✓ Accès immédiat • ✓ 100% actionnable</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Problème → Solution */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="text-red-500 text-sm font-bold uppercase tracking-wider">Le problème</div>
                <h2 className="text-4xl font-bold leading-tight">
                  Tu bosses 80h/semaine mais ton compte en banque ne suit pas
                </h2>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl mt-1">✗</span>
                    <span>Tu échandes ton temps contre de l'argent (pas scalable)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl mt-1">✗</span>
                    <span>Tu es bloqué dans l'opérationnel au lieu de construire</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl mt-1">✗</span>
                    <span>Tu sais pas par où commencer pour automatiser</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <div className="text-green-400 text-sm font-bold uppercase tracking-wider">La solution</div>
                <h2 className="text-4xl font-bold leading-tight">
                  Construis des systèmes qui tournent sans toi
                </h2>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 text-xl mt-1">✓</span>
                    <span>Automatise ton acquisition, ta vente et ta livraison</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 text-xl mt-1">✓</span>
                    <span>Scale tes revenus sans scaler ton temps</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 text-xl mt-1">✓</span>
                    <span>Des frameworks testés et validés sur le terrain</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produits Premium */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Mes Systèmes Prêts à l'Emploi</h2>
            <p className="text-xl text-gray-400">Choisis ton arme pour générer du cash</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {paidProducts.map((product) => (
              <Link
                key={product.id}
                href={product.type === 'saas' ? product.external_url || '#' : `/produits/${product.id}`}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10">
                  <div className="text-5xl mb-4">
                    {product.type === 'ebook' && '💰'}
                    {product.type === 'formation' && '🚀'}
                    {product.type === 'saas' && '⚡'}
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {product.benefits.slice(0, 3).map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-green-400 mt-0.5">✓</span>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-700">
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
                        {product.price}€
                      </span>
                      {product.price_premium && (
                        <span className="text-gray-500 text-sm">ou {product.price_premium}€/mois</span>
                      )}
                    </div>

                    <div className="inline-flex items-center gap-2 text-indigo-400 font-semibold group-hover:gap-3 transition-all">
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

      {/* Social Proof */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Ils ont lancé leurs systèmes</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center font-bold">M</div>
                  <div>
                    <div className="font-bold">Marc L.</div>
                    <div className="text-gray-500 text-sm">Freelance Dev</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  "J'ai automatisé toute ma prospection. +4.2K€/mois en revenus passifs. Le système tourne 24/7."
                </p>
                <div className="text-green-400 font-bold">ROI: 840%</div>
              </div>

              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center font-bold">S</div>
                  <div>
                    <div className="font-bold">Sarah K.</div>
                    <div className="text-gray-500 text-sm">E-commerce</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  "Le framework Vinted Vision m'a permis de scaler à 15K€/mois. Je travaille 2h/jour max."
                </p>
                <div className="text-green-400 font-bold">15K€/mois</div>
              </div>

              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center font-bold">T</div>
                  <div>
                    <div className="font-bold">Thomas R.</div>
                    <div className="text-gray-500 text-sm">Creator</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  "Évité le burnout grâce au guide. Maintenant je construis sereinement. Game changer total."
                </p>
                <div className="text-green-400 font-bold">Santé mentale sauvée</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-indigo-900 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Prêt à construire ton système ?</h2>
          <p className="text-xl text-indigo-200 mb-12 max-w-2xl mx-auto">
            Rejoins les 500+ entrepreneurs qui ont automatisé leurs revenus
          </p>
          <Link
            href="/prompts"
            className="inline-block bg-white text-indigo-900 px-12 py-6 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
          >
            Commencer maintenant (100% gratuit)
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                NASH<span className="bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">369</span>
              </h3>
              <p className="text-gray-500">Architecte de systèmes autonomes qui génèrent du cash</p>
            </div>
            <div className="flex gap-8">
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
          <div className="mt-8 pt-8 border-t border-gray-900 text-center text-gray-600 text-sm">
            © 2024 NASH369. Tous droits réservés.
          </div>
        </div>
      </footer>
    </main>
  )
}
