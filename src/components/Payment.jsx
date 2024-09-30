import React, { useEffect } from 'react';

const Payment = ({ amount, roomData, guestDetails }) => {
  
  const handlePayment = () => {
    const options = {
      key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay key
      amount: amount * 100, // Razorpay expects the amount in paise
      currency: 'INR',
      name: 'Hotel Booking',
      description: 'Room Booking Payment',
      image: '/your-logo.png', // Replace with your logo
      handler: function (response) {
        alert('Payment Successful! Payment ID: ' + response.razorpay_payment_id);
        // You can now proceed with backend booking confirmation using roomData and guestDetails
      },
      prefill: {
        name: `${guestDetails.fname} ${guestDetails.lname}`,
        email: guestDetails.email,
        contact: guestDetails.phone,
      },
      theme: {
        color: '#F37254',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  useEffect(() => {
    handlePayment();  // Trigger payment when component is mounted
  }, []);

  return <div></div>;  // This component doesn't render anything visible
};

export default Payment;
