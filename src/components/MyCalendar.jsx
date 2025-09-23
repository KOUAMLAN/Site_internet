import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export default function BookingCalendar() {
  const [date, setDate] = useState(new Date());
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleReserve = async () => {
    setMessage('');
    setError('');
    try {
      const response = await fetch('http://localhost:5000/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date }),
      });

      if (!response.ok) {
        const err = await response.json();
        setError(err.error || 'Erreur lors de la réservation');
        return;
      }

      const data = await response.json();
      setMessage(data.message);
    } catch (err) {
      setError('Erreur réseau ou serveur');
    }
  };

  return (
    <div>
      <h2>Choisissez une date pour votre réservation</h2>
      <Calendar onChange={setDate} value={date} />
      <p>Date sélectionnée : {date.toDateString()}</p>
      <button onClick={handleReserve}>Réserver cette date</button>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}