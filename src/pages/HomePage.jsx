import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel/Carousel';
import Hero from '../components/Hero';

const HomePage = () => {
  return (
    <div className='mb-10'>
      <Carousel />
      <Hero />
      {/* <h1>Welcome to the Nest Residency</h1>
      <Link to="/check-availability">Check Availability</Link> */}
    </div>
  );
};

export default HomePage;