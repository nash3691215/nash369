'use client'

import Link from 'next/link'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Electric Blue Light */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden bg-slate-50">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(41,98,255,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(41,98,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(41,98,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 glass-blue rounded-full animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="text-xs font-bold tracking-widest uppercase text-blue-800">
                Agence Digitale Nouvelle Génération
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight text-slate-900">
              J'ai quitté la route<br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 text-transparent bg-clip-text animate-gradient">pour le digital.</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              Pendant des années, j'ai bâti mon business en tant qu'entrepreneur physique. Puis j'ai découvert comment transformer mon expertise en système de vente 24/7 en ligne. <span className="text-blue-700 font-medium">Aujourd'hui je t'aide à faire la même transition</span> : passer du physique au digital et décupler tes revenus sans dépendre de tes heures.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/reservation"
                className="group relative px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg transition-all hover:bg-blue-700 hover:scale-105 hover:glow-blue-strong overflow-hidden shadow-lg shadow-blue-500/30"
              >
                <span className="relative z-10">📞 Appel découverte 30 min (gratuit)</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Link>
              <Link
                href="#services"
                className="px-8 py-4 glass-blue text-slate-700 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all border border-slate-200 hover:border-blue-200"
              >
                Voir nos services
              </Link>
            </div>
          </div>

          {/* My Impact Stats */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-200 pt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 mb-1">10x</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest font-bold">Revenus décuplés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 mb-1">6 mois</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest font-bold">Pour la transformation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 mb-1">0€</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest font-bold">Abonnements mensuels</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 mb-1">24/7</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest font-bold">Ventes en automatique</div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section - The Transformation */}
      <section className="py-32 relative bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-20 text-center">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.3em] mb-4">Mon histoire</h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8">
              AVANT : Dépendre de mes heures<br />
              <span className="text-blue-600">APRÈS : Générer des revenus 24/7</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16 max-w-5xl mx-auto">
            {/* AVANT */}
            <div className="relative p-10 rounded-3xl bg-white border-2 border-red-300 shadow-lg">
              <div className="absolute top-6 left-6">
                <span className="inline-block px-4 py-2 bg-red-100 text-red-700 font-bold rounded-full text-sm">AVANT</span>
              </div>
              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">😩</span>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Toujours en déplacement</h4>
                    <p className="text-slate-600 text-sm">Je passais mes journées chez les clients ou sur la route.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">⏰</span>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Limité par mes heures</h4>
                    <p className="text-slate-600 text-sm">Plus je travaillais, plus je gagnais. Mais 24h par jour, c'est vite plein.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📱</span>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Pas de visibilité en ligne</h4>
                    <p className="text-slate-600 text-sm">Mes clients venaient du bouche-à-oreille. Géographiquement limité.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">💰</span>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Revenus imprévisibles</h4>
                    <p className="text-slate-600 text-sm">Pas de client = pas de revenu. Aucune stabilité financière.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🚫</span>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Aucun système automatisé</h4>
                    <p className="text-slate-600 text-sm">Tout reposait sur moi. Je ne pouvais pas déléguer.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* APRÈS */}
            <div className="relative p-10 rounded-3xl bg-white border-2 border-green-300 shadow-lg">
              <div className="absolute top-6 left-6">
                <span className="inline-block px-4 py-2 bg-green-100 text-green-700 font-bold rounded-full text-sm">APRÈS</span>
              </div>
              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🏠</span>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Travail de n'importe où</h4>
                    <p className="text-slate-600 text-sm">Bureau, café, vacances... Mon business tourne sans moi.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Revenus décuplés en 6 mois</h4>
                    <p className="text-slate-600 text-sm">Système automatisé = ventes 24h/24 même pendant que je dors.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🌍</span>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Clientèle nationale (même mondiale)</h4>
                    <p className="text-slate-600 text-sm">Plus de limites géographiques. Mes clients viennent de partout.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📈</span>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Revenus prévisibles et scalables</h4>
                    <p className="text-slate-600 text-sm">Je sais combien je vais gagner et c'est 100% scalable.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🤖</span>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Systèmes automatisés</h4>
                    <p className="text-slate-600 text-sm">De la vente à la livraison, tout tourne sans intervention manuelle.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Revelation */}
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Et voilà la révélation...
            </h3>
            <p className="text-lg text-blue-50 mb-8 leading-relaxed">
              Je ne suis pas un "expert en digital" qui n'a jamais bâti de vrais business. Je suis un entrepreneur comme toi qui a réalisé comment utiliser la technologie pour travailler moins et gagner plus. Et c'est exactement ça que je vais te montrer.
            </p>
            <Link
              href="/reservation"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105"
            >
              Je veux la même transformation →
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Section - What You'll Get */}
      <section id="services" className="py-32 relative bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.3em] mb-4">Ma méthode</h2>
              <h3 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
                La même recette qui<br /><span className="text-slate-400 italic">m'a décuplé mes revenus</span>
              </h3>
            </div>
            <p className="text-slate-500 text-lg max-w-sm mb-2">
              Rien de théorique. Rien de magique. Juste la stratégie que j'ai testée et affinée sur mes propres projets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Étape 1 */}
            <div className="group relative p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-black mb-6">1</div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">Créer ta présence web</h4>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Un vrai site professionnel qui te rend visible en ligne. Pas juste une carte de visite digitale, mais un vrai outil de vente opérationnel.
              </p>
              <ul className="space-y-4 mb-10 text-sm text-slate-600">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> Site rapide et responsive</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> Optimisé pour Google</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> Convertit des visiteurs en clients</li>
              </ul>
              <Link href="/reservation" className="inline-flex items-center gap-2 text-blue-600 font-bold group/link">
                En savoir plus
                <span className="group-hover/link:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* Étape 2 */}
            <div className="group relative p-10 rounded-3xl bg-blue-600 text-white shadow-2xl shadow-blue-600/30 transition-all duration-500 hover:translate-y-[-5px]">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white text-blue-600 rounded-full font-black mb-6">2</div>
              <h4 className="text-2xl font-bold text-white mb-4">Vendre 24/7 en automatique</h4>
              <p className="text-blue-50 mb-8 leading-relaxed">
                Transformer ton site en machine à vendre. Plus besoin d'être physiquement présent pour générer des revenus. Tes clients paient en ligne, et c'est automatisé.
              </p>
              <ul className="space-y-4 mb-10 text-sm text-blue-50 font-medium">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> Paiements en ligne sécurisés</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> Tunnel de vente optimisé</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> Emails de suivi automatiques</li>
              </ul>
              <Link href="/reservation" className="inline-flex items-center gap-2 text-white font-bold group/link text-lg">
                C'est possible ?
                <span className="group-hover/link:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* Étape 3 */}
            <div className="group relative p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-black mb-6">3</div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">Automatiser et scaler</h4>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Zéro intervention manuelle. Tes processus tournent tout seuls. Chaque nouvelle vente ne te coûte plus une heure de travail. C'est le graal.
              </p>
              <ul className="space-y-4 mb-10 text-sm text-slate-600">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> Workflows entièrement automatisés</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> Intégration de tous tes outils</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> Scalable sans limite</li>
              </ul>
              <Link href="/reservation" className="inline-flex items-center gap-2 text-blue-600 font-bold group/link">
                Je veux ça
                <span className="group-hover/link:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
