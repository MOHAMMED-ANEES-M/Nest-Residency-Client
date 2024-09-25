import React from 'react'
import img from '../../assets/don2.webp'
import './Swiper.css'

const Swiper = () => {

    const images = [
        img, img, img, img, img, img, img,
      ];

  return (
  <>
        <h1 className='text-[50px] mb-10 text-center text-brown-700  mt-20'>Gallery</h1>
    <div className="image-scroll-container">
        <div className="image-scroll-content">
        {images.map((image, index) => (
            <div className="image-item" key={index}>
            <img src={image} alt={`Image ${index + 1}`} />
            </div>
        ))}
        </div>
    </div>
    </>
  )
}

export default Swiper
