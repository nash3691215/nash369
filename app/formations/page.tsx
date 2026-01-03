"use client";

import { useState } from "react";
import Card from "@/components/Card";

export default function Formations() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 bg-electric/10 text-electric rounded-full text-sm font-semibold mb-6">
            Bientôt disponible
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Formations PME
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Apprenez à automatiser vos process, créer vos propres dashboards Excel, et gagner en autonomie.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-black text-center mb-12">
          Formations à venir
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <h3 className="text-xl font-bold text-black mb-3">
              Excel pour dirigeants PME
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Créez vos propres dashboards de pilotage sans formules complexes. Niveau débutant à intermédiaire.
            </p>
            <div className="text-sm text-gray-500">
              Format : vidéos + exercices pratiques
            </div>
          </Card>

          <Card>
            <h3 className="text-xl font-bold text-black mb-3">
              Automatiser sans coder
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Utilisez Make, Zapier et autres outils no-code pour automatiser vos tâches répétitives.
            </p>
            <div className="text-sm text-gray-500">
              Format : ateliers en ligne
            </div>
          </Card>

          <Card>
            <h3 className="text-xl font-bold text-black mb-3">
              Trésorerie pour non-financiers
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Comprenez et pilotez votre trésorerie. Prévisions, alertes, et tableaux de bord simples.
            </p>
            <div className="text-sm text-gray-500">
              Format : masterclass + templates
            </div>
          </Card>
        </div>

        <Card className="bg-electric text-white max-w-2xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              Soyez informé du lancement
            </h2>
            <p className="mb-6 opacity-90">
              Rejoignez la liste d'attente et recevez 30% de réduction sur la première formation.
            </p>

            {submitted ? (
              <div className="bg-white/20 rounded-lg p-6">
                <svg className="w-12 h-12 text-white mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="font-semibold">Merci pour votre inscription !</p>
                <p className="text-sm opacity-90 mt-2">Nous vous préviendrons dès le lancement des formations.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg text-black outline-none"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors whitespace-nowrap"
                >
                  Rejoindre la liste
                </button>
              </form>
            )}
          </div>
        </Card>
      </section>
    </div>
  );
}
