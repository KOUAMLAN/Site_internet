import React from 'react';

function encodeMailto(to, subject, body) {
  const params = new URLSearchParams({
    subject: subject,
    body: body,
  });
  return `mailto:${to}?${params.toString()}`;
}

export default function Reservation() {
  const mailtoLink = encodeMailto(
    'couaboe@gmail.com',
    'Réservation',
    'Je souhaite réserver une place le [date] au nom de [nom].'
  );

  return (
    <section style={{ padding: '1rem', textAlign: 'center' }}>
      <h2>Réserver</h2>
      <p>Pour réserver, cliquez sur le bouton ci-dessous :</p>
      <a
        href={mailtoLink}
        style={{
          fontSize: '1.2rem',
          cursor: 'pointer',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          borderRadius: '6px',
          textDecoration: 'none',
          display: 'inline-block',
          userSelect: 'none',
        }}
      >
        Réserver par email
      </a>
    </section>
  );
}