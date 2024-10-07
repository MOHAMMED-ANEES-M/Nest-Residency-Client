import React from 'react';

const Hero = () => {
  return (
    <>
      <div className='py-12 sm:py-20 hero'>
        <h2 className='text-xl sm:text-3xl text-center mb-2 sm:mb-5 opacity-75'>
          Best Hotel Rooms in Calicut
        </h2>
        <h1 className='text-3xl sm:text-[50px] text-center mb-4 sm:mb-10 text-brown-700'>
          Nest Residency
        </h1>
        <p className='text-center mx-8 sm:mx-12 md:mx-20 lg:mx-60 sm:text-lg'>
        Discover Nest Residency, the best hotel to stay in Calicut. Enjoy hygienic accommodations near MIMS Hospital, Lulu Mall, and the railway station, just 3 km from the beach. Experience comfort and convenience in the heart of Calicut, perfect for both leisure and business travelers. Whether you're here for medical needs or to explore the city, our location ensures you're always close to key attractions. Book your stay today and experience exceptional service and a peaceful environment.
        </p>
      </div>
    </>
  );
};

export default Hero;
