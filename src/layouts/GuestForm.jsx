import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GuestForm = ({ handleFormSubmit }) => {
  const [guestDetails, setGuestDetails] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    gstNumber: '',
    specialRequest: '',
  });

  const [isAgreed, setIsAgreed] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setGuestDetails({ ...guestDetails, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: '' })); // Clear error on change
  };

  const handleCheckboxChange = () => {
    setIsAgreed((prev) => !prev);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    return phone.length === 10; 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    for (const [key, value] of Object.entries(guestDetails)) {
      if (key !== 'gstNumber' && key !== 'specialRequest' && !value) {
        newErrors[key] = 'This field is required.';
      }
    }

    if (guestDetails.fname && (guestDetails.fname.length < 2 || guestDetails.fname.length > 30)) {
      newErrors.fname = 'First name must be between 2 and 30 characters.';
    }

    if (guestDetails.lname && (guestDetails.lname.length < 1 || guestDetails.lname.length > 30)) {
      newErrors.lname = 'Last name must be between 1 and 30 characters.';
    }

    if (guestDetails.email && !validateEmail(guestDetails.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (guestDetails.phone && !validatePhone(guestDetails.phone)) {
      newErrors.phone = 'Phone number must be 10 digits.';
    }

    if (guestDetails.gstNumber && guestDetails.gstNumber.length !== 15) {
      newErrors.gstNumber = 'GST Number must be exactly 15 characters.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // Stop submission if there are errors
    }

    if (isAgreed) {
      handleFormSubmit(guestDetails);
    }
  };

  return (
    <form className="flex flex-col md:grid md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label className="block text-sm font-medium">First Name</label>
        <input
          type="text"
          name="fname"
          value={guestDetails.fname}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.fname && <p className="text-red-600 text-sm">{errors.fname}</p>}
      </div>
      <div className="flex flex-col">
        <label className="block text-sm font-medium">Last Name</label>
        <input
          type="text"
          name="lname"
          value={guestDetails.lname}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.lname && <p className="text-red-600 text-sm">{errors.lname}</p>}
      </div>
      <div className="flex flex-col">
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={guestDetails.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.email ? <p className="text-red-600 text-sm">{errors.email}</p> : 
        <p className=" text-sm">Enter a valid email to receive your booking confirmation</p>
        }
      </div>
      <div className="flex flex-col">
        <label className="block text-sm font-medium">Phone</label>
        <input
          type="tel"
          name="phone"
          value={guestDetails.phone}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
      </div>
      <div className="flex flex-col">
        <label className="block text-sm font-medium">GST Number</label>
        <input
          type="text"
          name="gstNumber"
          value={guestDetails.gstNumber}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.gstNumber && <p className="text-red-600 text-sm">{errors.gstNumber}</p>}
      </div>
      <div className="flex flex-col col-span-2">
        <label className="block text-sm font-medium">Special Requests</label>
        <textarea
          name="specialRequest"
          value={guestDetails.specialRequest}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="flex items-baseline">
        <input
          type="checkbox"
          checked={isAgreed}
          onChange={handleCheckboxChange}
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
    </form>
  );
};

export default GuestForm;