export const sortBookingsByCreatedAt = (bookings) => {
    return [...bookings].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  };
  
  export const paginateBookings = (bookings, currentPage, bookingsPerPage) => {
    const indexOfLastBooking = currentPage * bookingsPerPage;
    const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
    return bookings.slice(indexOfFirstBooking, indexOfLastBooking);
  };
  