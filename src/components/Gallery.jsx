import React from 'react';
import img1 from '../assets/carousel/nest_image1.jpg';
import img2 from '../assets/gallery/nest_6.jpg';
import img3 from '../assets/gallery/nest_9.jpg';
import img4 from '../assets/carousel/nest_image2.jpg';
import img5 from '../assets/rooms/residential_ac_twin1.jpg';
import img6 from '../assets/rooms/residential_ac_king1.jpg';
import { Link } from 'react-router-dom';
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className='mt-20'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl mb-10 text-center text-brown-700'>Our Spaces</h1>
      
      {/* Non-Uniform Grid */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mx-2 min-[400px]:mx-5 sm:mx-20'>
        {images.map((img, index) => (
          <div
            key={index}
            className={`group bg-gray-100 rounded transition-shadow duration-300 overflow-hidden 
              ${index % 7 === 0 ? 'col-span-2 row-span-2' : 
                index % 3 === 0 ? 'col-span-1 row-span-2' : 
                'col-span-1 row-span-1'}`}
          >
            <img 
              src={img} 
              alt={`Gallery Image ${index + 1}`} 
              className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 
                ${index % 7 === 0 ? 'h-96' : index % 3 === 0 ? 'h-72' : 'h-48'}`}
            />
          </div>
        ))}
      </div>

      <div className="w-fit mr-auto sm:ml-auto mx-5 sm:mx-20">
        <Link to='/gallery'>
        <div className='group'>
          <button className='bg-brown-700 hover:bg-green-800 rounded text-white p-2 min-[400px]:p-3 mt-5 flex items-center transition-transform duration-300 ease-in-out'>
            View Gallery
            <BsFillArrowUpRightSquareFill className='ml-2 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2 rotate-45' />
          </button>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Gallery;
