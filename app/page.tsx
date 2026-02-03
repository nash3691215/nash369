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
              Vous vous lancez ?<br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 text-transparent bg-clip-text animate-gradient">Votre site est votre arme.</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              Sans site, vous n'existez pas sur internet. Sans présence digitale, vos clients ne vous trouvent jamais. <span className="text-blue-700 font-medium">NASH369 transforme votre vision en une machine à générer des revenus</span>. Sites web, automatisations, stratégie digitale optimisée pour votre succès.
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

      {/* Problem Section - Why a Website Matters */}
      <section className="py-32 relative bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-20 text-center">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.3em] mb-4">Le problème des entrepreneurs</h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8">
              Pourquoi avoir un site web est <br /><span className="text-blue-600">non-négociable en 2025</span>
            </h3>
            <p className="text-xl text-slate-600 leading-relaxed">
              Vous avez une super idée, mais sans présence en ligne, vous laissez de l'argent sur la table. Voici la réalité :
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Problem 1 */}
            <div className="relative p-8 rounded-2xl bg-white border-2 border-red-200">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center text-2xl mb-6 text-red-600">
                ❌
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">Sans site = invisible</h4>
              <p className="text-slate-600 leading-relaxed">
                Vos clients potentiels vous cherchent en ligne. S'ils ne vous trouvent pas, ils vont chez vos concurrents. C'est aussi simple que ça.
              </p>
            </div>

            {/* Problem 2 */}
            <div className="relative p-8 rounded-2xl bg-white border-2 border-red-200">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center text-2xl mb-6 text-red-600">
                📉
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">Sans site = pas de crédibilité</h4>
              <p className="text-slate-600 leading-relaxed">
                Un site professionnel, c'est la confiance. Pas de site ? Vous avez l'air amateur. Vos clients hésitent à vous faire confiance.
              </p>
            </div>

            {/* Problem 3 */}
            <div className="relative p-8 rounded-2xl bg-white border-2 border-red-200">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center text-2xl mb-6 text-red-600">
                💸
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">Sans site = moins de ventes</h4>
              <p className="text-slate-600 leading-relaxed">
                Pas de vitrine digitale, pas de sales 24/7. Vous perdez des ventes pendant que vous dormez. Vos concurrents, eux, vendent.
              </p>
            </div>
          </div>

          {/* The Solution */}
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              C'est là que NASH369 entre en jeu
            </h3>
            <p className="text-lg text-blue-50 mb-8 leading-relaxed">
              On comprend que tu débutes. C'est pour ça qu'on a créé une solution spécialement pour les entrepreneurs qui se lancent. Un site professionnel, performant, sans les frais de grosse agence.
            </p>
            <Link
              href="/reservation"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105"
            >
              Lançons votre projet →
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section - Clean White */}
      <section id="services" className="py-32 relative bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.3em] mb-4">Ça marche comment</h2>
              <h3 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
                On t'offre exactement <br /><span className="text-slate-400 italic">ce qu'il te faut.</span>
              </h3>
            </div>
            <p className="text-slate-500 text-lg max-w-sm mb-2">
              Tout ça sans te complexifier la vie. Des solutions simples pour des entrepreneurs comme toi.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Site Vitrine */}
            <div className="group relative p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-8 text-blue-600 group-hover:scale-110 transition-transform duration-500">
                🌐
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">Votre Présence Web</h4>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Un vrai site web professionnel. Beau, rapide, qui vous fait paraître légitime et qu'on trouve facilement sur Google.
              </p>
              <ul className="space-y-4 mb-10 text-sm text-slate-600">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> Site qui se charge vite</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> Fonctionne sur mobile</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> On le voit sur Google</li>
              </ul>
              <Link href="/reservation" className="inline-flex items-center gap-2 text-blue-600 font-bold group/link">
                Commencer
                <span className="group-hover/link:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* E-commerce */}
            <div className="group relative p-10 rounded-3xl bg-blue-600 text-white shadow-2xl shadow-blue-600/30 transition-all duration-500 hover:translate-y-[-5px]">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl mb-8">
                🛒
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Vendre en Ligne</h4>
              <p className="text-blue-50 mb-8 leading-relaxed">
                Une vraie boutique en ligne. Vos clients paient, vous recevez l'argent. Tout automatisé, même pendant que vous dormez.
              </p>
              <ul className="space-y-4 mb-10 text-sm text-blue-50 font-medium">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> Paiement sécurisé</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> Gestion des ventes</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> Emails de confirmation auto</li>
              </ul>
              <Link href="/reservation" className="inline-flex items-center gap-2 text-white font-bold group/link text-lg">
                Vendre plus
                <span className="group-hover/link:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* Automatisations */}
            <div className="group relative p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-8 text-blue-600 group-hover:scale-110 transition-transform duration-500">
                ⚡
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">Gagner du Temps</h4>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Stop les tâches répétitives à la main. On connecte vos outils pour que tout marche automatiquement.
              </p>
              <ul className="space-y-4 mb-10 text-sm text-slate-600">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> Plus de temps manuel</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> Moins d'erreurs</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> On vous aide si besoin</li>
              </ul>
              <Link href="/reservation" className="inline-flex items-center gap-2 text-blue-600 font-bold group/link">
                Simplifier
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
