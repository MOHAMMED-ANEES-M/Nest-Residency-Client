import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GuestForm = ({ bookingData, handleFormSubmit }) => {
  const [guestDetails, setGuestDetails] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    gstNumber: '',
    specialRequest: '',
  });

  const [isAgreed, setIsAgreed] = useState(false); 
  const handleChange = (e) => {
    setGuestDetails({ ...guestDetails, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = () => {
    setIsAgreed((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAgreed) {      
      handleFormSubmit(guestDetails); 
    }
  };

  return (
    <>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">First Name</label>
          <input
            type="text"
            name="fname"
            value={guestDetails.fname}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Last Name</label>
          <input
            type="text"
            name="lname"
            value={guestDetails.lname}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={guestDetails.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Phone</label>
          <input
            type="number"
            name="phone"
            value={guestDetails.phone}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">GST Number</label>
          <input
            type="text"
            name="gstNumber"
            value={guestDetails.gstNumber}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium">Special Requests</label>
          <textarea
            name="specialRequest"
            value={guestDetails.specialRequest}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>
      </form>

      <div className="flex items-center mt-5">
        <input
          type="checkbox"
          id="agreement"
          checked={isAgreed}
          onChange={handleCheckboxChange}
          required
          className="mr-2"
        />
        <label htmlFor="agreement" className="text-gray-700">
          I have read and agree to the{' '}
          <Link to="/privacypolicy" className="text-brown-700">
            Privacy Policy
          </Link>{' '}
          and{' '}
          <Link to="/terms&conditions" className="text-brown-700">
            Terms & Conditions
          </Link>.
        </label>
      </div>
      <div className="col-span-2">
        <button
        onClick={handleSubmit}
          type="submit"
          className={`mt-4 py-2 px-6 ${isAgreed ? 'bg-blue-600' : 'bg-gray-400 cursor-not-allowed'} text-white rounded-lg`}
          disabled={!isAgreed}
        >
          Proceed to Payment
        </button>
      </div>
    </>
  );
};

export default GuestForm;