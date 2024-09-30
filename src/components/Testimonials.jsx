import React from 'react';
import Slider from 'react-slick';
import TestimonialCard from '../layouts/TestimonialCard';
import avatar from '../assets/93ecbf5f_z.jpg';

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO, Company",
    avatar: avatar, 
    feedback: "This hotel exceeded all expectations! The service was exceptional, and the rooms were very comfortable. Highly recommend!"
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Marketing Manager, ABC Corp",
    avatar: avatar, 
    feedback: "Amazing experience! The amenities were top-notch, and the location was perfect for our business trip. Would definitely stay again!"
  },
  {
    id: 3,
    name: "Sam Wilson",
    title: "Travel Blogger",
    avatar: avatar, 
    feedback: "A perfect stay! From the comfortable rooms to the delicious breakfast, everything was great. The staff was friendly and helpful."
  },
  {
    id: 4,
    name: "Emily Clark",
    title: "Designer",
    avatar: avatar, 
    feedback: "Beautiful place! The environment was peaceful, and the staff was very accommodating. Would love to visit again!"
  },
  {
    id: 5,
    name: "Michael Lee",
    title: "Software Engineer",
    avatar: avatar, 
    feedback: "I had a great experience! The hotel was clean, and the service was fast and efficient. Highly recommend it for business travelers."
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
    <div className="py-12 px-6 sm:px-10 lg:px-20 mt-20 rounded-xl mx-2 bg-black bg-opacity-90">
      <h2 className="text-3xl sm:text-4xl md:text-5xl mb-8 text-center text-white">Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="p-3">
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;