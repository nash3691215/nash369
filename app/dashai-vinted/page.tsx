import Link from "next/link";

export default function DashAIVintedPromo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-teal-50">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <span className="text-2xl font-bold text-gray-900">NASH369</span>
              <span className="text-gray-400">/</span>
              <span className="text-xl text-cyan-600">DashAI Vinted</span>
            </Link>
            <Link
              href="https://dashai-ochre.vercel.app/"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-teal-600 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Essayer maintenant
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full text-sm font-bold shadow-lg">
                🚀 NOUVEAU - DashAI Vinted par Nash369
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Transforme tes screenshots Vinted<br/>
              <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                en dashboard pro
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
              L'IA analyse ton écran et génère automatiquement un dashboard complet avec KPIs,
              graphiques et export Excel. En 10 secondes chrono.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://dashai-ochre.vercel.app/"
                className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-teal-600 transition-all duration-200 shadow-xl hover:shadow-2xl text-lg"
              >
                Essayer gratuitement (3 scans offerts)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              C'est ultra simple
            </h2>
            <p className="text-xl text-gray-600">
              3 étapes. 10 secondes. Résultat pro.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Étape 1 */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-3xl flex items-center justify-center shadow-xl">
                <span className="text-5xl">📸</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Prends une photo</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Screenshot de ton tableau Vinted sur PC, ou prends une photo de ton écran avec ton téléphone.
                Les deux marchent parfaitement!
              </p>
            </div>

            {/* Étape 2 */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-3xl flex items-center justify-center shadow-xl">
                <span className="text-5xl">🤖</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. L'IA analyse</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Claude Vision (l'IA la plus puissante du marché) extrait toutes tes données:
                prix, frais, dates. Précision quasi-parfaite.
              </p>
            </div>

            {/* Étape 3 */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-3xl flex items-center justify-center shadow-xl">
                <span className="text-5xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Reçois ton dashboard</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                7 KPIs calculés automatiquement, tableau détaillé, et fichier Excel prêt à télécharger.
                Pro en 10 secondes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cas d'usage */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Parfait pour...
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Cas 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-cyan-100">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Suivre ta trésorerie</h3>
              <p className="text-gray-700 leading-relaxed">
                Comprends instantanément combien tu gagnes vraiment après les frais Vinted.
                Revenus bruts vs nets, tout est clair.
              </p>
            </div>

            {/* Cas 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-teal-100">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Optimiser tes prix</h3>
              <p className="text-gray-700 leading-relaxed">
                Vois ton prix moyen, identifie les articles qui marchent le mieux,
                ajuste ta stratégie.
              </p>
            </div>

            {/* Cas 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100">
              <div className="text-4xl mb-4">🧾</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Pour ta compta</h3>
              <p className="text-gray-700 leading-relaxed">
                Export Excel propre et détaillé. Parfait pour ton comptable ou ta déclaration fiscale.
                Plus besoin de tout ressaisir à la main.
              </p>
            </div>

            {/* Cas 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-cyan-100">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Gagner du temps</h3>
              <p className="text-gray-700 leading-relaxed">
                Fini les calculs à la main dans Excel. 30 ventes analysées en 10 secondes
                au lieu de 30 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Simple */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tarif simple et honnête
            </h2>
            <p className="text-xl text-gray-600">
              Pas d'abonnement qui plombe. Tu paies ce que tu utilises.
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-500 to-teal-500 rounded-3xl p-12 text-white shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <span className="font-bold">OFFRE DE LANCEMENT</span>
              </div>
              <h3 className="text-4xl font-bold mb-4">3 scans gratuits pour tester</h3>
              <p className="text-xl text-cyan-100 mb-8">
                Puis choisis ton pack quand tu veux
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Pack Starter */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
                <h4 className="text-2xl font-bold mb-2">Starter</h4>
                <div className="text-4xl font-bold mb-4">9€</div>
                <p className="text-cyan-100 mb-6">10 scans</p>
                <ul className="space-y-2 text-sm">
                  <li>✓ Dashboard complet</li>
                  <li>✓ Export Excel</li>
                  <li>✓ Support email</li>
                </ul>
              </div>

              {/* Pack Pro */}
              <div className="bg-white rounded-2xl p-6 text-gray-900 relative transform scale-105 shadow-2xl">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-xs font-bold">
                    POPULAIRE
                  </span>
                </div>
                <h4 className="text-2xl font-bold mb-2 text-cyan-600">Pro</h4>
                <div className="text-4xl font-bold mb-4 text-gray-900">19€</div>
                <p className="text-gray-600 mb-6">30 scans</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Dashboard complet</li>
                  <li>✓ Export Excel</li>
                  <li>✓ Support prioritaire</li>
                  <li>✓ Historique analyses</li>
                </ul>
              </div>

              {/* Pack Business */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
                <h4 className="text-2xl font-bold mb-2">Business</h4>
                <div className="text-4xl font-bold mb-4">49€</div>
                <p className="text-cyan-100 mb-6">Illimité</p>
                <ul className="space-y-2 text-sm">
                  <li>✓ Scans illimités</li>
                  <li>✓ Support 24/7</li>
                  <li>✓ API access</li>
                  <li>✓ Features custom</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="https://dashai-ochre.vercel.app/"
                className="inline-block px-10 py-5 bg-white text-cyan-600 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-xl text-lg"
              >
                Commencer gratuitement
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Ça marche vraiment avec une photo de mon écran prise au téléphone ?
              </h3>
              <p className="text-gray-700">
                Oui! L'IA Claude Vision est ultra-puissante. Que tu prennes un screenshot sur ton PC
                ou une photo de ton écran avec ton téléphone, ça marche. Assure-toi juste que le tableau
                Vinted est bien visible et net.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Mes données sont-elles sécurisées ?
              </h3>
              <p className="text-gray-700">
                Absolument. Ton screenshot est analysé puis immédiatement supprimé. Rien n'est stocké.
                L'API Claude Vision (Anthropic) est certifiée SOC 2 Type II et conforme RGPD.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                C'est précis à combien ?
              </h3>
              <p className="text-gray-700">
                Claude Vision a un taux de précision de 99%+ sur l'extraction de données structurées.
                On a testé sur des centaines de screenshots Vinted, l'IA comprend tout: colonnes,
                nombres, dates, même avec des screenshots pas parfaits.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Je peux annuler quand je veux ?
              </h3>
              <p className="text-gray-700">
                Il n'y a pas d'abonnement! Tu achètes des packs de scans quand tu en as besoin.
                Aucun engagement, aucun renouvellement automatique. Tu contrôles 100%.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Ça marche sur mobile ?
              </h3>
              <p className="text-gray-700">
                Oui! Le site est 100% responsive. Tu peux uploader ton screenshot depuis ton téléphone,
                tablette ou PC. L'interface s'adapte parfaitement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-500 via-teal-500 to-emerald-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à analyser tes ventes comme un pro ?
          </h2>
          <p className="text-xl text-cyan-100 mb-12 max-w-2xl mx-auto">
            3 scans gratuits. Pas de carte bancaire. Résultat en 10 secondes.
          </p>
          <Link
            href="https://dashai-ochre.vercel.app/"
            className="inline-block px-12 py-6 bg-white text-cyan-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-2xl hover:shadow-3xl text-xl"
          >
            Essayer DashAI Vinted gratuitement
          </Link>
          <p className="text-cyan-100 mt-8 text-sm">
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
              <Link href="https://dashai-ochre.vercel.app/" className="text-gray-600 hover:text-cyan-600 transition-colors">
                Scanner
              </Link>
              <Link href="/dashai-vinted" className="text-gray-600 hover:text-cyan-600 transition-colors">
                DashAI Vinted
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
