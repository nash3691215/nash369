import Link from "next/link";

export default function VintedLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-teal-50">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <span className="text-2xl font-bold text-gray-900">NASH369</span>
              <span className="text-gray-400">/</span>
              <span className="text-xl text-cyan-600">Scanner Vinted</span>
            </Link>
            <a href="https://dashai-ochre.vercel.app/" target="_blank" rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-teal-600 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Essayer maintenant
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-bold">
                🎯 NOUVEAU - Propulsé par Claude Vision AI
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Analyse tes ventes Vinted<br/>
              <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                en 1 clic
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
              Transforme tes screenshots Vinted en dashboard complet avec KPIs, graphiques et export Excel.
              L'IA fait tout le travail pour toi.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="https://dashai-ochre.vercel.app/" target="_blank" rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-teal-600 transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
              >
                Essayer gratuitement
              </a>
              <a
                href="#features"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-600 font-semibold rounded-xl hover:bg-cyan-50 transition-all duration-200 text-lg"
              >
                Voir comment ça marche
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">3 scans gratuits/mois</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Résultats en 10 secondes</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Export Excel inclus</span>
              </div>
            </div>
          </div>

          {/* Screenshot placeholder */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-4 border border-gray-200">
              <div className="bg-gradient-to-br from-cyan-100 via-teal-100 to-emerald-100 rounded-xl aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-2xl font-bold text-gray-700">Dashboard Example</p>
                  <p className="text-gray-600 mt-2">Screenshot du dashboard à venir</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features détaillées */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, rapide et puissant. L'IA analyse ton screenshot et génère tout automatiquement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-3xl text-white font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Upload ton screenshot</h3>
              <p className="text-gray-600 text-lg">
                Prends un screenshot de ton tableau de ventes Vinted et upload-le. C'est tout.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-3xl text-white font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">L'IA analyse</h3>
              <p className="text-gray-600 text-lg">
                Claude Vision extrait toutes les données: prix, frais, dates, statuts. En 10 secondes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-3xl text-white font-bold">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Reçois ton dashboard</h3>
              <p className="text-gray-600 text-lg">
                7 KPIs, graphiques interactifs, et fichier Excel prêt à télécharger.
              </p>
            </div>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8 border border-cyan-100">
              <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">7 KPIs essentiels</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-500">•</span> Revenus totaux
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-500">•</span> Frais Vinted
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-500">•</span> Gains nets
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-500">•</span> Prix moyen
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-500">•</span> Nombre de ventes
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-500">•</span> Taux de commission
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-500">•</span> Évolution dans le temps
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 border border-teal-100">
              <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Export Excel automatique</h3>
              <p className="text-gray-700 mb-4">
                Télécharge un fichier Excel propre avec:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-teal-500">•</span> Toutes tes transactions
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-500">•</span> Calculs des frais
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-500">•</span> Synthèse des KPIs
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-500">•</span> Prêt pour ton comptable
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl p-8 border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analyse IA ultra-précise</h3>
              <p className="text-gray-700">
                Claude Vision, le modèle d'IA le plus avancé, analyse ton screenshot avec une précision quasi-parfaite.
                Détecte automatiquement les colonnes, calcule les frais, et extrait toutes les données.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-emerald-50 rounded-2xl p-8 border border-cyan-100">
              <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Résultats en 10 secondes</h3>
              <p className="text-gray-700">
                Pas besoin d'attendre. Upload ton screenshot, et reçois ton dashboard complet en moins de 10 secondes.
                Tout est automatique, instantané et prêt à l'emploi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tarifs simples et transparents
            </h2>
            <p className="text-xl text-gray-600">
              Choisis le plan qui te correspond. Pas d'engagement, pas de surprise.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Plan Gratuit */}
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-cyan-400 transition-colors">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Gratuit</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">0€</span>
                </div>
                <p className="text-gray-600 mb-6">Pour essayer</p>
                <ul className="space-y-3 text-left mb-6">
                  <li className="flex items-start gap-2 text-sm">
                    <svg className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>3 scans/mois</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <svg className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Tous les KPIs</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <svg className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Export Excel</span>
                  </li>
                </ul>
                <a href="https://dashai-ochre.vercel.app/" target="_blank" rel="noopener noreferrer"
                  className="block w-full px-4 py-3 border-2 border-cyan-500 text-cyan-600 font-semibold rounded-lg hover:bg-cyan-50 transition-colors text-sm"
                >
                  Commencer
                </a>
              </div>
            </div>

            {/* Plan Starter */}
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-cyan-400 transition-colors">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Starter</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">9€</span>
                  <span className="text-gray-600">/mois</span>
                </div>
                <p className="text-gray-600 mb-6">Pour démarrer</p>
                <ul className="space-y-3 text-left mb-6">
                  <li className="flex items-start gap-2 text-sm">
                    <svg className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>10 scans/mois</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <svg className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Tous les KPIs</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <svg className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Export Excel</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <svg className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Support email</span>
                  </li>
                </ul>
                <a href="https://dashai-ochre.vercel.app/" target="_blank" rel="noopener noreferrer"
                  className="block w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-teal-600 transition-all shadow-md text-sm"
                >
                  Choisir
                </a>
              </div>
            </div>

            {/* Plan Pro - Recommended */}
            <div className="bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl p-6 border-2 border-cyan-600 relative transform scale-105 shadow-2xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-xs font-bold">
                  POPULAIRE
                </span>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">19€</span>
                  <span className="text-cyan-100">/mois</span>
                </div>
                <p className="text-cyan-100 mb-6">Pour les vendeurs actifs</p>
                <ul className="space-y-3 text-left mb-6">
                  <li className="flex items-start gap-2 text-sm text-white">
                    <svg className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>30 scans/mois</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white">
                    <svg className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Tous les KPIs</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white">
                    <svg className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Export Excel</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white">
                    <svg className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Support prioritaire</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white">
                    <svg className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Analyses historiques</span>
                  </li>
                </ul>
                <a href="https://dashai-ochre.vercel.app/" target="_blank" rel="noopener noreferrer"
                  className="block w-full px-4 py-3 bg-white text-cyan-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-md text-sm"
                >
                  Choisir Pro
                </a>
              </div>
            </div>

            {/* Plan Business */}
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-cyan-400 transition-colors">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Business</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">49€</span>
                  <span className="text-gray-600">/mois</span>
                </div>
                <p className="text-gray-600 mb-6">Pour les pros</p>
                <ul className="space-y-3 text-left mb-6">
                  <li className="flex items-start gap-2 text-sm">
                    <svg className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Illimité</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <svg className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Tous les KPIs</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <svg className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Export Excel</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <svg className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Support 24/7</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <svg className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>API access</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <svg className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Features custom</span>
                  </li>
                </ul>
                <a href="https://dashai-ochre.vercel.app/" target="_blank" rel="noopener noreferrer"
                  className="block w-full px-4 py-3 border-2 border-cyan-500 text-cyan-600 font-semibold rounded-lg hover:bg-cyan-50 transition-colors text-sm"
                >
                  Choisir
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages placeholder */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ils adorent le Scanner Vinted
            </h2>
            <p className="text-xl text-gray-600">
              Rejoins des centaines de vendeurs qui gagnent du temps chaque jour
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Témoignage 1 */}
            <div className="bg-gradient-to-br from-cyan-50 to-white rounded-2xl p-8 border border-cyan-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Incroyable! J'avais 50 ventes à analyser, ça m'aurait pris des heures. Là, 10 secondes et tout était fait."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Marie L.</p>
                  <p className="text-sm text-gray-600">Vendeuse Vinted</p>
                </div>
              </div>
            </div>

            {/* Témoignage 2 */}
            <div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-8 border border-teal-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Parfait pour ma compta. J'exporte en Excel et je l'envoie direct à mon comptable. Plus simple impossible."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">J</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Julien D.</p>
                  <p className="text-sm text-gray-600">Revendeur pro</p>
                </div>
              </div>
            </div>

            {/* Témoignage 3 */}
            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border border-emerald-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "L'IA est bluffante. Elle comprend tout, même les screenshots mal cadrés. Aucune erreur pour l'instant."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sophie M.</p>
                  <p className="text-sm text-gray-600">Vendeuse occasionnelle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-500 via-teal-500 to-emerald-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à analyser tes ventes en 1 clic ?
          </h2>
          <p className="text-xl text-cyan-100 mb-12 max-w-2xl mx-auto">
            Commence avec 3 scans gratuits. Pas de carte bancaire requise.
          </p>
          <a href="https://dashai-ochre.vercel.app/" target="_blank" rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-white text-cyan-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-2xl hover:shadow-3xl text-xl"
          >
            Essayer gratuitement maintenant
          </a>
          <p className="text-cyan-100 mt-6 text-sm">
            Rejoins des centaines de vendeurs qui gagnent du temps chaque jour
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-cyan-600 transition-colors">
                NASH369
              </Link>
              <p className="text-sm text-gray-600 mt-2">
                Made with ❤️ by Nash369 · Powered by Claude AI
              </p>
            </div>
            <div className="flex gap-6">
              <Link href="/" className="text-gray-600 hover:text-cyan-600 transition-colors">
                Accueil
              </Link>
              <a href="https://dashai-ochre.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-cyan-600 transition-colors">
                Scanner
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
