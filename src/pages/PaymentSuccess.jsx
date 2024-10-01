import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { roomDetails } from '../data/room';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();

  // Extract paymentId and roomId from URL query parameters
  const paymentId = searchParams.get('paymentId');
  const roomId = searchParams.get('roomId');

  // Find the room data based on roomId
  const roomData = roomDetails.find((room) => room.roomId === roomId);

  // Get roomDetails and guestDetails from the location state if passed
  const guestDetails = location.state?.guestDetails || {};
  const bookingDetails = location.state?.roomDetails || {};
  const amount = location.state?.amount || '';

  return (
    <div className="container mx-auto p-4 mt-20">
      <h1 className="text-2xl font-bold text-center mb-4">Payment Successful</h1>

      {/* Payment Details */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2">Payment Information</h2>
        <p><strong>Payment ID:</strong> {paymentId}</p>
      </div>

      {/* Room Details */}
      {roomData ? (
        <div className="bg-white shadow-md rounded-lg p-6 mt-4">
          <h2 className="text-xl font-semibold mb-2">Room Information</h2>
          <p><strong>Room ID:</strong> {roomData.roomId}</p>
          <p><strong>Room Type:</strong> {roomData.name}</p>
          <p><strong>Check-in Date:</strong> {bookingDetails.checkInDate}</p>
          <p><strong>Check-out Date:</strong> {bookingDetails.checkOutDate}</p>
        </div>
      ) : (
        <p className="text-red-500 mt-4">Room details not found</p>
      )}

      {/* Guest Details */}
      <div className="bg-white shadow-md rounded-lg p-6 mt-4">
        <h2 className="text-xl font-semibold mb-2">Guest Information</h2>
        <p><strong>Name:</strong> {guestDetails.fname} {guestDetails.lname}</p>
        <p><strong>Email:</strong> {guestDetails.email}</p>
        <p><strong>Phone:</strong> {guestDetails.phone}</p>
      </div>
    </div>
  );
};

export default PaymentSuccess;