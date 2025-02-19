import { fetchAppointments, bookAppointment, deleteAppointment, updateAppointment } from '../../api';

export const getAppointments = () => async (dispatch) => {
  try {
    const { data } = await fetchAppointments();
    dispatch({ type: 'GET_APPOINTMENTS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'GET_APPOINTMENTS_FAIL', payload: error.message });
  }
};

export const createAppointment = (appointment) => async (dispatch) => {
  try {
    const { data } = await bookAppointment(appointment);
    dispatch({ type: 'ADD_APPOINTMENT', payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const removeAppointment = (id) => async (dispatch) => {
  try {
    await deleteAppointment(id);
    dispatch({ type: 'DELETE_APPOINTMENT', payload: id });
  } catch (error) {
    console.error(error);
  }
};
