import React, { useState, useEffect } from 'react';
import img1 from '../../assets/gallery/nest_7.jpg';
import img2 from '../../assets/carousel/nest_image2.jpg';
import img3 from '../../assets/carousel/nest_image1.jpg';
import './Carousel.css';

const images = [
  { src: img1, text: 'Best Hotel to Stay in Calicut', buttonText: '360 Virtual Tour', link: 'https://cybozom.site/360/nest5/' },
  { src: img2, text: 'Best Hotel to Stay in Calicut', buttonText: '360 Virtual Tour', link: 'https://cybozom.site/360/nest5/' },
  { src: img3, text: 'Best Hotel to Stay in Calicut', buttonText: '360 Virtual Tour', link: 'https://cybozom.site/360/nest5/' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`fade-slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image.src})` }}
        >
          <p className="carousel-text">{image.text}</p>
          <a href={image.link}>
            <button className="carousel-button">{image.buttonText}</button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Carousel;