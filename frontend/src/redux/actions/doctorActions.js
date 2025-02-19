import { fetchDoctors } from '../../api';

export const getDoctors = () => async (dispatch) => {
  try {
    const { data } = await fetchDoctors();
    dispatch({ type: 'GET_DOCTORS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'GET_DOCTORS_FAIL', payload: error.message });
  }
};
