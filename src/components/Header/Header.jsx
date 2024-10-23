import React, { useState } from "react";

const Header = () => {
  const [ismobilemenuopen, setismobilemenuopen] = useState();

  return (
    <>
      <header>
        <nav className="flex items-center justify-around gap-2 py-4 px-4 md:px-8">
          <div className="logo">
            <img
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
            <li className="hover:text-[#ffb74d] cursor-pointer">Home</li>
            <li className="hover:text-[#ffb74d] cursor-pointer">About</li>
            <li className="hover:text-[#ffb74d] cursor-pointer">Service</li>
            <li className="hover:text-[#ffb74d] cursor-pointer">Pricing</li>
            <li className="hover:text-[#ffb74d] cursor-pointer">Features</li>
          </ul>
          <div className="booking">
            <button className="bg-gradient-to-r from-[#e27c12] via-[#e27c12] via-35% to-[#ff5c00] text-white p-3 px-4 rounded-full cursor-pointer">
              Book appoinment
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
