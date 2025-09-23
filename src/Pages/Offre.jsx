import React from 'react';
import './Offre.css';

export default function Offre() {
  return (
    <main className="offre-page">
      <h1>Nos offres</h1>
      <section className="offres-list">
        <div className="offre-item">
          <h2>Essai gratuit</h2>
          <p>Essai de 20 minutes.</p>
          <p><strong>Prix :</strong> 0 €</p>
          <a href="https://www.classgap.com/fr/tutor/evle-1047890" target="_blank" rel="noopener noreferrer" className="btn btn-reserver">Réserver</a>
        </div>
        <div className="offre-item">
          <h2>1 Cours</h2>
          <p>Durée 60 minutes.</p>
          <p><strong>Prix :</strong> 17 €</p>
          <a href="https://www.classgap.com/fr/tutor/evle-1047890" target="_blank" rel="noopener noreferrer" className="btn btn-reserver">Réserver</a>
        </div>
        <div className="offre-item">
          <h2>Pack de 5 cours</h2>
          <p>Prix dégressif.</p>
          <p><strong>Prix :</strong> 15 €/cours</p>
          <a href="https://www.classgap.com/fr/tutor/evle-1047890" target="_blank" rel="noopener noreferrer" className="btn btn-reserver">Réserver</a>
        </div>
        <div className="offre-item">
          <h2>Pack de 10 cours</h2>
          <p>Prix dégressif.</p>
          <p><strong>Prix :</strong> 13 €/cours</p>
          <a href="https://www.classgap.com/fr/tutor/evle-1047890" target="_blank" rel="noopener noreferrer" className="btn btn-reserver">Réserver</a>
        </div>
      </section>
    </main>
  );
}