import React, { useState } from 'react';
import './Header.css';

const WildevLogo = () => (
  <svg
    width="120"
    height="40"
    viewBox="0 0 120 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ cursor: "pointer" }}
    role="img"
    aria-label="Wildev logo"
  >
    <text
      x="0"
      y="30"
      fontFamily="Montserrat, sans-serif"
      fontWeight="700"
      fontSize="28"
      fill="#4B8BF5"
      letterSpacing="2"
    >
      Wildev
    </text>
  </svg>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: 'Accueil', href: '#/' },
    { label: 'Offre', href: '#/offre' },
    { label: 'Contact', href: '#/contact' },
    { label: 'FAQ', href: '#/faq' },
    { label: 'Cours', href: '#/cours' },
    { label: 'Témoignages', href: '#/temoignages' },
  ];

  const currentHash = window.location.hash;

  return (
    <header className="site-header" style={{ display: 'flex', alignItems: 'center', padding: '10px 20px' }}>
      <a href="#/" className="logo-link" style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }} aria-label="Accueil">
        <WildevLogo />
      </a>

      <button
        className="menu-button"
        aria-label="Afficher le menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="menu-icon">
          <path d="M3 18h18v-2H3zM3 13h18v-2H3zM3 6h18v2H3z" />
        </svg>
      </button>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Navigation principale" style={{ marginLeft: 'auto' }}>
        {links.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className={currentHash === href ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
            style={{ margin: '0 10px', textDecoration: 'none', color: '#333' }}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;