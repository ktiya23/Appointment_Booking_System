import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoctors } from '../actions/doctorActions';
import { Button, CircularProgress } from '@mui/material';

const DoctorSelection = ({ onSelectDoctor }) => {
  const dispatch = useDispatch();
  const { doctors, loading, error } = useSelector((state) => state.doctors);

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  if (loading) return <CircularProgress />;
  if (error) return <div>Error: {error}</div>;

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
