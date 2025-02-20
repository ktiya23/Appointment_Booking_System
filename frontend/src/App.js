import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import DoctorSelection from './components/DoctorSelection';
import SlotSelection from './components/SlotSelection';
import AppointmentBookingForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';

// Dummy Data
const doctorsData = [
  { id: 1, name: 'Dr. John Doe' },
  { id: 2, name: 'Dr. Jane Smith' },
  { id: 3, name: 'Dr. James Brown' },
];

const slotsData = {
  1: [
    { id: 1, time: '10:00 AM' },
    { id: 2, time: '12:00 PM' },
    { id: 3, time: '02:00 PM' },
  ],
  2: [
    { id: 1, time: '09:00 AM' },
    { id: 2, time: '11:00 AM' },
    { id: 3, time: '01:00 PM' },
  ],
  3: [
    { id: 1, time: '08:00 AM' },
    { id: 2, time: '10:00 AM' },
    { id: 3, time: '04:00 PM' },
  ],
};

const initialAppointments = [
  { id: 1, doctorId: 1, name: 'Alice', appointmentType: 'Consultation', date: '2025-02-22', time: '10:00 AM' },
  { id: 2, doctorId: 2, name: 'Bob', appointmentType: 'Follow-up', date: '2025-02-23', time: '11:00 AM' },
];

const App = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [appointments, setAppointments] = useState(initialAppointments);

  const handleBookAppointment = (appointment) => {
    setAppointments((prevAppointments) => [
      ...prevAppointments,
      { ...appointment, id: prevAppointments.length + 1 },
    ]);
  };

  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<DoctorSelection doctors={doctorsData} onSelectDoctor={setSelectedDoctor} />} />
          <Route
            path="/slots"
            element={selectedDoctor && (
              <SlotSelection doctor={selectedDoctor} slots={slotsData[selectedDoctor.id]} onSelectDate={setSelectedDate} />
            )}
          />
          <Route
            path="/book-appointment"
            element={selectedDoctor && (
              <AppointmentBookingForm doctor={selectedDoctor} date={selectedDate} onSubmit={handleBookAppointment} />
            )}
          />
          <Route path="/appointments" element={<AppointmentList appointments={appointments} />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
