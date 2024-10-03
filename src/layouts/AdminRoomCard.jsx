import React from 'react';

const RoomCard = ({ room }) => {
  return (
    <div className="border rounded-lg p-4 mb-4 shadow-lg">
      <h2 className="text-xl font-semibold">{room.name}</h2>
      <img src={room.src} alt={room.name} className="w-full h-48 object-cover my-4" />
      <p>{room.description}</p>
      <p><strong>Amenities:</strong> {room.amenities.join(', ')}</p>
      <p><strong>Price:</strong> ₹{room.price}</p>
      <a
        href={room.link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white px-3 py-1 rounded inline-block mt-4"
      >
        View Room
      </a>
    </div>
  );
};

export default RoomCard;