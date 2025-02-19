const initialState = {
    doctors: [],
    loading: false,
    error: null,
  };
  
  export const doctorReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_DOCTORS_SUCCESS':
        return { ...state, doctors: action.payload, loading: false };
      case 'GET_DOCTORS_FAIL':
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    }
  };
  