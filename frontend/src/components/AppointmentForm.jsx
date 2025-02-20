import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const AppointmentForm = ({ doctor, date, onSubmit }) => {
  const [name, setName] = useState('');
  const [appointmentType, setAppointmentType] = useState('');
  const [notes, setNotes] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const appointment = {
      name,
      appointmentType,
      notes,
      date,
      time,
      doctorId: doctor.id,
    };
    onSubmit(appointment);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Patient Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        variant="outlined"
      />
      <TextField
        label="Appointment Type"
        value={appointmentType}
        onChange={(e) => setAppointmentType(e.target.value)}
        fullWidth
        variant="outlined"
      />
      <TextField
        label="Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        fullWidth
        variant="outlined"
      />
      <TextField
        label="Time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        fullWidth
        variant="outlined"
      />
      <Button type="submit" variant="contained">Book Appointment</Button>
    </form>
  );
};

export default AppointmentForm;
