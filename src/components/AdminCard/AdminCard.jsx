import React, { useEffect, useState } from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailIcon from "@mui/icons-material/Email";
import { useDispatch, useSelector } from "react-redux";
import { Alldata, fetchAlldata, updateStatus } from "../../Store/DataSlice";

function AdminCard({ name, email, date, time, status, id }) {
  const [value, setValue] = useState(false);
  const data = useSelector(Alldata);
  // const data2 = data.map((data) => data.docId);
  // console.log(data2);
  // console.log(typeof data2, data2);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAlldata());
  }, [dispatch]);

  const handleStatusChange = async () => {
    try {
      console.log("Updating ID:", id, "to status:", "approved");

      const resultAction = await dispatch(
        updateStatus({ id, newStatus: "approved" })
      );
      setValue(true);
    } catch (error) {
      console.error("error", error);
    }
  };

  const handleRejectStatusChange = async () => {
    try {
      const resultAction = await dispatch(
        updateStatus({ id, newStatus: "rejected" })
      );
      setValue(true);
    } catch (error) {
      console.error("Error rejecting status", error);
    }
  };

  useEffect(() => {
    dispatch(fetchAlldata());
  }, [dispatch]);

  return (
    <div className="bg-[#FFFFFF] border border-gray-200 shadow-sm rounded-md py-2 px-6">
      <div className="flex justify-between px-4 items-center">
        <h1>{name}</h1>
        <span
          className={`text-white rounded-xl px-3 py-1 capitalize ${
            status === "approved"
              ? "bg-green-500"
              : status === "pending"
              ? "bg-orange-500"
              : status === "rejected"
              ? "bg-red-500"
              : "bg-gray-400"
          }`}
        >
          {status}
        </span>
      </div>

      <div className="flex items-center gap-2 text-gray-500 text-sm py-2">
        <EmailIcon fontSize="small" />
        <span>{email}</span>
      </div>
      <div className="flex items-center gap-2 ">
        <AccessTimeIcon fontSize="small" />
        <span className="text-gray-900 text-sm  ">{time}</span>
      </div>
      <div className="flex items-center gap-2 mb-1 py-2">
        <CalendarTodayIcon fontSize="small" />
        <span className="text-gray-900 text-sm ">{date}</span>
      </div>

      <div className="border-t-2 border-gray-200 py-4">
        <span className="text-bold text-lg">Services:</span>
        <h2>Haircut</h2>
      </div>
      {status === "pending" && (
        <div className="buttons flex items-center gap-6 w-full">
          <button
            onClick={handleStatusChange}
            className="w-[300px] bg-green-500 flex items-center justify-center gap-3 rounded-lg py-1 px-1 text-white text-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Approval
          </button>
          <button
            onClick={handleRejectStatusChange}
            className="w-[300px] bg-red-500 flex items-center justify-center gap-3 p-1 rounded-lg outline-none shadow-sm text-white text-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Reject
          </button>
        </div>
      )}
    </div>
  );
}

export default AdminCard;
