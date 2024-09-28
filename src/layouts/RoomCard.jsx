import React from 'react';
import RoomCarousel from './RoomCarousel';
import { Link } from 'react-router-dom';

const RoomCard = ({ room, vrbtn }) => {
  return (
    <div className="grid grid-cols-2 gap-1 mb-10 bg-brown-700 p-1 rounded-sm">
      {/* Image section */}
      <div className="w-full h-full ">
        <RoomCarousel images={room.images} />
      </div>
      
      {/* Details section */}
      <div className=" p-8 flex flex-col justify-between bg-[#f8f8f8] rounded-sm">
        <div>
          <h2 className="text-3xl font-semibold mb-4 ">{room.name}</h2>
          <p className="text-xl mb-2 font-semibold">Rs. {room.price}+gst/night</p>
          <p className="text-lg mb-2">{room.description}</p>
          <ul className="text-lg list-disc list-inside mb-5">
              {room.amenities.map((amenity, index) => (
                <li key={index} className="">
                  {amenity}
                </li>
              ))}
            </ul>
            <a href={room.link}><button className={`text-md mb-2 bg-brown-700 p-2 rounded text-white ${vrbtn?'hidden':'visible'}`}>Virtual Tour</button></a>
            <Link to={`/booking/${room.roomId}`}><button className={`text-md mb-2 rounded bg-brown-700 p-2 text-white ${vrbtn?'visible':'hidden'}`}>Book Now</button></Link>
        </div>
        {/* <div className="mt-auto">
          <Link to={room.link}>
            <button className="bg-brown-700 text-white p-3 mt-5">View More</button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default RoomCard;