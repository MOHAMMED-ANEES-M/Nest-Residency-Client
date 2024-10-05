import React, { useEffect } from 'react';
import BookRoom from '../components/BookRoom';

const BookingPage = () => {

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  
  return (
    <div className='mt-32'>
      <BookRoom />
    </div>
  );
};

export default BookingPage;