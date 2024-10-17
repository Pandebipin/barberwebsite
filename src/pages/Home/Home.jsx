import React from "react";
import "./Home.css";
function Home() {
  return (
    <>
      <div className="bg w-full h-[90vh] relative">
        <div className="left-container flex flex-col gap-8 absolute left-[12%] top-[17%]">
          <div className="heading-content">
            <h2 className="font-bold text-white lg:text-[4rem] flex flex-col gap-0 space-y-0">
              Being a Barber is
            </h2>
            <h2 className="font-bold text-white lg:text-[4rem]">
              about taking care of
            </h2>
            <h2 className="font-bold text-white lg:text-[4rem] flex gap-3 items-center">
              the people.
              <img
                className=" w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] pt-1 mix rounded-full"
                src="https://www.shutterstock.com/image-vector/people-logo-design-community-human-260nw-2456931355.jpg"
                alt=""
              />
              <img
                className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] pt-1 mix rounded-full"
                src="https://st.depositphotos.com/1364916/3000/v/450/depositphotos_30002789-stock-illustration-teamwork-happy-swooshes-people-logo.jpg"
                alt=""
              />
            </h2>
          </div>

          <div className="sub-content text-white w-[500px] ">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere,
              illum consequuntur assumenda numquam perspiciatis maxime illo
              nisi, adipisci inventore dolor nulla sint deserunt eaque est et ut
              voluptate.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
