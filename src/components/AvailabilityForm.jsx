// src/components/AvailabilityForm.js
import React from 'react';
import LoadingSpinner from '../utils/LoadingSpinner';
import { useNavigate } from 'react-router-dom';

const AvailabilityForm = ({
  checkInDate,
  setCheckInDate,
  checkOutDate,
  setCheckOutDate,
  loading,
  handleCheckAvailability,
}) => {

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/check-availability', { state: { checkInDate, checkOutDate } });
  };

  const today = new Date().toISOString().split('T')[0];

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minCheckOutDate = tomorrow.toISOString().split('T')[0];

  return (
    <div className="w-fit m-auto text-center">
      {/* <h2 className="mt-10 text-center font-bold text-3xl">Check Room Availability</h2> */}
      <div className="flex justify-center items-end flex-wrap space-x-4">
        {/* Check-in Date */}
        <div className="flex flex-col">
          <label htmlFor="checkInDate" className="mb-1 text-gray-700 text-sm">
            Check-in Date
          </label>
          <input id="checkInDate" type="date" value={checkInDate} required min={today}
            className="w-full px-3 py-2 bg-gray-100 border-2 border-brown-700 focus:border-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            onChange={(e) => setCheckInDate(e.target.value)}
          />
        </div>

        {/* Check-out Date */}
        <div className="flex flex-col">
          <label htmlFor="checkOutDate" className="mb-1 text-gray-700 text-sm">
            Check-out Date
          </label>
          <input id="checkOutDate" type="date" value={checkOutDate} required min={minCheckOutDate}
            className="w-full px-3 py-2 bg-gray-100 border-2 border-brown-700 focus:border-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
            onChange={(e) => setCheckOutDate(e.target.value)}
          />
        </div>

        {/* Adults */}
        <div className="flex flex-col">
          <label htmlFor="adults" className="mb-1 text-gray-700 text-sm">
            Adults
          </label>
          <input id="adults" type="number" min="1" defaultValue="1"
            className="w-20 px-3 py-2 bg-gray-100 border-2 border-brown-700 focus:border-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Children */}
        <div className="flex flex-col">
          <label htmlFor="children" className="mb-1 text-gray-700 text-sm">
            Children
          </label>
          <input id="children" type="number" min="0" defaultValue="0"
            className="w-20 px-3 py-2 bg-gray-100 border-2 border-brown-700 focus:border-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Rooms */}
        <div className="flex flex-col">
          <label htmlFor="rooms" className="mb-1 text-gray-700 text-sm">
            Rooms
          </label>
          <input id="rooms" type="number" min="1" defaultValue="1"
            className="w-20 px-3 py-2 bg-gray-100 border-2 border-brown-700 focus:border-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

          {/* Check Availability Button */}
        <button
          className="px-5 mt-8 py-3 bg-brown-700 text-white shadow-sm hover:bg-brown-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brown-500"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? <LoadingSpinner /> : 'Check Availability'}
        </button>
      </div>
    </div>
  );
};

export default AvailabilityForm;