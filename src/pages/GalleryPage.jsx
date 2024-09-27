import React, { useEffect } from 'react'
import { galleryDetails } from '../data/gallery';
import { FaExternalLinkAlt } from 'react-icons/fa';

const GalleryPage = () => {

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <h1 className='text-[50px] mb-10 text-center text-brown-700 mt-20'>Gallery</h1>
      <div className='grid grid-cols-3 gap-2 mx-20 mb-20 bg-brown-700 p-2 rounded'>
        {galleryDetails?.map((gallery, index) => (
          <div key={index} className='relative group'>
            <img src={gallery.src} alt="image" className='w-full h-full' />
            {/* Link Button */}
            <a href={gallery.link} className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <button className='p-4 bg-brown-700 hover:bg-green-800 text-white text-lg font-semibold rounded-md '>
                <FaExternalLinkAlt className='w-8 h-8'/>
              </button>
            </a>
          </div>
        ))}
      </div>
    </>
  )
}

export default GalleryPage;