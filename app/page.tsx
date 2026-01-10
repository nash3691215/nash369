import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-teal-50">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">NASH369</h1>
              <p className="text-sm text-gray-600 mt-1">Développeur & Créateur d'outils IA</p>
            </div>
            <a
              href="https://dashai-ochre.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-teal-600 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Essayer DashAI Vinted
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar placeholder */}
          <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-4xl text-white font-bold">N</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Salut, je suis Nash 👋
          </h2>

          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-4">
            Développeur passionné par l'IA
          </p>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-4">
            Je crée des outils pratiques pour simplifier ton quotidien
          </p>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Premier outil lancé: <span className="font-bold text-cyan-600">DashAI Vinted</span>
          </p>
        </div>
      </section>

      {/* Mon premier outil */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-bold mb-4">
              🚀 MON PREMIER OUTIL
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              DashAI Vinted
            </h2>
            <p className="text-xl text-gray-600">
              L'outil qui transforme tes screenshots Vinted en dashboard pro
            </p>
          </div>

          {/* Card principale */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Image preview */}
              <div className="bg-gradient-to-br from-cyan-400 via-teal-400 to-emerald-400 p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">📊</div>
                  <p className="text-white text-2xl font-bold">DashAI Vinted</p>
                  <div className="inline-block mt-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                    <span className="text-white font-semibold text-sm">NOUVEAU</span>
                  </div>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-block mb-4">
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold">
                    🎯 Analyse IA
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Analyse tes ventes en 1 clic
                </h3>
                <p className="text-xl text-gray-600 mb-6">
                  Screenshot ou photo d'écran → Dashboard complet en 10 secondes
                </p>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="text-gray-900 font-semibold">Analyse IA ultra-précise</span>
                      <p className="text-gray-600 text-sm">Claude Vision analyse ton screenshot (ou photo d'écran) automatiquement</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="text-gray-900 font-semibold">Dashboard avec 7 KPIs</span>
                      <p className="text-gray-600 text-sm">Revenus, frais, gains nets, prix moyen... Tout est calculé</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="text-gray-900 font-semibold">Export Excel automatique</span>
                      <p className="text-gray-600 text-sm">Parfait pour ta compta ou ton comptable</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="text-gray-900 font-semibold">3 scans gratuits</span>
                      <p className="text-gray-600 text-sm">Teste sans risque, aucune carte bancaire requise</p>
                    </div>
                  </li>
                </ul>

                {/* Prix et CTA */}
                <div className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-gray-600">À partir de</span>
                    <span className="text-4xl font-bold text-gray-900">9€</span>
                    <span className="text-gray-600">pour 10 scans</span>
                  </div>

                  <a
                    href="https://dashai-ochre.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-teal-600 transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
                  >
                    Essayer gratuitement
                  </a>

                  <Link
                    href="/dashai-vinted"
                    className="inline-block w-full text-center px-8 py-4 text-cyan-600 font-semibold hover:text-cyan-700 transition-colors"
                  >
                    En savoir plus →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* À venir */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              À venir
            </h2>
            <p className="text-xl text-gray-600">
              D'autres outils en préparation pour simplifier ton quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 border-2 border-dashed border-gray-300 hover:border-cyan-400 transition-colors">
              <div className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Analyseur Leboncoin
                </h3>
                <p className="text-gray-600 mb-4">
                  Analyse tes ventes Leboncoin comme sur Vinted
                </p>
                <span className="inline-block px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-semibold">
                  Coming Soon
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 border-2 border-dashed border-gray-300 hover:border-cyan-400 transition-colors">
              <div className="text-center">
                <div className="text-6xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Assistant IA Personnel
                </h3>
                <p className="text-gray-600 mb-4">
                  Un assistant IA qui connaît ton business
                </p>
                <span className="inline-block px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-semibold">
                  Coming Soon
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 border-2 border-dashed border-gray-300 hover:border-cyan-400 transition-colors">
              <div className="text-center">
                <div className="text-6xl mb-4">📈</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Tracker Multi-Plateformes
                </h3>
                <p className="text-gray-600 mb-4">
                  Vinted + Leboncoin + Etsy dans un seul dashboard
                </p>
                <span className="inline-block px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-semibold">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 mb-2">
            Made with ❤️ by Nash369
          </p>
          <p className="text-sm text-gray-500">
            Powered by Claude AI
          </p>

          {/* Social links placeholder */}
          <div className="mt-6 flex justify-center gap-6">
            <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
