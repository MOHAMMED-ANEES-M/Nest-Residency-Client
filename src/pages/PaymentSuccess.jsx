import React, { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import Receipt from '../components/Reciept';
import { formatBookingDate } from '../utils/FormateDate';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const paymentId = searchParams?.get('paymentId');
  const guestDetails = location?.state?.guestDetails || {};
  const bookingDetails = location?.state?.roomDetails || {};
  const amount = location?.state?.amount || '';
  const bookingId = bookingDetails?.bookingId || '';

  const downloadPDF = () => {
    const doc = new jsPDF('p', 'pt', 'a4');
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    // Centered Header with Hotel Info
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('Nest Residency', pageWidth / 2, 40, { align: 'center' });

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Mini Bypass Road, Govindapuram, Kozhikode, Kerala, India', pageWidth / 2, 60, { align: 'center' });
    doc.text('Phone: +91 9744005530 | Email: nestresidencyclt@gmail.com', pageWidth / 2, 75, { align: 'center' });
    doc.text('Website: www.nestresidencycalicut.in', pageWidth / 2, 90, { align: 'center' });

    // Divider just below the header
    doc.setDrawColor(200, 200, 200);
    doc.line(40, 105, pageWidth - 40, 105);

    // Title Section moved below the divider
    const title = 'Booking Confirmation';
    doc.setFontSize(16);
    doc.text(title, pageWidth / 2, 145, { align: 'center' });

    // Booking & Bill To Information as Table with Headers
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');

    // Table headers for Booking and Bill To
    doc.autoTable({
      startY: 170,
      head: [['Booking Details', 'Bill To']],
      body: [
        [
          `\nBooking Date: ${formatBookingDate(bookingDetails.createdAt)}\n\nBooking ID: ${bookingId}\n\nCheck-in Date: ${formatBookingDate(bookingDetails.checkInDate)}\n\nCheck-out Date: ${formatBookingDate(bookingDetails.checkOutDate)}\n\nRoom Type: ${bookingDetails.roomType}`,
          `\nName: ${guestDetails.fname} ${guestDetails.lname}\n\nEmail: ${guestDetails.email}\n\nPhone: ${guestDetails.phone}`,
        ]
      ],
      theme: 'plain', 
      styles: { fontSize: 12, cellPadding: 8 },
      headStyles: { fillColor: [211, 211, 211], textColor: [0, 0, 0] },
      margin: { left: 40, right: 40 },
    });

    // Payment Information Table (no separate heading)
    doc.autoTable({
      startY: doc.autoTable.previous.finalY + 30, // Starts below the booking/bill-to section
      head: [['Payment ID', 'Amount Paid']],
      body: [
        [paymentId, `${(amount / 100).toFixed(2)} INR`],
      ],
      theme: 'plain',
      styles: { fontSize: 12, cellPadding: 8 },
      headStyles: { fillColor: [211, 211, 211], textColor: [0, 0, 0] },
      margin: { left: 40, right: 40 },
    });

    // Footer with Thank You message
    const footerText = 'Thank you for booking with us! If you have any questions, please contact us.';
    doc.setFontSize(10);
    doc.setFont('helvetica', 'italic');
    doc.text(footerText, pageWidth / 2, pageHeight - 50, { align: 'center' });

    // Save the PDF
    doc.save('Nest_Residency_Receipt.pdf');
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="mx-auto p-6 mt-24 mb-5 max-w-lg bg-white rounded-lg shadow-lg">
      <div>
        <Receipt
          paymentId={paymentId}
          amount={amount}
          bookingDetails={bookingDetails}
          guestDetails={guestDetails}
        />
      </div>

      <div className="text-center mt-6">
        <button
          onClick={downloadPDF}
          className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded"
        >
          Download Receipt
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
