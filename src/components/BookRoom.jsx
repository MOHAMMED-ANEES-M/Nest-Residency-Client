import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { roomDetails } from '../data/room';
import Payment from './Payment';
import GuestForm from '../layouts/GuestForm';
import { formatBookingDate } from '../utils/FormateDate';

const BookRoom = () => {
  const location = useLocation();
  const { roomId, checkInDate, checkOutDate, bookingData } = location.state;
  
  const bookedRoom = roomDetails.find((room) => room.roomId === roomId);
  const [guestDetails, setGuestDetails] = useState(null);
  
  const roomName = bookedRoom.name
  const amount = bookedRoom.price; 
  const numberOfNights = Math.floor((new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24));
  const totalRoomPrice = amount * numberOfNights;
  const tax = totalRoomPrice * 0.18;
  const totalAmount = totalRoomPrice + tax;
  const handleFormSubmit = (guestData) => {
    setGuestDetails(guestData);
    console.log('payment', guestData);
    
    // After setting guest data, proceed to payment.
  };

  return (
    <div className="mt-32 mb-20">
      <h1 className="text-xl mx-20 p-3 font-semibold">Confirm Your Booking</h1>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 p-5 mx-5">
        <div className='md:col-span-8'>
          <h2 className="text-lg font-semibold mb-4">Guest Details</h2>
          <GuestForm bookingData={bookingData} handleFormSubmit={handleFormSubmit} />
        </div>

        <div className='md:col-span-4  rounded-lg  px-5'>
          <h2 className="text-lg font-semibold mb-5 text-center">Booking Summary</h2>
          <div className="space-y-2">
            <div className='grid grid-cols-2 justify-center gap-3 border border-brown-700 p-2 rounded'>
              <div className='border-r border-brown-700'>
                <p className=''>Check-in</p>
                <p className='text-lg font-semibold text-center'>{formatBookingDate(checkInDate)}</p>
              </div>
              <div>
                <p>Check-out</p>
                <p className='text-lg font-semibold text-center'>{formatBookingDate(checkOutDate)}</p>
              </div>
            </div>
            <div className='grid grid-cols-2 px-3'>
              <div>
                <p className='mt-2'>Room</p>
                <p className='mt-2'>Nights</p>
                <p className='mt-2'>Guests</p>
                <hr className='w-full  border-brown-700 my-3'/>
                <p className='mt-2'>Room Price</p>
                <p className='mt-2'>Tax (18%)</p>
                <p className='font-semibold mt-2'>Total Amount</p>
              </div>
              <div className='text-right'>
                <p className='mt-2'>{bookedRoom.name}</p>
                <p className='mt-2'>{numberOfNights}</p>
                <p className='mt-2'>{bookingData.adults} Adults, {bookingData.children} Children</p>
                <hr className='w-full border-brown-700 my-3'/>
                <p className='mt-2'>₹{totalRoomPrice}</p>
                <p className='mt-2'>₹{tax.toFixed(2)}</p>
                <p className='font-semibold mt-2'>₹{totalAmount.toFixed(2)}</p>
              </div>
            </div>
            {/* <p><strong>Price per Night:</strong> ₹{amount}</p> */}
          </div>
        </div>
      </div>

      {guestDetails && (
        <Payment 
          amount={totalAmount} 
          roomData={{ roomId, checkInDate, checkOutDate, roomName }} 
          guestDetails={guestDetails} 
        />
      )}
    </div>
  );
};

export default BookRoom;