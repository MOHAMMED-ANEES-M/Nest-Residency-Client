import React, { useEffect } from 'react';

const PrivacyPolicy = () => {

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

  return (
    <div className="p-6 bg-white text-black rounded-lg mt-32 mb-10 max-w-4xl m-auto">
      <h2 className="text-3xl font-semibold mb-4">Privacy Policy</h2>
      <p className="mb-4">
        At Nest Residency, we are committed to safeguarding your privacy. This policy outlines how we collect, use, and protect your personal information.
      </p>
      <h3 className="text-2xl font-semibold mb-2">1. Information We Collect</h3>
      <p className="mb-4">
        We collect personal information such as your name, contact details, and payment information when you make a booking. This data is used solely for processing your reservation and to enhance your experience with us.
      </p>
      <h3 className="text-2xl font-semibold mb-2">2. Payment Information</h3>
      <p className="mb-4">
        Your payment details are processed securely through Razorpay. We do not store any credit card or banking information on our servers.
      </p>
      <h3 className="text-2xl font-semibold mb-2">3. Use of Data</h3>
      <p className="mb-4">
        We use your information to confirm bookings, process payments, and communicate important details about your stay. We may also use your contact details for promotional offers, but you can opt-out at any time.
      </p>
      <h3 className="text-2xl font-semibold mb-2">4. Data Security</h3>
      <p className="mb-4">
        We take the security of your data seriously. All sensitive information is transmitted using SSL encryption to ensure its protection during transmission.
      </p>
      <h3 className="text-2xl font-semibold mb-2">5. Third-Party Disclosure</h3>
      <p className="mb-4">
        We do not share your personal information with third parties, except as necessary to process payments or as required by law.
      </p>
    </div>
  );
};

export default PrivacyPolicy;