import React from 'react';
import Accordion from '../components/Accordion';
import './FAQ.css';

const faqData = [
  {
    title: 'Quels sont les tarifs ?',
    content: 'Les tarifs varient selon la formule choisie, à partir de 49,00 € par mois.',
  },
  {
    title: 'Comment réserver ?',
    content: 'Vous pouvez réserver via la page Contact ou directement lors de l’abonnement.',
  },
  {
    title: 'Assistance en direct',
    content: 'Un support en direct est disponible par visioconférence ou chat pendant les horaires d’ouverture.',
  },
];

export default function FAQ() {
  return (
    <section className="section-container faq-page">
      <h2 className="section-title">Foire aux questions</h2>
      <div className="section-content">
        <Accordion items={faqData} />
      </div>
    </section>
  );
}