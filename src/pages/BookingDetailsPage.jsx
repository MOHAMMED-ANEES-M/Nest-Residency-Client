import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { formatBookingDate } from '../utils/FormateDate';
import { cancelBooking, getBookingById } from '../services/api';
import CancellationModal from '../components/CancellationModal';

const BookingDetailsPage = () => {
  const { bookingId } = useParams();
  const navigate = useNavigate();
  const bookings = useSelector((state) => state.booking.bookings);
  const [booking, setBooking] = useState(bookings.find((b) => b._id === bookingId));
  const [showModal, setShowModal] = useState(false);
  const [cancelReason, setCancelReason] = useState('');

  useEffect(() => {
    if (!booking) {
      const fetchBookingDetails = async () => {
        try {
          const fetchedBooking = await getBookingById(bookingId);
          console.log('booking by id', fetchedBooking);
          setBooking(fetchedBooking);
        } catch (error) {
          console.error(error);
        }
      };
      fetchBookingDetails();
    }
  }, [bookingId, booking]);

  const handleCancelBooking = async () => {
    try {
      await cancelBooking(bookingId, cancelReason);
      setShowModal(false);
      alert('Booking Cancelled');
      navigate('/admin');
    } catch (error) {
      console.log(error);
    }
  };

  if (!booking) return <div>Booking not found.</div>;

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-3xl font-semibold text-center my-10">Booking Details</h2>

      <div className="p-5 rounded-md">
        {/* Guest Details */}
        <h3 className="text-xl font-semibold mb-4">Guest Information</h3>
        <p><strong>Name:</strong> {booking?.fname} {booking?.lname}</p>
        <p><strong>Phone:</strong> {booking?.phone}</p>
        <p><strong>Email:</strong> {booking?.email}</p>

        {/* Booking Information */}
        <h3 className="text-xl font-semibold my-4">Booking Information</h3>
        <p><strong>Room No:</strong> {booking?.roomId}</p>
        <p><strong>Check-in Date:</strong> {formatBookingDate(booking?.checkInDate)}</p>
        <p><strong>Check-out Date:</strong> {formatBookingDate(booking?.checkOutDate)}</p>
        <p><strong>Status:</strong> {booking?.status}</p>
        <p><strong>Payment Mode:</strong> {booking?.bookingMode}</p>
        {booking.cancelReason && (
          <p><strong>Cancellation Reason:</strong> {booking?.cancelReason}</p>
        )}

        {/* Payment Information */}
        {booking?.bookingMode === 'Online' && <>
        <h3 className="text-xl font-semibold my-4">Payment Information</h3>
        <p><strong>Amount:</strong> ₹{booking?.paymentId?.amount} {booking?.paymentId?.currency}</p>
        <p><strong>Order ID:</strong> {booking?.paymentId?.orderId}</p>
        <p><strong>Payment ID:</strong> {booking?.paymentId?._id}</p>
        <p><strong>Payment Status:</strong> {booking?.paymentId?.paymentStatus}</p>
        <p><strong>Payment Date:</strong> {formatBookingDate(booking?.paymentId?.createdAt)}</p>
        </>
        }

        {/* Cancel Booking Button */}
        <button
          onClick={() => setShowModal(true)}
          className={`mt-5 bg-red-600 text-white px-4 py-2 rounded ${booking.status === 'Cancelled' && 'hidden'}`}
        >
          Cancel Booking
        </button>
      </div>

      {/* Render the Modal */}
      <CancellationModal
        showModal={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleCancelBooking}
        cancelReason={cancelReason}
        setCancelReason={setCancelReason}
      />
    </div>
  );
};

export default BookingDetailsPage;