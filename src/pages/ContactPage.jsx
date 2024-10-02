import React, { useEffect } from 'react';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaSquareFacebook } from 'react-icons/fa6';
import { IoLogoYoutube } from 'react-icons/io';

const ContactPage = () => {

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 mt-10">
      <h1 className="text-3xl sm:text-4xl mb-5 sm:mb-10 text-center text-brown-700">Contact Us</h1>
      
      <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
        Get in touch with us for any inquiries, bookings, or further information about your stay at Nest Residency. 
        We are here to help you 24/7 and ensure a seamless experience during your visit.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl text-brown-700">Our Location</h2>
          <p className="text-lg">
            Nest Residency, Near MIMS Hospital <br />
            Calicut, Kerala, India <br />
            Zip Code: 673012
          </p>
          
          <h2 className="text-2xl text-brown-700">Phone</h2>
          <p className="text-lg">+91 9744005530</p>
          
          <h2 className="text-2xl text-brown-700">Email</h2>
          <p className="text-lg">contact@nestresidency.com</p>
          
          <h2 className="text-2xl text-brown-700">Social Media</h2>
          <div className='flex gap-5 mt-10'>
            <p><FaInstagramSquare className='w-8 h-8 text-pink-500 cursor-pointer'/></p>
            <p><FaSquareFacebook className='w-8 h-8 text-blue-500 cursor-pointer'/></p>
            <p><IoLogoYoutube className='w-8 h-8 text-red-600 cursor-pointer'/></p>
          </div>
        </div>

        {/* Contact Form */}
        <div className=" p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl text-brown-700 mb-6">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-medium">Name</label>
              <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium">Email</label>
              <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded" placeholder="Your Email" />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium">Message</label>
              <textarea id="message" rows="5" className="w-full p-3 border border-gray-300 rounded" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="w-full bg-brown-700 text-white py-3 rounded hover:bg-green-900">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-[30px] mb-5 text-center text-brown-700">Visit Us</h2>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15652.807854682125!2d75.7992019!3d11.2465484!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6590008d0a8db%3A0x205ba9814d03457b!2sNEST%20RESIDENCY!5e0!3m2!1sen!2sin!4v1727330634945!5m2!1sen!2sin" 
          width="100%" 
          height="400" 
          allowFullScreen="" 
          loading="lazy" 
          className="rounded"
          title="Nest Residency Location"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;