import React, { useEffect } from 'react';
import CheckAvailability from '../components/CheckAvailability';

const CheckAvailabilityPage = () => {

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div>
      <CheckAvailability />
    </div>
  );
};

export default CheckAvailabilityPage;