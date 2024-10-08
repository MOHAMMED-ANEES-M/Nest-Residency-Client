import React from 'react';
import Slider from 'react-slick';
import TestimonialCard from '../layouts/TestimonialCard';
import amal_dp from '../assets/testimonials/amal_dp.webp';
import suraj_dp from '../assets/testimonials/suraj_dp.webp';
import shanu_dp from '../assets/testimonials/shanu_dp.webp';
import nasary_dp from '../assets/testimonials/nasary_dp.webp';
import charles_dp from '../assets/testimonials/charles_dp.webp';

const testimonials = [
  {
    id: 1,
    name: "Amal bang",
    title: "Guest",
    avatar: amal_dp, 
    feedback: `Rooms: Well cleaned. Nearby activities: Calicut beach, valayanad temple, sm street. Walkability: Near to aster mims hospital calicut and lulu hypermarket`
  },
  {
    id: 2,
    name: "Suraj Sivadasan",
    title: "Local Guide",
    avatar: suraj_dp, 
    feedback: "Fantastic stay! The location is superb, being very close to the main road, making it incredibly accessible. This convenience was a key highlight of my experience. Highly recommended for those prioritizing ease of access and a great stay."
  },
  {
    id: 3,
    name: "Shanu Thayemanedath",
    title: "Guest",
    avatar: shanu_dp, 
    feedback: "Nice rooms , hygienic and tidy , MIMS hospital at walkable distance,  worth for money"
  },
  {
    id: 4,
    name: "Nasary P T",
    title: "Guest",
    avatar: nasary_dp, 
    feedback: "Very good ambience and good service also infront of Aster mims hospital overall a good experience"
  },
  {
    id: 5,
    name: "CHARLES J.F.",
    title: "Local Guide",
    avatar: charles_dp, 
    feedback: "Really excellent room. Very affordable price. Location on the main road."
  }
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,  
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
<div className="py-12 px-8 sm:px-10 lg:px-20 mt-20 rounded-xl mx-5 bg-gradient-to-br from-gray-900 via-black to-gray-900 bg-opacity-95">
<h2 className="text-3xl sm:text-4xl md:text-5xl mb-8 text-center text-white">Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="p-1 sm:p-3">
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;