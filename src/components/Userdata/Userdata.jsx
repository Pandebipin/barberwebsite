import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, fetchdata } from "../../Store/UserdataSlice";

function Userdata() {
  const [time, setTime] = useState(0);
  const data1 = useSelector((state) => state.data?.data || []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchdata());
  }, [dispatch]);
  console.log(data1);

  return (
    <div className="w-full h-screen">
      <h1 className="text-2xl font-bold text-center text-white">
        See Available Cutting Users
      </h1>
      {data1.length > 0 ? (
        data1.map((elem) => (
          <div
            key={elem.id}
            className="flex justify-center items-center w-full h-auto py-2 md:gap-8"
          >
            <h1 className="text-white px-2 md:text-lg items-center capitalize">
              {elem.name}
            </h1>
            <span className="text-white md:p-2">{elem.timeSlot}</span>
            <span className="text-white md:p-2">{elem.service}</span>
          </div>
        ))
      ) : (
        <p className="text-xl text-white text-center capitalize py-4 mt-6">
          No Users found
        </p>
      )}
    </div>
  );
}

export default Userdata;
