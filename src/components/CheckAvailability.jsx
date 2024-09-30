import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkRoomAvailability } from '../services/api';
import { setAvailableRooms, setLoading, setError } from '../redux/slices/bookingSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import BlockAvailabilityForm from '../layouts/BlockAvailabilityForm';
import BookingCard from '../layouts/BookingCard';
import { roomDetails } from '../data/room';

const CheckAvailability = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { checkInDate: initialCheckInDate, checkOutDate: initialCheckOutDate, bookingData: initialBookingData } = location.state || {};

  const [checkInDate, setCheckInDate] = useState(initialCheckInDate || '');
  const [checkOutDate, setCheckOutDate] = useState(initialCheckOutDate || '');
  const [bookingData, setBookingData] = useState(initialBookingData || { adults: '1', children: '0', rooms: '1' });
  const [hasCheckedAvailability, setHasCheckedAvailability] = useState(false); // New state to track availability check
  const dispatch = useDispatch();
  const { availableRooms, loading, error } = useSelector((state) => state.booking);

  const handleCheckAvailability = async () => {
    try {
      dispatch(setLoading(true));
      const data = await checkRoomAvailability(checkInDate, checkOutDate);
      dispatch(setAvailableRooms(data.availableRooms));
      setHasCheckedAvailability(true); // Set to true when checking availability
      console.log('rooms', data);
    } catch (err) {
      dispatch(setLoading(false));
      dispatch(setError(err.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleBookRoom = (roomId) => {
    navigate('/booking', {
      state: {
        roomId,
        checkInDate,
        checkOutDate,
        bookingData,
      },
    });
  };

  const filteredRooms = roomDetails.filter((room) => availableRooms.includes(room.roomId));

  useEffect(() => {
    if (checkInDate && checkOutDate && location.state) {
      handleCheckAvailability();
    }
  }, [location.state]);

  return (
    <div className="mt-32 mb-20">
      <h1 className="text-xl mx-20 p-3 font-semibold">Check Room Availability</h1>
      <BlockAvailabilityForm
        checkInDate={checkInDate}
        setCheckInDate={setCheckInDate}
        checkOutDate={checkOutDate}
        setCheckOutDate={setCheckOutDate}
        bookingData={bookingData}
        setBookingData={setBookingData}
        loading={loading}
        handleCheckAvailability={handleCheckAvailability}
      />

      {/* Display available rooms */}
        {hasCheckedAvailability && <h1 className='text-xl font-semibold'>Available Rooms</h1>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-20 mt-10">
        {filteredRooms.length > 0 ? (
          filteredRooms.map((room) => (
            <BookingCard
              key={room.roomId}
              room={room}
              handleBookRoom={() => handleBookRoom(room.roomId)}
            />
          ))
        ) : (
          hasCheckedAvailability && !loading && (
            <div className="col-span-full text-center">
              {error && <p className="text-red-500 font-semibold">{error}</p>}
              <p className="text-red-500 font-semibold">No Rooms Available</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default CheckAvailability;