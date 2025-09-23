import React from 'react';

function MentionsLegales() {
  return (
    <div>
      <h1>Mentions Légales</h1>

      <section>
        <h2>Éditeur du site</h2>
        <p>Nom de l’entreprise : EVLE Kouamlan Williams</p>
        <p>Email : evlekouamlanwilliams@yahoo.fr</p>
        <p>Téléphone : 06 41 85 22 53</p>
        <p>Numéro SIRET : 123 456 789 00012</p> {/* Remplacez par votre SIRET réel */}
      </section>

      <section>
        <h2>Directeur de la publication</h2>
        <p>EVLE Kouamlan Williams</p>
      </section>

      <section>
        <h2>Hébergeur</h2>
        <p>Nom : IONOS</p>
        <p>Site : <a href="https://www.ionos.fr/">https://www.ionos.fr/</a></p>
      </section>

      <section>
        <h2>Propriété intellectuelle</h2>
        <p>Le contenu du site, incluant textes, images, logos, est la propriété exclusive de EVLE Kouamlan Williams, sauf mentions contraires.</p>
      </section>

      <section>
        <h2>Protection des données personnelles</h2>
        <p>
          Aucune donnée personnelle n’est récoltée via ce site. Pour toute demande liée aux données, contactez-nous à&nbsp;
          <a href="evlekouamlanwilliams@yahoo.fr">evlekouamlanwilliams@yahoo.fr</a>.
        </p>
      </section>

      <section>
        <h2>Utilisation des cookies</h2>
        <p>Ce site n’utilise pas de cookies de suivi ou publicitaires.</p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Pour toute question, veuillez nous écrire à&nbsp;
          <a href="evlekouamlanwilliams@yahoo.fr">evlekouamlanwilliams@yahoo.fr</a>.
        </p>
      </section>

     
    </div>
  );
}

export default MentionsLegales;