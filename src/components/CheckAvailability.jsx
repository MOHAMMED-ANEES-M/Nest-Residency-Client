import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkRoomAvailability } from '../services/api';
import { setAvailableRooms, setLoading, setError } from '../redux/slices/bookingSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import BlockAvailabilityForm from '../layouts/BlockAvailabilityForm';
import BookingCard from '../layouts/BookingCard';

const CheckAvailability = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { checkInDate: initialCheckInDate, checkOutDate: initialCheckOutDate } = location.state || {};

    const [dateError, setDateError] = useState('');
    const [checkInDate, setCheckInDate] = useState(initialCheckInDate || '');
    const [checkOutDate, setCheckOutDate] = useState(initialCheckOutDate || '');
    const [hasCheckedAvailability, setHasCheckedAvailability] = useState(false);
    const dispatch = useDispatch();
    const { availableRooms, loading, error } = useSelector((state) => state.booking);

    // Create a reference for the availability section
    const availabilityRef = useRef(null);

    const handleCheckAvailability = async () => {
        dispatch(setLoading(true));
        setHasCheckedAvailability(true);
        setDateError('');
        if (!checkInDate || !checkOutDate) {
            dispatch(setLoading(false));
            return setDateError('Please select both check-in and check-out dates.');
        }
        if (checkInDate === checkOutDate) {
            setDateError('Check-in and check-out dates cannot be the same.');
            dispatch(setLoading(false));
            return;
        }

        try {
            const data = await checkRoomAvailability(checkInDate, checkOutDate);
            dispatch(setAvailableRooms(data.availableRooms));
        } catch (err) {
            console.error('Error fetching room availability:', err);
            dispatch(setError(err?.response?.data?.message));
        } finally {
            dispatch(setLoading(false));

            // Scroll to the availability section after the check is complete
            if (availabilityRef.current) {
                availabilityRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const handleBookRoom = (selectedRoom) => {
        // Randomly select a room number of the same roomType
        const availableRoomNumbers = availableRooms.filter(room => room.roomType === selectedRoom.roomType);
        
        // Ensure that we have available rooms to choose from
        if (availableRoomNumbers.length === 0) {
            console.error('No available rooms of the selected type.');
            return;
        }

        // Randomly select a room number from available rooms
        const randomRoom = availableRoomNumbers[Math.floor(Math.random() * availableRoomNumbers.length)];
        
        navigate('/booking', {
            state: {
                roomNumber: randomRoom.roomNumber, // Pass the correct roomNumber
                roomType: selectedRoom.roomType,    // Pass the selected room type
                checkInDate,
                checkOutDate,
            },
        });
    };

    // Find distinct available room types
    const distinctAvailableRooms = Array.from(
        new Set(availableRooms.map(room => room.roomType))
    ).map(roomType => {
        return availableRooms.find(room => room.roomType === roomType); // Get the room object from availableRooms
    });

    useEffect(() => {
        if (checkInDate && checkOutDate && location.state) {
            handleCheckAvailability();
        }
    }, [location.state]);

    return (
        <div className="mt-32 mb-20 px-4 md:px-8 lg:px-20">
            <h1 className="text-base sm:text-xl p-3 font-semibold bg-green-800 rounded text-white text-center">Check Room Availability</h1>
            <BlockAvailabilityForm
                checkInDate={checkInDate}
                setCheckInDate={setCheckInDate}
                checkOutDate={checkOutDate}
                setCheckOutDate={setCheckOutDate}
                loading={loading}
                handleCheckAvailability={handleCheckAvailability}
            />

            {/* Use the ref here to scroll to the section when availability is checked */}
            {hasCheckedAvailability && (
                <>
                    <h1 ref={availabilityRef} className='text-base sm:text-xl p-3 font-semibold bg-green-800 rounded text-white text-center mt-6'>
                        Available Rooms
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                        {distinctAvailableRooms.length > 0 ? (
                            distinctAvailableRooms.map((room) => (
                                <BookingCard
                                    key={room.roomType} // Unique key for each room type
                                    room={room}         // Pass full room details, including price from API
                                    handleBookRoom={() => handleBookRoom(room)} // Pass the room object
                                />
                            ))
                        ) : (
                            hasCheckedAvailability && !loading && (
                                <div className="col-span-full text-center">
                                    {error && <p className="text-red-500 font-semibold bg-red-200 p-5 rounded">{error}</p>}
                                    {dateError && <p className="text-red-500 font-semibold bg-red-200 p-5 rounded">{dateError}</p>}
                                    {!error && !dateError && <p className="text-red-500 font-semibold bg-red-200 p-5 rounded">No rooms available on this date. Try with another date.</p>}
                                </div>
                            )
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default CheckAvailability;