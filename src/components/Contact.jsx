import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <main className="contact-page">
      <h1>Contactez-nous</h1>
      <form>
        <label htmlFor="name">Nom</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />
        
        <button type="submit">Envoyer</button>
      </form>

      <div className="socials">
        <a href="https://www.facebook.com/Auguste_Couabo" target="_blank" rel="noopener noreferrer">Facebook</a> |{' '}
        <a href="https://www.instagram.com/nom_de_votre_page" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </main>
  );
}