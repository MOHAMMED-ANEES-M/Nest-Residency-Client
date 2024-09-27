import React, { useEffect } from 'react';

const RefundAndCancellation = () => {

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

  return (
    <div className="p-6 bg-white text-black rounded-lg mt-32 mb-10 max-w-4xl m-auto">
      <h2 className="text-3xl font-semibold mb-4">Refund and Cancellation</h2>
      <p className="mb-4">
      We do not offer any refund or cancellation services. Please contact the hotel directly for any special requests or inquiries regarding reservations.
      </p>
    </div>
  );
};

export default RefundAndCancellation;