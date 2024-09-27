import React, { useEffect } from 'react';

const PrivacyPolicy = () => {

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

  return (
    <div className="p-6 bg-white text-black rounded-lg mt-32 mb-10 max-w-4xl m-auto">
      <h2 className="text-3xl font-semibold mb-4">Privacy Policy</h2>
      <p className="mb-4">
        At Nest Residency, we value your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information.
      </p>

      <h3 className="text-2xl font-semibold mb-2">1. Information We Collect</h3>
      <p className="mb-4">
        We collect personal information such as your name, contact details, and payment information when you make a booking. This information is used solely to process your reservation and provide better service.
      </p>

      <h3 className="text-2xl font-semibold mb-2">2. Payment Information</h3>
      <p className="mb-4">
        Your payment details are processed securely through Razorpay. We do not store your credit card or bank information on our servers.
      </p>

      <h3 className="text-2xl font-semibold mb-2">3. Use of Information</h3>
      <p className="mb-4">
        The information collected is used to confirm your booking, process payments, and communicate important details regarding your stay. We may also use your contact information to send promotions or offers related to our services, which you can opt-out of at any time.
      </p>

      <h3 className="text-2xl font-semibold mb-2">4. Data Security</h3>
      <p className="mb-4">
        We implement strict security measures to protect your personal information. We use SSL encryption to safeguard your data during transmission.
      </p>

      <h3 className="text-2xl font-semibold mb-2">5. Third-Party Disclosure</h3>
      <p className="mb-4">
        We do not sell or share your personal information with third parties, except as required by law or to complete a payment transaction through our payment gateway partner, Razorpay.
      </p>

      <p className="mb-4">
        By using our website and booking with us, you agree to our privacy practices as described in this policy.
      </p>
    </div>
  );
};

export default PrivacyPolicy;