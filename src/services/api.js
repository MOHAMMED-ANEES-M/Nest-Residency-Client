import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; 

axios.defaults.withCredentials = true;

export const checkRoomAvailability = async (checkInDate, checkOutDate) => {
  const response = await axios.post(`${API_BASE_URL}/bookings/check-availability`, { checkInDate, checkOutDate });
  return response.data;
};

export const bookRoom = async (bookingData) => {
  const response = await axios.post(`${API_BASE_URL}/admin/book-room`, bookingData);
  return response.data;
};

export const getBookings = async () => {
  const response = await axios.get(`${API_BASE_URL}/admin/bookings`);
  return response.data;
};

export const adminLogin = async (data) => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, data);
  return response.data;
};

export const getUser = async () => {
  const response = await axios.get(`${API_BASE_URL}/auth/user`);
  return response.data;
};

export const adminLogout = async () => {
  const response = await axios.post(`${API_BASE_URL}/auth/logout`);
  return response.data;
};

export const createPaymentOrder = async (amount) => {
  console.log('payment order data', amount);
  const response = await axios.post(`${API_BASE_URL}/payments/create-order`, {amount});
  console.log('payment order response', response);
  return response.data;
};

export const verifyPayment = async (data) => {
  const response = await axios.post(`${API_BASE_URL}/payments/verify-payment`, data);
  return response;
};

export const cancelBooking = async (bookingId, cancelReason) => {
  const response = await axios.put(`${API_BASE_URL}/admin/cancel-booking/${bookingId}`, { cancelReason }); 
  return response.data;
};