import Link from "next/link";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-black mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Page non trouvée
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="primary">
            Retour à l'accueil
          </Button>
          <Button href="/mini-saas" variant="outline">
            Voir les Mini-SaaS
          </Button>
        </div>
      </div>
    </div>
  );
}
