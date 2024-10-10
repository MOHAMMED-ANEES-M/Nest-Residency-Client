import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AvailabilityForm = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (checkInDate !== '' && checkOutDate !== '') {
      navigate('/check-availability', { 
        state: { checkInDate, checkOutDate } 
      });
    }
  };

  const today = new Date().toISOString().split('T')[0];

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minCheckOutDate = tomorrow.toISOString().split('T')[0];

  useEffect(() => {
    if (!checkInDate) {
      setCheckInDate(today);
    }
    if (!checkOutDate) {
      setCheckOutDate(minCheckOutDate);
    }
  }, [checkInDate, checkOutDate, setCheckInDate, setCheckOutDate, today, minCheckOutDate]);

  return (
    <div className="w-fit m-auto text-center">
      <div className="flex justify-around sm:justify-center items-end flex-wrap gap-4 sm:gap-10">
        {/* Check-in Date */}
        <div className=" hidden sm:flex flex-col">
          <label htmlFor="checkInDate" className="mb-1 font-semibold text-sm ">
            Check-in Date
          </label>
          <input
            id="checkInDate"
            type="date"
            value={checkInDate}
            required
            min={today}
            className="w-full px-2 md:px-3 rounded py-1 md:py-2 bg-gray-100 border-2 border-[#912501] focus:border-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-green-800"
            onChange={(e) => setCheckInDate(e.target.value)}
          />
        </div>

        {/* Check-out Date */}
        <div className="hidden sm:flex flex-col ">
          <label htmlFor="checkOutDate" className="mb-1 font-semibold text-sm">
            Check-out Date
          </label>
          <input
            id="checkOutDate"
            type="date"
            value={checkOutDate}
            required
            min={minCheckOutDate}
            className="w-full px-2 md:px-3 rounded py-1 md:py-2 bg-gray-100 border-2 border-[#912501] focus:border-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-green-800"
            onChange={(e) => setCheckOutDate(e.target.value)}
          />
        </div>

        <button
          className="px-3 sm:px-5 mt-3 md:mt-8 py-1 md:py-3 rounded bg-[#912501] text-white shadow-sm hover:bg-green-800"
          onClick={handleSubmit}
          disabled={loading}
          >
          Book Now
        </button>

        <button
          className="visible sm:hidden px-5 mt-3 md:mt-8 py-1 sm:py-3 rounded bg-[#912501] text-white shadow-sm hover:bg-green-800"
          onClick={handleSubmit}
          disabled={loading}
        >
          Contact
        </button>

      </div>
    </div>
  );
};

export default AvailabilityForm;