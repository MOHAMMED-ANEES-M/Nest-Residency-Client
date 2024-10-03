import React, { useEffect } from 'react';
import { createPaymentOrder, verifyPayment } from '../services/api';
import { useNavigate } from 'react-router-dom';

const Payment = ({ amount, roomData, guestDetails }) => {
  const navigate = useNavigate();

  const loadScript = (src) => {
    return new Promise((resolve) => {
      if (document.querySelector(`script[src="${src}"]`)) {
        resolve(true); // If script is already loaded, resolve without loading it again
        return;
      }
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };
  
  const handleOnlinePayment = async () => {
    try {
      console.log(amount, 'amount');

      // Step 1: Create payment order from backend
      let orderResponse = await createPaymentOrder(amount);
      console.log('RazorPay order response:', orderResponse);

      const options = {
        key: 'rzp_test_CTbLruPdIohX3s', 
        amount: orderResponse.amount, 
        currency: 'INR',
        name: 'Hotel Booking', 
        description: 'Room Booking Payment',
        order_id: orderResponse.id,  
        handler: async function (response) {
          alert('Payment Successful! Payment ID: ' + response.razorpay_payment_id);
          alert('Order ID: ' + response.razorpay_order_id);

          const body = {
            paymentId: response.razorpay_payment_id,
            razorId: response.razorpay_order_id,
            signature: response.razorpay_signature,
            amount: orderResponse.amount,  
            roomData, 
            guestDetails, 
          };

          let receipt = await verifyPayment(body);
          console.log('Receipt response:', receipt);

          if (receipt.data.success) {
            navigate(`/payment-success?paymentId=${response.razorpay_payment_id}&roomId=${roomData.roomId}`, {
              state: {
                roomDetails: roomData,
                guestDetails: guestDetails,
                amount: orderResponse.amount
              },
            });
          }
        },
        prefill: {
          name: `${guestDetails.fname} ${guestDetails.lname}`,
          email: guestDetails.email,
          contact: guestDetails.phone,
        },
        theme: {
          color: '#8B4513',
        },
      };

      // Step 2: Open Razorpay popup for payment
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
     );

     if (!res) {
        alert("Razropay failed to load!!");
        return;
    }
      const razor = new window.Razorpay(options);
      razor.on('payment.failed', function (response) {
        alert('Payment Failed. Error: ' + response.error.description);
      });
      razor.open();

    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleOnlinePayment();
  }, [guestDetails]);

  return <div></div>;
};

export default Payment;