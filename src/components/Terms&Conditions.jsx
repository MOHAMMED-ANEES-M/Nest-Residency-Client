import React, { useEffect } from 'react';

const TermsAndConditions = () => {

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

  return (
    <div className="p-6 bg-white text-black rounded shadow-lg max-w-4xl m-auto mt-32 mb-10">
      <h2 className="text-3xl font-semibold mb-4">Terms and Conditions</h2>
      <p className="mb-4">
        For the purpose of these Terms and Conditions, the term "we", "us", "our" used anywhere on this page shall mean NEST RESIDENCY, whose registered/operational office is 27/2402,E,G,H Kozhikode KERALA 673016. "You", "your", "user", "visitor" shall mean any natural or legal person visiting our website and/or agreeing to purchase from us.
      </p>
      <p className="mb-4">
        Your use of the website and/or purchase from us are governed by the following Terms and Conditions. The content of the pages on this website is subject to change without notice. By continuing to use the site or making a purchase, you accept these terms.
      </p>
      <h3 className="text-2xl font-semibold mb-2">1. Warranty Disclaimer</h3>
      <p className="mb-4">
        Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information may contain inaccuracies or errors, and we expressly exclude liability for such inaccuracies to the fullest extent permitted by law.
      </p>
      <h3 className="text-2xl font-semibold mb-2">2. Use of Website Information</h3>
      <p className="mb-4">
        Your use of any information or materials on our website and/or product pages is entirely at your own risk, for which we shall not be liable. It is your responsibility to ensure that any products, services, or information available through our website meet your specific requirements.
      </p>
      <h3 className="text-2xl font-semibold mb-2">3. Intellectual Property</h3>
      <p className="mb-4">
        This website contains material owned by or licensed to us. This material includes, but is not limited to, design, layout, appearance, and graphics. Reproduction is prohibited unless permitted by our copyright notice.
      </p>
      <h3 className="text-2xl font-semibold mb-2">4. Unauthorized Use</h3>
      <p className="mb-4">
        Unauthorized use of the information provided by us may give rise to a claim for damages and/or be a criminal offense.
      </p>
      <h3 className="text-2xl font-semibold mb-2">5. External Links</h3>
      <p className="mb-4">
        From time to time, our website may also include links to other websites. These links are provided for your convenience and to provide further information. We do not endorse the linked websites, and have no responsibility for the content of the linked website(s).
      </p>
      <p className="mb-4">
        Any disputes arising out of your use of our website, purchase, or any engagement with us shall be governed by the laws of India.
      </p>
    </div>
  );
};

export default TermsAndConditions;