import React from 'react';

const AppointmentList = ({ appointments }) => {
  return (
    <div>
      <h2>Your Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments booked.</p>
      ) : (
        appointments.map((appointment) => (
          <div key={appointment.id}>
            <h3>{appointment.name} - {appointment.appointmentType}</h3>
            <p>{appointment.date} - {appointment.time}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default AppointmentList;
