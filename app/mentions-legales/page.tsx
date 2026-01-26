import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Mentions Légales - NASH369',
  description: 'Mentions légales, protection des données et conditions générales de vente',
}

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-white">
      {/* Premium Header - Same as Homepage */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo avec dégradé doré */}
            <Link href="/" className="group flex items-center gap-2">
              <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-gray-900 via-amber-900 to-gray-800 text-transparent bg-clip-text transition-all group-hover:scale-105">
                NASH369
              </div>
              <span className="hidden md:inline-block px-2 py-1 bg-amber-50 border border-amber-200 rounded text-xs font-bold text-amber-800">
                PRO
              </span>
            </Link>

            {/* Navigation */}
            <nav className="flex items-center gap-2 md:gap-4">
              <Link
                href="/"
                className="px-3 md:px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all"
              >
                Accueil
              </Link>
              <a
                href="/#services"
                className="px-3 md:px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all"
              >
                Services
              </a>
              <a
                href="/#formations"
                className="px-3 md:px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all"
              >
                Formations
              </a>
              <Link
                href="/a-propos"
                className="hidden md:block px-3 md:px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all"
              >
                À propos
              </Link>
              <Link
                href="/devis"
                className="px-4 md:px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-sm font-bold rounded-lg transition-all transform hover:scale-105 shadow-sm hover:shadow-md"
              >
                Devis gratuit
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-amber-100 to-amber-50 border border-amber-200 rounded-full">
            <span className="text-sm font-bold bg-gradient-to-r from-amber-600 to-amber-800 text-transparent bg-clip-text">
              MENTIONS LÉGALES
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 via-amber-900 to-gray-800 text-transparent bg-clip-text">
            Informations Légales
          </h1>
          <p className="text-lg text-gray-600">
            Protection des données, CGV et mentions légales
          </p>
        </div>

        <div className="space-y-12">
          {/* Éditeur */}
          <section className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-amber-300 transition-all">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span>📍</span> Éditeur du Site
            </h2>
            <div className="space-y-2 text-gray-700">
              <p><strong>Nom commercial:</strong> NASH369</p>
              <p><strong>Site web:</strong> <a href="https://nash369.com" className="text-amber-600 hover:text-amber-700">https://nash369.com</a></p>
              <p><strong>Email:</strong> <a href="mailto:contact@nash369.com" className="text-amber-600 hover:text-amber-700">contact@nash369.com</a></p>
              <p><strong>Hébergement:</strong> Vercel Inc., San Francisco, CA, USA</p>
            </div>
          </section>

          {/* Propriété Intellectuelle */}
          <section className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-amber-300 transition-all">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span>©️</span> Propriété Intellectuelle
            </h2>
            <p className="text-gray-700">
              Tous les contenus présents sur le site NASH369 (textes, images, formations, guides) sont protégés par le droit d'auteur.
              Toute reproduction, distribution ou utilisation non autorisée est strictement interdite et passible de poursuites.
            </p>
          </section>

          {/* Protection des Données */}
          <section className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-amber-300 transition-all">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span>🔒</span> Protection des Données (RGPD)
            </h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-bold text-gray-900">Données collectées:</p>
                <p>Email, adresse IP, User-Agent pour les leads et achats</p>
              </div>
              <div>
                <p className="font-bold text-gray-900">Finalité:</p>
                <p>Envoi de produits achetés, newsletter marketing, support client</p>
              </div>
              <div>
                <p className="font-bold text-gray-900">Conservation:</p>
                <p>Données stockées sur Supabase (hébergement Union Européenne)</p>
              </div>
              <div>
                <p className="font-bold text-gray-900">Vos droits:</p>
                <p>Accès, rectification, suppression, portabilité - Contactez-nous à contact@nash369.com</p>
              </div>
              <div>
                <p className="font-bold text-gray-900">Cookies:</p>
                <p>Google Analytics 4 pour statistiques anonymisées - Désactivable via paramètres navigateur</p>
              </div>
              <div>
                <p className="font-bold text-gray-900">Paiements:</p>
                <p>Traités par Stripe (PCI-DSS compliant) - NASH369 ne stocke AUCUNE donnée bancaire</p>
              </div>
            </div>
          </section>

          {/* Conditions Générales de Vente */}
          <section className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-amber-300 transition-all">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span>💳</span> Conditions Générales de Vente
            </h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-bold text-gray-900">Produits:</p>
                <p>Formations et guides numériques livrés par email sous 24 heures maximum</p>
              </div>
              <div>
                <p className="font-bold text-gray-900">Prix:</p>
                <p>Affichés en euros TTC (TVA non applicable - auto-entrepreneur)</p>
              </div>
              <div>
                <p className="font-bold text-gray-900">Paiement:</p>
                <p>Stripe sécurisé - Carte bancaire, Apple Pay, Google Pay acceptés</p>
              </div>
              <div>
                <p className="font-bold text-gray-900">Droit de rétractation:</p>
                <p>14 jours légaux (sauf produits numériques téléchargés - renonciation au droit de rétractation)</p>
              </div>
              <div>
                <p className="font-bold text-gray-900">Support client:</p>
                <p>Email contact@nash369.com - Réponse garantie sous 48 heures ouvrées</p>
              </div>
              <div>
                <p className="font-bold text-gray-900">Livraison:</p>
                <p>Produits numériques envoyés par email - Vérifiez vos spams</p>
              </div>
            </div>
          </section>

          {/* Responsabilité */}
          <section className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-amber-300 transition-all">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span>⚠️</span> Limitation de Responsabilité
            </h2>
            <p className="text-gray-700">
              NASH369 ne peut être tenu responsable des dommages directs ou indirects résultant de l'utilisation des formations.
              Les résultats et témoignages présentés ne constituent pas une garantie de résultats identiques.
              Chaque parcours entrepreneurial est unique et dépend de nombreux facteurs personnels.
            </p>
          </section>

          {/* Cookies */}
          <section className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-amber-300 transition-all">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span>🍪</span> Politique des Cookies
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>Le site utilise Google Analytics 4 pour:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Analyser le trafic et améliorer l'expérience utilisateur</li>
                <li>Mesurer l'efficacité des campagnes marketing</li>
                <li>Comprendre les parcours d'achat</li>
              </ul>
              <p>
                Vous pouvez désactiver les cookies via les paramètres de votre navigateur ou utiliser des extensions comme uBlock Origin.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-gradient-to-br from-gray-900 via-amber-900 to-gray-800 rounded-xl p-6 text-white shadow-lg">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span>📧</span> Nous Contacter
            </h2>
            <div className="space-y-2">
              <p><strong>Questions générales:</strong> <a href="mailto:contact@nash369.com" className="text-amber-200 hover:text-amber-100">contact@nash369.com</a></p>
              <p><strong>Support produits:</strong> <a href="mailto:contact@nash369.com" className="text-amber-200 hover:text-amber-100">contact@nash369.com</a></p>
              <p><strong>Demande RGPD:</strong> <a href="mailto:contact@nash369.com" className="text-amber-200 hover:text-amber-100">contact@nash369.com</a></p>
              <p className="text-sm text-amber-100 pt-2">Réponse sous 48 heures ouvrées maximum</p>
            </div>
          </section>

          {/* Last Update */}
          <div className="text-center text-gray-500 text-sm pt-4 border-t border-gray-200">
            <p>Dernière mise à jour: 26 Janvier 2026</p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
