import React from 'react';
import BookRoom from '../components/BookRoom';
import { useParams } from 'react-router-dom';

const BookingPage = () => {
  const { roomId } = useParams();

  return (
    <div>
      <BookRoom roomId={roomId} />
    </div>
  );
};

export default BookingPage;