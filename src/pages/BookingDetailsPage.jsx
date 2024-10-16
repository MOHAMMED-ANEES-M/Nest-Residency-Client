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
    window.scrollTo({ top: 0 });
  }, []);
  
  useEffect(() => {
    console.log('booking page', booking);
    if (!booking) {
      const fetchBookingDetails = async () => {
        try {
          const fetchedBooking = await getBookingById(bookingId);
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

  if (!booking) return <div className="text-center">Booking not found.</div>;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-8">Booking Details</h2>

      <div className="bg-white p-6 rounded-md shadow-md max-w-3xl mx-auto">
        {/* Guest Information */}
        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">Guest Information</h3>
          <table className="w-full text-left">
            <tbody>
              <tr>
                <td className="py-2 w-60 font-bold">Name:</td>
                <td>{booking?.fname} {booking?.lname}</td>
              </tr>
              <tr>
                <td className="py-2 font-bold">Phone:</td>
                <td>{booking?.phone}</td>
              </tr>
              <tr>
                <td className="py-2 font-bold">Email:</td>
                <td>{booking?.email}</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Booking Information */}
        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">Booking Information</h3>
          <table className="w-full text-left">
            <tbody>
              <tr>
                <td className="py-2 font-bold">Room Category:</td>
                <td>{booking?.roomType}</td>
              </tr>
              <tr>
                <td className="py-2 font-bold">Check-in Date:</td>
                <td>{formatBookingDate(booking?.checkInDate)}</td>
              </tr>
              <tr>
                <td className="py-2 font-bold">Check-out Date:</td>
                <td>{formatBookingDate(booking?.checkOutDate)}</td>
              </tr>
              <tr>
                <td className="py-2 font-bold">Status:</td>
                <td>{booking?.status}</td>
              </tr>
              <tr>
                <td className="py-2 font-bold">Payment Mode:</td>
                <td>{booking?.bookingMode}</td>
              </tr>
              <tr>
                <td className="py-2 font-bold">Booking Date:</td>
                <td>{formatBookingDate(booking?.createdAt)}</td>
              </tr>
              <tr>
                <td className="py-2 font-bold">Booking Id:</td>
                <td>{booking?.bookingId}</td>
              </tr>
              {booking.cancelReason && (
                <tr>
                  <td className="py-2 font-bold">Cancellation Reason:</td>
                  <td>{booking?.cancelReason}</td>
                </tr>
              )}
            </tbody>
          </table>
        </section>

        {/* Payment Information */}
        {booking?.bookingMode === 'Online' && (
          <section className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">Payment Information</h3>
            <table className="w-full text-left">
              <tbody>
                <tr>
                  <td className="py-2 w-60 font-bold">Amount:</td>
                  <td>₹{booking?.paymentId?.amount} {booking?.paymentId?.currency}</td>
                </tr>
                <tr>
                  <td className="py-2 font-bold">Order ID:</td>
                  <td>{booking?.paymentId?.orderId}</td>
                </tr>
                <tr>
                  <td className="py-2 font-bold">Payment ID:</td>
                  <td>{booking?.paymentId?.paymentId}</td>
                </tr>
                <tr>
                  <td className="py-2 font-bold">Payment Status:</td>
                  <td>{booking?.paymentId?.paymentStatus}</td>
                </tr>
                <tr>
                  <td className="py-2 font-bold">Payment Date:</td>
                  <td>{formatBookingDate(booking?.paymentId?.createdAt)}</td>
                </tr>
              </tbody>
            </table>
          </section>
        )}

        {/* Cancel Booking Button */}
        {booking.status !== 'Cancelled' && (
          <div className="flex justify-end">
            <button
              onClick={() => setShowModal(true)}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-md"
            >
              Cancel Booking
            </button>
          </div>
        )}
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