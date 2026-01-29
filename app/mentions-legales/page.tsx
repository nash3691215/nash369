import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Mentions Légales - NASH369',
  description: 'Mentions légales, protection des données et conditions générales de vente',
}

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-white">

      <div className="container mx-auto px-4 py-32 max-w-4xl">
        {/* Hero */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-6 px-4 py-2 glass-blue border border-blue-100 rounded-full">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">
              LÉGAL
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6 text-slate-900">
            Informations Légales
          </h1>
          <p className="text-lg text-slate-500 font-medium">
            Protection des données, CGV et mentions légales
          </p>
        </div>

        <div className="space-y-10">
          {/* Éditeur */}
          <section className="bg-white border border-slate-200 rounded-3xl p-10 hover:border-blue-200 transition-all shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-slate-900 flex items-center gap-4">
              <span className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 text-xl">📍</span>
              Éditeur du Site
            </h2>
            <div className="space-y-3 text-slate-600 pl-14">
              <p><strong className="text-slate-900 font-semibold">Nom commercial:</strong> NASH369</p>
              <p><strong className="text-slate-900 font-semibold">Site web:</strong> <a href="https://nash369.com" className="text-blue-600 hover:text-blue-700 hover:underline">https://nash369.com</a></p>
              <p><strong className="text-slate-900 font-semibold">Email:</strong> <a href="mailto:contact@nash369.com" className="text-blue-600 hover:text-blue-700 hover:underline">contact@nash369.com</a></p>
              <p><strong className="text-slate-900 font-semibold">Hébergement:</strong> Vercel Inc., San Francisco, CA, USA</p>
            </div>
          </section>

          {/* Propriété Intellectuelle */}
          <section className="bg-white border border-slate-200 rounded-3xl p-10 hover:border-blue-200 transition-all shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-slate-900 flex items-center gap-4">
              <span className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 text-xl">©️</span>
              Propriété Intellectuelle
            </h2>
            <p className="text-slate-600 leading-relaxed pl-14">
              Tous les contenus présents sur le site NASH369 (textes, images, formations, guides) sont protégés par le droit d'auteur.
              Toute reproduction, distribution ou utilisation non autorisée est strictement interdite et passible de poursuites.
            </p>
          </section>

          {/* Protection des Données */}
          <section className="bg-white border border-slate-200 rounded-3xl p-10 hover:border-blue-200 transition-all shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-slate-900 flex items-center gap-4">
              <span className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 text-xl">🔒</span>
              Protection des Données (RGPD)
            </h2>
            <div className="space-y-6 text-slate-600 pl-14">
              <div>
                <p className="font-bold text-slate-900 mb-1">Données collectées</p>
                <p>Email, adresse IP, User-Agent pour les leads et achats.</p>
              </div>
              <div>
                <p className="font-bold text-slate-900 mb-1">Finalité</p>
                <p>Envoi de produits achetés, newsletter marketing, support client.</p>
              </div>
              <div>
                <p className="font-bold text-slate-900 mb-1">Conservation</p>
                <p>Données stockées sur Supabase (hébergement Union Européenne).</p>
              </div>
              <div>
                <p className="font-bold text-slate-900 mb-1">Vos droits</p>
                <p>Accès, rectification, suppression, portabilité - Contactez-nous à <span className="font-medium text-blue-600">contact@nash369.com</span></p>
              </div>
              <div>
                <p className="font-bold text-slate-900 mb-1">Cookies</p>
                <p>Google Analytics 4 pour statistiques anonymisées - Désactivable via paramètres navigateur.</p>
              </div>
              <div>
                <p className="font-bold text-slate-900 mb-1">Paiements</p>
                <p>Traités par Stripe (PCI-DSS compliant) - NASH369 ne stocke AUCUNE donnée bancaire.</p>
              </div>
            </div>
          </section>

          {/* Conditions Générales de Vente */}
          <section className="bg-white border border-slate-200 rounded-3xl p-10 hover:border-blue-200 transition-all shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-slate-900 flex items-center gap-4">
              <span className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 text-xl">💳</span>
              Conditions Générales de Vente
            </h2>
            <div className="space-y-6 text-slate-600 pl-14">
              <div>
                <p className="font-bold text-slate-900 mb-1">Produits</p>
                <p>Formations et guides numériques livrés par email sous 24 heures maximum.</p>
              </div>
              <div>
                <p className="font-bold text-slate-900 mb-1">Prix</p>
                <p>Affichés en euros TTC (TVA non applicable - auto-entrepreneur).</p>
              </div>
              <div>
                <p className="font-bold text-slate-900 mb-1">Paiement</p>
                <p>Stripe sécurisé - Carte bancaire, Apple Pay, Google Pay acceptés.</p>
              </div>
              <div>
                <p className="font-bold text-slate-900 mb-1">Droit de rétractation</p>
                <p>14 jours légaux (sauf produits numériques téléchargés - renonciation au droit de rétractation).</p>
              </div>
              <div>
                <p className="font-bold text-slate-900 mb-1">Support client</p>
                <p>Email contact@nash369.com - Réponse garantie sous 48 heures ouvrées.</p>
              </div>
              <div>
                <p className="font-bold text-slate-900 mb-1">Livraison</p>
                <p>Produits numériques envoyés par email - Vérifiez vos spams.</p>
              </div>
            </div>
          </section>

          {/* Responsabilité */}
          <section className="bg-white border border-slate-200 rounded-3xl p-10 hover:border-blue-200 transition-all shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-slate-900 flex items-center gap-4">
              <span className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 text-xl">⚠️</span>
              Limitation de Responsabilité
            </h2>
            <p className="text-slate-600 leading-relaxed pl-14">
              NASH369 ne peut être tenu responsable des dommages directs ou indirects résultant de l'utilisation des formations.
              Les résultats et témoignages présentés ne constituent pas une garantie de résultats identiques.
              Chaque parcours entrepreneurial est unique et dépend de nombreux facteurs personnels.
            </p>
          </section>

          {/* Cookies */}
          <section className="bg-white border border-slate-200 rounded-3xl p-10 hover:border-blue-200 transition-all shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-slate-900 flex items-center gap-4">
              <span className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 text-xl">🍪</span>
              Politique des Cookies
            </h2>
            <div className="space-y-4 text-slate-600 pl-14">
              <p>Le site utilise Google Analytics 4 pour:</p>
              <ul className="list-disc pl-6 space-y-1 marker:text-blue-500">
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
          <section className="bg-slate-900 rounded-3xl p-10 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20"></div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-4 relative z-10">
              <span className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-xl">📧</span>
              Nous Contacter
            </h2>
            <div className="space-y-4 pl-14 relative z-10">
              <p className="flex items-center gap-2"><strong className="text-blue-300">Questions générales:</strong> <a href="mailto:contact@nash369.com" className="hover:text-blue-300 transition-colors border-b border-transparent hover:border-blue-300">contact@nash369.com</a></p>
              <p className="flex items-center gap-2"><strong className="text-blue-300">Support produits:</strong> <a href="mailto:contact@nash369.com" className="hover:text-blue-300 transition-colors border-b border-transparent hover:border-blue-300">contact@nash369.com</a></p>
              <p className="flex items-center gap-2"><strong className="text-blue-300">Demande RGPD:</strong> <a href="mailto:contact@nash369.com" className="hover:text-blue-300 transition-colors border-b border-transparent hover:border-blue-300">contact@nash369.com</a></p>
              <p className="text-sm text-slate-400 pt-4 border-t border-slate-700/50 mt-6 inline-block">Réponse sous 48 heures ouvrées maximum</p>
            </div>
          </section>

          {/* Last Update */}
          <div className="text-center text-slate-400 text-sm pt-8">
            <p>Dernière mise à jour: 26 Janvier 2026</p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
