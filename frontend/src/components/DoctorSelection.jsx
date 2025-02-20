import React from 'react';
import { Button } from '@mui/material';

const DoctorSelection = ({ doctors, onSelectDoctor }) => {
  return (
    <div>
      <h2>Select a Doctor</h2>
      {doctors.map((doctor) => (
        <Button key={doctor.id} onClick={() => onSelectDoctor(doctor)}>
          {doctor.name}
        </Button>
      ))}
    </div>
  );
};

export default DoctorSelection;
