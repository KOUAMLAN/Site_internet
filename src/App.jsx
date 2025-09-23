import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import Accueil from './Pages/Accueil.jsx';
import Offre from './Pages/Offre.jsx';
import Contact from './Pages/Contact.jsx';
import FAQ from './Pages/FAQ.jsx';
import Cours from './Pages/Cours.jsx';
import Temoignages from './Pages/Temoignages.jsx';
import MentionsLegales from './Pages/MentionsLegales.jsx';

function NotFound() {
  return (
    <section style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>404 - Page non trouvée</h1>
      <p>La page que vous cherchez n'existe pas.</p>
      <a href="#/" style={{ color: '#007bff', textDecoration: 'underline' }}>
        Retour à l'accueil
      </a>
    </section>
  );
}

export default function App() {
  return (
    <HashRouter>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/offre" element={<Offre />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/cours" element={<Cours />} />
            <Route path="/temoignages" element={<Temoignages />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}