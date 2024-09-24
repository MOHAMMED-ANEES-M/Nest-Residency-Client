import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from './slices/bookingSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    booking: bookingReducer,
    user: userReducer,
  },
});