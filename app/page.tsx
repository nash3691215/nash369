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
              On vous aide à<br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 text-transparent bg-clip-text animate-gradient">vous lancer & grandir.</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              Mini agence digitale pour micro-entrepreneurs et PME. On transforme vos idées en <span className="text-blue-700 font-medium">outils qui génèrent des revenus</span>. Sites web, automatisations, stratégie digitale.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/devis"
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

          {/* Stats Bar */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-200 pt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 mb-1">50+</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest font-bold">Projets</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 mb-1">7 Ans</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest font-bold">Expertise</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 mb-1">0€</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest font-bold">Abonnements</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 mb-1">24/7</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest font-bold">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Clean White */}
      <section id="services" className="py-32 relative bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.3em] mb-4">On vous accompagne</h2>
              <h3 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
                Comment on peut <br /><span className="text-slate-400 italic">vous aider.</span>
              </h3>
            </div>
            <p className="text-slate-500 text-lg max-w-sm mb-2">
              Appel découverte de 30 min pour valider vos besoins. Gratuit et sans engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Site Vitrine */}
            <div className="group relative p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-8 text-blue-600 group-hover:scale-110 transition-transform duration-500">
                🌐
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">Site Vitrine Premium</h4>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Capturez l'attention dès la première seconde. Un design qui convertit et une technique irréprochable.
              </p>
              <ul className="space-y-4 mb-10 text-sm text-slate-600">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> SEO Optimisé</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> Design Responsive</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> Analytics Inclus</li>
              </ul>
              <Link href="/devis" className="inline-flex items-center gap-2 text-blue-600 font-bold group/link">
                Discutons-en
                <span className="group-hover/link:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* E-commerce */}
            <div className="group relative p-10 rounded-3xl bg-blue-600 text-white shadow-2xl shadow-blue-600/30 transition-all duration-500 hover:translate-y-[-5px]">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl mb-8">
                🛒
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Écosystème Sales</h4>
              <p className="text-blue-50 mb-8 leading-relaxed">
                Vendez sans limites. Automatisation complète du tunnel de vente, du paiement à la livraison.
              </p>
              <ul className="space-y-4 mb-10 text-sm text-blue-50 font-medium">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> Paiements Sécurisés</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> Gestion de Stocks</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> Marketing Automation</li>
              </ul>
              <Link href="/devis" className="inline-flex items-center gap-2 text-white font-bold group/link text-lg">
                Parlons de votre projet
                <span className="group-hover/link:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* Automatisations */}
            <div className="group relative p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-8 text-blue-600 group-hover:scale-110 transition-transform duration-500">
                ⚡
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">Architecture IA</h4>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Libérez votre temps. Automatisez les tâches répétitives avec l'IA et connectez vos outils favoris.
              </p>
              <ul className="space-y-4 mb-10 text-sm text-slate-600">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> Workflows Auto</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> Intégration API</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> Support Dédié</li>
              </ul>
              <Link href="/devis" className="inline-flex items-center gap-2 text-blue-600 font-bold group/link">
                Discutons-en
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
