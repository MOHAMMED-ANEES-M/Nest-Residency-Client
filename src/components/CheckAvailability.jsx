import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkRoomAvailability } from '../services/api';
import { setAvailableRooms, setLoading, setError } from '../redux/slices/bookingSlice';
import { roomDetails } from '../data/room';

const CheckAvailability = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const dispatch = useDispatch();
  const { availableRooms, loading, error } = useSelector((state) => state.booking);

  const handleCheckAvailability = async () => {
    try {
      dispatch(setLoading(true));
      const data = await checkRoomAvailability(checkInDate, checkOutDate);
      console.log('available rooms', data);
      dispatch(setAvailableRooms(data.availableRooms));
    } catch (err) {
      dispatch(setError('Unable to check room availability.'));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div>
      <h2>Check Room Availability</h2>
      <input
        type="date"
        value={checkInDate}
        onChange={(e) => setCheckInDate(e.target.value)}
      />
      <input
        type="date"
        value={checkOutDate}
        onChange={(e) => setCheckOutDate(e.target.value)}
      />
      <button onClick={handleCheckAvailability} disabled={loading}>
        {loading ? 'Checking...' : 'Check Availability'}
      </button>
      {error && <p>{error}</p>}
      {availableRooms.length > 0 && (
        <div>
          <h3>Available Rooms</h3>
          <ul>
            {availableRooms.map((roomId) => {
              const room = roomDetails.find((r) => r.roomId === roomId);
              return (
                <li key={roomId}>
                  {room.name} - ${room.price}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CheckAvailability;