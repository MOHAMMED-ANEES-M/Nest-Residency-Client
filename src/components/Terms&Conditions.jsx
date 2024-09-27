import React, { useEffect } from 'react';

const TermsAndConditions = () => {

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

  return (
    <div className="p-6 bg-white text-black rounded shadow-lg max-w-4xl m-auto mt-32 mb-10">
      <h2 className="text-3xl font-semibold mb-4">Terms and Conditions</h2>
      <p className="mb-4">
        Welcome to Nest Residency. By booking your stay with us, you agree to comply with and be bound by the following terms and conditions. Please review the terms carefully.
      </p>

      <h3 className="text-2xl font-semibold mb-2">1. Booking Policy</h3>
      <p className="mb-4">
        All bookings are subject to availability. A confirmation will be sent via email upon successful payment. In the event of overbooking or room unavailability, we will provide a full refund.
      </p>

      <h3 className="text-2xl font-semibold mb-2">2. Payment Policy</h3>
      <p className="mb-4">
        Full payment is required to confirm your booking. We accept payments via credit card, debit card, UPI, and Razorpay. All transactions are processed securely.
      </p>

      <h3 className="text-2xl font-semibold mb-2">3. Check-in and Check-out</h3>
      <p className="mb-4">
        Check-in is from 12:00 PM, and check-out is by 11:00 AM. Early check-in or late check-out is subject to availability and may incur additional charges.
      </p>

      <h3 className="text-2xl font-semibold mb-2">4. Cancellation Policy</h3>
      <p className="mb-4">
        Once a booking is confirmed, it cannot be canceled or refunded. Please ensure your travel dates and details are correct before confirming the reservation.
      </p>

      <h3 className="text-2xl font-semibold mb-2">5. Liability</h3>
      <p className="mb-4">
        Nest Residency will not be liable for any personal injury, loss, or damage to personal property during your stay. Guests are responsible for their belongings.
      </p>

      <p className="mb-4">
        By booking with us, you agree to the above terms and conditions.
      </p>
    </div>
  );
};

export default TermsAndConditions;