import Link from 'next/link'

export default function AProposPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header with Home Button */}
      <header className="border-b border-gray-200 sticky top-0 bg-white z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl md:text-2xl font-bold text-gray-900">
              NASH369
            </Link>
            <Link
              href="/"
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg font-medium transition-all text-sm"
            >
              ← Accueil
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-indigo-100 border border-indigo-200 rounded-full text-indigo-700 text-sm font-semibold">
            À PROPOS
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
            Le projet <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 text-transparent bg-clip-text">NASH369</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Démocratiser l'accès à l'automatisation et permettre à chacun de construire son système de vente en ligne.
          </p>
        </div>

        {/* Mission */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border-2 border-indigo-200">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Notre mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              NASH369 est né d'un constat simple : la technologie pour vendre en ligne existe, mais elle est soit trop chère, soit trop compliquée pour la plupart des gens.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Notre mission est de rendre l'automatisation accessible à tous, sans compétences techniques, sans abonnements mensuels qui plombent la rentabilité, et sans passer des semaines à tout configurer.
            </p>
          </div>
        </div>

        {/* Valeurs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Nos valeurs</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-300 transition-all">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Simplicité</h3>
              <p className="text-gray-600">
                Pas de jargon technique. Des solutions qui fonctionnent out-of-the-box, sans courbe d'apprentissage abrupte.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-emerald-300 transition-all">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Transparence</h3>
              <p className="text-gray-600">
                Prix clairs dès le départ. Pas de frais cachés, pas d'abonnements surprise. Tu paies une fois, tu gardes à vie.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-300 transition-all">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Résultats</h3>
              <p className="text-gray-600">
                Nous ne vendons pas de la théorie. Chaque formation, chaque service est conçu pour générer des revenus réels.
              </p>
            </div>
          </div>
        </div>

        {/* L'approche */}
        <div className="mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">L'approche NASH369</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-gray-900">Stack moderne et gratuite</h3>
                  <p className="text-gray-600">
                    Next.js, Vercel, Stripe, Resend... Les mêmes outils que les startups à millions, mais sans les coûts mensuels.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-gray-900">IA comme accélérateur</h3>
                  <p className="text-gray-600">
                    Claude, ChatGPT, Cursor... L'IA fait le travail de code pendant que tu te concentres sur ton business.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-gray-900">Automation complète</h3>
                  <p className="text-gray-600">
                    De la vente à la livraison en passant par les emails et les analytics. Tout tourne sans intervention manuelle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fondateur */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-indigo-600 to-emerald-600 rounded-2xl p-8 text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-3xl font-black bg-gradient-to-r from-indigo-600 to-emerald-600 text-transparent bg-clip-text">N</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Nash</h2>
                <p className="text-indigo-100">Fondateur NASH369</p>
              </div>
            </div>
            <p className="text-lg text-indigo-50 leading-relaxed mb-4">
              Développeur devenu entrepreneur, j'ai passé des années à construire des systèmes de vente automatisés pour des clients.
            </p>
            <p className="text-lg text-indigo-50 leading-relaxed">
              NASH369 est né de ma conviction que ces outils ne devraient pas être réservés aux grandes entreprises ou aux développeurs. Aujourd'hui, je partage les méthodes exactes que j'utilise pour aider d'autres à construire leur indépendance financière.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">NASH369 en chiffres</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-indigo-50 rounded-xl border-2 border-indigo-200">
              <div className="text-4xl font-black text-indigo-600 mb-2">300+</div>
              <div className="text-gray-700 font-semibold">Créateurs accompagnés</div>
            </div>
            <div className="text-center p-6 bg-emerald-50 rounded-xl border-2 border-emerald-200">
              <div className="text-4xl font-black text-emerald-600 mb-2">0€</div>
              <div className="text-gray-700 font-semibold">De coûts mensuels</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl border-2 border-purple-200">
              <div className="text-4xl font-black text-purple-600 mb-2">24h</div>
              <div className="text-gray-700 font-semibold">Pour lancer un site</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-indigo-600 to-emerald-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Rejoins le mouvement</h2>
            <p className="text-xl text-indigo-100 mb-6">
              Construis ton système. Vends en automatique. Sans coder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/guide-sites-5min"
                className="inline-block px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all"
              >
                Télécharger le guide gratuit
              </Link>
              <Link
                href="/#produits"
                className="inline-block px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-xl font-bold text-lg hover:bg-white/30 transition-all border-2 border-white"
              >
                Voir les formations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
