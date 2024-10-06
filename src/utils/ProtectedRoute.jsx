import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, logout } from '../redux/slices/userSlice';
import { getUser, refreshUser } from '../services/api';
import LoadingSpinner from './LoadingSpinner';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false); 

  const currentUser = async () => {
    try {
      setLoading(true)
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

  const handleTokenRefresh = async () => {
    try {
      setLoading(true)
      await refreshUser(); 
      console.log('Token refreshed successfully');
    } catch (err) {
      console.log('Failed to refresh token', err);
      dispatch(logout())
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    currentUser(); 

    const intervalId = setInterval(() => {
      handleTokenRefresh();
    }, 50 * 60 * 1000); 

    return () => clearInterval(intervalId); 
  }, [dispatch]);

  if (loading) {
    return <LoadingSpinner />; 
  }

  if (!isAuthenticated) {
    navigate('/login')
    return
  }

  return children; 
};

export default ProtectedRoute;