// components/BookingCard.js
export default function BookingCard({ booking }) {
  const statusColors = {
    Confirmed: "bg-green-100 text-green-800",
    Pending: "bg-yellow-100 text-yellow-800",
    Cancelled: "bg-red-100 text-red-800",
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between">
      <div>
        <h2 className="font-semibold text-lg mb-2">{booking.destination}</h2>
        <p><strong>Booking ID:</strong> {booking.bookingId}</p>
        <p><strong>Travel Date:</strong> {new Date(booking.travelDate).toLocaleDateString()}</p>
        <p><strong>Travelers:</strong> {booking.travelers}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className={`px-2 py-1 rounded font-semibold ${statusColors[booking.status]}`}>
          {booking.status}
        </span>
        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
          View Details
        </button>
      </div>
    </div>
  );
}
