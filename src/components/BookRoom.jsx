import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { roomDetails } from '../data/room';
import Payment from './Payment';
import GuestForm from '../layouts/GuestForm';
import { formatBookingDate } from '../utils/FormateDate';
import { useDispatch, useSelector } from 'react-redux';
import { setAvailableRooms } from '../redux/slices/bookingSlice';
import { checkRoomAvailability } from '../services/api';
import LoadingSpinner from '../utils/LoadingSpinner';

const BookRoom = () => {
  const location = useLocation();
  const { roomNumber, roomType, checkInDate, checkOutDate } = location.state;
  const { availableRooms } = useSelector((state) => state.booking);

  const [guestDetails, setGuestDetails] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const bookedRoom1 = roomDetails?.find((room) => room.roomType === roomType);
  const bookedRoom2 = availableRooms?.find((room) => room.roomNumber === roomNumber);

  const numberOfNights = checkInDate && checkOutDate 
    ? Math.floor((new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24)) 
    : 0;
  
  const amount = bookedRoom2?.roomPrice; 
  const totalRoomPrice = amount ? amount * numberOfNights : 0;
  const tax = totalRoomPrice * 0.18;
  const totalAmount = totalRoomPrice + tax;

  const handleFormSubmit = (guestData) => {
    setGuestDetails(guestData);
    console.log('payment', guestData);
  };

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true); 
        setError(null); 

        if (!availableRooms || availableRooms.length === 0) {
          const data = await checkRoomAvailability(checkInDate, checkOutDate);
          dispatch(setAvailableRooms(data.availableRooms));
        }
      } catch (err) {
        console.error('Error fetching available rooms:', err);
        setError('Unable to fetch rooms. Please try again.');
        navigate('/availability', { state: { checkInDate, checkOutDate } });
      } finally {
        setLoading(false); 
      }
    };

    fetchRooms();
  }, [availableRooms, checkInDate, checkOutDate, dispatch, navigate]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div className="mt-32 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="mt-32 mb-20 px-0 sm:px-6 lg:px-8">
      <h1 className="text-xl font-semibold text-center">Confirm Your Booking</h1>
      <div className="flex-col-reverse flex md:flex-row gap-5 p-5">
        <div className='md:w-[70%]'>
          <h2 className="text-lg font-semibold mb-4 mt-7 md:mt-0">Guest Details</h2>
          <GuestForm handleFormSubmit={handleFormSubmit} />
          <div className="mt-5 text-red-500 text-sm sm:text-base font-semibold">
            <p>Please stay on this page after completing your payment. Do not reload the page. You will be redirected to the receipt page automatically.</p>
          </div>
        </div>

        <div className='md:w-[30%] bg-white shadow-md p-2 min-[400px]:p-5 rounded-lg mt-10'>
        <div className='grid grid-cols-2'>
          <div>
              <p className='mt-2'>Check-in Time</p>
              <p className='mt-2'>Check-out Time</p>
            </div>
            <div className='text-right'>
              <p className='mt-2'>2 pm</p>
              <p className='mt-2'>12 pm</p>
            </div>
            </div>
            {bookedRoom1?.roomType === 'RESIDENTIAL A/C KING' || bookedRoom1?.roomType === 'RESIDENTIAL A/C TWIN' ?
              <p className=' mt-2'>Maximum 3 Adults. Extra ₹500 for 3rd adult, payable at check-in.</p> : <p className=' mt-2'>Maximum 2 Adults.</p>
            }
                        <hr className='w-full border-brown-700 my-3' />

          <h2 className="text-lg font-semibold mb-5 text-center">Booking Summary</h2>
          <div className="space-y-4">
            <div className='grid grid-cols-2 gap-3 border-b border-brown-700 p-2 rounded'>
              <div className='border-r border-brown-700'>
                <p>Check-in</p>
                <p className='text-lg font-semibold text-center'>{formatBookingDate(checkInDate)}</p>
              </div>
              <div>
                <p>Check-out</p>
                <p className='text-lg font-semibold text-center'>{formatBookingDate(checkOutDate)}</p>
              </div>
            </div>

            <div className='grid grid-cols-2'>
              <div>
                <p className='mt-2'>Room</p>
                <p className='mt-2'>No. of Nights</p>
              </div>
              <div className='text-right'>
                <p className='mt-2'>{bookedRoom1?.roomType || 'N/A'}</p>
                <p className='mt-2'>{numberOfNights}</p>
              </div>
            </div>

            <hr className='w-full border-brown-700 my-3' />
            <div className='grid grid-cols-2 px-2 sm:px-3'>
              <div>
                <p className='mt-2'>Room Price</p>
                <p className='mt-2'>Tax (18%)</p>
                <p className='font-semibold mt-2'>Total Amount</p>
              </div>
              <div className='text-right'>
                {amount ? (
                  <>
                    <p className='mt-2'>₹{totalRoomPrice.toFixed(2)}</p>
                    <p className='mt-2'>₹{tax.toFixed(2)}</p>
                    <p className='font-semibold mt-2'>₹{totalAmount.toFixed(2)}</p>
                  </>
                ) : (
                  <p className="text-red-500">Price information unavailable</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {guestDetails && (
        <Payment 
          amount={totalAmount} 
          roomData={{ roomNumber, checkInDate, checkOutDate, roomType }} 
          guestDetails={guestDetails} 
          handleFormSubmit = {handleFormSubmit}
        />
      )}
    </div>
  );
};

export default BookRoom;