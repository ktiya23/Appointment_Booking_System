import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const fetchDoctors = () => axios.get(`${API_BASE_URL}/doctors`);
export const fetchDoctorSlots = (doctorId, date) => 
  axios.get(`${API_BASE_URL}/doctors/${doctorId}/slots?date=${date}`);
export const bookAppointment = (appointmentData) => 
  axios.post(`${API_BASE_URL}/appointments`, appointmentData);
export const fetchAppointments = () => axios.get(`${API_BASE_URL}/appointments`);
export const deleteAppointment = (id) => axios.delete(`${API_BASE_URL}/appointments/${id}`);
export const updateAppointment = (id, data) => axios.put(`${API_BASE_URL}/appointments/${id}`, data);
