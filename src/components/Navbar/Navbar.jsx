import React from 'react';
import './Navbar.css';
import logo from '../../assets/nestresidency_logo.png';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <nav className="navbar">
        <div className="navbar-container">
            <div className="logo">
            <img src={logo} alt="Nest Residency Logo" />
            </div>
            <ul className="nav-links">
            <li><Link to='/'>Home</Link></li>
            <li><a href="#rooms">Rooms</a></li>
            <li><a href="#facilities">Facilities</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="book-now ">
            <Link to='/check-availability' className="book-now-btn">Book Now</Link>
            </div>
        </div>
        </nav>

        <Outlet />
    </>
  );
};

export default Navbar;