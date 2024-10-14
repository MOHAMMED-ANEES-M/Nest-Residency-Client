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

    const availabilityRef = useRef(null);

    const handleCheckAvailability = async () => {
        dispatch(setLoading(true));
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
            setHasCheckedAvailability(true);
            console.log('available rooms', data.availableRooms);
            
        } catch (err) {
            console.error('Error fetching room availability:', err);
            dispatch(setError(err?.response?.data?.message));
        } finally {
            dispatch(setLoading(false));

            if (availabilityRef.current) {
                availabilityRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const handleBookRoom = (selectedRoom) => {
        const availableRoomNumbers = availableRooms.filter(room => room.roomType === selectedRoom.roomType);
        
        if (availableRoomNumbers.length === 0) {
            console.error('No available rooms of the selected type.');
            return;
        }

        const randomRoom = availableRoomNumbers[Math.floor(Math.random() * availableRoomNumbers.length)];
        
        navigate('/booking', {
            state: {
                roomNumber: randomRoom.roomNumber, 
                roomType: selectedRoom.roomType,    
                checkInDate,
                checkOutDate,
            },
        });
    };

    const distinctAvailableRooms = Array.from(
        new Set(availableRooms.map(room => room.roomType))
    ).map(roomType => {
        return availableRooms.find(room => room.roomType === roomType);
    });

    useEffect(() => {
        if (checkInDate && checkOutDate && location.state) {
            handleCheckAvailability();
        }
    }, [location.state]);

    return (
        <div className="mt-32 mb-20 px-4 md:px-8 lg:px-20">
            {/* <h1 className="text-base sm:text-xl p-3 font-semibold bg-green-800 rounded text-white text-center">Check Room Availability</h1> */}
            <BlockAvailabilityForm
                checkInDate={checkInDate}
                setCheckInDate={setCheckInDate}
                checkOutDate={checkOutDate}
                setCheckOutDate={setCheckOutDate}
                loading={loading}
                handleCheckAvailability={handleCheckAvailability}
            />

            {dateError && 
            <p className='text-red-500'>Date is invalid</p>
            }
            {hasCheckedAvailability && (
                <>
                    <h1 ref={availabilityRef} className='text-base sm:text-xl p-3 font-semibold bg-green-800 rounded text-white text-center mt-6'>
                        Available Rooms
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                        {distinctAvailableRooms.length > 0 ? (
                            distinctAvailableRooms.map((room) => (
                                <BookingCard
                                    key={room.roomType} 
                                    room={room}        
                                    handleBookRoom={() => handleBookRoom(room)} 
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