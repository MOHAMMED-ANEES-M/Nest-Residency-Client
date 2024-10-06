import { createSlice } from '@reduxjs/toolkit';

const roomSlice = createSlice({
  name: 'room',
  initialState: {
    rooms: [], 
    loading: false,
    error: null,
  },
  reducers: {
    setRooms: (state, action) => {
      state.rooms = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setRooms, setLoading, setError } = roomSlice.actions;
export default roomSlice.reducer;