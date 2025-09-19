import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export default function MyCalendar({ onDateChange }) {
  const [date, setDate] = useState(new Date());

  const handleChange = (selectedDate) => {
    setDate(selectedDate);
    if (onDateChange) onDateChange(selectedDate);
  };

  return (
    <div>
      <h2>Choisissez une date</h2>
      <Calendar onChange={handleChange} value={date} />
      <p>Date sélectionnée : {date.toDateString()}</p>
    </div>
  );
}
