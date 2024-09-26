import React, { useEffect } from 'react';
import { roomDetails } from '../data/room'; 
import RoomCard from '../layouts/RoomCard';

const RoomPage = () => {

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

  return (
    <div className="p-20 ">
      <h1 className='text-[50px] mb-10 text-center text-brown-700'>Rooms</h1>
      <div>
        {roomDetails?.map((room) => (
          <RoomCard key={room.roomId} room={room} />
        ))}
      </div>
    </div>
  );
};

export default RoomPage;