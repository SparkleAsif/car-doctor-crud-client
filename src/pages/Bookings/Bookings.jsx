import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  // URL for fetching bookings by user email
  const url = `http://localhost:5000/bookings?email=${user.email}`;

  // Fetch bookings on mount or when user.email changes
  useEffect(() => {
    if (user.email) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setBookings(data))
        .catch((error) => console.error("Error fetching bookings:", error)); // Error handling
    }
  }, [url]); // Add dependency array for email change

  // Handle delete booking
  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        })
        .catch((error) => console.error("Error deleting booking:", error)); // Error handling
    }
  };

  // Handle confirm booking
const handleBookingConfirm = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // Update State
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id); // Fix this line
          if (updated) { // Check if the booking was found
            updated.status = "confirm";
            const newBookings = [updated, ...remaining];
            setBookings(newBookings);
          } else {
            console.error("Booking not found");
          }
        }
      })
      .catch((error) => console.error("Error confirming booking:", error)); // Handle errors
  };

  
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* Table Head */}
        <thead>
          <tr>
            <th></th>
            <th className="text-xl text-white font-bold">Name</th>
            <th className="text-xl text-white font-bold">Booking Date</th>
            <th className="text-xl text-white font-bold">Service</th>
            <th className="text-xl text-white font-bold">Price</th>
            <th></th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {bookings.map((booking) => (
            <BookingRow
              key={booking._id}
              booking={booking}
              handleBookingConfirm = {handleBookingConfirm}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
