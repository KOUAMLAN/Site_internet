import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/CheckoutForm.jsx';

const stripePromise = loadStripe('pk_test_your_publishable_key_here');

export default function Abonnement() {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 4900 }), // 49,00€
    })
      .then(res => res.json())
      .then(data => setClientSecret(data.clientSecret))
      .catch(console.error);
  }, []);

  return (
    <div>
      {clientSecret ? (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm clientSecret={clientSecret} />
        </Elements>
      ) : (
        <p>Chargement du formulaire de paiement...</p>
      )}
    </div>
  );
}