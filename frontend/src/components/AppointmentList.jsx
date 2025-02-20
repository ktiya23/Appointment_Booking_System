import React from 'react';
import { useSelector } from 'react-redux';

const AppointmentList = () => {
  const { appointments } = useSelector((state) => state.appointments);

  return (
    <div>
      <h2>Your Appointments</h2>
      {appointments.map((appointment) => (
        <div key={appointment.id}>
          <h3>{appointment.name}</h3>
          <p>{appointment.date} - {appointment.time}</p>
        </div>
      ))}
    </div>
  );
};

export default AppointmentList;
