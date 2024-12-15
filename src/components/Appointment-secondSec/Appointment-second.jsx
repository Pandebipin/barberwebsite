import React, { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router-dom";
import data from "../data";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../../Store/UserdataSlice";
import {
  AddAlldata,
  Alldata,
  deleteId,
  fetchAlldata,
} from "../../Store/DataSlice";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../Firebase/firebase";

function AppointmentSecond() {
  const [firstname, setFirstname] = useState("");
  const [secondname, setSecondname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [timing, settimming] = useState(null);
  const { haircut } = useParams();
  const [disableIndex, setdisableIndex] = useState({});
  const filter = data.haircuts.filter((hoc) => hoc.id == haircut);
  const currentHairname = filter.map((elem) => elem.name);
  const time = filter.map((elem) => elem.time);
  const data2 = useSelector(Alldata);
  const dispatch = useDispatch();

  //   console.log(time);
  // console.log("filterable", filter);
  useEffect(() => {
    dispatch(fetchAlldata());
  }, [dispatch]);

  const Submit = (e) => {
    e.preventDefault();
    if (email && secondname && firstname && number && timing) {
      dispatch(
        addData({ secondname, firstname, number, time: time[0], timing })
      );

      dispatch(AddAlldata({ id: haircut, timeslots: timing }));

      alert("sumit succeslly ");
    } else {
      alert("please fill the form essential !");
    }
  };

  const ButtonAct = (ind) => {
    settimming(ind);
  };
  const selectedHaircut = data2.find((a) => a.id === haircut);
  // console.log(selectedHaircut.timeslots);

  const bookslots = selectedHaircut?.timeslots;
  // console.log(bookslots);

  // console.log("Fetched data from Redux:", data2);

  //1:2  2 xa vane useparams bata aayeko index lai compare garne 2=2 -disabled garne(only for haircut1)
  //2:3  3 xa vane useparams bata aayeko index lai compare garne 3=3 -disabled garne(only for haircut2)

  return (
    <div className="text-white py-6 lg:py-0 lg:mt-5">
      <h1 className="text-center py-6 mb-2 capitalize">
        for {currentHairname}{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="first">
          <form className="md:max-w-md max-w-xs mx-auto px-2">
            <div className="relative z-0 w-full mb-5 group">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                name="number"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="number"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number
              </label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_first_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First name
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  value={secondname}
                  onChange={(e) => setSecondname(e.target.value)}
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_last_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last name
                </label>
              </div>
            </div>

            <button
              onClick={Submit}
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="md:w-[40vw] max-w-xs py-3 max-h-[67vh] mt-4 md:max-w-md mx-auto border-4 border-gray-600">
          {/* <div className="second md:w-[35vw] md:max-w-md md:h-[60vh] calendar border-2 border-gray-500 h-[22vh]">
            <div className="insider bg-red-100 p-4 flex justify-center ">
            // for calendar
            </div>
          </div> */}
          <div className="available-slots text-white mt-2 flex flex-wrap">
            {filter.length > 0 ? (
              filter[0].timeSlots.map((slot, ind) => {
                const isDisabled = bookslots === ind;
                // if (isDisabled) {
                //   // console.log("truee", isDisabled);
                // }
                return (
                  <button
                    key={ind}
                    disabled={isDisabled}
                    onClick={() => ButtonAct(ind, slot)}
                    className={`p-2 rounded m-1 ${
                      isDisabled
                        ? "bg-red-500 cursor-not-allowed"
                        : "bg-gray-500 cursor-pointer"
                    }`}
                  >
                    {slot}
                  </button>
                );
              })
            ) : (
              <p>No available slots</p>
            )}
          </div>
        </div>

        <div className="enjoy flex justify-center items-center">
          <h1 className="monotaga text-xl opacity-0 lg:opacity-15 text-white">
            Enjoy A Day
          </h1>
        </div>
      </div>
    </div>
  );
}

export default AppointmentSecond;
