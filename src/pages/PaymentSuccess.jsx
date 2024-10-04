import React, { useRef } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { roomDetails } from '../data/room';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import Receipt from '../components/Reciept';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const receiptRef = useRef(); // Create a ref for the receipt component

  // Extract paymentId and roomId from URL query parameters
  const paymentId = searchParams.get('paymentId');
  const roomType = searchParams.get('roomType');

  // Find the room data based on roomId
  const roomData = roomDetails.find((room) => room.roomType === roomType);

  // Get roomDetails and guestDetails from the location state if passed
  const guestDetails = location?.state?.guestDetails || {};
  const bookingDetails = location?.state?.roomDetails || {};
  const amount = location?.state?.amount || '';

  const downloadPDF = async () => {
    const pdf = new jsPDF();
    const canvas = await html2canvas(receiptRef.current);
    const imgData = canvas.toDataURL('image/png');

    pdf.addImage(imgData, 'PNG', 10, 10);
    pdf.save('receipt.pdf');
  };

  return (
    <div className="mx-auto p-6 mt-24 mb-5 max-w-lg bg-gray-50 rounded-lg shadow-lg">
      <div ref={receiptRef}>
        <Receipt 
          paymentId={paymentId} 
          amount={amount} 
          roomData={roomData} 
          bookingDetails={bookingDetails} 
          guestDetails={guestDetails} 
        />
      </div>

      <div className='w-fit m-auto'>
        <button
          onClick={downloadPDF}
          className="mt-4 bg-green-800 text-white font-semibold py-2 px-4 rounded"
          >
          Download Receipt
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;