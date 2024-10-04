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
  const guestDetails = location?.state?.guestDetails || {};
  const bookingDetails = location?.state?.roomDetails || {};
  const amount = location?.state?.amount || '';

  return (
    <div className="mx-auto p-6 mt-24 mb-5 max-w-lg bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center  mb-4">Payment Receipt</h1>
      <p className="text-md  my-2 text-center">A booking confirmation has been sent to your email.</p>

      {roomData ? (
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <h2 className="text-2xl font-semibold mb-4">Room Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <p className="font-semibold">Room Number:</p>
            <p className="">{roomData.roomId}</p>
            <p className="font-semibold">Room Type:</p>
            <p className="">{roomData.name}</p>
            <p className="font-semibold">Check-in Date:</p>
            <p className="">{bookingDetails.checkInDate}</p>
            <p className="font-semibold">Check-out Date:</p>
            <p className="">{bookingDetails.checkOutDate}</p>
          </div>
        </div>
      ) : (
        <p className="text-red-500 text-lg">Room details not found</p>
      )}

<div className="bg-white shadow-md rounded-lg p-6 mb-4">
        <h2 className="text-2xl font-semibold mb-4">Payment Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <p className="font-semibold">Payment ID:</p>
          <p className="">{paymentId}</p>
          <p className="font-semibold">Amount Paid:</p>
          <p className="">₹{(amount / 100).toFixed(2)}</p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Guest Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <p className="font-semibold">Name:</p>
          <p className="">{guestDetails.fname} {guestDetails.lname}</p>
          <p className="font-semibold">Email:</p>
          <p className="">{guestDetails.email}</p>
          <p className="font-semibold">Phone:</p>
          <p className="">{guestDetails.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;