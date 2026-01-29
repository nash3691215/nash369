'use client'

import Link from 'next/link'
import products from '@/data/products.json'
import { createCheckoutSession } from '@/lib/stripe'
import Footer from '@/components/Footer'

export default function SiteVitrinePage() {
  const product = products.products.find(p => p.id === 'site-vitrine')
  if (!product) return null

  const handleBuy = () => createCheckoutSession('site-vitrine')

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-blue-100/50 bg-white/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="group flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-white text-xl transition-transform group-hover:rotate-12 shadow-lg shadow-blue-600/20">
                N
              </div>
              <div className="text-2xl font-black tracking-tighter text-slate-900">
                NASH369
              </div>
            </Link>
            <Link
              href="/ebooks"
              className="px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-lg font-bold transition-all text-sm border border-slate-200"
            >
              ← Retour aux produits
            </Link>
          </div>
        </div>
      </header>

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left Column - Content */}
            <div className="space-y-10 animate-fade-in">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs font-bold text-blue-700 mb-6 uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                  Best Seller
                </div>
                <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 leading-[1.1]">
                  {product.name}
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed border-l-4 border-blue-600 pl-6">
                  {product.description}
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="text-2xl">🔥</span> Ce que tu vas maîtriser
                </h2>
                <div className="space-y-4">
                  {product.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:border-blue-200 transition-colors">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm mt-0.5">✓</div>
                      <span className="text-slate-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Proof */}
              <div className="glass-blue rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-1 text-yellow-500 text-lg mb-4">
                    ★★★★★
                  </div>
                  <p className="text-lg font-medium text-slate-800 italic mb-4">
                    "Mon site est en ligne depuis hier. 3 demandes de devis reçues ce matin. Formation claire et simple."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">SL</div>
                    <div>
                      <div className="font-bold text-slate-900">Sophie L.</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider">Coach Bien-être</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Sticky CTA */}
            <div className="lg:sticky lg:top-32">
              <div className="bg-white rounded-3xl shadow-2xl shadow-blue-900/10 border border-slate-200 p-8 overflow-hidden relative">

                {/* Sale Badge */}
                {product.originalPrice && (
                  <div className="absolute top-4 right-4 bg-red-50 text-red-600 text-xs font-bold px-3 py-1 rounded-full border border-red-100">
                    -50% OFF
                  </div>
                )}

                <div className="text-center mb-8 pb-8 border-b border-slate-100">
                  <div className="text-sm text-slate-500 font-semibold uppercase tracking-widest mb-2">Investissement Unique</div>
                  <div className="flex items-center justify-center gap-3 mb-2">
                    {product.originalPrice && (
                      <span className="text-2xl text-slate-400 line-through font-medium">
                        {product.originalPrice.toFixed(2).replace('.', ',')}€
                      </span>
                    )}
                    <span className="text-6xl font-black text-slate-900 tracking-tight">
                      {product.price.toFixed(2).replace('.', ',')}€
                    </span>
                  </div>
                  <p className="text-sm text-green-600 font-bold bg-green-50 inline-block px-3 py-1 rounded-lg">
                    ⚡️ Offre limitée dans le temps
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <button
                    onClick={handleBuy}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-5 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Commencer maintenant</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                  <p className="text-xs text-center text-slate-400">Paiement sécurisé par Stripe • Accès immédiat</p>
                </div>

                <div className="space-y-3 pt-6">
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                    <span>Paiement 100% Sécurisé</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    <span>Livraison automatique par email</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Garantie Satisfait ou Remboursé 30j</span>
                  </div>
                </div>

                <div className="mt-8 bg-slate-50 rounded-xl p-4 text-center">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Inclus gratuitement</p>
                  <p className="text-sm font-bold text-slate-800">🎁 Template Site Pro + Support Email</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
