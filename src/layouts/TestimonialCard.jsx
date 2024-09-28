import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name} 
          className="w-16 h-16 rounded-full object-cover mr-4" 
        />
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
          <p className="text-sm text-gray-500">{testimonial.title}</p>
        </div>
      </div>
      <p className="text-gray-600 text-lg">
        {testimonial.feedback}
      </p>
    </div>
  );
};

export default TestimonialCard;