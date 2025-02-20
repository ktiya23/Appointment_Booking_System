import axios from 'axios';

// Action to fetch appointments
export const fetchAppointments = () => async (dispatch) => {
  dispatch({ type: 'FETCH_APPOINTMENTS_REQUEST' });
  try {
    const response = await axios.get('/api/appointments');
    dispatch({ type: 'FETCH_APPOINTMENTS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_APPOINTMENTS_FAILURE', payload: error.message });
  }
};

// Action to book an appointment
export const bookAppointment = (appointment) => async (dispatch) => {
  try {
    const response = await axios.post('/api/appointments', appointment);
    dispatch({ type: 'BOOK_APPOINTMENT', payload: response.data });
  } catch (error) {
    console.error(error);
  }
};
