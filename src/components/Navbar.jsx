import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'; // Fichier CSS joint ci-dessous

export default function NavBar() {
  return (
    <nav className="nav-links" aria-label="Navigation principale">
      <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>Accueil</NavLink>
      <NavLink to="/cours" className={({ isActive }) => (isActive ? 'active' : '')}>Cours</NavLink>
      <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
      <NavLink to="/apropos" className={({ isActive }) => (isActive ? 'active' : '')}>À propos</NavLink>
      <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : '')}>Blog</NavLink>
      <NavLink to="/faq" className={({ isActive }) => (isActive ? 'active' : '')}>FAQ</NavLink>
      <NavLink to="/abonnement" className={({ isActive }) => (isActive ? 'active' : '')}>Abonnement</NavLink>
      <NavLink to="/reservation" className={({ isActive }) => (isActive ? 'active' : '')}>Réservation</NavLink>
    </nav>
  );
}