import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { findRooms } from '../services/api'; // API call function
import { roomDetails as localRoomDetails } from '../data/room'; 

const Rooms = ({setLoading}) => {
  const [roomDetails, setRoomDetails] = useState([]);

  // Fetch room details using the findRooms function from api.js
  useEffect(() => {

    if (!roomDetails) {
      setLoading(true)
    } else {
      setLoading(false)
    }
    
    const fetchRooms = async () => {
      try {
        const apiRoomData = await findRooms(); // API call to get room data
        console.log(apiRoomData);

        // Merge API data with local src
        const mergedData = apiRoomData?.rooms?.map(room => {
          // Find the corresponding src from local roomDetails.js based on roomType
          const localRoom = localRoomDetails.find(local => local.roomType === room.roomType);
          return {
            ...room,   // Include API data like roomType, roomPrice
            src: localRoom?.src || '' // Merge src from localRoomDetails if available
          };
        });

        setRoomDetails(mergedData);  // Set the merged data in state
      } catch (error) {
        console.error('Error fetching room details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  if (roomDetails.length === 0) {
    return <div>No rooms available.</div>; // Handle no rooms case
  }

  return (
    <div>
      <div className="py-10 sm:py-20 bg-green-900">
        <h1 className="text-white text-3xl sm:text-[50px] mb-5 text-center">Featured Rooms</h1>
        <p className='text-white text-center text-lg sm:text-xl mb-6 sm:mb-10'>Explore Affordable Luxury Hotel Rooms</p>
        
        {/* Grid Container for Room Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-10 px-5 sm:px-10">
          {roomDetails.map((room) => (
            <div key={room.roomId} className="group bg-green-500 shadow-lg rounded-lg overflow-hidden p-2">
              {/* Room Image */}
              <div className="relative">
                <img src={room.src} alt={room.roomType} className="w-full h-60 object-cover rounded-md" />
                <div className="absolute inset-0 "></div>
              </div>
              
              {/* Room Info */}
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold mb-2">{room.roomType}</h3>
                <p className="mb-4 font-semibold">Rs. {room.roomPrice}</p>
                {/* View More Button */}
                <div className="mt-5">
                  <Link to={`/rooms`}>
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