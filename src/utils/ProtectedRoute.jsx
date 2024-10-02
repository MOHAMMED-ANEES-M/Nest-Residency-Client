import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from '../redux/slices/userSlice';
import { getUser } from '../services/api';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); // Track loading state

  const currentUser = async () => {
    try {
      const data = await getUser();
      console.log('user', data);
      if (data) {
        dispatch(login(data)); 
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    currentUser(); 
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>; // Show loading while fetching the user
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />; // Redirect to login if not authenticated
  }

  return children; // Render children if authenticated
};

export default ProtectedRoute;