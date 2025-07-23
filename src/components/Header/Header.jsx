import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../Store/AuthSlice";
import { auth } from "../../Firebase/firebase";
import { signOut } from "firebase/auth";

const Header = () => {
  const [ismobilemenuopen, setismobilemenuopen] = useState();
  const navigate = useNavigate();
  const navigation = () => {
    navigate("/BookAppointment");
  };
  const dispatch = useDispatch();
  const data = useSelector((state) => state.isAuth.isAuth);
  // console.log(data);

  const WayToHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(Logout());
      navigate("/login");
    } catch (error) {
      console.log("the error is ", error.message);
    }
  };
  return (
    <>
      <header>
        <nav className="flex items-center justify-between gap-2 py-4 px-4 md:px-8">
          <div
            className="logo flex items-center gap-2 cursor-pointer"
            onClick={WayToHome}
          >
            <img
              className="w-[80px] md:w-[120px] h-[70px] object-contain text-white"
              src="https://marketplace.canva.com/EAGGacYcM1I/1/0/1600w/canva-vintage-ornament-barbershop-logo-CeBhjirpIjM.jpg"
              alt="Barber Logo"
            />
          </div>

          <div className="flex lg:hidden md:gap-4 px-2 justify-center items-center">
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

            {data ? (
              <Link to={"/Myprofile"} className=" hidden md:block lg:hidden">
                <AccountCircleIcon className="text-gray-200 text-xl" />
              </Link>
            ) : (
              <Link to={"/login"} className=" hidden md:block lg:hidden">
                <button className="text-xl bg-blue-600 text-white rounded-lg md:px-6 py-3">
                  Login
                </button>
              </Link>
            )}
          </div>

          <ul
            className={`flex-col justify-center gap-10 menu mt-2 w-full bg-[#333] lg:flex-row  bg-opacity-90 lg:flex lg:gap-8 items-center text-white absolute lg:static top-[10%] left-0 lg:w-auto z-20 lg:bg-transparent lg:top-auto lg:left-auto lg:p-0 p-4 transition-transform duration-300 ease-in-out transform ${
              ismobilemenuopen
                ? "translate-x-0  py-6 montaga"
                : "-translate-x-full lg:translate-x-0"
            }`}
          >
            <li
              className="hover:text-[#ffb74d] cursor-pointer  text-2xl md:text-lg"
              onClick={WayToHome}
            >
              Home
            </li>
            <Link to={"/History-About"}>
              <li className="hover:text-[#ffb74d]  cursor-pointer text-2xl md:text-lg">
                About
              </li>
            </Link>
            <Link to={"/Services"}>
              <li className="hover:text-[#ffb74d]  cursor-pointer text-2xl md:text-lg">
                Service
              </li>
            </Link>
            <Link to={"/Pricing"}>
              {" "}
              <li className="hover:text-[#ffb74d]  text-2xl md:text-lg cursor-pointer">
                Pricing
              </li>
            </Link>
            <Link
              to={"/userAvailable"}
              className="text-2xl md:text-lg text-gray-200 cursor-pointer"
            >
              {" "}
              See Users
            </Link>
            <br />

            <div className="flex flex-col mt-2 gap-3">
              {data ? (
                <>
                  <Link to={"/Myprofile"} className="block md:hidden">
                    <AccountCircleIcon className="text-gray-200 text-xl" />{" "}
                    <span className="text-xl">Profile</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-white block md:hidden bg-red-500 px-4 py-2 rounded-lg text-sm mt-2"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link to={"/login"} className="block md:hidden">
                  <button className="text-xl bg-blue-600 text-white rounded-lg px-6 py-3">
                    Login
                  </button>
                </Link>
              )}

              <Link to={"/BookAppointment"} className="lg:hidden">
                <button className="bg-orange-600 text-white rounded-lg p-2">
                  Book appoinment
                </button>
              </Link>
            </div>
          </ul>

          <div className="hidden lg:flex lg:gap-4 justify-center items-center">
            <button
              onClick={navigation}
              className="pr-1 hidden lg:block text-center bg-gradient-to-r from-[#e27c12] via-[#e27c12] via-35% to-[#ff5c00] py-2 text-[14px] lg:text-lg text-white lg:p-4 px-2 rounded-full cursor-pointer transition-colors hover:bg-[#ff5c00]"
            >
              Book appoinment
            </button>
            {data ? (
              <div className="hidden lg:flex items-center gap-2">
                <Link to={"/Myprofile"}>
                  <AccountCircleIcon className="text-gray-200 text-xl" />
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-white bg-red-500 px-4 py-2 rounded-lg text-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to={"/login"} className="hidden lg:block">
                <button className="text-xl bg-blue-600 text-white rounded-lg lg:px-6 py-3">
                  Login
                </button>
              </Link>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
