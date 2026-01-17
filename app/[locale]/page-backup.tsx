import Link from 'next/link'
import products from '@/data/products.json'

export default function Home() {
  const paidProducts = products.products.filter(p => p.id !== 'prompts')
  const leadMagnet = products.products.find(p => p.id === 'prompts')

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-indigo-100 border border-indigo-200 rounded-full text-indigo-700 text-sm font-semibold">
              Architecte de systèmes autonomes
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight text-gray-900">
              Construis des systèmes qui
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                génèrent du cash
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Pas de bullshit. Juste des frameworks concrets pour automatiser tes revenus et scaler sans cramer.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto mb-12">
              <div className="text-center p-4 md:p-6 bg-white rounded-xl shadow-sm">
                <div className="text-2xl md:text-4xl font-bold text-indigo-600 mb-1 md:mb-2">+500</div>
                <div className="text-gray-600 text-xs md:text-sm">Entrepreneurs formés</div>
              </div>
              <div className="text-center p-4 md:p-6 bg-white rounded-xl shadow-sm">
                <div className="text-2xl md:text-4xl font-bold text-purple-600 mb-1 md:mb-2">24/7</div>
                <div className="text-gray-600 text-xs md:text-sm">Systèmes autonomes</div>
              </div>
              <div className="text-center p-4 md:p-6 bg-white rounded-xl shadow-sm">
                <div className="text-2xl md:text-4xl font-bold text-pink-600 mb-1 md:mb-2">ROI x10</div>
                <div className="text-gray-600 text-xs md:text-sm">En moyenne</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produits Premium - REPOSITIONNÉ EN HAUT */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-300 rounded-full text-green-700 text-sm font-bold shadow-lg animate-pulse">
              <span className="w-2 h-2 bg-green-600 rounded-full animate-ping"></span>
              <span className="w-2 h-2 bg-green-600 rounded-full absolute"></span>
              🔥 OFFRE LIMITÉE - Plus que quelques places à ce prix
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-gray-900">
              Mes Systèmes <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">Clés en Main</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Choisis ton arme et commence à générer du cash <span className="font-bold text-indigo-600">dès aujourd'hui</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto mb-12">
            {paidProducts.map((product) => (
              <Link
                key={product.id}
                href={product.type === 'saas' ? product.external_url || '#' : `/produits/${product.id}`}
                className="group relative bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl overflow-hidden"
              >
                {/* Badge "Best Seller" pour la formation */}
                {product.price >= 40 && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-20">
                    ⭐ BEST SELLER
                  </div>
                )}

                {/* Badge "Populaire" pour les ebooks */}
                {product.price < 15 && product.type === 'ebook' && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-20">
                    🔥 POPULAIRE
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl mb-4">
                    {product.type === 'ebook' && '💰'}
                    {product.type === 'formation' && '🚀'}
                    {product.type === 'saas' && '⚡'}
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
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-3xl md:text-4xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                          {product.price}€
                        </span>
                        {product.price_premium && (
                          <span className="text-gray-500 text-sm line-through">ou {product.price_premium}€/mois</span>
                        )}
                      </div>
                      <p className="text-xs text-green-600 font-semibold">💳 Paiement sécurisé • Accès immédiat</p>
                    </div>

                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-3 px-4 rounded-xl font-bold group-hover:from-indigo-500 group-hover:to-purple-500 transition-all shadow-lg">
                      <div className="flex items-center justify-center gap-2">
                        <span>Accéder maintenant</span>
                        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Lead Magnet CTA - Après les produits */}
          {leadMagnet && (
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-1 shadow-2xl">
                <div className="bg-white rounded-xl p-6 md:p-10">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-4">
                    <span className="text-4xl md:text-5xl">⚡</span>
                    <h3 className="text-2xl md:text-4xl font-black text-gray-900 text-center md:text-left">
                      Pas encore prêt ? <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">Commence gratuitement</span>
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-8 text-base md:text-xl text-center md:text-left leading-relaxed">
                    {leadMagnet.description} - <span className="font-bold text-indigo-600">100% offerts pour démarrer</span>
                  </p>
                  <div className="text-center">
                    <Link
                      href="/prompts"
                      className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-10 md:px-14 py-5 md:py-6 rounded-xl font-black text-lg md:text-xl transition-all transform hover:scale-105 shadow-2xl shadow-indigo-600/40"
                    >
                      🎁 Télécharger maintenant (GRATUIT)
                    </Link>
                    <p className="text-gray-500 text-sm md:text-base mt-6 flex items-center justify-center gap-6 flex-wrap">
                      <span className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                        <span className="font-semibold">Aucune CB</span>
                      </span>
                      <span className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                        <span className="font-semibold">Accès instantané</span>
                      </span>
                      <span className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                        <span className="font-semibold">Testés & validés</span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Problème → Solution */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-4 md:space-y-6 bg-red-50 border border-red-200 rounded-2xl p-6 md:p-8">
                <div className="text-red-600 text-xs md:text-sm font-bold uppercase tracking-wider">Le problème</div>
                <h2 className="text-2xl md:text-4xl font-bold leading-tight text-gray-900">
                  Tu bosses 80h/semaine mais ton compte en banque ne suit pas
                </h2>
                <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-lg md:text-xl mt-1 flex-shrink-0">✗</span>
                    <span>Tu échanges ton temps contre de l'argent (pas scalable)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-lg md:text-xl mt-1 flex-shrink-0">✗</span>
                    <span>Tu es bloqué dans l'opérationnel au lieu de construire</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-lg md:text-xl mt-1 flex-shrink-0">✗</span>
                    <span>Tu sais pas par où commencer pour automatiser</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 md:space-y-6 bg-green-50 border border-green-200 rounded-2xl p-6 md:p-8">
                <div className="text-green-600 text-xs md:text-sm font-bold uppercase tracking-wider">La solution</div>
                <h2 className="text-2xl md:text-4xl font-bold leading-tight text-gray-900">
                  Construis des systèmes qui tournent sans toi
                </h2>
                <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-lg md:text-xl mt-1 flex-shrink-0">✓</span>
                    <span>Automatise ton acquisition, ta vente et ta livraison</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-lg md:text-xl mt-1 flex-shrink-0">✓</span>
                    <span>Scale tes revenus sans scaler ton temps</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-lg md:text-xl mt-1 flex-shrink-0">✓</span>
                    <span>Des frameworks testés et validés sur le terrain</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Garantie Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 md:p-12 text-center">
              <div className="text-6xl md:text-7xl mb-6">🛡️</div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Garantie Satisfait ou Remboursé <span className="text-green-600">30 jours</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                Si tu n'es pas satisfait à 100%, je te rembourse intégralement. Sans questions. Sans complications.
                <span className="font-bold text-green-600"> C'est aussi simple que ça.</span>
              </p>
              <p className="text-base text-gray-600">
                ✓ Remboursement en 24-48h • ✓ Aucune justification nécessaire • ✓ Tu gardes les bonus
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Ils ont <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">transformé leur vie</span>
              </h2>
              <p className="text-lg text-gray-600">Rejoins les 500+ entrepreneurs qui génèrent du cash en automatique</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white rounded-xl p-8 border-2 border-indigo-100 hover:border-indigo-300 shadow-lg hover:shadow-2xl transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center font-bold text-white text-xl shadow-lg">M</div>
                  <div>
                    <div className="font-bold text-gray-900">Marc L.</div>
                    <div className="text-gray-600 text-sm">Freelance Dev</div>
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed italic">
                  "J'ai automatisé toute ma prospection. <span className="font-bold text-indigo-600">+4.2K€/mois</span> en revenus passifs. Le système tourne 24/7."
                </p>
                <div className="flex items-center gap-2 text-green-600 font-bold bg-green-50 px-3 py-2 rounded-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  <span>ROI: 840%</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-purple-100 hover:border-purple-300 shadow-lg hover:shadow-2xl transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center font-bold text-white text-xl shadow-lg">S</div>
                  <div>
                    <div className="font-bold text-gray-900">Sarah K.</div>
                    <div className="text-gray-600 text-sm">E-commerce</div>
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed italic">
                  "Le framework Vinted Vision m'a permis de scaler à <span className="font-bold text-purple-600">15K€/mois</span>. Je travaille 2h/jour max."
                </p>
                <div className="flex items-center gap-2 text-green-600 font-bold bg-green-50 px-3 py-2 rounded-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  <span>15K€/mois</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-pink-100 hover:border-pink-300 shadow-lg hover:shadow-2xl transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center font-bold text-white text-xl shadow-lg">T</div>
                  <div>
                    <div className="font-bold text-gray-900">Thomas R.</div>
                    <div className="text-gray-600 text-sm">Creator</div>
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed italic">
                  "Évité le burnout grâce au guide. Maintenant je construis sereinement. <span className="font-bold text-pink-600">Game changer total.</span>"
                </p>
                <div className="flex items-center gap-2 text-green-600 font-bold bg-green-50 px-3 py-2 rounded-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  <span>Équilibre retrouvé</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white">Prêt à construire ton système ?</h2>
          <p className="text-lg md:text-xl text-indigo-100 mb-8 md:mb-12 max-w-2xl mx-auto">
            Rejoins les 500+ entrepreneurs qui ont automatisé leurs revenus
          </p>
          <Link
            href="/prompts"
            className="inline-block bg-white text-indigo-900 px-8 md:px-12 py-4 md:py-6 rounded-xl font-bold text-lg md:text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
          >
            Commencer maintenant (100% gratuit)
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-white">
                NASH<span className="bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">369</span>
              </h3>
              <p className="text-gray-400">Architecte de systèmes autonomes qui génèrent du cash</p>
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
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            © 2024 NASH369. Tous droits réservés.
          </div>
        </div>
      </footer>
    </main>
  )
}
