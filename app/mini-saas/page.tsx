"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
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
            Mini-SaaS
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Outils prêts à l'emploi pour automatiser vos exports, rapports et conversions. Achat unique, utilisation illimitée.
          </p>
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
            {filteredProducts.map((product) => (
              <Link key={product.slug} href={`/p/${product.slug}`}>
                <Card hover className="h-full cursor-pointer">
                  <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Screenshot</span>
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
                  <p className="text-electric font-bold text-lg">{product.priceLabel}</p>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-black mb-4">
            Besoin d'un outil personnalisé ?
          </h2>
          <p className="text-gray-600 mb-6">
            Nous développons aussi des outils sur mesure pour votre PME.
          </p>
          <Link
            href="/outils-pme"
            className="inline-block px-6 py-3 bg-electric text-white rounded-lg font-medium hover:bg-electric-dark transition-colors"
          >
            Découvrir les Outils PME
          </Link>
        </div>
      </section>
    </div>
  );
}
