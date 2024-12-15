import React from "react";
import data from "../data";
import { Link } from "react-router-dom";

function AppointmentFirst() {
  return (
    <div className="w-full max-w-[20rem] sm:max-w-xs md:max-w-lg lg:max-w-screen-xl mx-auto border-2 border-red-400">
      <div className="grid">
        <div className="left flex flex-col gap-6 w-[50vw] md:h-screen lg:h-auto px-3">
          <div className="flex gap-4 mt-5 items-center">
            <img
              className="logo w-16 md:w-20 md:h-20 object-cover border-2 border-white rounded-full overflow-hidden "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRybJSVgHqJemIZHKYL6gpCo2O1tIhclTMB8Q&s"
              alt=""
            />
            <span className="text-gray-400 md:text-lg text-sm">
              AJ Hairstyles
            </span>
          </div>

          <div className="services">
            <h1 className="text-white text-sm lg:text-xl font-bold montaga px-2 py-3">
              Choose Services
            </h1>
            {data.haircuts.map((elem) => {
              return (
                <div
                  key={elem.id}
                  className="flex md:gap-4 gap-7 md:justify-around items-center"
                >
                  <div className="first py-2 flex flex-col gap-5 items-center">
                    <h1 className="text-white whitespace-nowrap text-sm md:text-xl px-2 ">
                      {elem.name}
                    </h1>
                  </div>
                  <div className="second py-2 flex flex-col md:items-center gap-7 md:gap-6">
                    <h1 className="text-white whitespace-nowrap text-sm md:text-xl">
                      {elem.time} min
                    </h1>
                  </div>
                  <div className="third py-2 flex flex-col md:items-center gap-7 md:gap-6">
                    <h1 className="text-white text-sm md:text-xl">
                      Rs.{elem.price}
                    </h1>
                  </div>
                  <div className="fourth py-2 flex md:items-center flex-col gap-6 md:gap-7">
                    <Link to={`/appointmentcalendar/${elem.id}`}>
                      <svg
                        className="text-white"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="2"
                          y1="12"
                          x2="20"
                          y2="12"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <polyline
                          points="14,6 20,12 14,18"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="right">{/* <AppointmentSecond /> */}</div>
      </div>
    </div>
  );
}

export default AppointmentFirst;
