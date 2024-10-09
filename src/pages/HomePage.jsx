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

const HomePage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className='mb-0'>
      <Carousel />
      <Hero />
      <Rooms setLoading={setLoading} /> 
      <Amenities />
      <Attractions />
      <Gallery />
      <Testimonials />
      <Location />
      {loading && <LoadingSpinner />} {/* Show loading spinner if loading is true */}
    </div>
  );
};

export default HomePage;