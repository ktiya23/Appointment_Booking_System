import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';

const SlotSelection = ({ doctor, slots, onSelectDate }) => {
  const [selectedSlot, setSelectedSlot] = useState('');

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
  };

  return (
    <div>
      <h2>Select a Slot for {doctor.name}</h2>
      <TextField
        type="date"
        label="Select Date"
        onChange={(e) => onSelectDate(e.target.value)}
        fullWidth
        variant="outlined"
      />
      <Grid container spacing={2}>
        {slots.map((slot) => (
          <Grid item key={slot.id}>
            <Button
              variant={selectedSlot === slot.time ? 'contained' : 'outlined'}
              onClick={() => handleSlotSelect(slot.time)}
            >
              {slot.time}
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SlotSelection;
