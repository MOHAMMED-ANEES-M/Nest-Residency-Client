// src/components/AvailabilityForm.js
import React from 'react';
import LoadingSpinner from '../utils/LoadingSpinner';

const AvailabilityForm = ({ checkInDate, setCheckInDate, checkOutDate, setCheckOutDate, loading, handleCheckAvailability }) => {

    
   const today = new Date().toISOString().split('T')[0];

   const tomorrow = new Date();
   tomorrow.setDate(tomorrow.getDate() + 1);
   const minCheckOutDate = tomorrow.toISOString().split('T')[0];

  return (
    <div className='w-fit m-auto text-center'>
      <h2 className='mt-10 text-center font-bold text-3xl '>Check Room Availability</h2>
      <input
        type="date"
        value={checkInDate}
        required
        className="px-4 py-3 mx-5 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
        min={today} 
        onChange={(e) => setCheckInDate(e.target.value)}
      />
      <input
        type="date"
        value={checkOutDate}
        required
        className="px-4 py-3 mx-5 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
        min={minCheckOutDate} 
        onChange={(e) => setCheckOutDate(e.target.value)}
      />
      <button
        className="px-5 mt-5 py-3 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:from-pink-500 hover:to-yellow-400 transition duration-300 ease-in-out"
        onClick={handleCheckAvailability} disabled={loading}>
        {loading ? <LoadingSpinner /> : 'Check Availability'}
      </button>
    </div>
  );
};

export default AvailabilityForm;