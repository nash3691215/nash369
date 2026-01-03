import Card from "@/components/Card";
import Button from "@/components/Button";
import Link from "next/link";

export default function JsonToExcel() {
  return (
    <div>
      <div className="bg-gray-50 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-electric">Accueil</Link>
            {" / "}
            <Link href="/indie" className="hover:text-electric">Indie Space</Link>
            {" / "}
            <span className="text-black">JSON to Excel</span>
          </nav>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              JSON → Excel Converter
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Convertissez vos fichiers JSON en Excel structurés et exploitables. Sans code, sans limite.
            </p>
            <div className="flex items-baseline gap-4 mb-8">
              <p className="text-4xl font-bold text-black">19€</p>
              <span className="text-gray-500">achat unique</span>
            </div>
            <Button href="https://gumroad.com/nash369/json-excel" variant="primary" className="text-lg">
              Acheter maintenant
            </Button>
          </div>

          <div className="bg-gray-100 rounded-xl h-96 flex items-center justify-center">
            <span className="text-gray-400">Interface de conversion</span>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black text-center mb-12">
            Cas d'usage
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="font-semibold text-black mb-2">Exports d'API</h3>
              <p className="text-sm text-gray-600">
                Convertissez les réponses de vos APIs (Stripe, Shopify, etc.) en tableaux Excel lisibles
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold text-black mb-2">Dumps de base de données</h3>
              <p className="text-sm text-gray-600">
                Transformez vos exports MongoDB ou Firebase en fichiers Excel pour analyse
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold text-black mb-2">Fichiers de config</h3>
              <p className="text-sm text-gray-600">
                Visualisez et éditez vos fichiers de configuration JSON dans Excel
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold text-black mb-2">Analytics & logs</h3>
              <p className="text-sm text-gray-600">
                Analysez vos logs JSON ou données analytics dans Excel avec filtres et graphiques
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-black text-center mb-12">
          Fonctionnalités
        </h2>

        <div className="space-y-6">
          <Card>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-electric/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-black mb-1">Structure automatique</h3>
                <p className="text-gray-600 text-sm">
                  Détecte automatiquement la structure de votre JSON et crée les colonnes appropriées
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-electric/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-black mb-1">Données imbriquées</h3>
                <p className="text-gray-600 text-sm">
                  Gère les objets et tableaux imbriqués, avec aplatissement intelligent
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-electric/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-black mb-1">Fichiers volumineux</h3>
                <p className="text-gray-600 text-sm">
                  Traite jusqu'à 50 Mo de données (version standard), 500 Mo (version Pro)
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-electric/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-black mb-1">Traitement local</h3>
                <p className="text-gray-600 text-sm">
                  Toutes vos données restent sur votre machine, aucun upload vers nos serveurs
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="bg-electric text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à convertir vos JSON ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Achat unique. Utilisation illimitée. Mises à jour incluses.
          </p>
          <Button href="https://gumroad.com/nash369/json-excel" variant="secondary" className="text-lg">
            Acheter pour 19€
          </Button>
          <p className="text-sm opacity-75 mt-4">
            Garantie satisfait ou remboursé 30 jours
          </p>
        </div>
      </section>
    </div>
  );
}
