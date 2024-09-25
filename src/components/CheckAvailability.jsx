// src/components/CheckAvailability.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkRoomAvailability } from '../services/api';
import { setAvailableRooms, setLoading, setError } from '../redux/slices/bookingSlice';
import { roomDetails } from '../data/room';
import AvailabilityForm from './AvailabilityForm';
import { useLocation } from 'react-router-dom';

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
    <div>
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
          <h3 className='my-10 text-center font-bold text-3xl'>Available Rooms</h3>
          <div className='grid grid-cols-1 gap-10 justify-center mx-20'>
            {availableRooms?.map((roomId) => {
              const room = roomDetails?.find((r) => r.roomId === roomId);
              return (
                <div key={roomId} className='flex justify-center'>
                    <img src={room.src} alt={room.name} className='h-80'/>
                    <div className='w-fit m-auto text-center'>
                      <p className='text-lg font-semibold my-3'>{room.name}</p>
                      <p className='text-lg font-semibold my-3'>${room.price}</p>
                      <button className='bg-brown-700 py-3 px-6 rounded-full text-white'>Book Now</button>
                    </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckAvailability;