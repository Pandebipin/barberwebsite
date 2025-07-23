import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <section className=" dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight text-gray-500 font-extrabold ">
            Choose Your Perfect Hair Plan
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Affordable Pricing tailored for every style and occasion.Book your
            slot now.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 lg:space-y-0">
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center rounded-lg border border-gray-400 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800">
            <h3 className="mb-4 text-2xl font-semibold text-gray-500">
              Basic cut
            </h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Perfect for a quick and clean haircut
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl text-gray-500 font-extrabold">
                Rs.150
              </span>
            </div>

            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-gray-500">Professional Haircut</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-gray-500">Quick servises</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>
                  <span className="text-gray-500 font-semibold">
                    Include trimming and styling{" "}
                  </span>
                </span>
              </li>
            </ul>
            <Link to={"/appointment"}>
              <a
                href="#"
                className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Book now
              </a>
            </Link>
          </div>

          <div className="flex flex-col p-6 mx-auto max-w-lg text-center   rounded-lg border border-gray-400 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800">
            <h3 className="mb-4 text-2xl font-semibold text-gray-500">
              Premium Haircut
            </h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              stylish and customized haircuts.
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold text-gray-500">
                Rs.500
              </span>
            </div>

            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-gray-500">
                  Customized haircut & styling
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-gray-500">Beard trimming & shaping</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>
                  <span className="font-semibold text-gray-500">
                    Hair wash & conditioner
                  </span>
                </span>
              </li>
            </ul>
            <Link to={`/appointmentcalendar/cuts1`}>
              <a
                href="#"
                className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-primary-900"
              >
                Book now
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
