import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/nestresidency_logo.png';
import { Link, Outlet } from 'react-router-dom';
import { CgMenuRound } from "react-icons/cg";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Drawer from '../Drawer';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <nav className="navbar bg-white text-brown-900 fixed w-full top-0 z-50 shadow-md">
        <div className="navbar-container flex items-center justify-between px-2 md:px-10">
          <div className="logo flex items-center">
            <img src={logo} alt="Nest Residency Logo" className="h-14 md:h-20 " />
          </div>

          <button className="md:hidden flex items-center ml-auto px-3 py-2 text-brown-900 border-brown-500 hover:text-brown-700 hover:border-brown-700 focus:outline-none" onClick={toggleDrawer}>
            {!isDrawerOpen ? <CgMenuRound className='w-8 h-8'/> : <IoMdCloseCircleOutline className='w-8 h-8'/>}
          </button>

          <ul className="hidden md:flex md:items-center space-x-3 lg:space-x-6 lg:text-lg font-semibold">
            <li><Link to='/' className="hover:text-brown-700">Home</Link></li>
            <li><a href="#rooms" className="hover:text-brown-700">Rooms</a></li>
            <li><a href="#facilities" className="hover:text-brown-700">Gallery</a></li>
            <li><a href="#facilities" className="hover:text-brown-700">Facilities</a></li>
            <li><a href="#about" className="hover:text-brown-700">About Us</a></li>
            <li><a href="#contact" className="hover:text-brown-700">Contact</a></li>
          </ul>

          <div>
              <Link to='/check-availability' className="hidden md:flex bg-brown-700 text-white px-5 py-3 rounded-full">
                Book Now
              </Link>
          </div>

        </div>
      </nav>

      {/* Drawer for Mobile */}
      <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />

      <Outlet />
    </>
  );
};

export default Navbar;