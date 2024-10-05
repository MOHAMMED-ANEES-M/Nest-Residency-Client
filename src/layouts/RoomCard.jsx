import React from 'react';
import RoomCarousel from './RoomCarousel';

const RoomCard = ({ room }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-10 bg-brown-700 shadow rounded-lg overflow-hidden">
      {/* Image section */}
      <div className="w-full h-full">
        <RoomCarousel images={room.images} />
      </div>
      
      {/* Details section */}
      <div className="p-8 flex flex-col justify-between bg-[#f8f8f8]">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-brown-700 mb-4">{room.roomType}</h2>
          <p className="text-lg sm:text-xl mb-2 font-semibold">Rs. {room.roomPrice} + GST / night</p>
          <p className="text-lg mb-4">{room.description}</p>
          
          <ul className="text-lg list-disc list-inside mb-5">
            {room.amenities.map((amenity, index) => (
              <li key={index} className="">{amenity}</li>
            ))}
          </ul>

          {/* Button Section */}
          <div className="flex gap-4 mt-4">
            <a href={room.link} className={`flex-1 text-md mb-2 bg-brown-700 hover:bg-green-800 transition-colors p-2 rounded text-white text-center `}>
              Virtual Tour
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;