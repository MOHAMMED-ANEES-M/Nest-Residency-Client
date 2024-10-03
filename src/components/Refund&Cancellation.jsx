import React, { useEffect } from 'react';

const RefundAndCancellation = () => {

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

  return (
    <div className="p-6 bg-white text-black rounded-lg mt-32 mb-10 max-w-4xl m-auto">
      <h2 className="text-3xl font-semibold mb-4">Refund and Cancellation</h2>
      <p className="mb-4">
        While our policy generally does not include refunds, exceptions may be considered under special circumstances by contacting our office directly at Nest Residency.
      </p>
    </div>
  );
};

export default RefundAndCancellation;