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
      <ul className="p-5 space-y-2 text-[#912501] font-semibold">
        <li className='border-y pt-2 pb-2 border-[#912501]'><Link to='/' onClick={toggleDrawer}>Home</Link></li>
        <li className='border-b pb-2 border-[#912501]'><Link to='/rooms' onClick={toggleDrawer}>Rooms</Link></li>
        <li className='border-b pb-2 border-[#912501]'><Link to='/gallery' onClick={toggleDrawer}>Gallery</Link></li>
        <li className='border-b pb-2 border-[#912501]'><Link to='/about' onClick={toggleDrawer}>About</Link></li>
        <li className='border-b pb-2 border-[#912501]'><Link to='/contact' onClick={toggleDrawer}>Contact</Link></li>
      </ul>
      <div className='border-[#912501] mx-5 mt-5 text-center'><Link to='/check-availability' onClick={toggleDrawer} className="md:hidden visible text-center border text-[#912501] border-[#912501] hover:bg-[#912501] hover:text-white px-10 py-3 rounded">Reservation</Link></div>
    </div>
  );
};

export default Drawer;