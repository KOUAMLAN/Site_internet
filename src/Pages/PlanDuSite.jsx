import React from 'react';
import { Link } from 'react-router-dom';

export default function PlanDuSite() {
  return (
    <main style={{ maxWidth: '900px', margin: 'auto', padding: '2rem' }}>
      <h1>Plan du site</h1>
      <ul>
        <li>
          <Link to="/#accueil">Accueil</Link>
        </li>
        <li>
          <Link to="/#offre">Offre</Link>
        </li>
        <li>
          <Link to="/#contact">Contact</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/cours#presentation">Cours - Présentation</Link>
        </li>
        <li>
          <Link to="/cours#suivi">Cours - Suivi personnalisé</Link>
        </li>
        <li>
          <Link to="/temoignages#familles">Témoignages de familles</Link>
        </li>
        <li>
          <Link to="/mentions-legales">Mentions légales / RGPD</Link>
        </li>
        <li>
          <a href="https://classroom.google.com/" target="_blank" rel="noopener noreferrer">
            Google Classroom
          </a>
        </li>
        <li>
          <a href="https://www.tiktok.com/@votreprofil" target="_blank" rel="noopener noreferrer">
            TikTok
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/votrechannel" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
        </li>
      </ul>
    </main>
  );
}