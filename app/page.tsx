import Link from "next/link";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-electric/5 via-white to-electric/10 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-electric rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-electric rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric/10 rounded-full mb-6">
              <svg className="w-5 h-5 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-bold text-electric">Outils 2026 pour freelances</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
              Gagne du temps,<br/>
              <span className="text-electric">gagne du CA</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Des outils simples qui font le job. Pas d'abonnement qui plombe tes charges,
              juste ce dont tu as besoin pour piloter ton business en 2026.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button href="/boutique" className="text-lg px-8 py-4">
                Voir les outils dispo
              </Button>
              <Link
                href="#comment-ca-marche"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-electric hover:text-electric/80 transition-colors"
              >
                Comment ça marche ?
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-electric" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>3 essais gratuits</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-electric" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>À partir de 1.99€</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-electric" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Pas d'abonnement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Do */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Ce que tu peux faire
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Outils pensés pour les indépendants qui veulent se concentrer sur l'essentiel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-electric/5 to-electric/10 rounded-2xl p-8 border border-electric/20">
              <div className="w-12 h-12 bg-electric/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Pilote ta tréso</h3>
              <p className="text-gray-600">
                Upload ton fichier de ventes → Dashboard instantané avec revenus, dépenses, rentabilité.
              </p>
            </div>

            <div className="bg-gradient-to-br from-electric/5 to-electric/10 rounded-2xl p-8 border border-electric/20">
              <div className="w-12 h-12 bg-electric/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Analyse tes ventes</h3>
              <p className="text-gray-600">
                Vinted, marketplaces... Vois tes marges réelles après frais. Comprends où tu gagnes vraiment.
              </p>
            </div>

            <div className="bg-gradient-to-br from-electric/5 to-electric/10 rounded-2xl p-8 border border-electric/20">
              <div className="w-12 h-12 bg-electric/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Exporte en 1 clic</h3>
              <p className="text-gray-600">
                PDF propre pour ton comptable ou ton banquier. Fini les tableaux Excel dégueulasses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="comment-ca-marche" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Simple et rapide
            </h2>
            <p className="text-xl text-gray-600">
              Pas besoin d'être un expert. Ça marche en 3 étapes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-electric text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">
                  1
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">Upload</h3>
                <p className="text-gray-600 text-lg">
                  Ton fichier Excel ou CSV de ventes. C'est tout.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-electric text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">
                  2
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">Analyse</h3>
                <p className="text-gray-600 text-lg">
                  L'outil génère ton dashboard avec graphiques et KPIs en secondes.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-electric text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">
                  3
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">Décide</h3>
                <p className="text-gray-600 text-lg">
                  Exporte, partage, ou garde pour toi. Tu pilotes en toute clarté.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why NASH369 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Pourquoi NASH369 ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Parce qu'en 2026, tu mérites des outils qui respectent ton budget et ton temps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-black mb-1">Pas d'abonnement qui plombe</h3>
                <p className="text-gray-600">50€/mois pour un outil que tu utilises 2x ? Non merci.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-black mb-1">Tu paies ce que tu utilises</h3>
                <p className="text-gray-600">1 crédit = 1 dashboard. Simple, clair, honnête.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-black mb-1">Pas de setup compliqué</h3>
                <p className="text-gray-600">Upload → Résultat. Pas 10h de config pour comprendre.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-black mb-1">Résultat immédiat</h3>
                <p className="text-gray-600">En moins d'1 minute, tu as tes réponses.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-electric/10 via-electric/5 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Prêt à gagner du temps ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            3 essais gratuits pour tester. Si ça te plaît, tu continues.
          </p>
          <Button href="/boutique" className="text-lg px-8 py-4">
            Voir les outils disponibles
          </Button>
        </div>
      </section>
    </div>
  );
}
