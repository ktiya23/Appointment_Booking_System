import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const AppointmentForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [appointmentType, setAppointmentType] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, appointmentType, notes });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Patient Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
      />
      <TextField
        label="Appointment Type"
        value={appointmentType}
        onChange={(e) => setAppointmentType(e.target.value)}
        fullWidth
      />
      <TextField
        label="Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        fullWidth
      />
      <Button type="submit" variant="contained">Book Appointment</Button>
    </form>
  );
};

export default AppointmentForm;
