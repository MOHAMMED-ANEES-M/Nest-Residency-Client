import React, { useState } from 'react';
import { bookRoom } from '../services/api'; 
import { roomDetails } from '../data/room';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"; 

const AdminBookRoom = () => {
  const [bookingData, setBookingData] = useState({
    roomType: '',
    checkInDate: '',
    checkOutDate: '',
    fname: '',
    lname: '',
    phone: '',
    email: '',
    gstNumber: '',
    specialRequest: ''
  });

  const [errors, setErrors] = useState({});
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: '' })); 
  };

  const handleDateChange = (date, name) => {
    setBookingData((prev) => ({ ...prev, [name]: date }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    return phone.length === 10;
  };

  const validateGST = (gst) => {
    return gst.length === 15;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    for (const [key, value] of Object.entries(bookingData)) {
      if (key !== 'gstNumber' && key !== 'specialRequest' && !value) {
        newErrors[key] = 'This field is required.';
      }
    }

    if (bookingData.phone && !validatePhone(bookingData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits.';
    }

    if (bookingData.gstNumber && !validateGST(bookingData.gstNumber)) {
      newErrors.gstNumber = 'GST number must be 15 digits.';
    }

    if (bookingData.email && !validateEmail(bookingData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await bookRoom(bookingData);
      if (response.success) {
        setSuccessMsg('Room Booked Successfully!')
        setBookingData('')
      }
    } catch (error) {
        // console.error('Error booking room:', error);
        setError(error.response?.data?.message || error.message);
    }
  };

  setTimeout(() => {
    setSuccessMsg('');
    setError('');
  }, 5000);

  return (
    <div className="max-w-3xl mx-auto p-8 bg-gray-100 rounded-lg shadow-md mt-24 mb-10">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Admin - Book a Room</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* User Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              name="fname"
              value={bookingData.fname}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
              placeholder="First Name"
            />
            {errors.fname && <p className="text-red-600 text-xs mt-1">{errors.fname}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              name="lname"
              value={bookingData.lname}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
              placeholder="Last Name"
            />
            {errors.lname && <p className="text-red-600 text-xs mt-1">{errors.lname}</p>}
          </div>
        </div>

        {/* Phone and Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="number"
              name="phone"
              value={bookingData.phone}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
              placeholder="10-digit phone number"
            />
            {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="text"
              name="email"
              value={bookingData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
              placeholder="email@example.com"
            />
            {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
          </div>
        </div>

        {/* Date Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Check-in Date</label>
            <DatePicker
              selected={bookingData.checkInDate}
              onChange={(date) => handleDateChange(date, 'checkInDate')}
              dateFormat="dd-MM-yyyy" // Date format
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
              placeholderText="Select Check-in Date"
              isClearable
            />
            {errors.checkInDate && <p className="text-red-600 text-xs mt-1">{errors.checkInDate}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Check-out Date</label>
            <DatePicker
              selected={bookingData.checkOutDate}
              onChange={(date) => handleDateChange(date, 'checkOutDate')}
              dateFormat="dd-MM-yyyy" 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
              placeholderText="Select Check-out Date"
              isClearable
            />
            {errors.checkOutDate && <p className="text-red-600 text-xs mt-1">{errors.checkOutDate}</p>}
          </div>
        </div>

        {/* Room Type and GST */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Room Category</label>
          <select
            name="roomType"
            value={bookingData.roomType}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          >
            <option value="" disabled>Select Room Type</option>
            {roomDetails.map((room, index) => (
              <option key={index} value={room.roomType}>{room.roomType}</option>
            ))}
          </select>
          {errors.roomType && <p className="text-red-600 text-xs mt-1">{errors.roomType}</p>}
        </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">GST Number (Optional)</label>
            <input
              type="text"
              name="gstNumber"
              value={bookingData.gstNumber}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
              placeholder="GST Number"
            />
            {errors.gstNumber && <p className="text-red-600 text-xs mt-1">{errors.gstNumber}</p>}
          </div>
        </div>

        {/* Special Request */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Special Request (Optional)</label>
          <textarea
            name="specialRequest"
            value={bookingData.specialRequest}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            placeholder="Any special requests"
          />
        </div>

        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-300"
          >
            Book Room
          </button>
        </div>
        {error && <p className="text-red-600 text-sm text-center mt-1">{error}</p>}
        {successMsg && <p className="text-blue-600 text-center mt-1">{successMsg}</p>}
      </form>
    </div>
  );
};

export default AdminBookRoom;