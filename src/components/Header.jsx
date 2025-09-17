import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="site-header">
      <nav className="nav-container" aria-label="Navigation principale">
        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Accueil
          </NavLink>
          <NavLink to="/offre" className={({ isActive }) => (isActive ? 'active' : '')}>
            Offre
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
            Contact
          </NavLink>
          <NavLink to="/faq" className={({ isActive }) => (isActive ? 'active' : '')}>
            FAQ
          </NavLink>
          <NavLink to="/cours" className={({ isActive }) => (isActive ? 'active' : '')}>
            Cours
          </NavLink>
          <NavLink to="/temoignages" className={({ isActive }) => (isActive ? 'active' : '')}>
            Témoignages
          </NavLink>
        </div>
      </nav>
    </header>
  );
}