import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import DoctorSelection from './components/DoctorSelection';
import SlotSelection from './components/SlotSelection';
import AppointmentBookingForm from './components/AppointmentBookingForm';
import AppointmentList from './components/AppointmentList';

const App = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<DoctorSelection onSelectDoctor={setSelectedDoctor} />} />
          <Route
            path="/slots"
            element={selectedDoctor && <SlotSelection doctor={selectedDoctor} date={selectedDate} />}
          />
          <Route
            path="/book-appointment"
            element={selectedDoctor && <AppointmentBookingForm onSubmit={(appointment) => console.log(appointment)} />}
          />
          <Route path="/appointments" element={<AppointmentList />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
