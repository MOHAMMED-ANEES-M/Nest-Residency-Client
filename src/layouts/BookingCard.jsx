import React from 'react';
import RoomCarousel from './RoomCarousel';
import { roomDetails } from '../data/room';

const BookingCard = ({ room, handleBookRoom }) => {  

  const roomData = roomDetails.find(rooms => rooms.roomType === room.roomType);

  return (
    <div className="p-2 bg-white shadow-lg h-full flex flex-col justify-between">
      <RoomCarousel images={roomData.images} />
      <div className="mt-4 flex-grow px-2">
        <h2 className="text-lg font-semibold text-[#912501]">{room.roomType}</h2>
        <p className="text-md font-bold mt-2">₹{room.roomPrice} / night + tax</p>
        {/* <p className="text-sm text-gray-500">{roomData.description}</p> */}
        <ul className="text-sm text-gray-800 list-disc ml-5 mt-2">
          {roomData.amenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
      </div>
      <button
        className="mt-4 py-2 px-6 border border-[#912501] text-[#912501] hover:bg-[#912501] hover:text-white"
        onClick={handleBookRoom}
      >
        Book Room
      </button>
    </div>
  );
};

export default BookingCard;