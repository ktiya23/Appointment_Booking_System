import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { doctorReducer } from './reducers/doctorReducer';
import { appointmentReducer } from './reducers/appointmentReducer';

const rootReducer = combineReducers({
  doctors: doctorReducer,
  appointments: appointmentReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
