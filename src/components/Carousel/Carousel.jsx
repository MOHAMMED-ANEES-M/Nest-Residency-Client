import React, { useState } from 'react';
import './Carousel.css'; 
import img1 from '../../assets/carousel/nest_image1.jpg';
import img2 from '../../assets/carousel/nest_image2.jpg';
import AvailabilityForm from '../../layouts/AvailabilityForm';

const Carousel = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCheckAvailability = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000); 
  };

  return (
    <div className="relative">
      <div id="slide-container" className="relative h-[400px] md:h-[600px]">
        <div id="slide-first-element">
          <img className="slide-image h-[400px] md:h-[600px] w-full object-cover" src={img1} alt="Beautiful" />
          <div className='slide-text absolute bottom-2 sm:bottom-4 left-2 sm:left-4'>
            <p className='text-[27px] sm:text-[50px] my-3 sm:my-5 text-brown-700'>Best Hotel to Stay in Calicut</p>
            <button className='bg-brown-700 rounded text-white px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-xl'>360 Virtual Tour</button>
          </div>
        </div>
        <div id="slide-element-2">
          <img className="slide-image h-[400px] md:h-[600px] w-full object-cover" src={img2} alt="Amazing" />
          <div className='slide-text absolute bottom-2 sm:bottom-4 left-2 sm:left-4'>
            <p className='text-[27px] sm:text-[50px] my-3 sm:my-5 '>Best Hotel to Stay in Calicut</p>
            <button className='text-brown-700 rounded bg-white px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-xl'>360 Virtual Tour</button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-50 pt- pb-2 hidden md:block">
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