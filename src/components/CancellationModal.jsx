// src/components/Modal.js

import React, { useState } from 'react';

const CancellationModal = ({ showModal, onClose, onConfirm, cancelReason, setCancelReason }) => {
  const [error, setError] = useState('');

  const handleConfirm = () => {
    if (!cancelReason.trim()) {
      setError('Please fill the field.');
    } else {
      setError(''); // Clear error message
      onConfirm(); // Proceed with the confirmation
    }
  };

  if (!showModal) return null;

  return (
    <div className="modal fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="modal-content bg-white p-5 rounded-lg shadow-lg w-1/2"> {/* Set width to 50% */}
        <h3 className="text-lg font-semibold">Cancel Booking</h3>
        <label className="block my-3">Reason for Cancellation:</label>
        <input
          type="text"
          value={cancelReason}
          onChange={(e) => setCancelReason(e.target.value)}
          className="border p-2 w-full rounded-md"
          placeholder="Enter reason"
          required
        />
        {error && <p className="text-red-600 mt-2">{error}</p>} {/* Error message */}

        <div className="mt-5 flex justify-between">
          <button
            onClick={handleConfirm} // Call the modified confirm handler
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Confirm Cancellation
          </button>
          <button
            onClick={onClose}
            className="bg-gray-600 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancellationModal;