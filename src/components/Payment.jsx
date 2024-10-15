import React, { useEffect, useState } from 'react';
import { createPaymentOrder, verifyPayment } from '../services/api';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../utils/LoadingSpinner';

const Payment = ({ amount, roomData, guestDetails }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [processingPayment, setProcessingPayment] = useState(false);
  const [redirecting, setRedirecting] = useState(false); 
  const [paymentError, setPaymentError] = useState('');

  const razorpayKey = process.env.REACT_APP_RAZORPAY_KEY;
  const razorpayLoadScript = process.env.REACT_APP_RAZORPAY_LOADSCRIPT;

  const loadScript = (src) => {
    return new Promise((resolve) => {
      if (document.querySelector(`script[src="${src}"]`)) {
        resolve(true);
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
    setLoading(true); 
    try {
      let orderResponse = await createPaymentOrder(amount);
      console.log('RazorPay order response:', orderResponse);

      const options = {
        key: razorpayKey,
        amount: orderResponse.amount,
        currency: 'INR',
        name: 'Hotel Booking',
        description: 'Room Booking Payment',
        order_id: orderResponse.id,
        handler: async function (response) {
          setProcessingPayment(true); 
          
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
            setProcessingPayment(false); 
            setRedirecting(true);
            console.log('booked', receipt?.data?.booking);
            
              navigate(`/payment-success?paymentId=${response.razorpay_payment_id}`, {
                state: {
                  roomDetails: receipt?.data?.booking,
                  guestDetails: guestDetails,
                  amount: orderResponse.amount,
                },
              });
          } else {
            setPaymentError(receipt.data.message);
          }
        },
        prefill: {
          name: `${guestDetails.fname} ${guestDetails.lname}`,
          email: guestDetails.email,
          contact: guestDetails.phone,
        },
        theme: {
          color: '#912501',
        },
      };

      const res = await loadScript(razorpayLoadScript);
      if (!res) {
        alert("Razorpay failed to load!");
        setLoading(false); 
        return;
      }

      setLoading(false);
      const razor = new window.Razorpay(options);
      razor.on('payment.failed', function (response) {
        setPaymentError(response.error.description);
        setProcessingPayment(false); 
      });
      razor.open();
    } catch (err) {
      console.error(err);
      setLoading(false); 
    }
  };

  useEffect(() => {
    handleOnlinePayment();
  }, [guestDetails]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (processingPayment) {
    return <LoadingSpinner />;
  }

  if (redirecting) {
    return <LoadingSpinner />; 
  }

  if (paymentError) {
    return <div>Error: {paymentError}</div>;
  }  

  return <div></div>;
};

export default Payment;