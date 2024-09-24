import React from 'react';
import { Link } from 'react-router-dom';

const Drawer = ({ isOpen, toggleDrawer }) => {
  return (
    <div
      className={`fixed inset-0 z-40 bg-white transition-transform transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } w-64 h-full shadow-lg duration-300 ease-in-out`}>
      <div className="flex justify-end p-4">
        <button onClick={toggleDrawer} className="text-brown-900 text-2xl">
          &times;
        </button>
      </div>
      <ul className="p-5 space-y-2 text-brown-700 font-semibold">
        <li className='border-y pt-2 pb-2 border-brown-700'><Link to='/' onClick={toggleDrawer}>Home</Link></li>
        <li className='border-b pb-2 border-brown-700'><a href="#rooms" onClick={toggleDrawer}>Rooms</a></li>
        <li className='border-b pb-2 border-brown-700'><a href="#facilities" onClick={toggleDrawer}>Facilities</a></li>
        <li className='border-b pb-2 border-brown-700'><a href="#about" onClick={toggleDrawer}>About Us</a></li>
        <li className='border-b pb-2 border-brown-700'><a href="#contact" onClick={toggleDrawer}>Contact</a></li>
      </ul>
      <div className='border-brown-700 mx-5 mt-5 text-center'><Link to='/check-availability' onClick={toggleDrawer} className="md:hidden visible text-center bg-brown-700 text-white px-10 py-3 rounded-full">Book Now</Link></div>
    </div>
  );
};

export default Drawer;