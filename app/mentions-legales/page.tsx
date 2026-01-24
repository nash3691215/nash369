import Link from 'next/link';

export const metadata = {
  title: 'Mentions Légales - NASH369',
  description: 'Mentions légales, protection des données et conditions générales de vente',
};

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900">
      {/* Header */}
      <nav className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="text-white font-bold text-xl">
              NASH369
            </Link>
            <Link
              href="/"
              className="text-white/80 hover:text-white transition-colors"
            >
              ← Retour à l'accueil
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
          <h1 className="text-4xl font-bold text-white mb-8">Mentions Légales</h1>

          <div className="space-y-8 text-white/90">
            {/* Éditeur */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">📍 Éditeur du Site</h2>
              <div className="space-y-2 pl-4">
                <p><strong>Nom commercial:</strong> NASH369</p>
                <p><strong>Site web:</strong> <a href="https://nash369.com" className="text-purple-300 hover:text-purple-200">https://nash369.com</a></p>
                <p><strong>Email:</strong> <a href="mailto:noreply@nash369.com" className="text-purple-300 hover:text-purple-200">noreply@nash369.com</a></p>
                <p><strong>Hébergement:</strong> Vercel Inc., San Francisco, CA, USA</p>
              </div>
            </section>

            {/* Propriété Intellectuelle */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">©️ Propriété Intellectuelle</h2>
              <p className="pl-4">
                Tous les contenus présents sur le site NASH369 (textes, images, formations, guides) sont protégés par le droit d'auteur.
                Toute reproduction, distribution ou utilisation non autorisée est strictement interdite et passible de poursuites.
              </p>
            </section>

            {/* Protection des Données */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">🔒 Protection des Données (RGPD)</h2>
              <div className="space-y-3 pl-4">
                <div>
                  <p className="font-semibold">Données collectées:</p>
                  <p className="pl-4">Email, adresse IP, User-Agent pour les leads et achats</p>
                </div>
                <div>
                  <p className="font-semibold">Finalité:</p>
                  <p className="pl-4">Envoi de produits achetés, newsletter marketing, support client</p>
                </div>
                <div>
                  <p className="font-semibold">Conservation:</p>
                  <p className="pl-4">Données stockées sur Supabase (hébergement Union Européenne)</p>
                </div>
                <div>
                  <p className="font-semibold">Vos droits:</p>
                  <p className="pl-4">Accès, rectification, suppression, portabilité - Contactez-nous à noreply@nash369.com</p>
                </div>
                <div>
                  <p className="font-semibold">Cookies:</p>
                  <p className="pl-4">Google Analytics 4 pour statistiques anonymisées - Désactivable via paramètres navigateur</p>
                </div>
                <div>
                  <p className="font-semibold">Paiements:</p>
                  <p className="pl-4">Traités par Stripe (PCI-DSS compliant) - NASH369 ne stocke AUCUNE donnée bancaire</p>
                </div>
              </div>
            </section>

            {/* Conditions Générales de Vente */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">💳 Conditions Générales de Vente</h2>
              <div className="space-y-3 pl-4">
                <div>
                  <p className="font-semibold">Produits:</p>
                  <p className="pl-4">Formations et guides numériques livrés par email sous 24 heures maximum</p>
                </div>
                <div>
                  <p className="font-semibold">Prix:</p>
                  <p className="pl-4">Affichés en euros TTC (TVA non applicable - auto-entrepreneur)</p>
                </div>
                <div>
                  <p className="font-semibold">Paiement:</p>
                  <p className="pl-4">Stripe sécurisé - Carte bancaire, Apple Pay, Google Pay acceptés</p>
                </div>
                <div>
                  <p className="font-semibold">Droit de rétractation:</p>
                  <p className="pl-4">14 jours légaux (sauf produits numériques téléchargés - renonciation au droit de rétractation)</p>
                </div>
                <div>
                  <p className="font-semibold">Support client:</p>
                  <p className="pl-4">Email noreply@nash369.com - Réponse garantie sous 48 heures ouvrées</p>
                </div>
                <div>
                  <p className="font-semibold">Livraison:</p>
                  <p className="pl-4">Produits numériques envoyés par email - Vérifiez vos spams</p>
                </div>
              </div>
            </section>

            {/* Responsabilité */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">⚠️ Limitation de Responsabilité</h2>
              <p className="pl-4">
                NASH369 ne peut être tenu responsable des dommages directs ou indirects résultant de l'utilisation des formations.
                Les résultats et témoignages présentés ne constituent pas une garantie de résultats identiques.
                Chaque parcours entrepreneurial est unique et dépend de nombreux facteurs personnels.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">🍪 Politique des Cookies</h2>
              <div className="space-y-2 pl-4">
                <p>Le site utilise Google Analytics 4 pour:</p>
                <ul className="list-disc pl-8 space-y-1">
                  <li>Analyser le trafic et améliorer l'expérience utilisateur</li>
                  <li>Mesurer l'efficacité des campagnes marketing</li>
                  <li>Comprendre les parcours d'achat</li>
                </ul>
                <p className="pt-2">
                  Vous pouvez désactiver les cookies via les paramètres de votre navigateur ou utiliser des extensions comme uBlock Origin.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">📧 Nous Contacter</h2>
              <div className="pl-4 space-y-2">
                <p><strong>Questions générales:</strong> <a href="mailto:noreply@nash369.com" className="text-purple-300 hover:text-purple-200">noreply@nash369.com</a></p>
                <p><strong>Support produits:</strong> <a href="mailto:noreply@nash369.com" className="text-purple-300 hover:text-purple-200">noreply@nash369.com</a></p>
                <p><strong>Demande RGPD:</strong> <a href="mailto:noreply@nash369.com" className="text-purple-300 hover:text-purple-200">noreply@nash369.com</a></p>
                <p className="text-sm text-white/70 pt-2">Réponse sous 48 heures ouvrées maximum</p>
              </div>
            </section>

            {/* Footer */}
            <div className="pt-8 border-t border-white/20 text-center text-white/60 text-sm">
              <p>© 2026 NASH369 - Tous droits réservés</p>
              <p className="mt-2">Dernière mise à jour: 22 Janvier 2026</p>
            </div>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
