import React from "react";

function Slider() {
  return (
    <>
      <div className="w-full bg-[#18182C]">
        <div className="flex justify-center items-center w-full gap-1 lg:gap-4 h-[12vw] lg:h-[10vw] py-2">
          <h1 className="text-white text-[13px] lg:text-3xl font-semibold flex items-center px-2 lg:px-5">
            Hair salon
          </h1>
          <span className="relative inline-block w-8 h-8 star-gradient"></span>
          <h1 className="text-white text-[13px] lg:text-3xl font-semibold flex items-center text-sm px-1 lg:px-5">
            Barber salon
          </h1>
          <span className="relative inline-block w-8 h-8 star-gradient"></span>
          <h1 className="text-white text-[13px] lg:text-3xl font-semibold flex items-center text-sm px-1 lg:px-5">
            Hair salon
          </h1>
          {/* <span className="relative inline-block w-8 h-8 star-gradient"></span>
          <h1 className="text-white lg:text-3xl font-semibold flex items-center text-sm px-1 lg:px-5">
            Barber salon
          </h1> */}
        </div>
      </div>
      <style jsx>{`
        .star-gradient {
          clip-path: polygon(
            50% 0%,
            61% 35%,
            98% 35%,
            68% 57%,
            79% 91%,
            50% 70%,
            21% 91%,
            32% 57%,
            2% 35%,
            39% 35%
          );
          background: radial-gradient(
            circle at center,
            rgba(255, 115, 0, 1) 0%,
            rgba(255, 63, 0, 1) 50%,
            rgba(200, 30, 0, 1) 100%
          );
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2),
            0 6px 8px rgba(255, 80, 0, 0.8);
        }
      `}</style>
    </>
  );
}

export default Slider;
