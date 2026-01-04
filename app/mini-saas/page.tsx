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
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Mini-SaaS Indépendants
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Outils en ligne prêts à l'emploi. Upload ton fichier → Dashboard instantané. Système de crédits simple, pas d'abonnement.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>3 essais gratuits</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Résultat immédiat</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Export PDF inclus</span>
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
                  <Card hover className={`h-full cursor-pointer ${isDashAI ? 'border-2 border-electric/30' : ''}`}>
                    {isDashAI && (
                      <span className="inline-block px-3 py-1 bg-electric/10 text-electric text-xs font-bold rounded-full mb-3">
                        NOUVEAU • DISPONIBLE
                      </span>
                    )}
                    <div className="aspect-video bg-gradient-to-br from-electric/5 to-electric/20 rounded-lg mb-4 overflow-hidden relative">
                      {product.screenshots && product.screenshots.length > 0 ? (
                        <Image
                          src={product.screenshots[0]}
                          alt={product.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <svg className="w-16 h-16 text-electric/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{product.shortDescription}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-electric font-bold text-sm">{product.priceLabel}</p>
                    {isDashAI && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-xs text-gray-500 flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                          Essayer maintenant
                        </p>
                      </div>
                    )}
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
