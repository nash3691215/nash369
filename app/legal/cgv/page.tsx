export default function CGV() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-black mb-8">Conditions Générales de Vente</h1>

      <div className="prose prose-gray max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Article 1 - Objet</h2>
          <p className="text-gray-700">
            Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre NASH369 et ses clients pour la vente de produits numériques (mini-SaaS) et de prestations de services (outils PME sur mesure).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Article 2 - Produits et services</h2>
          <p className="text-gray-700 mb-4">
            NASH369 propose :
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Des produits numériques (mini-SaaS) en téléchargement immédiat</li>
            <li>Des prestations de développement d'outils sur mesure pour PME</li>
            <li>Des audits et conseils en automatisation</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Article 3 - Prix</h2>
          <p className="text-gray-700 mb-4">
            Les prix sont indiqués en euros, toutes taxes comprises (TTC). NASH369 se réserve le droit de modifier ses tarifs à tout moment, étant entendu que le prix figurant au moment de la commande sera le seul applicable à l'acheteur.
          </p>
          <p className="text-gray-700">
            Pour les prestations sur mesure, un devis détaillé sera fourni avant toute intervention.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Article 4 - Commande et paiement</h2>
          <p className="text-gray-700 mb-4">
            Les produits numériques sont vendus via la plateforme Gumroad. Le paiement s'effectue de manière sécurisée par carte bancaire.
          </p>
          <p className="text-gray-700">
            Pour les prestations sur mesure, un acompte de 30% peut être demandé à la validation du devis.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Article 5 - Livraison</h2>
          <p className="text-gray-700 mb-4">
            <strong>Produits numériques :</strong> L'accès au produit est fourni immédiatement après paiement via un lien de téléchargement.
          </p>
          <p className="text-gray-700">
            <strong>Prestations sur mesure :</strong> Les délais de livraison sont convenus lors de la signature du devis et peuvent varier selon la complexité du projet.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Article 6 - Droit de rétractation</h2>
          <p className="text-gray-700 mb-4">
            Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne peut être exercé pour les contenus numériques fournis immédiatement après la conclusion du contrat.
          </p>
          <p className="text-gray-700">
            Toutefois, NASH369 offre une garantie satisfait ou remboursé de 30 jours sur ses produits numériques.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Article 7 - Garantie et support</h2>
          <p className="text-gray-700 mb-4">
            Les produits numériques sont garantis exempts de virus et de défauts. Un support technique est fourni par email.
          </p>
          <p className="text-gray-700">
            Pour les prestations sur mesure, la période de support est spécifiée dans le devis (généralement 3 à 6 mois).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Article 8 - Propriété intellectuelle</h2>
          <p className="text-gray-700 mb-4">
            L'achat d'un produit numérique confère une licence d'utilisation personnelle et non exclusive. La revente ou la redistribution du produit est strictement interdite.
          </p>
          <p className="text-gray-700">
            Pour les prestations sur mesure, le client acquiert les droits d'utilisation des outils développés pour son usage propre.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Article 9 - Protection des données</h2>
          <p className="text-gray-700">
            Les données personnelles collectées sont utilisées uniquement pour le traitement des commandes et le support client. Pour plus d'informations, consultez notre{" "}
            <a href="/legal/confidentialite" className="text-electric hover:underline">politique de confidentialité</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4">Article 10 - Litige</h2>
          <p className="text-gray-700">
            En cas de litige, une solution amiable sera recherchée avant toute action judiciaire. À défaut, les tribunaux français seront seuls compétents.
          </p>
        </section>
      </div>
    </div>
  );
}
