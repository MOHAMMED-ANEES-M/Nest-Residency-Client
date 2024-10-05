import React, { useEffect, useState } from 'react';
import { findRooms } from '../services/api'; // API call function
import { roomDetails as localRoomDetails } from '../data/room'; 
import RoomCard from '../layouts/RoomCard';
import LoadingSpinner from '../utils/LoadingSpinner';

const RoomPage = () => {
  const [roomData, setRoomData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch room details
  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const apiRoomData = await findRooms(); // API call to get room data
        console.log(apiRoomData);

        // Merge API data with local room details
        const mergedData = apiRoomData?.rooms?.map(room => {
          const localRoom = localRoomDetails.find(local => local.roomType === room.roomType);
          return {
            ...room,
            src: localRoom?.src || '',
            link: localRoom?.link || '',
            images: localRoom?.images || '',
            description: localRoom?.description || '',
            amenities: localRoom?.amenities || [], // Include amenities from localRoomDetails
          };
        });

        setRoomData(mergedData); // Set the merged data in state
      } catch (error) {
        console.error('Error fetching room details:', error);
      } finally {
        setLoading(false); // Set loading to false when fetching is done
      }
    };

    fetchRoomData();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="p-5 min-[400px]:p-10 sm:p-20 mt-5 sm:mt-0">
      <h1 className='text-3xl sm:text-4xl md:text-5xl my-8 text-center text-brown-700'>Rooms</h1>
      <div>
        {loading ? (
          <LoadingSpinner /> // Loading message
        ) : roomData.length === 0 ? (
          <div>No rooms available.</div> // Handle no rooms case
        ) : (
          roomData.map((room) => (
            <RoomCard key={room.roomId} room={room} />
          ))
        )}
      </div>
    </div>
  );
};

export default RoomPage;