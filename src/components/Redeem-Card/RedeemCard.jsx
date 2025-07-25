import React from "react";
import { BsStarFill } from "react-icons/bs";
import { FiScissors } from "react-icons/fi";

function RedeemCard({ service, feature, reedemAmt, icon }) {
  return (
    <div className="group md:w-[310px] bg-[#251E18] p-4 rounded-lg hover:-translate-y-2 border border-transparent hover:border-yellow-500 hover:shadow-[0_0_15px_rgba(255,255,0,0.3)] transition-all duration-300 ease-in-out">
      <div className="flex w-full justify-between items-center pb-3">
        <div className="p-2 rounded-full bg-yellow-600/20 group-hover:bg-yellow-500/20 transition duration-300">
          {icon}
        </div>{" "}
        <span className="bg-[#CC4619] text-sm px-2 rounded-lg">Service</span>
      </div>

      <div className="sec flex flex-col gap-2 py-4">
        <h4 className="text-lg text-white">{service}</h4>
        <p className="text-gray-400 md:text-nowrap">{feature}</p>
      </div>

      <div className="flex justify-between p-2 items-center">
        <div className="flex gap-1 items-center">
          <BsStarFill className="text-yellow-400 text-semibold" />
          <p className="text-yellow-500 font-semibold">{reedemAmt}</p>
        </div>
        <button className="bg-[#db771f] rounded-md shadow-lg px-4 py-2">
          Reedem
        </button>
      </div>
    </div>
  );
}

export default RedeemCard;
