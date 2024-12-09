import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Header = () => {
  const [ismobilemenuopen, setismobilemenuopen] = useState();
  const navigate = useNavigate();
  const navigation = () => {
    navigate("/appointment");
  };
  const WayToHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };
  return (
    <>
      <header>
        <nav className="flex items-center justify-around gap-2 py-4 px-4 md:px-8">
          <div className="logo">
            <img
              onClick={WayToHome}
              className="w-[100px] h-[70px] object-cover text-white cursor-pointer"
              src="https://marketplace.canva.com/EAGGacYcM1I/1/0/1600w/canva-vintage-ornament-barbershop-logo-CeBhjirpIjM.jpg"
              alt=""
            />
          </div>

          <button
            className="lg:hidden block text-white"
            onClick={() => setismobilemenuopen(!ismobilemenuopen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  ismobilemenuopen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
          <ul
            className={`flex-col justify-center menu mt-2 w-[70vw] lg:flex-row  bg-opacity-90 lg:flex lg:gap-8 items-center text-white absolute lg:static top-[10%] left-0 lg:w-auto z-20 lg:bg-transparent lg:top-auto bg-[#333] lg:left-auto lg:p-0 p-4 transition-transform duration-300 ease-in-out transform ${
              ismobilemenuopen
                ? "translate-x-5"
                : "-translate-x-full lg:translate-x-0"
            }`}
          >
            <li
              className="hover:text-[#ffb74d] cursor-pointer"
              onClick={WayToHome}
            >
              Home
            </li>
            <Link to={"/History-About"}>
              <li className="hover:text-[#ffb74d] cursor-pointer">About</li>
            </Link>
            <Link to={"/Services"}>
              <li className="hover:text-[#ffb74d] cursor-pointer">Service</li>
            </Link>
            <Link to={"/Pricing"}>
              {" "}
              <li className="hover:text-[#ffb74d] cursor-pointer">Pricing</li>
            </Link>
          </ul>
          <div className="booking flex md:block gap-1  leading-tight">
            <button
              onClick={navigation}
              className="pr-1 text-center bg-gradient-to-r from-[#e27c12] via-[#e27c12] via-35% to-[#ff5c00] py-1 text-[16px] lg:text-lg text-white lg:p-3 px-4 rounded-full cursor-pointer"
            >
              Book appoinment
            </button>

            <Link
              to={"/Useravailable"}
              className="text-sm px-2 md:text-lg text-gray-200 cursor-pointer"
            >
              {" "}
              See Users
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
