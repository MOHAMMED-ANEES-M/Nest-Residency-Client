import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { bookRoom } from '../services/api';
import { roomDetails } from '../data/room';

const BookRoom = ({ roomId }) => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    phone: '',
    address: '',
  });
  const navigate = useNavigate();
  const room = roomDetails.find((r) => r.roomId === roomId);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBookRoom = async () => {
    try {
      const bookingData = {
        ...formData,
        roomId,
        checkInDate: '2024-09-25', // Static for demo; get from state/params in real scenario
        checkOutDate: '2024-09-26',
        paymentId: 'sample_payment_id',
        orderId: 'sample_order_id',
      };
      await bookRoom(bookingData);
      navigate('/success');
    } catch (err) {
      console.error('Booking failed', err);
    }
  };

  return (
    <div>
      <h2>Booking Room: {room.name}</h2>
      <p>Price: ${room.price}</p>
      <input
        type="text"
        name="fname"
        placeholder="First Name"
        value={formData.fname}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lname"
        placeholder="Last Name"
        value={formData.lname}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
      />
      <button onClick={handleBookRoom}>Pay & Book Room</button>
    </div>
  );
};

export default BookRoom;