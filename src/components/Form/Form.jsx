import React from "react";

function Form() {
  return (
    <div className="w-full bg-slate-200">
      <div className="inside-container w-full px-2">
        <h1 className="text-black capitalize text-lg text-center py-2">
          Student regestration form{" "}
        </h1>
        <div className="form p-4 flex flex-col gap-5 justify-center items-center md:justify-start md:items-start">
          <span className="text-black px-2 rounded-sm bg-yellow-400 text-xl">
            Student Information
          </span>
          <div className="box">
            <label htmlFor="name">FullName: </label>
            <input
              className="px-1 bg-transparent outline-none ml-2 border-2 border-gray-300 rounded-md"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div className="box">
            <label htmlFor="name">DOB: </label>
            <input
              className="px-1 bg-transparent outline-none ml-2 border-2 border-gray-300 rounded-md"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div className="box flex gap-2">
            <p className="text-black">Gender:</p>
            <input
              className="text-black"
              value={"male"}
              type="radio"
              name="male"
              id="male"
            />
            <label htmlFor="name">male</label>
            <input
              className="text-black"
              value={"male"}
              type="radio"
              name="male"
              id="male"
            />
            <label htmlFor="name">Female</label>
          </div>
          <div className="box">
            <label htmlFor="name">Nationality: </label>
            <input
              className="px-1 bg-transparent outline-none ml-2 border-2 border-gray-300 rounded-md"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div className="box">
            <label htmlFor="name">Contact: </label>
            <input
              className="px-1 bg-transparent outline-none ml-2 border-2 border-gray-300 rounded-md"
              type="number"
              name="name"
              id="name"
            />
          </div>

          <span className="text-black px-2 rounded-sm bg-yellow-400 text-xl">
            Parent/guirdan Information
          </span>
          <div className="box">
            <label htmlFor="name">FullName: </label>
            <input
              className="px-1 bg-transparent outline-none ml-2 border-2 border-gray-300 rounded-md"
              type="text"
              name="name"
              id="name"
            />
          </div>

          <div className="box">
            <label htmlFor="name">Relationship: </label>
            <input
              className="px-1 bg-transparent outline-none ml-2 border-2 border-gray-300 rounded-md"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div className="box">
            <label htmlFor="name">Contact: </label>
            <input
              className="px-1 bg-transparent outline-none ml-2 border-2 border-gray-300 rounded-md"
              type="number"
              name="name"
              id="name"
            />
          </div>

          <button className="text-gray-500 md:text-xl bg-orange-400 rounded-md py-1 md:py-2 w-full md:w-[100px] hover:transition-all hover:bg-yellow-500">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
