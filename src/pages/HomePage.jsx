import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Nest Residency</h1>
      <Link to="/check-availability">Check Availability</Link>
    </div>
  );
};

export default HomePage;