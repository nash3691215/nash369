'use client'

import Link from 'next/link'
import Header from '@/components/Header'

export default function TarifsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-emerald-50">
      <Header />

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Tarifs <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">transparents</span>
        </h1>
        <p className="text-xl text-gray-600">
          Prix clairs. Pas de surprises. Tu paies ce que tu vois.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-8 mb-12">

          {/* Pack Vitrine */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100 hover:border-indigo-300 transition-all">
            <div className="mb-6">
              <div className="text-sm font-bold text-indigo-600 uppercase tracking-wide mb-2">
                Pack Vitrine
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold text-gray-900">299€</span>
                <span className="text-gray-500">départ</span>
              </div>
              <p className="text-gray-600">
                Site professionnel pour présenter ton activité
              </p>
            </div>

            <div className="mb-8">
              <h3 className="font-bold text-gray-900 mb-4">Inclus :</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700">Site 1-5 pages responsive</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700">Design professionnel et moderne</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700">Optimisé mobile/tablette/PC</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700">Hébergement inclus</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700">Formulaire de contact basique</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700">SEO de base (titres, descriptions)</span>
                </li>
              </ul>
            </div>

            <div className="mb-6 pt-6 border-t-2 border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Options sur devis :</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400">→</span>
                  <span className="text-gray-600">Formulaire email avancé (multi-champs, validation)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400">→</span>
                  <span className="text-gray-600">Intégration Google Workspace</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400">→</span>
                  <span className="text-gray-600">Connexion agenda automatique (prise de RDV)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400">→</span>
                  <span className="text-gray-600">Google Maps intégration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400">→</span>
                  <span className="text-gray-600">Galerie photos/vidéos dynamique</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400">→</span>
                  <span className="text-gray-600">Blog/actualités</span>
                </li>
              </ul>
            </div>

            <div className="bg-indigo-50 rounded-xl p-4 text-sm text-gray-700">
              <strong className="text-indigo-900">Idéal pour :</strong> Artisans, commerces locaux, professions libérales, associations
            </div>
          </div>

          {/* Pack E-commerce */}
          <div className="bg-gradient-to-br from-indigo-600 to-emerald-600 rounded-2xl shadow-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
              POPULAIRE
            </div>

            <div className="mb-6">
              <div className="text-sm font-bold text-indigo-100 uppercase tracking-wide mb-2">
                Pack E-commerce
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold">999€</span>
                <span className="text-indigo-100">départ</span>
              </div>
              <p className="text-indigo-100">
                Site prêt à vendre et encaisser
              </p>
            </div>

            <div className="mb-8">
              <h3 className="font-bold mb-4">Tout du Pack Vitrine +</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-300 text-xl flex-shrink-0">✓</span>
                  <span>Système de paiement Stripe intégré</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-300 text-xl flex-shrink-0">✓</span>
                  <span>Gestion produits/stock</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-300 text-xl flex-shrink-0">✓</span>
                  <span>Panier et checkout optimisés</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-300 text-xl flex-shrink-0">✓</span>
                  <span>Espace client et suivi commandes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-300 text-xl flex-shrink-0">✓</span>
                  <span>Emails transactionnels automatiques</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-300 text-xl flex-shrink-0">✓</span>
                  <span>Tunnel de vente optimisé conversion</span>
                </li>
              </ul>
            </div>

            <div className="mb-6 pt-6 border-t-2 border-white/20">
              <h3 className="font-bold mb-4">Options sur devis :</h3>
              <ul className="space-y-2 text-sm text-indigo-50">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">→</span>
                  <span>Chatbot IA support client 24/7</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">→</span>
                  <span>Analytics avancés (comportement, conversion)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">→</span>
                  <span>Automation email marketing (abandon panier, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">→</span>
                  <span>Système d'avis clients</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">→</span>
                  <span>Codes promo et gestion campagnes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">→</span>
                  <span>Marketplace multi-vendeurs</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-sm">
              <strong>Idéal pour :</strong> E-commerce, formations en ligne, services récurrents, produits digitaux
            </div>
          </div>

        </div>

        {/* Custom Projects */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center">
          <div className="text-4xl mb-4">🚀</div>
          <h2 className="text-3xl font-bold mb-4">Projet sur-mesure ?</h2>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Application web, automation IA, système complexe, API, CRM personnalisé... Tout est possible.
          </p>
          <p className="text-gray-400 mb-8">
            Chaque projet est unique. Décris-moi ton besoin et je te fais un devis adapté.
          </p>
          <Link
            href="/devis/projet-valide"
            className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-emerald-600 rounded-xl font-bold text-lg hover:shadow-2xl transition-all"
          >
            Demander un devis personnalisé
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Questions fréquentes</h2>

        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Le prix est-il vraiment final ?</h3>
            <p className="text-gray-600">
              Le prix de départ est garanti pour les fonctionnalités incluses. Les options sont facturées en plus selon tes besoins. Pas de frais cachés, tout est transparent dès le devis.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Combien de temps pour livrer ?</h3>
            <p className="text-gray-600">
              Site vitrine : 7-14 jours. E-commerce : 3-4 semaines. Projets sur-mesure : selon complexité. Je définis un timeline précis dans le devis.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold text-lg mb-2 text-gray-900">L'hébergement est inclus combien de temps ?</h3>
            <p className="text-gray-600">
              La première année est incluse. Ensuite, renouvellement annuel à tarif transparent (généralement 50-150€/an selon la taille du site).
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Puis-je modifier le contenu moi-même après ?</h3>
            <p className="text-gray-600">
              Oui. Je te forme à la gestion de ton site (textes, images, produits). Ou je peux gérer les modifications pour toi si tu préfères (forfait maintenance disponible).
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Comment fonctionne le paiement ?</h3>
            <p className="text-gray-600">
              50% à la validation du devis, 50% à la livraison. Paiement sécurisé par virement ou Stripe. Garantie satisfait ou remboursé si le projet ne correspond pas au devis.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-r from-indigo-600 to-emerald-600 rounded-2xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à lancer ton projet ?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Devis gratuit et personnalisé sous 24h
          </p>
          <Link
            href="/devis/projet-valide"
            className="inline-block px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold text-lg hover:shadow-2xl transition-all"
          >
            Obtenir mon devis maintenant
          </Link>
        </div>
      </section>
    </div>
  )
}
