import React, { useState } from 'react';
import { roomDetails } from '../data/room';
import AdminRoomCard from '../layouts/AdminRoomCard';  // Admin-friendly version of RoomCard

const AdminRooms = () => {
  const [rooms, setRooms] = useState(roomDetails); // Use roomDetails as initial state

  const handlePriceChange = (roomId, newPrice) => {
    // Update the room price in state
    const updatedRooms = rooms.map((room) =>
      room.roomId === roomId ? { ...room, price: newPrice } : room
    );
    setRooms(updatedRooms);
  };

  return (
    <div className="p-5 min-[400px]:p-10 sm:p-20 ">
      <h1 className="text-3xl sm:text-4xl md:text-5xl my-8 text-center text-brown-700">Manage Rooms</h1>
      <div className='grid grid-cols-2 gap-5'>
        {rooms.map((room) => (
          <AdminRoomCard key={room.roomId} room={room} onPriceChange={handlePriceChange} />
        ))}
      </div>
    </div>
  );
};

export default AdminRooms;