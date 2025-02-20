import axios from 'axios';

// Action to fetch doctors
export const fetchDoctors = () => async (dispatch) => {
  dispatch({ type: 'FETCH_DOCTORS_REQUEST' });
  try {
    const response = await axios.get('/api/doctors');
    dispatch({ type: 'FETCH_DOCTORS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_DOCTORS_FAILURE', payload: error.message });
  }
};
