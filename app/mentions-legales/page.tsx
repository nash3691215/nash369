import Link from 'next/link'

export const metadata = {
  title: 'Mentions légales - NASH369',
  description: 'Mentions légales et conditions d\'utilisation',
}

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-slate-900 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-orange-500 hover:text-orange-600 font-semibold mb-8 inline-block">
          ← Retour
        </Link>

        <h1 className="text-4xl font-bold font-display text-slate-100 mb-12">Mentions légales</h1>

        <div className="space-y-8 text-slate-300">
          <section>
            <h2 className="text-2xl font-bold text-slate-100 mb-4">1. Éditeur du site</h2>
            <p className="mb-4">
              <strong>Nom :</strong> NASH369
            </p>
            <p className="mb-4">
              <strong>Gérant :</strong> Noureddine
            </p>
            <p>
              <strong>Localisation :</strong> Montpellier, France
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-100 mb-4">2. Hébergement</h2>
            <p className="mb-4">
              <strong>Hébergeur :</strong> Vercel Inc.
            </p>
            <p>
              Le site est hébergé chez Vercel, une plateforme de déploiement cloud.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-100 mb-4">3. Propriété intellectuelle</h2>
            <p className="mb-4">
              Tous les contenus du site (textes, images, graphiques, logos) sont la propriété de NASH369 ou de ses partenaires et sont protégés par les lois sur la propriété intellectuelle.
            </p>
            <p>
              Toute reproduction ou utilisation sans autorisation est interdite.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-100 mb-4">4. Produits numériques - Conditions de vente</h2>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Livraison immédiate par email après paiement</li>
              <li>Droit de rétractation : 14 jours à compter de l'achat</li>
              <li>Remboursement intégral sur demande (sans condition)</li>
              <li>Accès illimité au contenu acheté</li>
              <li>Les ebooks sont téléchargeables en PDF</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-100 mb-4">5. Paiement - Stripe</h2>
            <p className="mb-4">
              Les paiements sont traités par Stripe, un prestataire de paiement sécurisé. Tes données bancaires ne sont jamais stockées sur nos serveurs.
            </p>
            <p>
              Pour toute question sur les transactions, consulte la politique de confidentialité de Stripe.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-100 mb-4">6. Données personnelles</h2>
            <p className="mb-4">
              Les données que tu fournis (email, nom, téléphone) sont utilisées pour :
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Traiter ta commande</li>
              <li>T'envoyer ton achat</li>
              <li>Te contacter pour du support</li>
              <li>T'envoyer nos newsletters (tu peux te désinscrire à tout moment)</li>
            </ul>
            <p>
              Tes données ne sont jamais vendues ou partagées à des tiers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-100 mb-4">7. Responsabilité</h2>
            <p className="mb-4">
              NASH369 met tout en œuvre pour assurer l'exactitude des informations présentes sur le site. Cependant, le site est fourni "tel quel" sans garantie d'aucune sorte.
            </p>
            <p>
              NASH369 ne peut pas être tenu responsable des dommages directs ou indirects liés à l'utilisation du site ou des produits.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-100 mb-4">8. Contact</h2>
            <p className="mb-2">
              <strong>Email :</strong> noureddine@nash369.com
            </p>
            <p>
              <strong>Téléphone :</strong> +33 6 12 34 56 78
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-100 mb-4">9. Modification des conditions</h2>
            <p>
              NASH369 se réserve le droit de modifier ces mentions légales à tout moment. Les modifications prennent effet dès leur publication sur le site.
            </p>
          </section>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mt-12">
            <p className="text-slate-400 text-sm">
              <strong>Dernière mise à jour :</strong> Février 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
