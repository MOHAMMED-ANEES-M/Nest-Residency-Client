import React, { useEffect } from 'react'
import { galleryDetails } from '../data/gallery';
import { FaExternalLinkAlt } from 'react-icons/fa';

const GalleryPage = () => {

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <h1 className='text-3xl sm:text-4xl md:text-5xl mb-5 sm:mb-10 text-center text-brown-700 mt-20 sm:mt-28'>Gallery</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-3 mx-3 min-[400px]:mx-10 md:mx-20 mb-10 '>
        {galleryDetails?.map((gallery, index) => (
          <div key={index} className=' group  bg-gray-50 rounded-md shadow-xl p-1  min-[400px]:p-2'>
            <img src={gallery.src} alt="image" className='rounded' />
            {/* <p className='text-center mt-3 text-xl font-semibold '>Area name</p> */}
            <div className=''><button className='bg-brown-700 w-full hover:bg-green-800 text-white text-center text-sm min-[400px]:text-base px-3 py-1 sm:py-2 mt-3 rounded'>Virtual Tour</button></div>
          </div>
        ))}
      </div>
    </>
  )
}

export default GalleryPage;