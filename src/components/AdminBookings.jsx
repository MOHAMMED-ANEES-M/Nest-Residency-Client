import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getBookings } from '../services/api';
import { setBookings, setLoading, setError } from '../redux/slices/bookingSlice';
import { formatBookingDate } from '../utils/FormateDate';
import LoadingSpinner from '../utils/LoadingSpinner';

const AdminBookings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { bookings, loading, error } = useSelector((state) => state.booking);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const bookingsPerPage = 25; 

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        dispatch(setLoading(true));
        const data = await getBookings();
        if (data) {
          console.log('bookings', data);
          
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

  // Sort bookings by checkInDate (latest first)
  useEffect(() => {
    const sortedBookings = [...bookings].sort((a, b) => new Date(b.checkInDate) - new Date(a.checkInDate));
  
    const filtered = sortedBookings.filter((booking) => {
      const fullName = `${booking.fname || ''} ${booking.lname || ''}`.toLowerCase();
      const phoneStr = String(booking.phone || '');
      const emailStr = (booking.email || '').toLowerCase();
  
      return (
        fullName.includes(searchTerm.toLowerCase()) ||
        phoneStr.includes(searchTerm) ||
        emailStr.includes(searchTerm)
      );
    });
  
    setFilteredBookings(filtered);
  }, [searchTerm, bookings]);

  // Pagination logic
  const indexOfLastBooking = currentPage * bookingsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
  const currentBookings = filteredBookings.slice(indexOfFirstBooking, indexOfLastBooking);

  const handleNextPage = () => {
    if (currentPage * bookingsPerPage < filteredBookings.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleViewMore = (bookingId) => {
    navigate(`/admin/booking-details/${bookingId}`);
  };

  const handleBookRoom = () => {
    navigate('/admin/book-room'); 
  };

  return (
    <div className="container mx-auto mt-16 p-5">
      <h2 className="text-3xl font-semibold text-center mb-10">Room Bookings</h2>

      <div className="flex justify-between items-center mb-5">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by name, phone, or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 w-1/2 rounded-md"
        />

        {/* Book Room Button */}
        <button
          onClick={handleBookRoom}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Book Room
        </button>
      </div>

      {loading && <LoadingSpinner />}
      {error && <p className="text-red-600">{error}</p>}

      {/* Table layout for better admin UX */}
      {!loading && currentBookings.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Phone</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Room No</th>
                <th className="p-3 text-left">Check In</th>
                <th className="p-3 text-left">Check Out</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentBookings.map((booking) => (
                <tr key={booking._id} className="border-b hover:bg-gray-100">
                  <td className="p-3">{booking.fname} {booking.lname}</td>
                  <td className="p-3">{booking.phone}</td>
                  <td className="p-3">{booking.email}</td>
                  <td className="p-3">{booking.roomId}</td>
                  <td className="p-3">{formatBookingDate(booking.checkInDate)}</td>
                  <td className="p-3">{formatBookingDate(booking.checkOutDate)}</td>
                  <td className="p-3">
                    <span className={`p-1 rounded ${booking.status === 'Cancelled' ? 'bg-red-200 text-red-700' : 'bg-green-200 text-green-700'}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => handleViewMore(booking._id)}
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination controls */}
          <div className="flex justify-center items-center mt-5 space-x-4">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
            >
              Previous
            </button>
            <p>
              Page {currentPage} of {Math.ceil(filteredBookings.length / bookingsPerPage)}
            </p>
            <button
              onClick={handleNextPage}
              disabled={currentPage * bookingsPerPage >= filteredBookings.length}
              className={`px-4 py-2 rounded ${currentPage * bookingsPerPage >= filteredBookings.length ? 'bg-gray-300' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {!loading && filteredBookings.length === 0 && <p>No bookings found.</p>}
    </div>
  );
};

export default AdminBookings;