'use client'

import Link from 'next/link'
import { useState } from 'react'
import Header from '@/components/Header'

export default function DevisPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-emerald-50">
      <Header />

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Obtiens ton <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">devis gratuit</span>
        </h1>
        <p className="text-xl text-gray-600 mb-4">
          Site vitrine, e-commerce ou système sur-mesure
        </p>
        <p className="text-lg text-gray-500">
          Dis-moi où tu en es dans ton projet 👇
        </p>
      </section>

      {/* Qualification Cards */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-8">

          {/* Projet validé */}
          <Link href="/devis/projet-valide" className="group">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-indigo-500 h-full">
              <div className="text-5xl mb-6">✅</div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-indigo-600 transition-colors">
                J'ai un projet précis
              </h2>
              <p className="text-gray-600 mb-6">
                Mon projet est validé, j'ai un budget et une deadline. Je veux un devis détaillé.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-emerald-500 text-xl">→</span>
                  <span className="text-gray-700">Devis personnalisé sous 24h</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-500 text-xl">→</span>
                  <span className="text-gray-700">Timeline précis de livraison</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-500 text-xl">→</span>
                  <span className="text-gray-700">Tarification transparente</span>
                </div>
              </div>

              <div className="bg-indigo-50 rounded-xl p-4 border-2 border-indigo-100 group-hover:border-indigo-300 transition-colors">
                <p className="text-sm font-semibold text-indigo-900">
                  Je remplis le formulaire détaillé →
                </p>
              </div>
            </div>
          </Link>

          {/* Exploration */}
          <Link href="/tarifs" className="group">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-emerald-500 h-full">
              <div className="text-5xl mb-6">💡</div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-emerald-600 transition-colors">
                Je me renseigne
              </h2>
              <p className="text-gray-600 mb-6">
                Je découvre les possibilités. Je veux voir les tarifs et comprendre ce qui est possible.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-indigo-500 text-xl">→</span>
                  <span className="text-gray-700">Grille tarifaire transparente</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-500 text-xl">→</span>
                  <span className="text-gray-700">Exemples concrets de projets</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-500 text-xl">→</span>
                  <span className="text-gray-700">Options et fonctionnalités</span>
                </div>
              </div>

              <div className="bg-emerald-50 rounded-xl p-4 border-2 border-emerald-100 group-hover:border-emerald-300 transition-colors">
                <p className="text-sm font-semibold text-emerald-900">
                  Je découvre les tarifs →
                </p>
              </div>
            </div>
          </Link>

        </div>
      </section>

      {/* Trust section */}
      <section className="max-w-4xl mx-auto px-6 pb-20 text-center">
        <div className="bg-gradient-to-r from-indigo-600 to-emerald-600 rounded-2xl p-8 text-white">
          <p className="text-2xl font-bold mb-2">Pourquoi NASH369 ?</p>
          <p className="text-indigo-100">
            Systèmes utiles. Simples. Rentables. Sans bullshit, sans surprises.
          </p>
        </div>
      </section>
    </div>
  )
}
