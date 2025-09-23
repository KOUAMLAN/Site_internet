import React from 'react';

const Banner = () => (
  <header style={{
    backgroundImage: 'url(/Public/banniere.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '60px 20px',
    color: 'white',
    textAlign: 'center',
    borderRadius: '2rem',
    overflow: 'hidden',
  }}>
    <h1>Apprenez le français, vivez la langue !</h1>
  </header>
);

export default Banner;