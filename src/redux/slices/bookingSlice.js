import { createSlice } from '@reduxjs/toolkit';

const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    availableRooms: [],
    loading: false,
    error: null,
    bookings: [],
  },
  reducers: {
    setAvailableRooms: (state, action) => {
      state.availableRooms = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setBookings: (state, action) => {
      state.bookings = action.payload; 
    },
  },
});

export const { setAvailableRooms, setLoading, setError, setBookings } = bookingSlice.actions;
export default bookingSlice.reducer;