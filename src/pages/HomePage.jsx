import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import Hero from '../components/Hero';
import Rooms from '../components/Rooms';
import Amenities from '../components/Amenities/Amenities';
import Attractions from '../components/Attractions';
import Gallery from '../components/Gallery';
import Location from '../layouts/Location';

const HomePage = () => {


  return (
    <div className='mb-0'>
      <Carousel />
      <Hero />
      <Rooms />
      <Amenities />
      <Attractions />
      <Gallery />
      <Location />
      {/* <h1>Welcome to the Nest Residency</h1>
      <Link to="/check-availability">Check Availability</Link> */}
    </div>
  );
};

export default HomePage;