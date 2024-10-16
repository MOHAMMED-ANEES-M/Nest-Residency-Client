import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AvailabilityForm = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (checkInDate !== '' && checkOutDate !== '') {
      navigate('/check-availability', {
        state: {
          checkInDate,
          checkOutDate,
        },
      });
    }
  };

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  useEffect(() => {
    if (!checkInDate) {
      setCheckInDate(today); // Set check-in date to today by default
    }

    // Whenever the check-in date changes, update the check-out date to one day after check-in
    if (checkInDate) {
      const nextDay = new Date(checkInDate);
      nextDay.setDate(nextDay.getDate() + 1);
      setCheckOutDate(nextDay); // Automatically set check-out date to the day after check-in
    }
  }, [checkInDate]); // Only trigger this effect when the check-in date changes

  return (
    <div className="w-fit m-auto text-center">
      <div className="flex justify-around sm:justify-center items-end flex-wrap gap-4 sm:gap-10">
        {/* Check-in Date */}
        <div className=" hidden sm:flex flex-col">
          <label htmlFor="checkInDate" className="mb-1 font-semibold text-sm">
            Check-in Date
          </label>
          <DatePicker
            id="checkInDate"
            selected={checkInDate ? new Date(checkInDate) : null} // Ensure valid date
            onChange={(date) => setCheckInDate(date)}
            dateFormat="dd-MM-yyyy"
            minDate={today}
            className="w-full px-2 md:px-3 py-1 md:py-2 bg-gray-100 border-2 border-[#912501] focus:border-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-green-800"
          />
        </div>

        {/* Check-out Date */}
        <div className="hidden sm:flex flex-col">
          <label htmlFor="checkOutDate" className="mb-1 font-semibold text-sm">
            Check-out Date
          </label>
          <DatePicker
            id="checkOutDate"
            selected={checkOutDate ? new Date(checkOutDate) : null} // Ensure valid date
            onChange={(date) => setCheckOutDate(date)}
            dateFormat="dd-MM-yyyy"
            minDate={checkInDate ? new Date(checkInDate).setDate(new Date(checkInDate).getDate() + 1) : tomorrow} // Ensure checkout is at least 1 day after check-in
            className="w-full px-2 md:px-3 py-1 md:py-2 bg-gray-100 border-2 border-[#912501] focus:border-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-green-800"
          />
        </div>

        <button
          className="px-3 sm:px-5 mt-3 md:mt-8 py-1 md:py-3 bg-transparent sm:bg-[#912501] border sm:border-none border-[#912501] text-[#912501] sm:text-white shadow-sm hover:bg-[#912501] hover:text-white"
          onClick={handleSubmit}
          disabled={loading}
        >
          Book Now
        </button>

        <a href="tel:+919744005530">
          <button
            className="visible sm:hidden px-5 mt-3 md:mt-8 py-1 sm:py-3 border border-[#912501] text-[#912501] shadow-sm hover:bg-[#912501] hover:text-white"
            disabled={loading}
          >
            Contact
          </button>
        </a>
      </div>
    </div>
  );
};

export default AvailabilityForm;
