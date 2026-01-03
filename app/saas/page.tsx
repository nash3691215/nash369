"use client";

import { useState } from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function SaaS() {
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
            Accès anticipé
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            MaTréso
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Le tableau de bord financier pensé pour les PME qui n'ont pas de DAF. Pilotez votre trésorerie en temps réel, sans complication.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-black mb-6">
              Pourquoi MaTréso ?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-electric flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold text-black mb-1">Vue temps réel de votre trésorerie</h3>
                  <p className="text-gray-600 text-sm">
                    Connectez vos comptes bancaires et suivez vos flux en temps réel
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-electric flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold text-black mb-1">Prévi automatique à 30/60/90 jours</h3>
                  <p className="text-gray-600 text-sm">
                    Anticipez vos besoins de trésorerie avec des prévisions automatiques
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-electric flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold text-black mb-1">Alertes intelligentes</h3>
                  <p className="text-gray-600 text-sm">
                    Recevez des notifications avant les tensions de trésorerie
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-electric flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold text-black mb-1">Rapports export-comptable</h3>
                  <p className="text-gray-600 text-sm">
                    Générez vos rapports mensuels prêts pour votre expert-comptable
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl h-96 flex items-center justify-center">
            <span className="text-gray-400">Aperçu du dashboard</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <div className="text-4xl font-bold text-electric mb-2">5 min</div>
            <p className="text-gray-600">
              Pour connecter vos comptes et avoir votre premier dashboard
            </p>
          </Card>

          <Card className="text-center">
            <div className="text-4xl font-bold text-electric mb-2">0€</div>
            <p className="text-gray-600">
              Pendant les 30 premiers jours pour les early adopters
            </p>
          </Card>

          <Card className="text-center">
            <div className="text-4xl font-bold text-electric mb-2">100%</div>
            <p className="text-gray-600">
              Sécurisé et conforme RGPD, vos données restent privées
            </p>
          </Card>
        </div>

        <Card className="bg-electric text-white max-w-2xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              Rejoignez la liste d'attente
            </h2>
            <p className="mb-6 opacity-90">
              Soyez parmi les premiers à tester MaTréso. Accès gratuit pour les 100 premiers inscrits.
            </p>

            {submitted ? (
              <div className="bg-white/20 rounded-lg p-6">
                <svg className="w-12 h-12 text-white mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="font-semibold">Merci pour votre inscription !</p>
                <p className="text-sm opacity-90 mt-2">Nous vous contacterons dès l'ouverture de la bêta.</p>
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
                  Rejoindre la waitlist
                </button>
              </form>
            )}
          </div>
        </Card>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-black mb-4">
            En attendant, découvrez nos mini-SaaS
          </h2>
          <p className="text-gray-600 mb-6">
            Des outils prêts à l'emploi pour automatiser votre reporting dès maintenant
          </p>
          <Button href="/mini-saas" variant="primary">
            Voir les Mini-SaaS
          </Button>
        </div>
      </section>
    </div>
  );
}
