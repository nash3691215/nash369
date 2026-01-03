import Link from "next/link";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function Indie() {
  return (
    <div>
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Indie Space
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Outils nichés pour builders, développeurs et makers. Des solutions simples pour des problèmes spécifiques.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-black text-center mb-12">
          Outils disponibles
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Link href="/indie/json-to-excel">
            <Card hover className="h-full cursor-pointer">
              <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-400 text-sm">JSON → Excel</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">
                JSON to Excel Converter
              </h3>
              <p className="text-gray-600 mb-4">
                Convertissez vos fichiers JSON en Excel proprement formatés. Parfait pour les exports d'API et data dumps.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-electric font-bold">À partir de 19€</span>
                <span className="text-sm text-gray-500">En savoir plus →</span>
              </div>
            </Card>
          </Link>

          <Card className="opacity-60">
            <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-400 text-sm">Bientôt</span>
            </div>
            <div className="inline-block px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-xs font-semibold mb-3">
              COMING SOON
            </div>
            <h3 className="text-2xl font-bold text-black mb-3">
              Autres outils en préparation
            </h3>
            <p className="text-gray-600">
              Plus d'outils pour developers et indie hackers arrivent prochainement.
            </p>
          </Card>
        </div>

        <Card className="bg-gray-50">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-black mb-4">
              Vous avez une idée d'outil ?
            </h2>
            <p className="text-gray-600 mb-6">
              Vous êtes développeur, indie maker ou builder avec une idée d'outil niche ? Parlons-en. On peut le construire ensemble.
            </p>
            <Button href="/contact" variant="primary">
              Proposer une idée
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
}
