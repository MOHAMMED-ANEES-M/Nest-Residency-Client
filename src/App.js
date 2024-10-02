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
import RoomsPage from './pages/RoomsPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TermsAndConditions from './components/Terms&Conditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import RefundAndCancellation from './components/Refund&Cancellation';
import ShippingAndDelivery from './components/Shipping&Delivery';
import PaymentSuccess from './pages/PaymentSuccess';
import BookingDetailsPage from './pages/BookingDetailsPage';
import AdminBookRoom from './pages/AdminBookRoom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navbar />} >
        <Route index element={<HomePage />} />
        <Route path="/check-availability" element={<CheckAvailabilityPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms&conditions" element={<TermsAndConditions />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/refund&cancellation" element={<RefundAndCancellation />} />
        <Route path="/shipping&delivery" element={<ShippingAndDelivery />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/admin" element={ <ProtectedRoute> <AdminPage /> </ProtectedRoute> }/>
        <Route path="/admin/booking-details/:bookingId" element={ <ProtectedRoute> <BookingDetailsPage /> </ProtectedRoute> }/>
        <Route path="/admin/book-room" element={ <ProtectedRoute> <AdminBookRoom /> </ProtectedRoute> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;