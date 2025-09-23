import React from 'react';
import { Link } from 'react-router-dom';

export default function Cours() {
  return (
    <section id="cours">
      <h2>
        <Link to="/cours-detail">Apprenez les lettres, l'espagnol et l'anglais, vivez les langues</Link>
      </h2>
      <p>Offres claires pour débutants aux avancés.</p>
    </section>
  );
}