import React from 'react';

const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Confirm Logout</h2>
        <p>Are you sure you want to log out?</p>
        <div className="mt-6 flex justify-end space-x-4">
          <button 
            onClick={onClose} 
            className="bg-gray-300 p-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button 
            onClick={onConfirm} 
            className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;