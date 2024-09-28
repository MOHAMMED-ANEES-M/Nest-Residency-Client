import React, { useState } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';

const RoomCarousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-full overflow-hidden rounded-sm">
      {/* Carousel images */}
      <div
        className="flex transition-transform duration-300 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-brown-700 text-white px-3 py-2 h-10 w-10 rounded-full"
      >
        <GrPrevious className='text-white'/>
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-brown-700 text-white px-3 py-2 h-10 w-10 rounded-full"
      >
        <GrNext className='text-white'/>
      </button>

    </div>
  );
};

export default RoomCarousel;