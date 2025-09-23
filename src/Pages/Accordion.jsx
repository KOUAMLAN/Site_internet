import React, { useState } from 'react';
import './Accordion.css';

export default function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map(({ title, content, facebook }, index) => (
        <div key={index} className={`accordion-item ${activeIndex === index ? 'active' : ''}`}>
          <button
            className="accordion-header"
            onClick={() => toggle(index)}
            aria-expanded={activeIndex === index}
          >
            {title}
            <span>{activeIndex === index ? '−' : '+'}</span>
          </button>
          {activeIndex === index && (
            <div className="accordion-content">
              {typeof content === 'string' ? <p>{content}</p> : content}
              {facebook && (
                <p className="facebook-link">
                  <a href={facebook} target="_blank" rel="noopener noreferrer">Voir sur Facebook</a>
                </p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}