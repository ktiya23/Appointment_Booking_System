const initialState = {
  doctors: [],
  loading: false,
  error: null,
};

const doctorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DOCTORS_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_DOCTORS_SUCCESS':
      return { ...state, loading: false, doctors: action.payload };
    case 'FETCH_DOCTORS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default doctorReducer;
