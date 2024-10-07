import React from "react";

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { customerName, date, service, price, img, _id, status } = booking;

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="hover:bg-red-500 btn btn-sm btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-4">
          <div className="avatar">
            <div className="rounded h-16 w-16">
              <img src={img} alt={customerName} />
            </div>
          </div>
          <div>
            <div className="font-bold">{customerName}</div>
          </div>
        </div>
      </td>
      <td className="text-gray-500">{date}</td>
      <td>{service}</td>
      <td className="text-green-500">${price}</td>
      <td>
        {status === "confirm" ? (
          <span className="font-bold text-primary">Confirmed</span>
        ) : (
          <button
            onClick={() => handleBookingConfirm(_id)}
            className="btn btn-sm btn-outline"
          >
            Please Confirm
          </button>
        )}
      </td>
    </tr>
  );
};

export default BookingRow;
