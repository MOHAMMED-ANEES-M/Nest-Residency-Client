import React from 'react';
import './Carousel.css'; 
import img from '../../assets/R0016816.jpg';
import img1 from '../../assets/R0016822.jpg';

const Carousel = () => {
  return (
    <div id="slide-container h-[400px] md:h-[600px]">
      <div id="slide-first-element">
        <img className="slide-image h-[400px] md:h-[600px]" src={img1} alt="Beautiful" />
        <p className="slide-text">Beautiful</p>
      </div>
      <div id="slide-element-2">
        <img className="slide-image h-[400px] md:h-[600px]" src={img} alt="Amazing" />
        <p className="slide-text">Amazing</p>
      </div>
      <div id="slide-element-3">
        <img className="slide-image h-[400px] md:h-[600px]" src={img1} alt="Incredible" />
        <p className="slide-text">Incredible</p>
      </div>
    </div>
  );
};

export default Carousel;