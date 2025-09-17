// src/services/api.js

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export async function createPaymentIntent(amount) {
  const response = await fetch(`${API_BASE_URL}/create-payment-intent`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount }),
  });

  if (!response.ok) {
    throw new Error(`Erreur HTTP! statut: ${response.status}`);
  }

  return response.json();
}