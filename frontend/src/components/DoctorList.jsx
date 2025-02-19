import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDoctors } from '../redux/actions/doctorActions';
import { Link } from 'react-router-dom';
import { Box, Button, Text } from '@chakra-ui/react';

const DoctorList = () => {
  const dispatch = useDispatch();
  const { doctors, error } = useSelector(state => state.doctors);

  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);

  return (
    <Box>
      {error && <Text color="red.500">{error}</Text>}
      {doctors.map((doctor) => (
        <Box key={doctor.id} p={4} borderWidth="1px" borderRadius="md">
          <Text fontSize="xl">{doctor.name}</Text>
          <Button as={Link} to={`/doctor/${doctor.id}`} colorScheme="teal">
            View Slots
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default DoctorList;
