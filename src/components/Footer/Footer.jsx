import React from 'react';
import logo from '../../assets/nestresidency_logo.jpg'
import './Footer.css'; // Import external CSS for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left section with logo and title */}
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
          <h2 className="footer-heading">Nest Residency</h2>
        </div>

        {/* Middle section with navigation links */}
        <div className="footer-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/rooms">Rooms</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Right section with social icons and contact */}
        <div className="footer-right">
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <p>Contact Us: +123 456 7890</p>
          <p>Email: info@nestresidency.com</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Nest Residency. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;