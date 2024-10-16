import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getBookings } from '../services/api';
import { setBookings, setLoading, setError } from '../redux/slices/bookingSlice';
import { formatBookingDate } from '../utils/FormateDate';
import LoadingSpinner from '../utils/LoadingSpinner';
import { sortBookingsByCreatedAt, paginateBookings } from '../utils/BookingUtils';
import DatePicker from 'react-datepicker'; // Import DatePicker
import 'react-datepicker/dist/react-datepicker.css'; // Import styles for the date picker

const AdminBookings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { bookings, loading, error } = useSelector((state) => state.booking);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const bookingsPerPage = 25;
  const [checkInDate, setCheckInDate] = useState(null); // Changed to null for DatePicker

  const { isAuthenticated } = useSelector((state) => state.user);

  if (!isAuthenticated) {
    navigate('/login');
  }

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        dispatch(setLoading(true));
        const data = await getBookings();
        if (data) {
          // console.log('bookings', data);
          dispatch(setBookings(data));
        }
      } catch (err) {
        // console.log(err);
        dispatch(setError('Please refresh and login again.'));
      } finally {
        dispatch(setLoading(false));
      }
    };
    fetchBookings();
  }, [dispatch]);

  useEffect(() => {
    const sortedBookings = sortBookingsByCreatedAt(bookings);

    const filtered = sortedBookings.filter((booking) => {
      const fullName = `${booking.fname || ''} ${booking.lname || ''}`.toLowerCase();
      const phoneStr = String(booking.phone || '');
      const emailStr = (booking.email || '').toLowerCase();
      const bookingIdStr = String(booking.bookingId || ''); // Convert booking ID to string for comparison

      const checkInDateObj = new Date(booking.checkInDate);
      const isWithinDateRange = !checkInDate || checkInDateObj.toDateString() === new Date(checkInDate).toDateString();

      return (
        (fullName.includes(searchTerm.toLowerCase()) ||
        phoneStr.includes(searchTerm) ||
        emailStr.includes(searchTerm) ||
        bookingIdStr.includes(searchTerm)) && // Add search by booking ID
        isWithinDateRange
      );
    });

    setFilteredBookings(filtered);
  }, [searchTerm, bookings, checkInDate]);

  const currentBookings = paginateBookings(filteredBookings, currentPage, bookingsPerPage);

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

  const handleSearch = () => {
    setCurrentPage(1); // Reset to the first page
  };

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-3xl font-semibold text-center mb-10">Room Bookings</h2>

      <div className="mb-5">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by name, phone, email, or booking ID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 w-1/2 rounded-md"
        />
      </div>

      {/* Check-In Date Filter */}
      <div className="mb-3">
        <label htmlFor="checkInDate" className="me-3 font-medium">
          Search by Check-In Date
        </label>
        <DatePicker
          selected={checkInDate}
          onChange={(date) => {
            setCheckInDate(date);
            handleSearch(); // Trigger search on date change
          }}
          className="border p-2 rounded-md"
          dateFormat="dd-MM-yyyy" 
          placeholderText="Select a date"
        />
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
                <th className="p-3 text-left">Room Type</th>
                <th className="p-3 text-left">Check In</th>
                <th className="p-3 text-left">Check Out</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentBookings?.map((booking) => (
                <tr key={booking?._id} className="border-b hover:bg-gray-100">
                  <td className="p-3">{booking?.fname} {booking?.lname}</td>
                  <td className="p-3">{booking?.phone}</td>
                  <td className="p-3">{booking?.email}</td>
                  <td className="p-3">{booking?.roomType}</td>
                  <td className="p-3">{formatBookingDate(booking?.checkInDate)}</td>
                  <td className="p-3">{formatBookingDate(booking?.checkOutDate)}</td>
                  <td className="p-3">
                    <span className={`p-1 rounded ${booking?.status === 'Cancelled' ? 'bg-red-200 text-red-700' : 'bg-green-200 text-green-700'}`}>
                      {booking?.status}
                    </span>
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => handleViewMore(booking?._id)}
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