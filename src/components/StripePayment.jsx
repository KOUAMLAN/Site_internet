import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51S5t7XFQLgUewY7g75rSkKu7lsUE16mkQfPrAH5o5t0X9C3IXJCSuv13rKo2tDTEwYsR6zUjVW8SoHdECWNkLup0008KSyuFVV');

export default function StripePayment() {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 4900 }),
    })
      .then(res => {
        if (!res.ok) throw new Error(`Erreur HTTP! statut: ${res.status}`);
        return res.json();
      })
      .then(data => setClientSecret(data.clientSecret))
      .catch(err => alert('Erreur lors de la récupération du Payment Intent : ' + err.message));
  }, []);

  if (!clientSecret) return <p>Chargement…</p>;

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm clientSecret={clientSecret} />
    </Elements>
  );
}