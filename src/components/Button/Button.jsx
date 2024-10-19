import React from "react";

function Button(props) {
  return (
    <div className="buttons flex gap-6 items-center">
      <button
        style={{
          background:
            "linear-gradient(90deg, rgba(226,124,18,1) 5%, rgba(226,124,18,1) 35%, rgba(255,92,0,1) 100%)",
        }}
        className="text-white p-2 px-5 rounded-full cursor-pointer"
      >
        {props.name}
      </button>
    </div>
  );
}

export default Button;
