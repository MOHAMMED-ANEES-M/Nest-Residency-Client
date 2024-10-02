import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/nestresidency_logo.png';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { CgMenuRound } from "react-icons/cg";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Drawer from '../Drawer';
import Footer from '../Footer';
import { useDispatch, useSelector } from 'react-redux';
import { adminLogout } from '../../services/api';
import { logout } from '../../redux/slices/userSlice';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleLogout = async () => {
    try {
      const data = await adminLogout();
      if (data) {
        console.log('logout data', data);
        dispatch(logout()); // Dispatch logout to clear user data
        navigate('/login'); // Redirect to login after logout
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <nav className="navbar bg-white text-brown-900 fixed w-full top-0 z-50 ">
        <div className="navbar-container flex items-center justify-between px-2 md:px-10">
          <div className="logo flex items-center">
            <img src={logo} alt="Nest Residency Logo" className="h-14 md:h-20 " />
          </div>

          <button className="md:hidden flex items-center ml-auto px-3 py-2 text-brown-900 border-brown-500 hover:text-brown-700 hover:border-brown-700 focus:outline-none" onClick={toggleDrawer}>
            {!isDrawerOpen ? <CgMenuRound className='w-8 h-8'/> : <IoMdCloseCircleOutline className='w-8 h-8'/>}
          </button>

          <ul className="hidden md:flex md:items-center space-x-3 lg:space-x-6 lg:text-lg ">
            <li><Link to='/' className="hover:text-green-800 ">Home</Link></li>
            <li><Link to='/rooms' className="hover:text-green-800">Rooms</Link></li>
            <li><Link to="/gallery" className="hover:text-green-800">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-green-800">About</Link></li>
            <li><Link to="/contact" className="hover:text-green-800">Contact</Link></li>
          </ul>

          <div>
            {isAuthenticated ?
            <button onClick={handleLogout} className="hidden md:flex rounded bg-red-700 hover:bg-green-800 text-white px-5 py-3 ">
            Logout
            </button>
             :
              <Link to='/check-availability' className="hidden md:flex rounded bg-brown-700 hover:bg-green-800 text-white px-5 py-3 ">
                Reservation
              </Link>
              }
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