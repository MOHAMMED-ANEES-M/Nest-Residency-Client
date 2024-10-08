import React, { useEffect } from 'react';

const ShippingAndDelivery = () => {

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

  return (
    <div className="p-6 bg-white text-black rounded-lg mt-32 mb-10 max-w-4xl m-auto">
      <h2 className="text-3xl font-semibold mb-4">Shipping and Delivery</h2>
      <p className="mb-4">
        Shipping and delivery services are not applicable to our hotel services. All bookings and reservations are for accommodations provided at Nest Residency, Calicut. Please contact us directly for any inquiries.
      </p>
    </div>
  );
};

export default ShippingAndDelivery;