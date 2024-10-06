import React, { useEffect } from 'react';

const BlockAvailabilityForm = ({
  checkInDate,
  setCheckInDate,
  checkOutDate,
  setCheckOutDate,
  loading,
  handleCheckAvailability,
}) => {
  
  const today = new Date().toISOString().split('T')[0];

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minCheckOutDate = tomorrow.toISOString().split('T')[0];

  const handleSubmit = () => {
    if (checkInDate !== '' && checkOutDate !== '') {
      handleCheckAvailability();
    } else {
      alert('Select Dates');
    }
  };

  useEffect(() => {
    if (!checkInDate) {
      setCheckInDate(today);
    }
    if (!checkOutDate) {
      setCheckOutDate(minCheckOutDate);
    }
  }, [checkInDate, checkOutDate, setCheckInDate, setCheckOutDate, today, minCheckOutDate]);

  return (
    <div className="w-full max-w-md mx-auto mt-5 sm:mt-10 px-5 py-10 lg:mt-16 sm:px-10 bg-white shadow-md rounded-lg">
      <div className="space-y-6 mx-10">
        {/* Check-in Date */}
        <div className="flex flex-col">
          <label htmlFor="checkInDate" className="mb-2 font-semibold text-lg sm:text-xl">
            Check-in Date
          </label>
          <input
            id="checkInDate"
            type="date"
            value={checkInDate}
            required
            min={today}
            className="w-full px-4 py-2 rounded bg-gray-100 border-2 border-gray-300 focus:border-green-800 shadow-sm text-base sm:text-lg"
            onChange={(e) => setCheckInDate(e.target.value)}
          />
        </div>

        {/* Check-out Date */}
        <div className="flex flex-col">
          <label htmlFor="checkOutDate" className="mb-2 font-semibold text-lg sm:text-xl">
            Check-out Date
          </label>
          <input
            id="checkOutDate"
            type="date"
            value={checkOutDate}
            required
            min={minCheckOutDate}
            className="w-full px-4 py-2 rounded bg-gray-100 border-2 border-gray-300 focus:border-green-800 shadow-sm text-base sm:text-lg"
            onChange={(e) => setCheckOutDate(e.target.value)}
          />
        </div>

        <button
          className={`w-full mt-8 py-3 bg-brown-700 text-white font-semibold rounded shadow-md hover:bg-green-800 text-base sm:text-lg lg:py-4 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? 'Checking...' : 'Check Availability'}
        </button>
      </div>
    </div>
  );
};

export default BlockAvailabilityForm;