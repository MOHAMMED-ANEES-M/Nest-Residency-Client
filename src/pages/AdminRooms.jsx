import React, { useState, useEffect } from 'react';
import { roomDetails } from '../data/room'; // Import room details (with description, amenities, etc.)
import AdminRoomCard from '../layouts/AdminRoomCard'; // Custom card for admin
import { findRooms, updatePrice } from '../services/api'; // API functions
import LoadingSpinner from '../utils/LoadingSpinner';

const AdminRooms = () => {
  const [rooms, setRooms] = useState([]); // Initially empty state for rooms
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch room data from API on component mount
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const apiResponse = await findRooms(); // Fetch rooms from the backend
        const apiRooms = apiResponse.rooms; // Access the rooms array from the response
    
        console.log('API Rooms:', apiRooms); // Log the rooms array to ensure it's correct
    
        if (!Array.isArray(apiRooms)) {
          throw new Error('Expected an array from API response');
        }
    
        // Merge rooms from API with local roomDetails by roomType
        const mergedRooms = apiRooms.map(apiRoom => {
          const roomDetail = roomDetails.find(detail => detail.roomType === apiRoom.roomType);
          return {
            ...apiRoom,
            ...roomDetail, // Merge details if found
          };
        });
    
        setRooms(mergedRooms); // Update state with the merged rooms
        setLoading(false); // Turn off loading after successful fetch
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    fetchRooms();
  }, []);

  const handlePriceChange = async (roomType, newPrice) => {
    try {
      if (!newPrice) {
        return alert('Price is required');
      }
      const response = await updatePrice(roomType, newPrice);
      const updatedRooms = rooms.map((room) =>
        room.roomType === roomType ? { ...room, roomPrice: newPrice } : room
      );
      setRooms(updatedRooms);
    } catch (error) {
      console.error('Error updating room price:', error);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="px-5 min-[400px]:px-10 sm:px-20 mb-5">
      <h1 className="text-3xl sm:text-4xl md:text-5xl my-8 text-center text-brown-700">Manage Rooms</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {rooms.map((room) => (
          <AdminRoomCard key={room._id} room={room} onPriceChange={handlePriceChange} />
        ))}
      </div>
    </div>
  );
};

export default AdminRooms;