"use client";

import Image from "next/image";
import Card from "@/components/Card";

export default function Boutique() {
  const dashAIProducts = [
    {
      name: "DashAI - Dashboard Intelligent",
      shortDescription: "Upload ton fichier de ventes et génère instantanément un dashboard avec analyses IA de tes revenus, dépenses et rentabilité.",
      priceLabel: "1.99€ • 7 crédits à 9.9€ • 20 crédits à 19.9€",
      gumroadUrl: "https://dashai-ochre.vercel.app/",
      screenshots: ["/screenshots/dashai-1.jpg", "/screenshots/dashai-2.jpg"],
      tags: ["dashboard", "analytics", "ia", "treso"],
      features: [
        "Dashboard interactif avec KPIs",
        "Analyse de rentabilité automatique",
        "Export PDF haute qualité",
        "Jusqu'à 10K lignes par fichier"
      ]
    },
    {
      name: "DashAI Vinted - Analytics pour Revendeurs",
      shortDescription: "Tu revends sur Vinted ? Upload ton fichier de ventes → Vois immédiatement tes gains réels après frais Vinted.",
      priceLabel: "1.99€ • 7 crédits à 9.9€ • 20 crédits à 19.9€",
      gumroadUrl: "https://dashai-ochre.vercel.app/vinted",
      screenshots: ["/screenshots/dashai-vinted-1.jpg", "/screenshots/dashai-vinted-2.jpg"],
      tags: ["dashboard", "vinted", "ecommerce", "analytics"],
      features: [
        "Gains nets après frais Vinted",
        "Répartition par catégorie",
        "Analyse de rentabilité détaillée",
        "Export PDF pour tes comptes"
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-electric/5 via-white to-electric/5 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-electric rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-electric rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric/10 rounded-full mb-6 animate-bounce">
            <svg className="w-5 h-5 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm font-semibold text-electric">Outils disponibles maintenant</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
            Pilote ton business<br/>
            <span className="text-electric">en quelques clics</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Upload ton fichier → Obtiens un dashboard complet avec analyses automatiques.
            Pas d'abonnement, juste ce dont tu as besoin.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
            <div className="bg-white/80 backdrop-blur-sm border border-electric/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-electric/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-black mb-2">3 essais gratuits</h3>
              <p className="text-sm text-gray-600">Teste sans risque avant d'acheter</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-electric/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-electric/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-black mb-2">Résultat immédiat</h3>
              <p className="text-sm text-gray-600">Dashboard généré en secondes</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-electric/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-electric/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
              <h3 className="font-bold text-black mb-2">Export PDF</h3>
              <p className="text-sm text-gray-600">Sauvegarde et partage facilement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {dashAIProducts.map((product, index) => (
            <a
              key={index}
              href={product.gumroadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card hover className="h-full cursor-pointer border-2 border-electric/30 shadow-lg hover:shadow-2xl transition-all">
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-electric text-white text-xs font-bold rounded-full">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    DISPONIBLE
                  </span>
                  <span className="text-xs font-semibold text-electric">En ligne →</span>
                </div>

                <div className="aspect-video bg-gradient-to-br from-electric/10 via-electric/5 to-purple-50 rounded-xl mb-4 overflow-hidden relative group-hover:scale-[1.02] transition-transform">
                  <Image
                    src={product.screenshots[0]}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-electric transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.shortDescription}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-bold text-black mb-2">Ce que tu obtiens:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-5 h-5 text-electric flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-electric/5 text-electric text-xs font-medium rounded-lg border border-electric/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <p className="text-electric font-bold text-base">{product.priceLabel.split('•')[0]}</p>
                    <div className="flex items-center gap-1 text-xs text-electric font-semibold group-hover:gap-2 transition-all">
                      <span>Essayer maintenant</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Pourquoi un système de crédits ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pas d'abonnement mensuel qui plombe tes charges. Tu paies uniquement pour ce que tu utilises.
              Les crédits n'expirent jamais.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer">
              <div className="text-2xl font-bold text-black mb-2">1 crédit</div>
              <div className="text-4xl font-bold text-electric mb-3">1.99€</div>
              <p className="text-gray-600 text-sm mb-4">1 dashboard généré</p>
              <p className="text-xs text-gray-500">Parfait pour tester</p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-electric shadow-md hover:shadow-2xl transition-all relative transform hover:-translate-y-2 hover:scale-105 cursor-pointer">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-3 py-1 bg-electric text-white text-xs font-bold rounded-full animate-pulse">
                  PLUS POPULAIRE
                </span>
              </div>
              <div className="text-2xl font-bold text-black mb-2">7 crédits</div>
              <div className="text-4xl font-bold text-electric mb-3">9.9€</div>
              <p className="text-gray-600 text-sm mb-4">7 dashboards</p>
              <p className="text-xs text-green-600 font-semibold">-29% d'économie</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer">
              <div className="text-xs font-bold text-electric mb-2">MEILLEURE OFFRE</div>
              <div className="text-2xl font-bold text-black mb-2">20 crédits</div>
              <div className="text-4xl font-bold text-electric mb-3">19.9€</div>
              <p className="text-gray-600 text-sm mb-4">20 dashboards</p>
              <p className="text-xs text-green-600 font-semibold">-50% d'économie</p>
            </div>
          </div>

          <p className="text-sm text-gray-500 text-center mt-8">
            Chaque outil fonctionne avec le même système de crédits. 1 crédit = 1 dashboard jusqu'à 10K lignes.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
            Questions fréquentes
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-black mb-2">
                C'est vraiment sans abonnement ?
              </h3>
              <p className="text-gray-600">
                Oui, 100%. Tu achètes des crédits une seule fois, ils n'expirent jamais. Tu les utilises quand tu veux.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-black mb-2">
                Mes données sont-elles sécurisées ?
              </h3>
              <p className="text-gray-600">
                Absolument. Traitement 100% sécurisé. Tes données ne sont jamais stockées sur nos serveurs.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-black mb-2">
                Quels formats de fichiers sont acceptés ?
              </h3>
              <p className="text-gray-600">
                Excel (.xlsx, .xls) et CSV. Ton fichier doit contenir au minimum des colonnes de revenus et dépenses.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-black mb-2">
                Ça marche vraiment en quelques secondes ?
              </h3>
              <p className="text-gray-600">
                Oui. Upload ton fichier, l'IA génère ton dashboard en moins d'une minute. Pas de config compliquée.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
