import React from 'react';
import AdminBookings from '../components/AdminBookings';
import { adminLogout } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/userSlice';

const AdminPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    <div>
      <AdminBookings />
        
      <div className='m-auto w-fit mt-10'>
        <button onClick={handleLogout} className='text-center bg-black text-white p-3 rounded'>Logout</button>
      </div>
    </div>
  );
};

export default AdminPage;