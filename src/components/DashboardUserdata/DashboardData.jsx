import React, { useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaTrash,
  FaClock,
  FaRegCheckCircle,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { data, fetchdata, UpdateStatus } from "../../Store/UserdataSlice";
import { Alldata, deleteId, fetchAlldata } from "../../Store/DataSlice";

const statusColors = {
  Complete: "text-green-500",
  pending: "text-orange-500",
};
const DashboardData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchdata());
    dispatch(fetchAlldata());
  }, [dispatch]);
  const userData = useSelector(data);
  const alldata = useSelector(Alldata);
  console.log(alldata);

  const handleDelete = (id) => {
    // console.log("triggered", id);
    dispatch(deleteId(id));
  };

  const updateStatuschange = async (id) => {
    console.log(id);
    await dispatch(UpdateStatus({ id, newStatus: "Complete" }));
  };
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Booked Service</th>
              <th className="py-3 px-4 text-left">Start Time</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Manage</th>
            </tr>
          </thead>
          <tbody>
            {alldata.filter((elem) => elem.status != "pending") &&
              userData.map((booking, index) => (
                <tr
                  key={index}
                  className="border-t hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-4 flex items-center">
                    {booking.name}
                  </td>
                  <td className="py-3 px-4">{booking.service}</td>
                  <td className="py-3 px-4">{booking.timeSlot}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`font-semibold ${
                        statusColors[booking.status]
                      }`}
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
                      <FaCheckCircle
                        onClick={() => {
                          console.log(booking.id);
                          updateStatuschange(booking.id);
                        }}
                        className="text-blue-500 cursor-pointer hover:text-blue-700"
                      />
                      <FaTrash
                        onClick={() => {
                          // console.log(booking.docId);
                          handleDelete(booking.docId);
                        }}
                        className="text-red-500 cursor-pointer hover:text-red-700"
                      />
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

export default DashboardData;
