import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export default function BookingCalendar() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: new Date()
  });

  // Tableau d'objets { date, name }
  const [reservedDates, setReservedDates] = useState([
    // exemple initial
    { date: new Date("2025-09-18"), name: "Jean Dupont" },
    { date: new Date("2025-09-20"), name: "Marie Martin" }
  ]);

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Exemple de chargement dynamique (simulateur)
  useEffect(() => {
    // ici fetch réel pour charger les réservations
    // fetch('http://localhost:5000/api/reservations')
    //   .then(res => res.json())
    //   .then(data => setReservedDates(data.map(r => ({date: new Date(r.date), name: r.name}))));

    // mock set pour test si nécessaire
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDateChange = date => {
    setFormData(prev => ({ ...prev, date }));
    setMessage('');
    setError('');
  };

  // Désactive dates réservées
  const tileDisabled = ({ date, view }) => {
    if (view === "month") {
      return reservedDates.some(r => r.date.toDateString() === date.toDateString());
    }
    return false;
  };

  // Affiche nom réservation sur la date
  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const reservation = reservedDates.find(r => r.date.toDateString() === date.toDateString());
      if (reservation) {
        return (
          <div style={{ fontSize: "0.6em", color: "red", marginTop: 2, whiteSpace: "nowrap" }}>
            {reservation.name}
          </div>
        );
      }
    }
    return null;
  };

  const handleReserve = async () => {
    setMessage('');
    setError('');

    if (!formData.name || !formData.email) {
      setError("Nom et email sont obligatoires");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Email invalide");
      return;
    }

    if (reservedDates.some(r => r.date.toDateString() === formData.date.toDateString())) {
      setError("Cette date est déjà réservée");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          date: formData.date
        }),
      });

      if (!res.ok) {
        const errData = await res.json();
        setError(errData.error || "Erreur serveur");
        return;
      }

      const data = await res.json();
      setMessage(data.message);
      setReservedDates(prev => [...prev, { date: new Date(formData.date), name: formData.name }]);

    } catch {
      setError("Erreur réseau ou serveur");
    }
  };

  return (
    <div>
      <h2>Réservation</h2>
      <form>
        <label>
          Nom :
          <input name="name" type="text" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email :
          <input name="email" type="email" value={formData.email} onChange={handleChange} />
        </label>
      </form>

      <h3>Choisissez une date</h3>
      <Calendar
        onChange={handleDateChange}
        value={formData.date}
        tileDisabled={tileDisabled}
        tileContent={tileContent}
      />
      <p>Date sélectionnée : {formData.date.toDateString()}</p>

      <button onClick={handleReserve}>Réserver cette date</button>

      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}