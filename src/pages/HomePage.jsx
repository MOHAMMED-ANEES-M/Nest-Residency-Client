import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel/Carousel';
import Hero from '../components/Hero';
import Rooms from '../components/Rooms';
import Amenities from '../components/Amenities/Amenities';
import Swiper from '../components/Swiper/Swiper';

const HomePage = () => {


  return (
    <div className='mb-10'>
      <Carousel />
      <Hero />
      <Rooms />
      <Amenities />
      <Swiper/>
      {/* <h1>Welcome to the Nest Residency</h1>
      <Link to="/check-availability">Check Availability</Link> */}
    </div>
  );
};

export default HomePage;