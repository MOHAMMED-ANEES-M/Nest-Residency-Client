import React, { useState } from 'react';

const AdminRoomCard = ({ room, onPriceChange }) => {
  const [editing, setEditing] = useState(false);
  const [newPrice, setNewPrice] = useState(room.roomPrice);

  // Handle edit button click
  const handleEditClick = () => {
    setEditing(true);
  };

  // Handle save button click
  const handleSaveClick = () => {
    onPriceChange(room.roomType, newPrice); // Call the parent function to update the price
    setEditing(false); // Exit editing mode
  };

  // Handle cancel button click
  const handleCancelClick = () => {
    setEditing(false); // Exit editing mode without saving
    setNewPrice(room.roomPrice); // Reset price input to original
  };

  return (
    <div className="bg-white border w-full rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm mx-auto overflow-hidden">
      {/* Room Image */}
      {room.src && (
        <img
          src={room.src}
          alt={room.roomType}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-5">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{room.roomType}</h3>
        <p className="text-gray-600 mb-2">{room.description}</p>
        <p className="text-gray-500 text-sm mb-4">Amenities: {room.amenities.join(', ')}</p>

        {!editing ? (
          <div className="flex justify-between items-center">
            <p className="text-xl font-bold text-green-600">Price: ₹{room.roomPrice}</p>
            <button
              onClick={handleEditClick}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Edit Price
            </button>
          </div>
        ) : (
          <div className="flex flex-col space-y-3">
            <input
              type="number"
              onChange={(e) => setNewPrice(e.target.value)}
              className="border border-gray-300 px-4 py-2 rounded-lg w-full text-center"
              placeholder="New Price"
            />
            <div className="flex justify-between">
              <button
                onClick={handleCancelClick}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveClick}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminRoomCard;