import React from "react";
import { useParams } from "react-router-dom";

function Modal() {
  const path = useParams();
  console.log(path);

  return (
    <div className="w-full px-4 py-6 mx-auto max-w-screen-xl">
      <div className="flex justify-center items-center h-auto md:h-screen">
        <img
          loading="lazy"
          className="w-full max-w-3xl rounded-xl object-cover h-auto md:h-[60vh]"
          src="https://www.cosmoprofbeauty.ca/on/demandware.static/-/Sites-CosmoProf-CA-Library/default/dw4e00a9c2/2024/10/promotions/20off_amika_styling-tools/m_billboard.jpg"
          alt="Promotional"
        />
      </div>
    </div>
  );
}

export default Modal;
