import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { findRooms } from '../services/api'; 
import { roomDetails as localRoomDetails } from '../data/room'; 
import RoomCard from '../layouts/RoomCard';
import LoadingSpinner from '../utils/LoadingSpinner';
import { setRooms } from '../redux/slices/roomSlice'; 

const RoomPage = () => {
  const dispatch = useDispatch();
  const roomsFromStore = useSelector((state) => state.room.rooms); 
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const apiRoomData = await findRooms(); 
        const mergedData = apiRoomData?.rooms?.map(room => {
          const localRoom = localRoomDetails.find(local => local.roomType === room.roomType);
          return {
            ...room,
            src: localRoom?.src || '',
            link: localRoom?.link || '',
            images: localRoom?.images || '',
            description: localRoom?.description || '',
            amenities: localRoom?.amenities || [], 
          };
        });
        dispatch(setRooms(mergedData)); 
      } catch (error) {
        console.error('Error fetching room details:', error);
      } finally {
        setLoading(false); 
      }
    };

    if (roomsFromStore.length === 0) { 
      fetchRoomData();
    } else {
      setLoading(false); 
    }
  }, [dispatch, roomsFromStore.length]); 

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="p-5 min-[400px]:p-10 sm:p-20 mx-5 sm:mx-10 md:mx-20 mt-5 sm:mt-0">
      <h1 className='text-3xl sm:text-4xl md:text-5xl my-8 text-center text-[#912501]'>Rooms</h1>
      <div>
        {loading ? (
          <LoadingSpinner /> 
        ) : roomsFromStore.length === 0 ? (
          <div>No rooms available.</div> 
        ) : (
          roomsFromStore.map((room) => (
            <RoomCard key={room.roomId} room={room} />
          ))
        )}
      </div>
    </div>
  );
};

export default RoomPage;