import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookings } from '../services/api';
import { setBookings, setLoading, setError } from '../redux/slices/bookingSlice';
import { formatDate } from '../utils/FormateDate';
import LoadingSpinner from '../utils/LoadingSpinner';

const AdminBookings = () => {
  const dispatch = useDispatch();
  const { bookings, loading, error } = useSelector((state) => state.booking);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        dispatch(setLoading(true));
        const data = await getBookings();
        console.log('booking data', data);
        if (data) {
          dispatch(setBookings(data));
        }
      } catch (err) {
        dispatch(setError('Failed to fetch bookings.'));
      } finally {
        dispatch(setLoading(false));
      }
    };
    fetchBookings();
  }, [dispatch]);

  return (
    <div>
      <h2 className='text-3xl font-semibold text-center my-10'>Room Bookings</h2>
      {loading && <LoadingSpinner /> }
      {error && <p>{error}</p>}
      {!loading && bookings?.length > 0 && (
        <div className='grid grid-cols-3 gap-5 justify-center mx-10'>
          {bookings.map((booking) => (
            <div key={booking._id} className='bg-red-950 text-white p-5 rounded-md'>
              <p>Name: {booking.fname} {booking.lname}</p>
              <p>Phone: {booking.phone}</p>
              <p>Address: {booking.address}</p>
              <p>Check in: {formatDate(booking.checkInDate)}</p>
              <p>Check out: {formatDate(booking.checkOutDate)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminBookings;