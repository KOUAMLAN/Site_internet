import React from 'react';

export default function FAQ() {
  return (
    <section id="faq">
      <h2>FAQ</h2>
      <details>
        <summary>Quels sont les tarifs ?</summary>
        <p>Contactez-nous pour plus d'informations.</p>
      </details>
      <details>
        <summary>Comment réserver ?</summary>
        <p>Réservez via le calendrier interactif ou formulaire.</p>
      </details>
      <button id="chatBtn" onClick={() => alert('Assistance en direct activée.')}>Assistance en direct</button>
    </section>
  );
}