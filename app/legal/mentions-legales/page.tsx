export default function MentionsLegales() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-black mb-8">Mentions légales</h1>

      <div className="prose prose-gray max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Éditeur du site</h2>
          <p className="text-gray-700 mb-2">
            <strong>Raison sociale :</strong> NASH369
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Forme juridique :</strong> [À compléter]
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Adresse :</strong> [À compléter]
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Email :</strong> contact@nash369.com
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Numéro SIRET :</strong> [À compléter]
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Directeur de la publication</h2>
          <p className="text-gray-700">
            [Nom du directeur de publication]
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Hébergement</h2>
          <p className="text-gray-700 mb-2">
            <strong>Hébergeur :</strong> Vercel Inc.
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA
          </p>
          <p className="text-gray-700">
            <strong>Site web :</strong> <a href="https://vercel.com" className="text-electric hover:underline">vercel.com</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Propriété intellectuelle</h2>
          <p className="text-gray-700 mb-4">
            L'ensemble des contenus présents sur ce site (textes, images, logos, graphismes, vidéos, etc.) est la propriété exclusive de NASH369 ou de ses partenaires.
          </p>
          <p className="text-gray-700">
            Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Limitation de responsabilité</h2>
          <p className="text-gray-700 mb-4">
            NASH369 ne pourra être tenu responsable des dommages directs ou indirects causés au matériel de l'utilisateur lors de l'accès au site.
          </p>
          <p className="text-gray-700">
            NASH369 s'efforce de fournir des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, inexactitudes ou carences dans la mise à jour.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4">Droit applicable</h2>
          <p className="text-gray-700">
            Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
          </p>
        </section>
      </div>
    </div>
  );
}
