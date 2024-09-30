import React, { useEffect } from 'react';
import { galleryDetails } from '../data/gallery';
import { FaExternalLinkAlt } from 'react-icons/fa';

const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <h1 className='text-3xl sm:text-4xl mb-5 sm:mb-10 text-center text-brown-700 mt-20 sm:mt-32'>
        Gallery
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-3 min-[400px]:mx-10 md:mx-20 mb-10'>
        {galleryDetails?.map((gallery, index) => (
          <div key={index} className='group bg-gray-100 rounded-lg p-2 shadow-lg transition-shadow duration-300 hover:shadow-xl overflow-hidden'>
            <img 
              src={gallery.src} 
              alt={`Gallery Image ${index + 1}`} 
              className='w-full h-56 object-cover rounded-md transition-transform duration-300 group-hover:scale-105'
            />
            <div className='p-4'>
              <button className='bg-brown-700 w-full hover:bg-green-600 text-white font-semibold text-sm min-[400px]:text-base px-4 py-2 rounded-lg transition-colors duration-300 flex items-center justify-center'>
                Virtual Tour <FaExternalLinkAlt className='ml-2' />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default GalleryPage;
