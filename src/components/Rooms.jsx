import React from 'react';
import { roomDetails } from '../data/room'; // Assuming this is the correct import path for roomDetails
import { Link } from 'react-router-dom';

const Rooms = () => {
  return (
    <div>
      <div className=" p-20 bg-green-800">
        <h1 className="text-white text-[50px] mb-5 text-center">Featured Rooms</h1>
        <p className='text-white text-center text-xl mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="grid grid-cols-2 gap-2 justify-center bg-white p-2 rounded">
          {roomDetails.map((room) => (
          <div key={room.roomId} className="relative group transition duration-300 overflow-hidden">
            <img src={room.src} alt={room.name} className="w-full h-full" />
            <div className="absolute bottom-0 group-hover:pt-20 w-full h-20 group-hover:h-full transition-all ease-in-out duration-500 opacity-90 bg-black z-10 p-3 overflow-hidden">
              <p className="text-white text-center text-lg font-semibold">{room.name}</p>
              <p className="text-white text-center text-lg font-semibold">Rs. {room.price}</p>
              <div className='w-fit m-auto'>
                <Link to='/rooms'><button className='bg-brown-700 hover:bg-green-800 text-white p-3 mt-5 rounded'>View More</button></Link>
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