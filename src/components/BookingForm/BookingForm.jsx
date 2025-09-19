import React, { useState } from "react";

export default function BookingForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(onSubmit) onSubmit({ name, time });
    alert(`Réservation créée pour ${name} à ${time}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Réserver un horaire</h2>
      <input
        type="text"
        placeholder="Votre nom"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
      />
      <select value={time} required onChange={(e) => setTime(e.target.value)}>
        <option value="">Choisissez un horaire</option>
        <option value="9:00">9:00</option>
        <option value="10:00">10:00</option>
        <option value="11:00">11:00</option>
      </select>
      <button type="submit">Réserver</button>
    </form>
  );
}