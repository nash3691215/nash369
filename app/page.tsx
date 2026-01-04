import Link from "next/link";
import Image from "next/image";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
          NASH369
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Mini-SaaS indépendants pour gérer ton business sans prise de tête.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
          <a href="https://dashai-ochre.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Card hover className="h-full cursor-pointer border-2 border-electric/20">
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-16 h-16 bg-electric/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <span className="inline-block px-3 py-1 bg-electric/10 text-electric text-xs font-bold rounded-full mb-3">
                  NOUVEAU
                </span>
                <h2 className="text-2xl font-bold text-black mb-3">DashAI</h2>
                <p className="text-gray-600 mb-4">
                  Upload ton fichier de ventes → Dashboard instantané avec analyses IA de tes revenus et dépenses.
                </p>
                <p className="text-electric font-bold text-sm">
                  3 essais gratuits • À partir de 1.99€
                </p>
              </div>
            </Card>
          </a>

          <a href="https://dashai-ochre.vercel.app/vinted" target="_blank" rel="noopener noreferrer">
            <Card hover className="h-full cursor-pointer border-2 border-electric/20">
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-16 h-16 bg-electric/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="inline-block px-3 py-1 bg-electric/10 text-electric text-xs font-bold rounded-full mb-3">
                  NOUVEAU
                </span>
                <h2 className="text-2xl font-bold text-black mb-3">DashAI Vinted</h2>
                <p className="text-gray-600 mb-4">
                  Tu revends sur Vinted ? Vois immédiatement tes gains réels après frais de plateforme.
                </p>
                <p className="text-electric font-bold text-sm">
                  3 essais gratuits • À partir de 1.99€
                </p>
              </div>
            </Card>
          </a>
        </div>

        <div className="mt-12">
          <Button href="/mini-saas">
            Voir tous les outils
          </Button>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black text-center mb-12">
            Comment ça marche ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-electric text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Upload ton fichier</h3>
              <p className="text-gray-600">
                Excel, CSV ou format de ventes de ta plateforme
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-electric text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Vois clair immédiatement</h3>
              <p className="text-gray-600">
                Dashboard avec graphiques, KPIs et analyses automatiques
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-electric text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Exporte en PDF</h3>
              <p className="text-gray-600">
                Partage tes résultats ou garde-les pour tes comptes
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
