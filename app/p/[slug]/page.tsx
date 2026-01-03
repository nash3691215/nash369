import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import Card from "@/components/Card";
import FAQ from "@/components/FAQ";
import { getProductBySlug, products } from "@/data/products";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: "Produit non trouvé | NASH369",
    };
  }

  return {
    title: `${product.name} | NASH369`,
    description: product.shortDescription,
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div>
      <div className="bg-gray-50 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-electric">Accueil</Link>
            {" / "}
            <Link href="/mini-saas" className="hover:text-electric">Mini-SaaS</Link>
            {" / "}
            <span className="text-black">{product.name}</span>
          </nav>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              {product.name}
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              {product.shortDescription}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-baseline gap-4 mb-8">
              <p className="text-4xl font-bold text-black">{product.priceLabel}</p>
            </div>
            <Button href={product.gumroadUrl} variant="primary" className="text-lg">
              Accès immédiat
            </Button>
          </div>

          <div className="bg-gray-100 rounded-xl h-96 flex items-center justify-center">
            <span className="text-gray-400">Screenshot principal</span>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card>
              <h2 className="text-2xl font-bold text-black mb-4">Le problème</h2>
              <p className="text-gray-700 leading-relaxed">{product.problem}</p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-black mb-4">La solution</h2>
              <p className="text-gray-700 leading-relaxed">{product.solution}</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-black text-center mb-12">
          Captures d'écran
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {product.screenshots.map((screenshot, index) => (
            <div key={index} className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
              <span className="text-gray-400">Screenshot {index + 1}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-black mb-6">Ce que vous donnez</h2>
              <ul className="space-y-3">
                {product.inputs.map((input, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-electric flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-gray-700">{input}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-6">Ce que vous obtenez</h2>
              <ul className="space-y-3">
                {product.outputs.map((output, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{output}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black text-center mb-12">
            Ce que ça remplace
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {product.whatItReplaces.map((item, index) => (
              <Card key={index}>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white border-2 border-electric rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            {product.priceLabel}
          </h2>
          <p className="text-gray-600 mb-6">
            Achat unique. Utilisation illimitée. Mises à jour incluses.
          </p>
          <Button href={product.gumroadUrl} variant="primary" className="text-lg">
            Accès immédiat
          </Button>
          <p className="text-sm text-gray-500 mt-4">
            Paiement sécurisé via Gumroad. Garantie satisfait ou remboursé 30 jours.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-black text-center mb-12">
          Questions fréquentes
        </h2>
        <FAQ items={product.faq} />
      </section>

      <section className="bg-electric text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Découvrez nos autres outils
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Plus de mini-SaaS pour automatiser votre PME
          </p>
          <Button href="/mini-saas" variant="secondary">
            Voir tous les Mini-SaaS
          </Button>
        </div>
      </section>
    </div>
  );
}
