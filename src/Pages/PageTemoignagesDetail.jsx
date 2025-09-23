import React, { useState } from 'react';

const temoignagesData = [
  { id: 1, author: 'Jean Dupont', message: 'Pédagogue, très disponible.' },
  { id: 2, author: 'Marie Curie', message: 'Cours clairs et adaptés à tous.' },
  { id: 3, author: 'Paul Martin', message: 'Professeur à l’écoute et patient.' },
];

export default function TemoignagesAccordion() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    if (openId === id) setOpenId(null);
    else setOpenId(id);
  };

  return (
    <section id="temoignages">
      <h2>Témoignages</h2>
      {temoignagesData.map(({ id, author, message }) => (
        <div key={id}>
          <button onClick={() => toggle(id)} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
            {author}
          </button>
          {openId === id && <blockquote>{message}</blockquote>}
        </div>
      ))}
    </section>
  );
}