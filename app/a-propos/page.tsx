import Link from 'next/link'
import Footer from '@/components/Footer'

export default function AProposPage() {
  return (
    <main className="min-h-screen bg-white">

      <div className="container mx-auto px-4 py-32 max-w-4xl">
        {/* Hero */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-6 px-4 py-2 glass-blue border border-blue-100 rounded-full">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">
              À PROPOS
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-8 text-slate-900 leading-tight">
            Le projet <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 text-transparent bg-clip-text">NASH369</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
            Démocratiser l'accès à l'automatisation et permettre à chacun de construire son système de vente en ligne.
          </p>
        </div>

        {/* Mission */}
        <div className="mb-20">
          <div className="bg-slate-50 rounded-3xl p-10 border border-slate-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
            <div className="relative z-10">
              <div className="text-5xl mb-6">🎯</div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Notre mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                NASH369 est né d'un constat simple : la technologie pour vendre en ligne existe, mais elle est soit trop chère, soit trop compliquée pour la plupart des gens.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Notre mission est de rendre l'automatisation accessible à tous, sans compétences techniques, sans abonnements mensuels qui plombent la rentabilité, et sans passer des semaines à tout configurer.
              </p>
            </div>
          </div>
        </div>

        {/* Valeurs */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center text-slate-900">Nos valeurs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white border border-slate-100 rounded-3xl p-8 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mb-6 text-blue-600 group-hover:scale-110 transition-transform">⚡</div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Simplicité</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                Pas de jargon technique. Des solutions qui fonctionnent out-of-the-box, sans courbe d'apprentissage abrupte.
              </p>
            </div>

            <div className="group bg-white border border-slate-100 rounded-3xl p-8 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mb-6 text-blue-600 group-hover:scale-110 transition-transform">💰</div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Transparence</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                Prix clairs dès le départ. Pas de frais cachés. Tu paies une fois, tu gardes à vie. L'honnêteté avant tout.
              </p>
            </div>

            <div className="group bg-white border border-slate-100 rounded-3xl p-8 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mb-6 text-blue-600 group-hover:scale-110 transition-transform">🚀</div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Résultats</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                Nous ne vendons pas de la théorie. Chaque formation, chaque service est conçu pour générer des revenus réels.
              </p>
            </div>
          </div>
        </div>

        {/* L'approche */}
        <div className="mb-20">
          <div className="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm">
            <h2 className="text-3xl font-bold mb-10 text-slate-900 text-center">L'approche NASH369</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg shadow-blue-600/20">1</div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-slate-900">Stack moderne et gratuite</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Next.js, Vercel, Stripe, Resend... Les mêmes outils que les startups à millions, mais sans les coûts mensuels.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg shadow-blue-600/20">2</div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-slate-900">IA comme accélérateur</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Claude, ChatGPT, Cursor... L'IA fait le travail de code pendant que tu te concentres sur ton business.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg shadow-blue-600/20">3</div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-slate-900">Automation complète</h3>
                  <p className="text-slate-600 leading-relaxed">
                    De la vente à la livraison en passant par les emails et les analytics. Tout tourne sans intervention manuelle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fondateur */}
        <div className="mb-20">
          <div className="bg-blue-600 rounded-3xl p-10 text-white shadow-2xl shadow-blue-600/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            <div className="flex items-center gap-6 mb-8 relative z-10">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
                <span className="text-4xl font-black text-blue-600">N</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold">Nash</h2>
                <p className="text-blue-200 font-medium tracking-wide">Entrepreneur en reconversion digitale</p>
              </div>
            </div>
            <p className="text-xl text-blue-50 leading-relaxed mb-6 font-light">
              Pendant des années, j'ai bâti ma vie en tant qu'entrepreneur physique. J'ai connu les contraintes : dépendre du "bouche à oreille", être limité géographiquement, ne pouvoir servir que les clients que je pouvais rencontrer en personne.
            </p>
            <p className="text-xl text-blue-50 leading-relaxed mb-6 font-light">
              Puis j'ai découvert comment transformer mon expertise en systèmes de vente automatisés en ligne. En quelques mois, j'ai pu décupler mes revenus sans multiplier mes heures de travail.
            </p>
            <p className="text-xl text-blue-50 leading-relaxed font-light">
              NASH369 est né de cette conviction : tout entrepreneur mérite d'accéder à ces outils, peu importe son background technique ou son budget. Je partage exactement les méthodes qui ont transformé mon business pour que tu construises ton indépendance financière sans dépendre de personne.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
              <div className="text-5xl font-black text-slate-900 mb-2">300+</div>
              <div className="text-blue-600 font-bold uppercase tracking-wide text-xs">Créateurs accompagnés</div>
            </div>
            <div className="text-center p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
              <div className="text-5xl font-black text-slate-900 mb-2">0€</div>
              <div className="text-blue-600 font-bold uppercase tracking-wide text-xs">De coûts mensuels</div>
            </div>
            <div className="text-center p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
              <div className="text-5xl font-black text-slate-900 mb-2">24h</div>
              <div className="text-blue-600 font-bold uppercase tracking-wide text-xs">Pour lancer un site</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-slate-900 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.2),transparent_50%)]"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">C'est ton moment</h2>
              <p className="text-xl text-slate-400 mb-10 max-w-xl mx-auto">
                Construis ton système. Vends en automatique. Reprends ton indépendance.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/reservation"
                  className="inline-block px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
                >
                  Appel découverte gratuit
                </Link>
                <Link
                  href="/devis"
                  className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-600/30"
                >
                  Demander un devis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
