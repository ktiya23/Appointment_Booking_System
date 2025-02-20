import React, { useState, useEffect } from 'react';
import { fetchAvailableSlots } from '../services/api';
import { Button, Grid } from '@mui/material';

const SlotSelection = ({ doctor, date }) => {
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSlots = async () => {
      setLoading(true);
      try {
        const data = await fetchAvailableSlots(doctor.id, date);
        setSlots(data);
      } catch (err) {
        setError('Error fetching slots');
      } finally {
        setLoading(false);
      }
    };

    fetchSlots();
  }, [doctor, date]);

  if (loading) return <CircularProgress />;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Select a Slot</h2>
      <Grid container spacing={2}>
        {slots.map((slot) => (
          <Grid item key={slot.id}>
            <Button variant="outlined">{slot.time}</Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SlotSelection;
