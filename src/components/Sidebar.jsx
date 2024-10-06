import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaDoorOpen, FaBed, FaSignOutAlt } from 'react-icons/fa';
import LogoutModal from '../layouts/LogoutModal';
import { useNavigate } from 'react-router-dom';
import { adminLogout } from '../services/api'; 
import { logout } from '../redux/slices/userSlice';
import { useDispatch } from 'react-redux';

const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = async () => {
    try {
      const response = await adminLogout(); 
      dispatch(logout())
      console.log("Logout response:", response); 
      navigate('/login')
    } catch (error) {
      console.error("Logout error:", error); 
    } finally {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="w-52 h-screen p-5 pt-10 ">
      <h2 className="text-2xl font-bold mb-10">Admin Panel</h2>
      <ul className="flex flex-col space-y-4">
        <li>
          <NavLink to="/admin" end className="flex items-center p-2 hover:bg-brown-700 hover:text-white rounded">
            <FaHome className="mr-2" /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/book-room" className="flex items-center p-2 hover:bg-brown-700 hover:text-white rounded">
            <FaDoorOpen className="mr-2" /> Book Room
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/rooms" className="flex items-center p-2 hover:bg-brown-700 hover:text-white rounded">
            <FaBed className="mr-2" /> Room Details
          </NavLink>
        </li>
        <li>
          <button 
            onClick={() => setIsModalOpen(true)} 
            className="flex items-center w-full p-2 text-left hover:bg-red-700 hover:text-white rounded"
          >
            <FaSignOutAlt className="mr-2" /> Logout
          </button>
        </li>
      </ul>
      
      <LogoutModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onConfirm={handleLogout} 
      />
    </div>
  );
};

export default Sidebar;