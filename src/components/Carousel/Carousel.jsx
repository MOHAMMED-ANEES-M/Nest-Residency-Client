import React from 'react';
import img1 from '../../assets/carousel/nest_image1.jpg';
import img2 from '../../assets/carousel/nest_image2.jpg';

const Carousel = () => {
  return (
    <div className="relative z-10">
      <div id="slide-container" className="relative h-[400px] md:h-[600px]">
        <div id="slide-first-element" className="absolute w-full h-full fade-1">
          <img className="slide-image h-[400px] md:h-[600px] w-full object-cover" src={img1} alt="Beautiful" />
          <div className='absolute top-20 right-5 sm:top-28 sm:right-5'>
            <button className='bg-[#912501] hover:bg-green-800 rounded text-white px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-xl'>360 Virtual Tour</button>
          </div>
          <div className='absolute bottom-[40%] text-center w-full'>
            <p className='text-[27px] sm:text-[50px] my-3 sm:my-5 text-[#912501]'>Best Hotel to Stay in Calicut</p>
          </div>
        </div>

        <div id="slide-element-2" className="absolute w-full h-full fade-2">
          <img className="slide-image h-[400px] md:h-[600px] w-full object-cover" src={img2} alt="Amazing" />
          <div className='absolute top-20 right-5 sm:top-28 sm:right-5'>
            <button className='bg-[#912501] hover:bg-green-800 rounded text-white px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-xl'>360 Virtual Tour</button>
          </div>
          <div className='absolute bottom-[40%] text-center w-full'>
            <p className='text-[27px] sm:text-[50px] my-3 sm:my-5 text-white'>Best Hotel to Stay in Calicut</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;