import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AvailabilityForm = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (checkInDate !== '' && checkOutDate !== '') {
      navigate('/check-availability', { 
        state: { checkInDate, checkOutDate, adults, children, rooms } 
      });
    }
  };

  const today = new Date().toISOString().split('T')[0];

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minCheckOutDate = tomorrow.toISOString().split('T')[0];

  return (
    <div className="w-fit m-auto text-center">
      <div className="flex justify-center items-end flex-wrap space-x-4">
        {/* Check-in Date */}
        <div className="flex flex-col">
          <label htmlFor="checkInDate" className="mb-1 font-semibold text-sm">
            Check-in Date
          </label>
          <input
            id="checkInDate"
            type="date"
            value={checkInDate}
            required
            min={today}
            className="w-full px-2 md:px-3 rounded py-1 md:py-2 bg-gray-100 border-2 border-brown-700 focus:border-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-green-800"
            onChange={(e) => setCheckInDate(e.target.value)}
          />
        </div>

        {/* Check-out Date */}
        <div className="flex flex-col">
          <label htmlFor="checkOutDate" className="mb-1 font-semibold text-sm">
            Check-out Date
          </label>
          <input
            id="checkOutDate"
            type="date"
            value={checkOutDate}
            required
            min={minCheckOutDate}
            className="w-full px-2 md:px-3 rounded py-1 md:py-2 bg-gray-100 border-2 border-brown-700 focus:border-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-green-800"
            onChange={(e) => setCheckOutDate(e.target.value)}
          />
        </div>

        {/* Adults */}
        <div className="flex flex-col">
          <label htmlFor="adults" className="mb-1 font-semibold text-sm">
            Adults
          </label>
          <input
            id="adults"
            type="number"
            min="1"
            value={adults}
            className="w-14 px-2 md:px-3 rounded py-1 md:py-2 bg-gray-100 border-2 border-brown-700 focus:border-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-green-800"
            onChange={(e) => setAdults(e.target.value)}
          />
        </div>

        {/* Children */}
        <div className="flex flex-col">
          <label htmlFor="children" className="mb-1 font-semibold text-sm">
            Children
          </label>
          <input
            id="children"
            type="number"
            min="0"
            value={children}
            className="w-14 px-2 md:px-3 rounded py-1 md:py-2 bg-gray-100 border-2 border-brown-700 focus:border-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-green-800"
            onChange={(e) => setChildren(e.target.value)}
          />
        </div>

        {/* Rooms */}
        <div className="flex flex-col">
          <label htmlFor="rooms" className="mb-1 font-semibold text-sm">
            Rooms
          </label>
          <input
            id="rooms"
            type="number"
            min="1"
            value={rooms}
            className="w-14 px-2 md:px-3 rounded py-1 md:py-2 bg-gray-100 border-2 border-brown-700 focus:border-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-green-800"
            onChange={(e) => setRooms(e.target.value)}
          />
        </div>

        {/* Check Availability Button */}
        <button
          className="px-3 md:px-5 mt-8 py-2 md:py-3 rounded bg-brown-700 text-white shadow-sm hover:bg-green-800"
          onClick={handleSubmit}
          disabled={loading}
        >
          Check Availability
        </button>
      </div>
    </div>
  );
};

export default AvailabilityForm;