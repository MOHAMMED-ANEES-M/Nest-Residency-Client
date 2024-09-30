import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { roomDetails } from '../data/room';
import Payment from './Payment';
import GuestForm from '../layouts/GuestForm';

const BookRoom = () => {
  const location = useLocation();
  const { roomId, checkInDate, checkOutDate, bookingData } = location.state;
  
  const bookedRoom = roomDetails.find((room) => room.roomId === roomId);
  const [guestDetails, setGuestDetails] = useState(null);
  
  const amount = bookedRoom.price; // price per night
  const numberOfNights = Math.floor((new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24));
  const totalRoomPrice = amount * numberOfNights;
  const tax = totalRoomPrice * 0.18;
  const totalAmount = totalRoomPrice + tax;
  const handleFormSubmit = (guestData) => {
    setGuestDetails(guestData);
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

        <div className='md:col-span-4 bg-white rounded-lg shadow-md p-5'>
          <h2 className="text-lg font-semibold mb-4">Booking Summary</h2>
          <div className="space-y-2">
            <p><strong>Room:</strong> {bookedRoom.name}</p>
            <p><strong>Check-in Date:</strong> {checkInDate}</p>
            <p><strong>Check-out Date:</strong> {checkOutDate}</p>
            <p><strong>Nights:</strong> {numberOfNights}</p>
            <p><strong>Price per Night:</strong> ₹{amount}</p>
            <p><strong>Total Room Price:</strong> ₹{totalRoomPrice}</p>
            <p><strong>Tax (18%):</strong> ₹{tax.toFixed(2)}</p>
            <p className="font-bold"><strong>Total Amount:</strong> ₹{totalAmount.toFixed(2)}</p>
            <p><strong>Guests:</strong> {bookingData.adults} Adults, {bookingData.children} Children</p>
          </div>
        </div>
      </div>

      {guestDetails && (
        <Payment 
          amount={totalAmount} 
          roomData={{ roomId, checkInDate, checkOutDate }} 
          guestDetails={guestDetails} 
        />
      )}
    </div>
  );
};

export default BookRoom;