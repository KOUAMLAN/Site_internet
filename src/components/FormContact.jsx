import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function FormContact() {
  const [state, handleSubmit] = useForm("xpwyalnw"); // Remplace par ton ID Formspree

  if (state.succeeded) {
    return <p>Merci pour votre message ! Nous vous répondrons bientôt.</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nom :</label>
      <input type="text" id="name" name="name" required />
      <ValidationError prefix="Nom" field="name" errors={state.errors} />

      <label htmlFor="email">Email :</label>
      <input type="email" id="email" name="email" required />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message">Message :</label>
      <textarea id="message" name="message" rows="4" required></textarea>
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button type="submit" disabled={state.submitting}>Envoyer</button>
    </form>
  );
}