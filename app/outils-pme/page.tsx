import type { Metadata } from "next";
import Card from "@/components/Card";
import Button from "@/components/Button";
import FAQ from "@/components/FAQ";
import { offers } from "@/data/offers";
import { faqOutilsPME } from "@/data/faq";

export const metadata: Metadata = {
  title: "Outils PME — Dashboards & Automatisation | NASH369",
  description: "Dashboards Excel sur mesure et automatisation pour piloter votre PME. Audit, outils personnalisés et support inclus.",
};

export default function OutilsPME() {
  const whatsappUrl = "https://wa.me/33123456789?text=Bonjour,%20je%20souhaite%20en%20savoir%20plus%20sur%20les%20outils%20PME";

  return (
    <div>
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Pilotez votre PME avec des outils simples et efficaces
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Dashboards Excel sur mesure, automatisation de vos rapports, et outils adaptés à votre activité. Sans abonnement mensuel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={whatsappUrl} variant="primary">
              Discuter sur WhatsApp
            </Button>
            <Button href="/mini-saas" variant="outline">
              Voir les Mini-SaaS
            </Button>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-black text-center mb-12">
          Les problèmes qu'on résout
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Données éparpillées</h3>
              <p className="text-gray-600">
                Vos chiffres sont dans WhatsApp, Excel, emails, plateformes... Impossible d'avoir une vue d'ensemble.
              </p>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Perte de temps</h3>
              <p className="text-gray-600">
                Vous passez des heures à copier-coller, recompter, vérifier... Au lieu de développer votre activité.
              </p>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Outils trop chers</h3>
              <p className="text-gray-600">
                Les logiciels coûtent 100-500€/mois pour des fonctionnalités dont vous n'avez pas besoin.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-black text-center mb-4">
          Nos offres
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Choisissez la formule adaptée à vos besoins. Pas d'abonnement, juste un investissement ponctuel.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <Card
              key={offer.id}
              className={offer.highlighted ? "border-2 border-electric" : ""}
              hover
            >
              {offer.highlighted && (
                <div className="bg-electric text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                  POPULAIRE
                </div>
              )}
              <h3 className="text-2xl font-bold text-black mb-2">{offer.name}</h3>
              <p className="text-gray-600 mb-4">{offer.description}</p>
              <p className="text-3xl font-bold text-black mb-6">{offer.priceLabel}</p>
              <ul className="space-y-3 mb-6">
                {offer.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-5 h-5 text-electric flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button href="/contact" variant={offer.highlighted ? "primary" : "outline"} className="w-full">
                {offer.ctaText}
              </Button>
            </Card>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-black text-center mb-12">
          Quelques réalisations
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center mb-4">
              <span className="text-gray-400">Dashboard WhatsApp → Excel</span>
            </div>
            <h3 className="font-semibold text-black mb-2">Restaurant, Paris</h3>
            <p className="text-sm text-gray-600">
              Automatisation complète des rapports de commandes WhatsApp avec calcul de CA et marges.
            </p>
          </Card>

          <Card>
            <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center mb-4">
              <span className="text-gray-400">Dashboard Delivery consolidé</span>
            </div>
            <h3 className="font-semibold text-black mb-2">Dark Kitchen, Lyon</h3>
            <p className="text-sm text-gray-600">
              Consolidation Uber Eats + Deliveroo avec analyse des performances par plateforme.
            </p>
          </Card>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black text-center mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Un processus simple et rapide
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-electric text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                1
              </div>
              <h3 className="font-semibold text-black mb-2">Audit gratuit</h3>
              <p className="text-sm text-gray-600">
                On discute 30-60 min pour comprendre vos besoins et identifier les gains possibles.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-electric text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                2
              </div>
              <h3 className="font-semibold text-black mb-2">Développement</h3>
              <p className="text-sm text-gray-600">
                On crée votre dashboard ou automatisation. Vous validez en temps réel.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-electric text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                3
              </div>
              <h3 className="font-semibold text-black mb-2">Formation & suivi</h3>
              <p className="text-sm text-gray-600">
                On vous forme à l'utilisation et on reste disponible pour le support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-black text-center mb-12">
          Questions fréquentes
        </h2>
        <FAQ items={faqOutilsPME} />
      </section>

      <section className="bg-electric text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à automatiser votre PME ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Discutons de vos besoins. Premier échange gratuit et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary">
              Nous contacter
            </Button>
            <a
              href={whatsappUrl}
              className="inline-block px-6 py-3 rounded-lg font-medium transition-all text-center bg-white text-electric hover:bg-gray-100"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
