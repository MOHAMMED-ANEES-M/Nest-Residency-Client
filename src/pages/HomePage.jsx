import React, { useEffect, useState } from 'react';
import Carousel from '../components/Carousel/Carousel';
import Hero from '../components/Hero';
import Rooms from '../components/Rooms';
import Amenities from '../components/Amenities/Amenities';
import Attractions from '../components/Attractions';
import Gallery from '../components/Gallery';
import Location from '../layouts/Location';
import Testimonials from '../components/Testimonials';
import LoadingSpinner from '../utils/LoadingSpinner';
import AvailabilityForm from '../layouts/AvailabilityForm'; // Import the form here

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className='relative mb-0'>
      <Carousel />
      
      {/* Position the form between carousel and hero */}
      <div className="absolute w-full sm:w-[70%] left-1/2 transform -translate-x-1/2 -translate-y-8 md:-translate-y-12 z-20 bg-white shadow-lg pb-2 sm:pb-4">
        <AvailabilityForm
          checkInDate={checkInDate}
          setCheckInDate={setCheckInDate}
          checkOutDate={checkOutDate}
          setCheckOutDate={setCheckOutDate}
          loading={loading}
          handleCheckAvailability={() => setLoading(true)}
        />
      </div>

      <Hero />
      <Rooms setLoading={setLoading} /> 
      <Amenities />
      <Attractions />
      <Gallery />
      <Testimonials />
      <Location />
      {loading && <LoadingSpinner />}
    </div>
  );
};

export default HomePage;
