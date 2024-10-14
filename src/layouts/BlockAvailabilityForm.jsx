import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

const BlockAvailabilityForm = ({
  checkInDate,
  setCheckInDate,
  checkOutDate,
  setCheckOutDate,
  loading,
  handleCheckAvailability,
}) => {
  
  const [dateError, setDateError] = useState('');

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const handleSubmit = () => {
    if (checkInDate && checkOutDate) {
      if (new Date(checkInDate) < new Date(checkOutDate)) {
        handleCheckAvailability();
      } else {
        setCheckInDate('')
        setDateError('Check-in date must be before the check-out date');
      }
    } else {
      setDateError('Select Dates');
    }
  };

  useEffect(() => {
    if (!checkInDate) {
      setCheckInDate(today);
    }
    if (!checkOutDate) {
      setCheckOutDate(tomorrow);
    }
  }, [checkInDate, checkOutDate, setCheckInDate, setCheckOutDate]);

  const formatDisplayDate = (date) => moment(date).format('DD MMM YY');

  return (
    <div className="w-full max-w-md mx-auto mt-5 sm:mt-10 px-5 pt-5 pb-10 lg:mt-16 sm:px-10 bg-white shadow-md rounded-lg">
      <h1 className='font-semibold text-xl sm:text-2xl mb-8 text-[#912501] text-center'>Check Room Availability</h1>
      <div className="space-y-6 mx-10">
        {/* Check-in Date */}
        <div className="flex flex-col">
          <label htmlFor="checkInDate" className="mb-2 text-lg">Check-in Date</label>
          <DatePicker
            id="checkInDate"
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date)}
            dateFormat="dd/MM/yyyy"
            minDate={today}
            className="w-full px-4 py-2 rounded bg-gray-100 border-2 border-[#912501] focus:border-green-800 shadow-sm text-base sm:text-lg"
          />
        </div>

        {/* Check-out Date */}
        <div className="flex flex-col">
          <label htmlFor="checkOutDate" className="mb-2 text-lg">Check-out Date</label>
          <DatePicker
            id="checkOutDate"
            selected={checkOutDate}
            onChange={(date) => setCheckOutDate(date)}
            dateFormat="dd/MM/yyyy"
            minDate={tomorrow}
            className="w-full px-4 py-2 rounded bg-gray-100 border-2 border-[#912501] focus:border-green-800 shadow-sm text-base sm:text-lg"
          />
        </div>

        <button
          className={`w-full mt-10 py-2 bg-[#912501] text-white font-semibold rounded shadow-md hover:bg-green-800 text-base sm:text-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? 'Checking...' : 'Check Availability'}
        </button>
      </div>
      {dateError && <p className='text-red-500 text-center mt-3 text-sm font-semibold'>{dateError}</p>}
    </div>
  );
};

export default BlockAvailabilityForm;