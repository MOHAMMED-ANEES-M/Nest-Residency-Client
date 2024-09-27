import React, { useState } from 'react';
import './Carousel.css'; 
import img from '../../assets/outdoor-pool.jpg';
import img1 from '../../assets/93ecbf5f_z.jpg';
import AvailabilityForm from '../../layouts/AvailabilityForm';

const Carousel = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCheckAvailability = () => {
    setLoading(true);
    // Your logic for checking availability goes here
    setTimeout(() => setLoading(false), 2000); // Example loading timeout
  };

  return (
    <div className="relative">
      {/* Carousel */}
      <div id="slide-container" className="relative h-[400px] md:h-[600px]">
        <div id="slide-first-element">
          <img className="slide-image h-[400px] md:h-[600px] w-full object-cover" src={img1} alt="Beautiful" />
          <div className='slide-text absolute bottom-4 left-4'>
            <p className='text-[50px] my-5'>Best Hotel to Stay in Calicut</p>
            <button className='bg-brown-700 rounded text-white p-3 text-xl'>360 Virtual Tour</button>
          </div>
        </div>
        <div id="slide-element-2">
          <img className="slide-image h-[400px] md:h-[600px] w-full object-cover" src={img} alt="Amazing" />
          <div className='slide-text absolute bottom-4 left-4'>
            <p className='text-[50px] my-5'>Best Hotel to Stay in Calicut</p>
            <button className='bg-brown-700 rounded text-white p-3 text-xl'>360 Virtual Tour</button>
          </div>
        </div>
        <div id="slide-element-3">
          <img className="slide-image h-[400px] md:h-[600px] w-full object-cover" src={img1} alt="Incredible" />
          <div className='slide-text absolute bottom-4 left-4'>
            <p className='text-[50px] my-5'>Best Hotel to Stay in Calicut</p>
            <button className='bg-brown-700 rounded text-white p-3 text-xl'>360 Virtual Tour</button>
          </div>
        </div>

        {/* Overlay Availability Form at the bottom */}
        <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-50 p-4">
          <AvailabilityForm
            checkInDate={checkInDate}
            setCheckInDate={setCheckInDate}
            checkOutDate={checkOutDate}
            setCheckOutDate={setCheckOutDate}
            loading={loading}
            handleCheckAvailability={handleCheckAvailability}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;