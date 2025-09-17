import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("mayvzgzw"); // Remplacez par votre ID Formspree

  if (state.succeeded) {
    return <p>Merci pour votre message ! Nous vous répondrons bientôt.</p>;
  }

  return (
    <section id="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email :</label>
        <input id="email" type="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label htmlFor="message">Message :</label>
        <textarea id="message" name="message" required />
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <button type="submit" disabled={state.submitting}>Envoyer</button>
      </form>

      <div className="socials">
        <p>
          Pour participer à la réunion sur Google Meet, cliquez sur ce lien :{' '}
          <a href="https://meet.google.com/vww-magx-gqb" target="_blank" rel="noopener noreferrer">
            https://meet.google.com/vww-magx-gqb
          </a>
        </p>
        <a href="https://www.facebook.com/share/1RzEMKNdmE" target="_blank" rel="noopener noreferrer">Facebook</a> |{' '}
        <a href="https://www.instagram.com/couaboa?igsh=NnRmcGw2a3J6OTVo" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </section>
  );
}