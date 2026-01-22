import Link from 'next/link'
import products from '@/data/products.json'
import Header from '@/components/Header'

export default function Home() {
  const paidProducts = products.products.filter(p => p.id !== 'guide-sites-5min' && p.priority !== 'hidden')
  const leadMagnet = products.products.find(p => p.id === 'guide-sites-5min')

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Lead Magnet */}
      <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-white">
        <div className="container mx-auto px-4 py-5 md:py-8">
          <div className="max-w-2xl mx-auto">
            {/* Lead Magnet Full Width */}
            {leadMagnet && (
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-1 shadow-2xl">
                <div className="bg-white rounded-xl p-8">
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4">🎁</div>
                    <div className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-xs font-bold mb-4 inline-block">
                      GUIDE GRATUIT
                    </div>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-black mb-3 text-gray-900">
                      {leadMagnet.name}
                    </h1>
                    <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                      {leadMagnet.description}
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {leadMagnet.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3 text-base">
                        <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/guide-sites-5min"
                    className="block w-full bg-gradient-to-r from-indigo-600 to-emerald-600 hover:from-indigo-500 hover:to-emerald-500 text-white text-center py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
                  >
                    Télécharger maintenant (100% gratuit)
                  </Link>
                  <p className="text-sm text-gray-500 text-center mt-3">
                    ✓ Aucune CB • ✓ Accès immédiat • ✓ Méthode complète
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Produits Premium - REPOSITIONNÉ EN HAUT */}
      <section id="produits" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-gray-900">
              3 étapes pour <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 text-transparent bg-clip-text">vendre en ligne</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Choisis ton point de départ. Chaque formation te donne la méthode exacte.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto mb-12">
            {paidProducts.map((product) => (
              <Link
                key={product.id}
                href={`/produits/${product.id}`}
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
                        {product.originalPrice && (
                          <span className="text-sm text-red-600 font-bold">Prix de lancement</span>
                        )}
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
                </div>
              </Link>
            ))}
          </div>

          {/* Lead Magnet - Juste après les produits */}
          {leadMagnet && (
            <div className="w-full">
              <div className="bg-gradient-to-br from-indigo-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                {/* Badge GRATUIT en haut à droite */}
                <div className="absolute top-6 right-6 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-black text-lg shadow-xl animate-pulse">
                  🎁 GRATUIT
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-center md:text-left">
                    <div className="text-5xl md:text-6xl mb-4">⚡</div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                      {leadMagnet.name}
                    </h3>
                    <p className="text-base md:text-lg text-indigo-100 mb-6 leading-relaxed">
                      {leadMagnet.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      {leadMagnet.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-white">
                          <span className="text-yellow-300 text-lg flex-shrink-0">✓</span>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
                      <p className="text-yellow-300 font-bold text-sm uppercase tracking-wide mb-3">Guide Gratuit</p>
                      <p className="text-4xl font-black mb-6">100% OFFERT</p>
                      <Link
                        href="/guide-sites-5min"
                        className="inline-block w-full bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl mb-4"
                      >
                        Télécharger maintenant
                      </Link>
                      <p className="text-xs text-indigo-100">
                        ✓ Aucune CB • ✓ Accès immédiat • ✓ Méthode complète
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CTA Site Clé en Main */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-white rounded-2xl p-8 md:p-10 border-2 border-gray-200 hover:border-indigo-300 transition-all shadow-lg text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Besoin d'un <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 text-transparent bg-clip-text">site clé en main</span> ?
              </h3>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Tu veux un site professionnel prêt à vendre sans te prendre la tête ? Je m'occupe de tout.
              </p>
              <Link
                href="/devis"
                className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-emerald-600 hover:from-indigo-500 hover:to-emerald-500 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Demander un devis gratuit →
              </Link>
              <p className="text-sm text-gray-500 mt-4">
                Vitrine à partir de 299€ · E-commerce à partir de 999€
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problème → Solution */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-4 md:space-y-6 bg-red-50 border border-red-200 rounded-2xl p-6 md:p-8">
                <div className="text-red-600 text-xs md:text-sm font-bold uppercase tracking-wider">Sans automatisation</div>
                <h2 className="text-2xl md:text-4xl font-bold leading-tight text-gray-900">
                  Chaque vente demande ton intervention
                </h2>
                <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-lg md:text-xl mt-1 flex-shrink-0">✗</span>
                    <span>Envoyer manuellement chaque accès après paiement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-lg md:text-xl mt-1 flex-shrink-0">✗</span>
                    <span>Support client qui te bouffe ton temps</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-lg md:text-xl mt-1 flex-shrink-0">✗</span>
                    <span>Impossible de scaler sans recruter</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 md:space-y-6 bg-green-50 border border-green-200 rounded-2xl p-6 md:p-8">
                <div className="text-green-600 text-xs md:text-sm font-bold uppercase tracking-wider">Avec automatisation</div>
                <h2 className="text-2xl md:text-4xl font-bold leading-tight text-gray-900">
                  Le système travaille pour toi
                </h2>
                <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-lg md:text-xl mt-1 flex-shrink-0">✓</span>
                    <span>Paiement → Accès automatique par email (0 action manuelle)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-lg md:text-xl mt-1 flex-shrink-0">✓</span>
                    <span>Tu configures une fois, ça tourne ensuite</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-lg md:text-xl mt-1 flex-shrink-0">✓</span>
                    <span>Tu peux partir 2 semaines, les ventes continuent</span>
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
                Déjà utilisé par <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 text-transparent bg-clip-text">+300 créateurs</span>
              </h2>
              <p className="text-lg text-gray-600">Ils ont monté leur système. Maintenant ils vendent.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white rounded-xl p-8 border-2 border-indigo-100 hover:border-indigo-300 shadow-lg hover:shadow-2xl transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center font-bold text-white text-xl shadow-lg">M</div>
                  <div>
                    <div className="font-bold text-gray-900">Marc T.</div>
                    <div className="text-gray-600 text-sm">Coach business</div>
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
                  "J'étais sceptique au début. 3 semaines plus tard : mon site tourne H24, paiements automatiques, livraison par email. <span className="font-bold text-indigo-600">Je ne touche plus à rien.</span>"
                </p>
                <div className="flex items-center gap-2 text-green-600 font-bold bg-green-50 px-3 py-2 rounded-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  <span>Ventes automatiques</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-purple-100 hover:border-purple-300 shadow-lg hover:shadow-2xl transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center font-bold text-white text-xl shadow-lg">L</div>
                  <div>
                    <div className="font-bold text-gray-900">Laura D.</div>
                    <div className="text-gray-600 text-sm">Infopreneure</div>
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
                  "J'ai créé mon site e-commerce en 48h avec la formation. Zéro compétence technique. <span className="font-bold text-purple-600">Paiement Stripe → Email automatique.</span> Mon seul regret ? Avoir perdu 2 ans avec Shopify avant."
                </p>
                <div className="flex items-center gap-2 text-green-600 font-bold bg-green-50 px-3 py-2 rounded-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  <span>Site en 48h</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-pink-100 hover:border-pink-300 shadow-lg hover:shadow-2xl transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center font-bold text-white text-xl shadow-lg">J</div>
                  <div>
                    <div className="font-bold text-gray-900">Julien M.</div>
                    <div className="text-gray-600 text-sm">Freelance</div>
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
                  "Avant je passais des heures à gérer les commandes. Maintenant <span className="font-bold text-pink-600">mon système encaisse pendant que je dors.</span> Client paie → Email part. C'est tout."
                </p>
                <div className="flex items-center gap-2 text-green-600 font-bold bg-green-50 px-3 py-2 rounded-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  <span>Système automatique</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white">Prêt à automatiser tes ventes ?</h2>
          <p className="text-lg md:text-xl text-indigo-100 mb-8 md:mb-12 max-w-2xl mx-auto">
            Télécharge le guide gratuit et découvre le système exact
          </p>
          <Link
            href="/guide-sites-5min"
            className="inline-block bg-white text-indigo-900 px-8 md:px-12 py-4 md:py-6 rounded-xl font-bold text-lg md:text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
          >
            Découvrir la méthode (100% gratuit)
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-white">
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
