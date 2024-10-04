import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { roomDetails } from '../data/room';
import Payment from './Payment';
import GuestForm from '../layouts/GuestForm';
import { formatBookingDate } from '../utils/FormateDate';
import { useSelector } from 'react-redux';

const BookRoom = () => {
  const location = useLocation();
  const { roomNumber, roomType, checkInDate, checkOutDate } = location.state;
  const { availableRooms } = useSelector((state) => state.booking);

  const bookedRoom1 = roomDetails.find((room) => room.roomType === roomType);
  const bookedRoom2 = availableRooms.find((room) => room.roomNumber === roomNumber);
  console.log(availableRooms);
  console.log(roomNumber, roomType);
  
  const [guestDetails, setGuestDetails] = useState(null);

  const amount = bookedRoom2?.roomPrice; 
  const numberOfNights = Math.floor((new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24));
  const totalRoomPrice = amount * numberOfNights;
  const tax = totalRoomPrice * 0.18;
  const totalAmount = totalRoomPrice + tax;

  const handleFormSubmit = (guestData) => {
    setGuestDetails(guestData);
    console.log('payment', guestData);
  };

  return (
    <div className="mt-32 mb-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-xl font-semibold text-center">Confirm Your Booking</h1>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 p-5">
        <div className='md:col-span-8'>
          <h2 className="text-lg font-semibold mb-4">Guest Details</h2>
          <GuestForm handleFormSubmit={handleFormSubmit} />
        </div>

        <div className='md:col-span-4 bg-white shadow-md p-2 min-[400px]:p-5 rounded-lg mt-10'>
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
                <p className='mt-2'>{bookedRoom1.roomType}</p>
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
                <p className='mt-2'>₹{totalRoomPrice}</p>
                <p className='mt-2'>₹{tax.toFixed(2)}</p>
                <p className='font-semibold mt-2'>₹{totalAmount.toFixed(2)}</p>
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
        />
      )}
    </div>
  );
};

export default BookRoom;