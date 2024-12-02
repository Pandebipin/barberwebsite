import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, fetchdata } from "../../Store/UserdataSlice";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../Firebase/firebase";

function Userdata() {
  const [time, setTime] = useState(0);
  const data1 = useSelector((state) => state.data?.data || []);
  const [activeId, setactiveId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchdata());
  }, [dispatch]);

  const timest = async (time, id) => {
    // console.log(time);
    setTime(time);
    setactiveId(id);
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime > 0) {
          console.log(prevTime - 1);

          return prevTime - 1;
        } else {
          clearInterval(interval);
          deleteData(id);
          return 0;
        }
      });
    }, 1000);
  };

  const deleteData = async (id) => {
    const data = await deleteDoc(doc(db, "Userdata", id));
    dispatch(deleteData(data));
  };

  return (
    <div className="w-full h-screen">
      <h1 className="text-2xl font-bold text-center text-white">
        See Available Cutting Users
      </h1>
      ;
      {data1.map((elem) => {
        return (
          <div
            key={elem.id}
            className="flex justify-center items-center w-full h-auto md:gap-8"
          >
            <h1 className="text-white px-2 md:text-lg items-center capitalize">
              {elem.firstname} {elem.secondname}
            </h1>
            <span className="text-white p-2">
              {activeId == elem.id ? `${time} min` : `${elem.time} min`}
            </span>
            <div className="buttons flex gap-5">
              <button
                onClick={() => timest(elem.time, elem.id)}
                className="text-white bg-green-600 p-1 md:px-4 rounded-lg"
              >
                Start
              </button>
              <button
                onClick={() => deleteData(elem.id)}
                className="text-white bg-red-600 p-1 md:px-4 rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Userdata;
