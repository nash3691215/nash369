import Link from "next/link";
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
          Outils & mini-SaaS pour piloter une PME sans friction.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
          <Link href="/outils-pme">
            <Card hover className="h-full cursor-pointer">
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-16 h-16 bg-electric/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-black mb-3">Outils PME</h2>
                <p className="text-gray-600">
                  Dashboards sur mesure et automatisation pour piloter votre activité en temps réel.
                </p>
              </div>
            </Card>
          </Link>

          <Link href="/mini-saas">
            <Card hover className="h-full cursor-pointer">
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-16 h-16 bg-electric/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-black mb-3">Mini-SaaS</h2>
                <p className="text-gray-600">
                  Outils prêts à l'emploi pour automatiser vos tâches répétitives : exports, rapports, conversions.
                </p>
              </div>
            </Card>
          </Link>
        </div>

        <div className="mt-12">
          <Button href="/outils-pme">
            Voir les outils
          </Button>
        </div>
      </section>
    </div>
  );
}
