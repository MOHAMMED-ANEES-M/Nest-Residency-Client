import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/nestresidency_logo.png';
import { NavLink, Outlet, Link } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Drawer from '../Drawer';
import Footer from '../Footer';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <nav className="navbar bg-white text-brown-900 fixed w-full top-0 z-50 ">
        <div className="navbar-container flex items-center justify-between px-2 md:px-10">
          <div className="logo flex items-center">
            <Link to='/'><img src={logo} alt="Nest Residency Logo" className="h-14 md:h-20 " /></Link>
          </div>

          <button className="md:hidden flex items-center ml-auto px-3 py-2  hover:text-[#912501] hover:border-[#912501] focus:outline-none" onClick={toggleDrawer}>
            {!isDrawerOpen ? <AiOutlineMenu className='w-7 h-7 text-[#912501]'/> : <IoMdClose className='w-8 h-8 text-[#912501]'/>}
          </button>

          <ul className="hidden md:flex md:items-center space-x-3 lg:space-x-6 lg:text-lg text-[#912501]">
            <li><NavLink to='/' end className="hover:text-green-800 ">Home</NavLink></li>
            <li><NavLink to='/rooms' className="hover:text-green-800">Rooms</NavLink></li>
            <li><NavLink to="/gallery" className="hover:text-green-800">Gallery</NavLink></li>
            <li><NavLink to="/about" className="hover:text-green-800">About</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-green-800">Contact</NavLink></li>
          </ul>

          <div>
              <Link to='/check-availability' className="hidden md:flex border bg-[#912501] text-white hover:bg-green-800 px-5 py-3 ">
                Reservation
              </Link>
          </div>

        </div>
      </nav>

      {/* Drawer for Mobile */}
      <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />

      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;