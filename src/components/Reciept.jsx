import React from 'react';
import { formatBookingDate } from '../utils/FormateDate';

const Receipt = ({ paymentId, amount, bookingDetails, guestDetails }) => {
  return (
    <div className="p-2 sm:p-4 max-w-md mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4">Payment Receipt</h1>
      <p className=" text-gray-600 text-center mb-5">Booking confirmation has been sent to your email.</p>
      
      {bookingDetails ? (
        <div className="mb-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">Room Information</h2>
          <div className="flex justify-between bg-gray-100 p-2 sm:p-3 rounded-lg mb-4">
            <p className="font-semibold text-gray-700">Booking Date:</p>
            <p className="text-gray-900">{formatBookingDate(bookingDetails.createdAt)}</p>
          </div>
          <div className="flex justify-between bg-gray-100 p-2 sm:p-3 rounded-lg mb-4">
            <p className="font-semibold text-gray-700">Room Number:</p>
            <p className="text-gray-900">{bookingDetails.roomNumber}</p>
          </div>
          <div className="flex justify-between bg-gray-100 p-2 sm:p-3 rounded-lg mb-4">
            <p className="font-semibold text-gray-700">Room Type:</p>
            <p className="text-gray-900">{bookingDetails.roomType}</p>
          </div>
          <div className="flex justify-between bg-gray-100 p-2 sm:p-3 rounded-lg mb-4">
            <p className="font-semibold text-gray-700">Check-in Date:</p>
            <p className="text-gray-900">{formatBookingDate(bookingDetails.checkInDate)}</p>
          </div>
          <div className="flex justify-between bg-gray-100 p-2 sm:p-3 rounded-lg mb-4">
            <p className="font-semibold text-gray-700">Check-out Date:</p>
            <p className="text-gray-900">{formatBookingDate(bookingDetails.checkOutDate)}</p>
          </div>
        </div>
      ) : (
        <p className="text-red-500 text-sm">Room details not found</p>
      )}

      <div className="mb-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">Payment Information</h2>
        <div className="flex justify-between bg-gray-100 p-2 sm:p-3 rounded-lg mb-4">
          <p className="font-semibold text-gray-700">Payment ID:</p>
          <p className="text-gray-900">{paymentId}</p>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 sm:p-3 rounded-lg mb-4">
          <p className="font-semibold text-gray-700">Amount Paid:</p>
          <p className="text-gray-900">₹{(amount / 100).toFixed(2)}</p>
        </div>
      </div>

      <div>
        <h2 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">Guest Information</h2>
        <div className="flex justify-between bg-gray-100 p-2 sm:p-3 rounded-lg mb-4">
          <p className="font-semibold text-gray-700">Name:</p>
          <p className="text-gray-900">{guestDetails.fname} {guestDetails.lname}</p>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 sm:p-3 rounded-lg mb-4">
          <p className="font-semibold text-gray-700">Email:</p>
          <p className="text-gray-900">{guestDetails.email}</p>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 sm:p-3 rounded-lg mb-4">
          <p className="font-semibold text-gray-700">Phone:</p>
          <p className="text-gray-900">{guestDetails.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default Receipt;