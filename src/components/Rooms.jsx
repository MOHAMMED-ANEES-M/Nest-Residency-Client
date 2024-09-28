import React from 'react';
import { roomDetails } from '../data/room';
import { Link } from 'react-router-dom';

const Rooms = () => {
  return (
    <div>
      <div className="py-10 sm:py-20 bg-green-800">
        <h1 className="text-white text-3xl sm:text-[50px] mb-5 text-center">Featured Rooms</h1>
        <p className='text-white text-center text-lg sm:text-xl mb-6 sm:mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        
        {/* Grid Container for Room Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 px-5">
          {roomDetails.map((room) => (
            <div key={room.roomId} className="group bg-[#f8f8f8] shadow-lg rounded-lg overflow-hidden  p-2 ">
              {/* Room Image */}
              <div className="relative">
                <img src={room.src} alt={room.name} className="w-full h-60 object-cover rounded-md" />
                <div className="absolute inset-0 "></div>
              </div>
              
              {/* Room Info */}
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
                <p className=" mb-4 font-semibold">Rs. {room.price}</p>
                {/* View More Button */}
                <div className="mt-5">
                  <Link to='/rooms'>
                    <button className="w-full py-2 bg-brown-700 text-white font-semibold rounded hover:bg-green-800 transition-colors">
                      View More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;