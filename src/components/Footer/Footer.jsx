import React from 'react';
import logo from '../../assets/nestresidency_logo.jpg'
import './Footer.css'; // Import external CSS for styling
import { FaInstagramSquare } from 'react-icons/fa';
import { FaLocationDot, FaPhone, FaSquareFacebook } from 'react-icons/fa6';
import { IoLogoYoutube } from 'react-icons/io5';
import { IoIosMail } from 'react-icons/io';

const Footer = () => {
  return (
    <>
    <footer className="footer-container p-10">
      <div className="">
          <img src={logo} alt="Logo" className="w-16 h-16 m-auto mb-2" />
          <h2 className="font-bold text-[30px] m-auto text-center">Nest Residency</h2>
      </div>
      <div className='grid grid-cols-3 mt-10'>
        <div>
          <button className='text-brown-700 bg-white px-5 py-3 mb-5'>Reservation</button>
          <p>Enjoy a premium stay experience at our cozy and well-furnished hotel rooms.</p>
        </div>
        <div className='mx-auto'>
          <h1 className='text-2xl font-semibold mb-5'>Quick Links</h1>
          <p className='mb-1'>Home</p>
          <p className='mb-1'>Rooms</p>
          <p className='mb-1'>Gallery</p>
          <p className='mb-1'>About</p>
          <p className='mb-1'>Contact</p>
        </div>
        <div className=''>
          <h1 className='text-2xl font-semibold mb-5'>Contact</h1>
          <p className='mb-4 flex gap-2 items-center'><IoIosMail className='w-5 h-5'/> nestresidencyclt@gmail.com</p>
          <p className='mb-5 flex gap-3 items-center'><FaPhone className='w-4 h-4'/>+91 1234567890</p>
          <p className='flex gap-3 '><FaLocationDot className='text-white w-5 h-5'/>Near M.I.M.S Hospital, Govindapuram, Kozhikode, Kerala 673016</p>
        </div>
      </div>

      <div className='flex justify-center gap-5 mt-10'>
        <p><FaInstagramSquare className='w-8 h-8'/></p>
        <p><FaSquareFacebook className='w-8 h-8'/></p>
        <p><IoLogoYoutube className='w-8 h-8'/></p>
      </div>

      {/* <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Nest Residency. All Rights Reserved.</p>
      </div> */}
    </footer>
    
    <div className='bg-black p-5 text-white text-center'>
      <div className='w-fit m-auto flex flex-wrap gap-5'>
        <p>Privacy Policy <span className='ms-5'>|</span></p>
        <p>Terms & Conditions <span className='ms-5'>|</span></p>
        <p>Refund & Cancellation <span className='ms-5'>|</span></p>
        <p>Shipping & Delivery <span className='ms-5'>|</span></p>
        <p>&copy; {new Date().getFullYear()} Nest Residency</p>
      </div>
    </div>
    </>
  );
};

export default Footer;