import React from "react";
import Card from "../Card/Card";

function Services() {
  return (
    <div className="flex flex-col w-full justify-center">
      <div className="headings text-center">
        <h1 className="text-[1rem] lg:text-[2rem] bg-gradient-to-r  from-[#FF4500] via-[#FF6347] to-[#FF7F50] bg-clip-text text-transparent">
          Our Services
        </h1>
        <h1 className="text-[3rem] text-white montaga">
          we provide our customer
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center px-4 py-4 items-center gap-5">
        <Card title={"Fade cut"} />
        <Card title={"Beard Grooming"} />
        <Card title={"Kid's Haircut"} />
      </div>
    </div>
  );
}

export default Services;
