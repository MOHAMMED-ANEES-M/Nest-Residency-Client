import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  return (
  <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
    <div className="absolute -top-6 -left-6 bg-gradient-to-br from-brown-700 to-brown-700 p-2 rounded-full shadow-md">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name} 
          className="w-16 h-16 rounded-full object-cover border-4 border-white"
        />
      </div>
      <div className="mt-10">
        <blockquote className="text-base italic text-white mb-4">
          <span className="text-4xl text-brown-700">&ldquo;</span>
          {testimonial.feedback}
          <span className="text-4xl text-brown-700">&rdquo;</span>
        </blockquote>
        <div className="mt-4">
          <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
          <p className="text-sm text-gray-400">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;