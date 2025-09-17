import React, { useState } from 'react';

export default function Inscription() {
  const [email, setEmail] = useState('');
  const [nom, setNom] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    alert('Inscription prise en compte.');
    setEmail('');
    setNom('');
  };

  return (
    <section id="inscription">
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nom" value={nom} onChange={e => setNom(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <button type="submit">S’inscrire</button>
      </form>
    </section>
  );
}