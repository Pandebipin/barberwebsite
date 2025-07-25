import React from "react";

function MembershipTiersCard({
  img,
  position,
  points,
  features1,
  features2,
  code,
  color,
  icon1,
  icon2,
}) {
  return (
    <div
      className={`w-[200px] md:w-[400px] border  rounded-md flex flex-col bg-[#31251A] gap-2 justify-between px-4 py-6 hover:-translate-y-2  border-transparent transition-all duration-300 ease-in-out ${
        code === true
          ? " border-yellow-500 shadow-[0_0_15px_rgba(255,255,0,0.3)] transition-all duration-300 ease-in-out"
          : "border-amber-900"
      }`}
    >
      <div className="w-full flex justify-center items-center flex-col py-3 gap-3">
        <img className="w-[100px] h-[100px]" src={img} alt="bronze" />
        <h2 style={{ color }} className={` text-xl text-bold`}>
          {position}
        </h2>
        <span className="text-gray-500">{points} points</span>
      </div>
      <div className="text-gray-300 text-sm flex items-center gap-2">
        {icon1}
        <span>{features1}</span>
      </div>
      <div className="text-gray-300 text-sm flex items-center gap-2">
        {icon2}
        <span>{features2}</span>
      </div>
    </div>
  );
}

export default MembershipTiersCard;
