import React from 'react';
import RoomCarousel from './RoomCarousel';

const BookingCard = ({ room, handleBookRoom }) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg h-full flex flex-col justify-between">
      <RoomCarousel images={room.images} />
      <div className="mt-4 flex-grow">
        <h2 className="text-lg font-semibold">{room.name}</h2>
        <p className="text-md font-bold mt-2">₹{room.price} / night + tax</p>
        <p className="text-sm text-gray-500">{room.description}</p>
        <ul className="text-sm text-gray-500 list-disc ml-5 mt-2">
          {room.amenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
      </div>
      <button
        className="mt-4 py-2 px-6 bg-brown-700 text-white rounded-lg hover:bg-green-800"
        onClick={handleBookRoom}
      >
        Book Room
      </button>
    </div>
  );
};

export default BookingCard;