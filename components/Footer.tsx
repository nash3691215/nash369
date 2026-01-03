import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-bold text-black mb-4">NASH369</h3>
            <p className="text-sm text-gray-600">
              Outils et mini-SaaS pour piloter votre PME sans friction.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-black mb-4">Produits</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/outils-pme" className="text-sm text-gray-600 hover:text-electric">
                  Outils PME
                </Link>
              </li>
              <li>
                <Link href="/mini-saas" className="text-sm text-gray-600 hover:text-electric">
                  Mini-SaaS
                </Link>
              </li>
              <li>
                <Link href="/saas" className="text-sm text-gray-600 hover:text-electric">
                  SaaS (accès anticipé)
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-black mb-4">Ressources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/formations" className="text-sm text-gray-600 hover:text-electric">
                  Formations
                </Link>
              </li>
              <li>
                <Link href="/indie" className="text-sm text-gray-600 hover:text-electric">
                  Indie Space
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-electric">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-black mb-4">Légal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/legal/mentions-legales" className="text-sm text-gray-600 hover:text-electric">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/legal/cgv" className="text-sm text-gray-600 hover:text-electric">
                  CGV
                </Link>
              </li>
              <li>
                <Link href="/legal/confidentialite" className="text-sm text-gray-600 hover:text-electric">
                  Confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} NASH369. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
