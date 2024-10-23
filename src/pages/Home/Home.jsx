import React, { useEffect } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Slider from "../../components/homepageslider/Slider";
import About from "../../components/Aboutus/About";
import Button from "../../components/Button/Button";
import Services from "../../components/Services/Services";
import Tesimonial from "../../components/Testimonial/Tesimonial";

import Addblog from "../../components/Addblog";
function Home() {
  return (
    <>
      <div className="bg w-full h-[84vh] sm:h-[72vh] md:h-[72vh] lg:h-[130vh] xl:h-[130vh] relative">
        <div className="left-container flex flex-col gap-10 absolute top-[12%] left-[12%] lg:top-[17%]">
          <div className="heading-content">
            <h2 className="font-bold font-montserrat text-white text-[2rem] sm:text-[3rem] lg:text-[4rem] flex flex-col gap-0 space-y-0 leading-tight">
              Being a Barber is
            </h2>
            <h2 className="font-bold text-white text-[2rem] sm:text-[3rem] lg:text-[4rem] leading-tight">
              about taking care of
            </h2>
            <h2 className="font-bold text-white text-[2rem] sm:text-[3rem] lg:text-[4rem] flex gap-3 items-center leading-tight">
              the People.
              <img
                className=" w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] lg:w-[70px] lg:h-[70px] pt-1 mix rounded-full"
                src="https://www.shutterstock.com/image-vector/people-logo-design-community-human-260nw-2456931355.jpg"
                alt=""
              />
              <img
                className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] lg:w-[70px] lg:h-[70px] pt-1 mix rounded-full"
                src="https://st.depositphotos.com/1364916/3000/v/450/depositphotos_30002789-stock-illustration-teamwork-happy-swooshes-people-logo.jpg"
                alt=""
              />
            </h2>
          </div>

          <div className="sub-content text-[#A9A9A9] w-[280px] sm:w-[400px] lg:w-[500px] text-sm sm:text-base">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere,
              illum consequuntur assumenda numquam perspiciatis maxime illo
              nisi, adipisci inventore dolor nulla sint deserunt eaque est et ut
              voluptate.
            </p>
          </div>

          <div className="buttons flex gap-6 items-center">
            <Button name={"Get Started"} />
            <button className="text-white flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle cx="12" cy="12" r="12" fill="white" fillOpacity="0.2" />
                <path d="M10 8L16 12L10 16V8Z" fill="white" />
              </svg>
              Watch Video
            </button>
          </div>

          <div className="features flex gap-8 px-2">
            <div className="first flex flex-col border-r-4 pr-5 border-gray-300 gap-1">
              <h2 className="text-[1rem] lg:text-[2rem] bg-gradient-to-r from-[#FF4500] via-[#FF6347] to-[#FF7F50] bg-clip-text text-transparent">
                20+
              </h2>
              <div className="content flex flex-col">
                <span className="text-white text-[14px] lg:text-[1rem] ">
                  Years of
                </span>
                <span className="text-white text-[14px] lg:text-[1rem] ">
                  Experience
                </span>
              </div>
            </div>
            <div className="first flex flex-col border-r-4 pr-5 border-gray-300">
              <h2 className="text-[1rem] lg:text-[2rem] bg-gradient-to-r from-[#FF4500] via-[#FF6347] to-[#FF7F50] bg-clip-text text-transparent">
                2+
              </h2>
              <div className="content flex flex-col">
                <span className="text-white text-[14px] lg:text-[1rem] ">
                  our awesome
                </span>
                <span className="text-white text-[14px] lg:text-[1rem] ">
                  expert
                </span>
              </div>
            </div>
            <div className="first flex flex-col">
              <h2 className="text-[1rem] lg:text-[2rem] bg-gradient-to-r from-[#FF4500] via-[#FF6347] to-[#FF7F50] bg-clip-text text-transparent">
                20k+
              </h2>
              <div className="content flex flex-col">
                <span className="text-white text-[14px] lg:text-[1rem] ">
                  Happy
                </span>
                <span className="text-white text-[14px] lg:text-[1rem] ">
                  customer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slider">
        <Slider />
      </div>
      <div className="about py-5 mt-4">
        <About />
      </div>

      <div className="services">
        <Services />
      </div>

      <div className="testimonial">
        <Tesimonial />
      </div>

      <div className="addblog">
        <Addblog />
      </div>
    </>
  );
}

export default Home;