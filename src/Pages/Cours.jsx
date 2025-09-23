import React from 'react';
import Accordion from '../components/Accordion';
import './Cours.css';

const coursData = [
  {
    title: 'Cours de Français',
    content: (
      <ul className="cours-list">
        <li>Professeur diplômé Bac+5, 10 ans d’expérience</li>
        <li>Spécialiste FLE, préparation DELF/DALF</li>
        <li>Méthodologie, grammaire, expression orale</li>
        <li>Pédagogie positive et accompagnement personnalisé</li>
      </ul>
    ),
  },
  {
    title: "Cours d'Espagnol",
    content: (
      <ul className="cours-list">
        <li>Cours dynamique avec professeur natif</li>
        <li>Adapté aux débutants et avancés</li>
        <li>Utilisation de ressources multimédias</li>
      </ul>
    ),
  },
  {
    title: 'Préparation aux examens (DELF/DALF, Brevet, Bac)',
    content: (
      <ul className="cours-list">
        <li>Formation complète : méthode, exercices, suivi individuel</li>
        <li>Préparation aux épreuves écrites et orales</li>
        <li>Plus de 80% d’élèves obtiennent une mention</li>
      </ul>
    ),
  },
  {
    title: 'Post-Bac / Adultes',
    content: (
      <ul className="cours-list">
        <li>Remise à niveau BAC+2, concours, TOEIC</li>
        <li>Accompagnement classe préparatoire, rédaction de mémoires</li>
        <li>Suivi adapté pour étudiants et adultes en reconversion</li>
      </ul>
    ),
  },
];

export default function Cours() {
  return (
    <section className="section-container cours-page">
      <h2 className="section-title">Cours</h2>
      <div className="section-content">
        <Accordion items={coursData} />
      </div>
    </section>
  );
}

