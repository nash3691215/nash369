"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Card from "@/components/Card";
import { products, allTags } from "@/data/products";

export default function MiniSaaS() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredProducts =
    selectedTags.length === 0
      ? products
      : products.filter((p) => p.tags.some((tag) => selectedTags.includes(tag)));

  return (
    <div>
      <section className="bg-gradient-to-br from-electric/5 via-white to-electric/5 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-electric rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-electric rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric/10 rounded-full mb-6">
            <svg className="w-5 h-5 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm font-semibold text-electric">Outils de gestion indépendants</span>
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

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-gray-700 mb-3">Filtrer par catégorie :</h2>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTags.includes(tag)
                    ? "bg-electric text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tag}
              </button>
            ))}
            {selectedTags.length > 0 && (
              <button
                onClick={() => setSelectedTags([])}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-200 text-gray-700 hover:bg-gray-300"
              >
                Réinitialiser
              </button>
            )}
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Aucun produit trouvé pour ces filtres.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const isDashAI = product.slug === "dashai" || product.slug === "dashai-vinted";
              const LinkWrapper = isDashAI ? "a" : Link;
              const linkProps = isDashAI
                ? { href: product.gumroadUrl, target: "_blank", rel: "noopener noreferrer" }
                : { href: `/p/${product.slug}` };

              return (
                <LinkWrapper key={product.slug} {...linkProps}>
                  <Card hover className={`h-full cursor-pointer group transition-all ${isDashAI ? 'border-2 border-electric/30 shadow-lg hover:shadow-2xl' : 'hover:border-electric/20'}`}>
                    {isDashAI && (
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-electric text-white text-xs font-bold rounded-full">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          DISPONIBLE
                        </span>
                        <span className="text-xs font-semibold text-electric">En ligne →</span>
                      </div>
                    )}

                    <div className="aspect-video bg-gradient-to-br from-electric/10 via-electric/5 to-purple-50 rounded-xl mb-4 overflow-hidden relative group-hover:scale-[1.02] transition-transform">
                      {product.screenshots && product.screenshots.length > 0 ? (
                        <Image
                          src={product.screenshots[0]}
                          alt={product.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-6">
                          <div className="relative">
                            <div className="absolute inset-0 bg-electric/20 rounded-full blur-xl"></div>
                            <svg className="w-20 h-20 text-electric relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          </div>
                          <div className="mt-4 flex gap-2">
                            <div className="w-2 h-2 bg-electric/40 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-electric/40 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                            <div className="w-2 h-2 bg-electric/40 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                          </div>
                        </div>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-black mb-2 group-hover:text-electric transition-colors">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.shortDescription}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.tags.slice(0, 3).map((tag) => (
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
                        {isDashAI && (
                          <div className="flex items-center gap-1 text-xs text-electric font-semibold group-hover:gap-2 transition-all">
                            <span>Essayer</span>
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                </LinkWrapper>
              );
            })}
          </div>
        )}
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-black mb-4">
            Pourquoi un système de crédits ?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Pas d'abonnement mensuel, pas de surprise. Tu paies uniquement pour ce que tu utilises. Les crédits n'expirent jamais.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg">
              <div className="text-2xl font-bold text-black mb-2">1 crédit</div>
              <div className="text-3xl font-bold text-electric mb-2">1.99€</div>
              <p className="text-gray-600 text-sm">1 dashboard généré</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-electric">
              <div className="text-xs font-bold text-electric mb-2">PLUS POPULAIRE</div>
              <div className="text-2xl font-bold text-black mb-2">7 crédits</div>
              <div className="text-3xl font-bold text-electric mb-2">9.9€</div>
              <p className="text-gray-600 text-sm">7 dashboards • -29%</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="text-xs font-bold text-electric mb-2">MEILLEURE OFFRE</div>
              <div className="text-2xl font-bold text-black mb-2">20 crédits</div>
              <div className="text-3xl font-bold text-electric mb-2">19.9€</div>
              <p className="text-gray-600 text-sm">20 dashboards • -50%</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            Chaque outil fonctionne avec le même système de crédits. 1 crédit = 1 dashboard jusqu'à 10K lignes.
          </p>
        </div>
      </section>
    </div>
  );
}
