import React, { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { roomDetails } from '../data/room';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import Receipt from '../components/Reciept';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const paymentId = searchParams.get('paymentId');
  const roomType = searchParams.get('roomType');
  const roomData = roomDetails.find((room) => room.roomType === roomType);
  const guestDetails = location?.state?.guestDetails || {};
  const bookingDetails = location?.state?.roomDetails || {};
  const amount = location?.state?.amount || '';

  const downloadPDF = () => {
    const doc = new jsPDF('p', 'pt', 'a4');
  
    // Center the title
    doc.setFontSize(20);
    const title = 'Payment Receipt';
    const pageWidth = doc.internal.pageSize.getWidth();
    const titleXOffset = (pageWidth - doc.getTextWidth(title)) / 2;
    doc.text(title, titleXOffset, 40);
  
    // Center the subtitle
    doc.setFontSize(12);
    const subtitle = 'Your booking confirmation has been sent to your email.';
    const subtitleXOffset = (pageWidth - doc.getTextWidth(subtitle)) / 2;
    doc.text(subtitle, subtitleXOffset, 60);
  
    // Room Information Table
    doc.setFontSize(14);
    doc.text('Room Information', 40, 100);
  
    doc.autoTable({
      startY: 120,
      head: [['Room Number', 'Room Type', 'Check-in Date', 'Check-out Date']],
      body: [
        [bookingDetails.roomNumber, bookingDetails.roomType, bookingDetails.checkInDate, bookingDetails.checkOutDate],
      ],
      theme: 'grid',
      headStyles: { fillColor: [145, 37, 1] }, // Custom color for header
    });
  
    // Payment Information Table
    doc.setFontSize(14);
    doc.text('Payment Information', 40, doc.autoTable.previous.finalY + 30);
  
    doc.autoTable({
      startY: doc.autoTable.previous.finalY + 50,
      head: [['Payment ID', 'Amount Paid']],
      body: [
        [paymentId, `₹${(amount / 100).toFixed(2)}`], // Ensure Rupee symbol shows correctly
      ],
      theme: 'grid',
      headStyles: { fillColor: [145, 37, 1] }, // Custom color for header
    });
  
    // Guest Information Table
    doc.setFontSize(14);
    doc.text('Guest Information', 40, doc.autoTable.previous.finalY + 30);
  
    doc.autoTable({
      startY: doc.autoTable.previous.finalY + 50,
      head: [['Guest Name', 'Email', 'Phone']],
      body: [
        [`${guestDetails.fname} ${guestDetails.lname}`, guestDetails.email, guestDetails.phone],
      ],
      theme: 'grid',
      headStyles: { fillColor: [145, 37, 1] }, // Custom color for header
    });
  
    // Save the PDF
    doc.save('receipt.pdf');
  };
  

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="mx-auto p-3 sm:p-6 mt-24 mb-5 max-w-lg bg-gray-50 rounded-lg shadow-lg">
      <div>
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
          className="mt-4 bg-[#912501] hover:bg-green-800 text-white font-semibold py-2 px-2 sm:px-4 rounded"
        >
          Download Receipt
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
