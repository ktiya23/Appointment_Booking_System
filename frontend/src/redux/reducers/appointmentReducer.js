const initialState = {
    appointments: [],
  };
  
  export const appointmentReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_APPOINTMENTS_SUCCESS':
        return { ...state, appointments: action.payload };
      case 'ADD_APPOINTMENT':
        return { ...state, appointments: [...state.appointments, action.payload] };
      case 'DELETE_APPOINTMENT':
        return {
          ...state,
          appointments: state.appointments.filter(appt => appt.id !== action.payload),
        };
      default:
        return state;
    }
  };
  