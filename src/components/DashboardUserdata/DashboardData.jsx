import React from "react";
import { FaCheckCircle, FaEdit, FaTrash, FaClock } from "react-icons/fa";

const bookings = [
  {
    name: "Devon Lane",
    service: "Hair Cut",
    startTime: "09:02 am",
    employee: "Henry Arthur",
    status: "Complete",
    avatar: "https://via.placeholder.com/30",
  },
  {
    name: "Guy Hawkins",
    service: "Hair Trimming",
    startTime: "09:32 am",
    employee: "Cooper Kristin",
    status: "Complete",
    avatar: "https://via.placeholder.com/30",
  },
  {
    name: "Jerome Bell",
    service: "Hair Styling",
    startTime: "10:00 am",
    employee: "Black Marvin",
    status: "Pending",
    avatar: "https://via.placeholder.com/30",
  },
];

const statusColors = {
  Complete: "text-green-500",
  Pending: "text-orange-500",
};

const BookingTable = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Booked Service</th>
              <th className="py-3 px-4 text-left">Start Time</th>
              <th className="py-3 px-4 text-left">Employ</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Manage</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr
                key={index}
                className="border-t hover:bg-gray-50 transition-colors"
              >
                <td className="py-3 px-4 flex items-center">{booking.name}</td>
                <td className="py-3 px-4">{booking.service}</td>
                <td className="py-3 px-4">{booking.startTime}</td>
                <td className="py-3 px-4">{booking.employee}</td>
                <td className="py-3 px-4">
                  <span
                    className={`font-semibold ${statusColors[booking.status]}`}
                  >
                    {booking.status === "Complete" ? (
                      <FaCheckCircle className="inline mr-1" />
                    ) : (
                      <FaClock className="inline mr-1" />
                    )}
                    {booking.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex space-x-3">
                    <FaEdit className="text-blue-500 cursor-pointer hover:text-blue-700" />
                    <FaTrash className="text-red-500 cursor-pointer hover:text-red-700" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingTable;
