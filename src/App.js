import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CheckAvailabilityPage from './pages/CheckAvailabilityPage';
import BookingPage from './pages/BookingPage';
import AdminPage from './pages/AdminPage';
import ProtectedRoute from './utils/ProtectedRoute';
import Navbar from './components/Navbar/Navbar';
import Signin from './auth/Signin';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navbar />} >
        <Route index element={<HomePage />} />
        <Route path="/check-availability" element={<CheckAvailabilityPage />} />
        <Route path="/booking/:roomId" element={<BookingPage />} />
        <Route path="/login" element={<Signin />} />
        </Route>
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;