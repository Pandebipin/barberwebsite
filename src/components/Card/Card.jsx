// <!-- https://gist.github.com/goodreds/5b8a4a2bf11ff67557d38c5e727ea86c -->
import React from "react";

function Card(props) {
  return (
    <div className="max-w-[14rem] mx-4 bg-[rgb(23,23,43)] sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 shadow-xl rounded-lg">
      <div className="rounded-t-lg h-42 overflow-hidden">
        <img
          className="object-cover hover:scale-[1.4] transition-all cursor-pointer object-top w-full"
          src="https://img.freepik.com/premium-photo/two-serious-guys-are-barbershop-one-them-is-customer-sitting-chair-while-hairstylist-is-making-some-magic-by-cutting-some-beard_152404-1768.jpg"
          alt="Mountain"
        />
      </div>
      <div className="mx-auto w-20 h-20 relative -mt-10 border-4 border-white rounded-full overflow-hidden">
        <img
          className="object-cover object-center w-full h-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRybJSVgHqJemIZHKYL6gpCo2O1tIhclTMB8Q&s"
          alt="Woman looking front"
        />
      </div>
      <div className="text-center mt-2">
        <h2 className="font-[400] text-white text-[1.4rem]">{props.title}</h2>
      </div>
      <div className="content w-full">
        <p className="px-4 py-1 text-center text-gray-400 text-[14px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.Voluptatem
          sed culpa repudiandae molestiae iste suscipit, incidunt .
        </p>
      </div>
      <div className="p-4 text-center mt-2 flex gap-2 justify-center items-center">
        <span className="text-white w-auto hover:translate-x-2 transition-transform duration-300 font-semibold cursor-pointer">
          Read more
        </span>
        <svg
          className="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M4 12H20M14 6L20 12L14 18"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default Card;
