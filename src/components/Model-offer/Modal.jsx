import React from "react";
import { useParams } from "react-router-dom";

function Modal() {
  const path = useParams();
  console.log(path);

  return (
    <div className="w-full lg:max-w-screen-xl h-[60vh] md:h-[100vh] mx-auto p-6 mt-4 md:max-w-[24rem]">
      <div className=" w-full h-screen md:flex md:justify-center md:items-center ">
        <img
          loading="lazy"
          className="w-full rounded-xl h-[50vh]"
          src="https://www.cosmoprofbeauty.ca/on/demandware.static/-/Sites-CosmoProf-CA-Library/default/dw4e00a9c2/2024/10/promotions/20off_amika_styling-tools/m_billboard.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Modal;
