export default function Confidentialite() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-black mb-8">Politique de confidentialité</h1>

      <div className="prose prose-gray max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Introduction</h2>
          <p className="text-gray-700">
            NASH369 s'engage à protéger la confidentialité et la sécurité des données personnelles de ses utilisateurs. Cette politique explique comment nous collectons, utilisons et protégeons vos informations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Données collectées</h2>
          <p className="text-gray-700 mb-4">
            Nous collectons les données suivantes :
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><strong>Données d'identification :</strong> nom, prénom, email</li>
            <li><strong>Données de commande :</strong> historique d'achats, préférences de produits</li>
            <li><strong>Données de navigation :</strong> pages visitées, durée de visite (via cookies)</li>
            <li><strong>Données de paiement :</strong> traitées par nos partenaires de paiement (Gumroad), nous ne stockons pas vos informations bancaires</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Utilisation des données</h2>
          <p className="text-gray-700 mb-4">
            Vos données sont utilisées pour :
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Traiter vos commandes et fournir nos services</li>
            <li>Vous envoyer des informations sur vos achats</li>
            <li>Améliorer notre site et nos produits</li>
            <li>Vous informer de nos nouveaux produits (avec votre consentement)</li>
            <li>Respecter nos obligations légales</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Partage des données</h2>
          <p className="text-gray-700 mb-4">
            Nous ne vendons ni ne louons vos données personnelles. Vos données peuvent être partagées avec :
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><strong>Gumroad :</strong> pour le traitement des paiements</li>
            <li><strong>Vercel :</strong> pour l'hébergement du site</li>
            <li><strong>Services d'emailing :</strong> si vous vous inscrivez à notre newsletter</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Ces prestataires sont tenus de respecter la confidentialité de vos données et ne peuvent les utiliser à d'autres fins.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Cookies</h2>
          <p className="text-gray-700 mb-4">
            Notre site utilise des cookies pour améliorer votre expérience de navigation. Les cookies nous permettent de :
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Mémoriser vos préférences</li>
            <li>Analyser le trafic du site</li>
            <li>Personnaliser le contenu</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Vous pouvez désactiver les cookies dans les paramètres de votre navigateur, mais certaines fonctionnalités du site pourraient être limitées.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conservation des données</h2>
          <p className="text-gray-700">
            Vos données sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, et conformément aux obligations légales (généralement 3 ans après le dernier contact pour les prospects, et pendant la durée légale pour les clients).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Vos droits</h2>
          <p className="text-gray-700 mb-4">
            Conformément au RGPD, vous disposez des droits suivants :
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
            <li><strong>Droit de rectification :</strong> corriger vos données inexactes</li>
            <li><strong>Droit à l'effacement :</strong> supprimer vos données</li>
            <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
            <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
            <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@nash369.com" className="text-electric hover:underline">contact@nash369.com</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Sécurité</h2>
          <p className="text-gray-700">
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre la perte, l'utilisation abusive, l'accès non autorisé, la divulgation, la modification ou la destruction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4">Contact</h2>
          <p className="text-gray-700">
            Pour toute question concernant cette politique de confidentialité, contactez-nous à :<br />
            <a href="mailto:contact@nash369.com" className="text-electric hover:underline">contact@nash369.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}
