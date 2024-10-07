import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { findRooms } from '../services/api'; 
import { setRooms, setLoading } from '../redux/slices/roomSlice';
import { roomDetails as localRoomDetails } from '../data/room';
import LoadingSpinner from '../utils/LoadingSpinner';

const Rooms = () => {
  const dispatch = useDispatch();
  const { rooms, loading } = useSelector((state) => state.room); 

  useEffect(() => {
    const fetchRooms = async () => {
      if (rooms.length === 0) { 
        dispatch(setLoading(true));

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
          dispatch(setLoading(false));
        }
      }
    };

    fetchRooms(); 
  }, [dispatch, rooms]);

  if (loading) {
    return <LoadingSpinner />; 
  }

  if (rooms.length === 0) {
    return <div></div>; 
  }

  return (
    <div>
      <div className="py-10 sm:py-20 rooms">
        <h1 className="text-white text-3xl sm:text-[50px] mb-5 text-center">Featured Rooms</h1>
        <p className='text-white text-center text-lg sm:text-xl mb-6 sm:mb-10'>Explore Affordable Luxury Hotel Rooms</p>
        
        {/* Grid Container for Room Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-10 px-5 sm:px-10">
          {rooms.map((room) => (
            <div key={room.roomId} className="group bg-gradient-to-b from-[#619942] to-[#8DC26F] shadow-lg rounded-lg overflow-hidden p-2">
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