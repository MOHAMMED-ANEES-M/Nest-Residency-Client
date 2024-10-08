import React from 'react';
import RoomCarousel from './RoomCarousel';

const RoomCard = ({ room }) => {

  console.log(room);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mb-10 shadow-lg overflow-hidden">
      {/* Image section */}
      <div className="w-full h-60 sm:h-80">
        <RoomCarousel images={room.images} />
      </div>
      
      {/* Details section */}
      <div className="p-8 flex flex-col justify-between bg-[#f8f8f8]">
        <div>
          <h2 className="text-base min-[400px]:text-2xl sm:text-3xl font-semibold text-[#912501] mb-4">{room.roomType}</h2>
          <p className="text-base min-[400px]:text-lg sm:text-xl mb-5 font-semibold">Rs. {room.roomPrice} + GST / night</p>
          {/* <p className="text-lg mb-4">{room.description}</p> */}
          
          <ul className="text-base min-[400px]:text-lg list-disc list-inside ">
            {room.amenities.map((amenity, index) => (
              <li key={index} className="">{amenity}</li>
            ))}
          </ul>

          {/* Button Section */}
          {/* <div className="flex gap-4 mt-4">
            <a href={room.link} className={`flex-1 text-md mb-2 bg-brown-700 hover:bg-green-800 transition-colors p-2 rounded text-white text-center `}>
              Virtual Tour
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default RoomCard;