import React, { useEffect, useState } from 'react';
import { adminLogin } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/slices/userSlice';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector((state) => state.user);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const data = { email, password }
        console.log(data, 'data');
        const response = await adminLogin(data);
        console.log('login data', response);
        dispatch(login(response.user))
        navigate('/admin');
      } catch (err) {
        console.error('Login failed', err?.response?.data?.message);
        alert(err?.response?.data?.message);
      }
  };

  useEffect(()=>{
    if (isAuthenticated) {
        navigate('/admin')
      }
  },[])
  

  const handleForgotPassword = () => {
    // Redirect to forgot password page or trigger reset email
    console.log('Forgot Password triggered');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto bg-white p-8 border border-gray-300">
        <h1 className="text-2xl font-bold text-center mb-6">Admin Login</h1>
        
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
            >
              Login
            </button>

            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-blue-500 hover:underline focus:outline-none"
            >
              Forgot Password?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;