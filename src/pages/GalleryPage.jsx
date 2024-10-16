import React, { useEffect } from 'react';
import { galleryDetails } from '../data/gallery';

const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <h1 className='text-3xl sm:text-4xl mb-5 sm:mb-10 text-center text-[#912501] mt-20 sm:mt-32'>
        Explore Our Photo Gallery
      </h1>
      
      {/* Grid Container for a Balanced, Non-Uniform Layout */}
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mx-4 sm:mx-10 md:mx-20 mb-10'>
        {galleryDetails?.map((gallery, index) => (
          <div 
            key={index} 
            className={`group bg-gray-100 transition-shadow duration-300 overflow-hidden 
              ${index % 10 === 0 ? 'col-span-2 row-span-2' : 
                index % 7 === 0 ? 'col-span-2 row-span-1' : 
                index % 5 === 0 ? 'col-span-1 row-span-2' : 
                'col-span-1 row-span-1'}`}
          >
            <img 
              src={gallery.src} 
              alt={`Gallery Image ${index + 1}`} 
              className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 
                ${index % 10 === 0 ? 'h-full' : 
                  index % 7 === 0 ? 'h-64' : 
                  index % 5 === 0 ? 'h-40 sm:h-full' : 'h-full'}`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default GalleryPage;
