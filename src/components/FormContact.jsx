import React, { useState } from 'react';

export default function FormContact() {
  const [message, setMessage] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    alert('Merci, votre message a été envoyé.');
    setMessage('');
  };

  return (
    <form id="contactForm" onSubmit={handleSubmit}>
      <input type="text" placeholder="Nom" required />
      <input type="email" placeholder="Email" required />
      <textarea placeholder="Votre message" value={message} onChange={e => setMessage(e.target.value)} required></textarea>
      <button type="submit">Envoyer</button>
    </form>
  );
}