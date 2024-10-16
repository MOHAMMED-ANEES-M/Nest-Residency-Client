import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { roomDetails } from '../data/room'; 
import AdminRoomCard from '../layouts/AdminRoomCard'; 
import { findRooms, updatePrice } from '../services/api'; 
import LoadingSpinner from '../utils/LoadingSpinner';
import { setRooms } from '../redux/slices/roomSlice'; 

const AdminRooms = () => {
  const dispatch = useDispatch();
  const roomsFromStore = useSelector((state) => state.room.rooms); 
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const apiResponse = await findRooms(); 
        const apiRooms = apiResponse.rooms; 
        
        if (!Array.isArray(apiRooms)) {
          throw new Error('Expected an array from API response');
        }
    
        const mergedRooms = apiRooms.map(apiRoom => {
          const roomDetail = roomDetails.find(detail => detail.roomType === apiRoom.roomType);
          return {
            ...apiRoom,
            ...roomDetail, 
          };
        });
    
        dispatch(setRooms(mergedRooms)); 
        setLoading(false); 
      } catch (error) {
        // console.error('Error fetching rooms:', error);
      }
    };

    if (roomsFromStore.length === 0) {
      fetchRooms();
    } else {
      setLoading(false); 
    }
  }, [dispatch, roomsFromStore.length]); 

  const handlePriceChange = async (roomType, newPrice) => {
    try {
      if (!newPrice) {
        return alert('Price is required');
      }
      const response = await updatePrice(roomType, newPrice);
      if (response) {   
        const updatedRooms = roomsFromStore.map((room) =>
          room.roomType === roomType ? { ...room, roomPrice: newPrice } : room
        );
        dispatch(setRooms(updatedRooms)); 
      }
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
        {roomsFromStore.map((room) => (
          <AdminRoomCard key={room._id} room={room} onPriceChange={handlePriceChange} />
        ))}
      </div>
    </div>
  );
};

export default AdminRooms;