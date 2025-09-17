import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      console.log('Email envoyé avec succès', response);
      alert('Email envoyé !');
    } catch (error) {
      console.error('Erreur d\'envoi', error);
      alert('Erreur lors de l\'envoi du message.');
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Nom</label>
      <input type="text" name="prenom" required />
      
      <label>Email</label>
      <input type="email" name="email" required />
      
      <label>Message</label>
      <textarea name="message" required />
      
      <button type="submit">Envoyer</button>
    </form>
  );
}