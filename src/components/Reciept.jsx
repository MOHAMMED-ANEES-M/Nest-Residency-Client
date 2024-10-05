import React from 'react';

const Receipt = ({ paymentId, amount, bookingDetails, guestDetails }) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-4">Payment Receipt</h1>
      <p className="text-md my-2 text-center">Booking confirmation has been sent to your email.</p>
      {bookingDetails ? (
        <div>
          <h2 className="text-2xl font-semibold mb-2 mt-4">Room Information</h2>
          <div className="grid grid-cols-2 gap-2">
            <p className="font-semibold">Room Number:</p>
            <p>{bookingDetails.roomNumber}</p>
            <p className="font-semibold">Room Type:</p>
            <p>{bookingDetails.roomType}</p>
            <p className="font-semibold">Check-in Date:</p>
            <p>{bookingDetails.checkInDate}</p>
            <p className="font-semibold">Check-out Date:</p>
            <p>{bookingDetails.checkOutDate}</p>
          </div>
        </div>
      ) : (
        <p className="text-red-500 text-lg">Room details not found</p>
      )}
      <div>
        <h2 className="text-2xl font-semibold mb-2 mt-4">Payment Information</h2>
        <div className="grid grid-cols-2 gap-2">
          <p className="font-semibold">Payment ID:</p>
          <p>{paymentId}</p>
          <p className="font-semibold">Amount Paid:</p>
          <p>₹{(amount / 100).toFixed(2)}</p>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2 mt-4">Guest Information</h2>
        <div className="grid grid-cols-2 gap-2">
          <p className="font-semibold">Name:</p>
          <p>{guestDetails.fname} {guestDetails.lname}</p>
          <p className="font-semibold">Email:</p>
          <p>{guestDetails.email}</p>
          <p className="font-semibold">Phone:</p>
          <p>{guestDetails.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default Receipt;