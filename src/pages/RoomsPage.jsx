import React, { useEffect } from 'react';
import { roomDetails } from '../data/room'; 
import RoomCard from '../layouts/RoomCard';

const RoomPage = () => {

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

  return (
    <div className="p-5 min-[400px]:p-10 sm:p-20 mt-5 sm:mt-0">
      <h1 className='text-3xl sm:text-4xl md:text-5xl my-8 text-center text-brown-700'>Rooms</h1>
      <div>
        {roomDetails?.map((room) => (
          <RoomCard key={room.roomId} room={room} />
        ))}
      </div>
    </div>
  );
};

export default RoomPage;