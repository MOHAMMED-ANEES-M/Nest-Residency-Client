import React from 'react';
import logo from '../assets/nestresidency_logo.jpg';
import { FaLocationDot, FaPhone, FaSquareFacebook } from 'react-icons/fa6';
import { FaInstagramSquare } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io5';
import { IoIosMail } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="footer-container p-10 bg-[#58340f] text-white">
        <div className="text-center mb-10">
          <img src={logo} alt="Logo" className="w-16 h-16 m-auto mb-2" />
          <h2 className="font-bold text-3xl">Nest Residency</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div>
            <Link to='/check-availability'>
              <button className='text-brown-700 hover:bg-green-800 hover:text-white rounded bg-white px-5 py-3 mb-5'>
                Reservation
              </button>
            </Link>
            <p>Enjoy a premium stay experience at our cozy and well furnished hotel rooms.</p>
          </div>
          <div className='sm:mx-auto'>
            <h1 className='text-2xl font-semibold mb-5'>Quick Links</h1>
            <Link to='/'><p className='mb-1'>Home</p></Link>
            <Link to='/rooms'><p className='mb-1'>Rooms</p></Link>
            <Link to='/gallery'><p className='mb-1'>Gallery</p></Link>
            <Link to='/about'><p className='mb-1'>About</p></Link>
            <Link to='/contact'><p className='mb-1'>Contact</p></Link>
          </div>
          <div>
            <h1 className='text-2xl font-semibold mb-5'>Contact</h1>
            <p className='mb-4 flex gap-2 justify-start items-center'>
              <IoIosMail className='w-5 h-5' /> nestresidencyclt@gmail.com
            </p>
            <p className='mb-5 flex gap-3 justify-start items-center'>
              <FaPhone className='w-4 h-4' /> +91 9744005530
            </p>
            <div className='flex gap-3 justify-start '>
              <div><FaLocationDot className='w-5 h-5' /></div>
                <p>27/2402,E,G,H Nest Residency, 
                  Near MIMS Hospital, Mini Bypass Road,
                  Govindapuram, Kozhikode,
                  Kerala, India - 673012
                </p>
            </div>
          </div>
        </div>

        <div className='flex justify-center gap-5 mt-10'>
          <p><FaInstagramSquare className='w-8 h-8 hover:text-green-800 cursor-pointer' /></p>
          <p><FaSquareFacebook className='w-8 h-8 hover:text-green-800 cursor-pointer' /></p>
          <p><IoLogoYoutube className='w-8 h-8 hover:text-green-800 cursor-pointer' /></p>
        </div>
      </footer>

      <div className='bg-black p-5 text-white text-center'>
        <div className='flex flex-wrap justify-center gap-5'>
          <Link to='/privacypolicy'><p className='cursor-pointer'>Privacy Policy <span className='ms-5'>|</span></p></Link>
          <Link to='/terms&conditions'><p className='cursor-pointer'>Terms & Conditions <span className='ms-5'>|</span></p></Link>
          <Link to='/refund&cancellation'><p className='cursor-pointer'>Refund & Cancellation <span className='ms-5'>|</span></p></Link>
          <Link to='/shipping&delivery'><p className='cursor-pointer'>Shipping & Delivery <span className='ms-5'>|</span></p></Link>
          <p>&copy; {new Date().getFullYear()} Nest Residency</p>
        </div>
      </div>
    </>
  );
};

export default Footer;