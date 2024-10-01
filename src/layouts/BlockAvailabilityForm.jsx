import React, { useEffect } from 'react';

const BlockAvailabilityForm = ({
  checkInDate,
  setCheckInDate,
  checkOutDate,
  setCheckOutDate,
  bookingData,
  setBookingData,
  loading,
  handleCheckAvailability,
}) => {
  
  const today = new Date().toISOString().split('T')[0];

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minCheckOutDate = tomorrow.toISOString().split('T')[0];

  const handleInputChange = (e) => {
    setBookingData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    if (checkInDate !== '' && checkOutDate !== '') {
      handleCheckAvailability();
    } else {
      alert('Select Dates')
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
    <div className="w-full max-w-md mx-20 mt-10 px-5 py-10">
      <div className="space-y-6">
        {/* Check-in Date */}
        <div className="flex flex-col">
          <label htmlFor="checkInDate" className="mb-2 font-semibold">
            Check-in Date
          </label>
          <input
            id="checkInDate"
            type="date"
            value={checkInDate}
            required
            min={today}
            className="w-full px-4 py-2 rounded bg-gray-100 border-2 border-gray-300 focus:border-green-800 shadow-sm"
            onChange={(e) => setCheckInDate(e.target.value)}
          />
        </div>

        {/* Check-out Date */}
        <div className="flex flex-col">
          <label htmlFor="checkOutDate" className="mb-2 font-semibold">
            Check-out Date
          </label>
          <input
            id="checkOutDate"
            type="date"
            value={checkOutDate}
            required
            min={minCheckOutDate}
            className="w-full px-4 py-2 rounded bg-gray-100 border-2 border-gray-300 focus:border-green-800 shadow-sm"
            onChange={(e) => setCheckOutDate(e.target.value)}
          />
        </div>

        {/* Adults, Children, Rooms */}
        <div className="flex space-x-4">
          {/* Adults */}
          <div className="flex flex-col w-1/3">
            <label htmlFor="adults" className="mb-2 font-semibold">
              Adults
            </label>
            <input
              id="adults"
              name="adults"
              type="number"
              min="1"
              max="3"
              value={bookingData.adults || 1}
              className="w-full px-4 py-2 rounded bg-gray-100 border-2 border-gray-300 focus:border-green-800 shadow-sm"
              onChange={handleInputChange}
            />
          </div>

          {/* Children */}
          <div className="flex flex-col w-1/3">
            <label htmlFor="children" className="mb-2 font-semibold">
              Children
            </label>
            <input
              id="children"
              name="children"
              type="number"
              min="0"
              max="2"
              value={bookingData.children || 0}
              className="w-full px-4 py-2 rounded bg-gray-100 border-2 border-gray-300 focus:border-green-800 shadow-sm"
              onChange={handleInputChange}
            />
          </div>

          {/* Rooms */}
          <div className="flex flex-col w-1/3">
            <label htmlFor="rooms" className="mb-2 font-semibold">
              Rooms
            </label>
            <input
              id="rooms"
              name="rooms"
              type="number"
              min="1"
              max="3"
              value={bookingData.rooms || 1}
              className="w-full px-4 py-2 rounded bg-gray-100 border-2 border-gray-300 focus:border-green-800 shadow-sm"
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Check Availability Button */}
        <button
          className={`w-full mt-8 py-3 bg-green-700 text-white font-semibold rounded shadow-md hover:bg-green-800 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
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