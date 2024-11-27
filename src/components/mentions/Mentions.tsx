export default function Mentions() {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center p-8">
        <h1 className="text-4xl font-bold mb-8">Mentions Légales</h1>
  
        <div className="max-w-3xl w-full space-y-8 text-lg">
          {/* Éditeur du site */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Éditeur du site</h2>
            <p>
              Le présent site est édité par :
            </p>
            <ul className="list-disc ml-5 space-y-2">
              <li><strong>Nom ou Raison sociale :</strong> Victor Diaz </li>
              <li><strong>Adresse :</strong> Paris </li>
              <li><strong>Email :</strong> victorpro669@gmail.com </li>
            </ul>
          </section>
  
          {/* Hébergeur du site */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Hébergeur du site</h2>
            <p>
              Le site est hébergé par :
            </p>
            <ul className="list-disc ml-5 space-y-2">
              <li><strong>Nom de l'hébergeur :</strong> Vercel </li>
              <li><strong>Site web :</strong> <a href="https://vercel.com/" className="text-blue-400 hover:underline">Vercel.com</a></li>
            </ul>
          </section>
  
          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Propriété intellectuelle</h2>
            <p>
              Tous les éléments présents sur ce site (textes, images, graphismes, logos, vidéos, etc.) sont protégés par les lois relatives à la propriété intellectuelle. Ils sont la propriété exclusive de [Ton nom ou celui de ton entreprise], sauf mention contraire. Toute reproduction ou représentation, totale ou partielle, du site ou de l’un des éléments le composant, sans autorisation expresse, est interdite.
            </p>
          </section>
  
          {/* Données personnelles */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Données personnelles</h2>
            <p>
              Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée, et au Règlement Général sur la Protection des Données (RGPD), vous disposez d’un droit d’accès, de rectification, de suppression et d’opposition aux données personnelles vous concernant. Vous pouvez exercer ce droit en nous contactant à l'adresse suivante : [Ton email ou adresse postale].
            </p>
          </section>
  
          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
            <p>
              Ce site utilise des cookies afin de vous offrir une expérience optimale. Vous pouvez paramétrer l'utilisation des cookies à tout moment dans les paramètres de votre navigateur. En poursuivant votre navigation sur ce site, vous acceptez l’utilisation de cookies.
            </p>
          </section>
  
          {/* Responsabilité */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Responsabilité</h2>
            <p>
              Les informations présentes sur ce site sont fournies à titre indicatif. Bien que nous nous efforçons de garantir leur exactitude, nous ne pouvons être tenus responsables des erreurs ou omissions. L’utilisateur du site est responsable de l’usage qu’il fait des informations présentes sur ce site.
            </p>
          </section>
  
          {/* Liens externes */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Liens externes</h2>
            <p>
              Ce site peut contenir des liens vers des sites tiers. Nous n'exerçons aucun contrôle sur ces sites et ne pouvons être responsables de leur contenu. L'accès à ces sites se fait sous votre propre responsabilité.
            </p>
          </section>
  
          {/* Modifications des mentions légales */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Modifications des mentions légales</h2>
            <p>
              Nous nous réservons le droit de modifier ces mentions légales à tout moment. Les modifications seront publiées sur cette page. Nous vous conseillons de consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.
            </p>
          </section>
  
          {/* Footer */}
          <footer className="mt-12 text-center text-sm text-gray-400">
            <p>&copy; 2024 Victor. Tous droits réservés.</p>
          </footer>
        </div>
      </div>
    );
  }
  