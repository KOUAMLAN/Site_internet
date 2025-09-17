import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-links">

        <Link to="/mentions-legales">Politique de confidentialité / RGPD</Link> |{' '}
        <a href="https://classroom.google.com/" target="_blank" rel="noopener noreferrer">Google Classroom</a> |{' '}
        <a href="https://www.tiktok.com/@votreprofil" target="_blank" rel="noopener noreferrer">TikTok</a> |{' '}
        <a href="https://www.youtube.com/channel/votrechannel" target="_blank" rel="noopener noreferrer">YouTube</a>
      </div>

      <div className="footer-info">
        <p>
          Pour recevoir régulièrement des conseils pédagogiques, retrouvez-nous sur Google Classroom et nos réseaux sociaux.
        </p>
        <p>
          Envoyez vos documents PDF à l’adresse email :{' '}
          <a href="mailto:couaboe@gmail.com">couaboe@gmail.com</a>
        </p>
      </div>

      <div className="footer-copy">
        <span>© 2025 Site web réalisé par EVLE Kouamlan Williams.</span>
      </div>
    </footer>
  );
}