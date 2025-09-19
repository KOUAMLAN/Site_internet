import React from 'react';
import FormContact from '../components/FormContact';

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <FormContact />
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