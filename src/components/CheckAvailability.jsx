// src/components/CheckAvailability.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkRoomAvailability } from '../services/api';
import { setAvailableRooms, setLoading, setError } from '../redux/slices/bookingSlice';
import { roomDetails } from '../data/room';
import AvailabilityForm from '../layouts/AvailabilityForm';
import { useLocation } from 'react-router-dom';
import RoomCard from '../layouts/RoomCard';

const CheckAvailability = () => {
  const location = useLocation();
  const { checkInDate: initialCheckInDate, checkOutDate: initialCheckOutDate } = location.state || {};
  
  const [checkInDate, setCheckInDate] = useState(initialCheckInDate || '');
  const [checkOutDate, setCheckOutDate] = useState(initialCheckOutDate || '');
  const dispatch = useDispatch();
  const { availableRooms, loading, error } = useSelector((state) => state.booking);

  const handleCheckAvailability = async () => {
    try {
      dispatch(setLoading(true));
      const data = await checkRoomAvailability(checkInDate, checkOutDate);
      console.log('available rooms', data);
      dispatch(setAvailableRooms(data.availableRooms));
    } catch (err) {
      dispatch(setError(err));
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (checkInDate && checkOutDate) {
      handleCheckAvailability();
    }
  }, [checkInDate, checkOutDate]);

  return (
    <div className='mt-32 mb-20'>
      <h1 className='text-xl mx-20 p-3 text-white font-semibold bg-green-800 mb-10'>Check Availability</h1>
      <AvailabilityForm
        checkInDate={checkInDate}
        setCheckInDate={setCheckInDate}
        checkOutDate={checkOutDate}
        setCheckOutDate={setCheckOutDate}
        loading={loading}
        handleCheckAvailability={handleCheckAvailability}
      />

      {error && <p>{error}</p>}

      {availableRooms?.length > 0 && (
        <div>
          <h3 className='text-xl mx-20 p-3 text-white font-semibold bg-green-800 mb-10 mt-20'>Available Rooms</h3>
          <div className='grid grid-cols-1 gap-10 justify-center mx-20'>
            {availableRooms?.map((roomId) => {
              const room = roomDetails?.find((r) => r.roomId === roomId);
              return (
                <RoomCard key={room.roomId} room={room} vrbtn='hidden' />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckAvailability;