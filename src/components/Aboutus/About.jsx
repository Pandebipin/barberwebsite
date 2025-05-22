import React from "react";
import Button from "../Button/Button";
import Form from "../Form/Form";

function About() {
  return (
    <>
      <div className="w-full relative h-auto flex flex-col lg:flex-row py-10 justify-center gap-6 lg:gap-8 px-4 items-center">
        <div className="left w-auto text-white">
          <img
            className="lg:w-[300px] shadow-lg lg:h-[450px] h-[300px] w-[250px] object-cover rounded-md"
            src="https://media.istockphoto.com/id/506514230/photo/beard-grooming.jpg?s=612x612&w=0&k=20&c=QDwo1L8-f3gu7mcHf00Az84fVU8oNpQLgvUw6eGPEkc="
            alt="img"
          />
        </div>

        <div className="right flex flex-col items-center lg:items-start gap-4 lg:gap-5">
          <h1 className="text-[2rem] bg-gradient-to-r  from-[#FF4500] via-[#FF6347] to-[#FF7F50] bg-clip-text text-transparent">
            About us
          </h1>
          <div className="content leading-tight">
            <h2 className="montaga text-white text-[1.8rem] sm:text-[1.4rem] lg:text-[2.5rem] font-bold">
              Experience the
            </h2>
            <h2 className="montaga text-white text-[1.8rem] sm:text-[1.4rem] lg:text-[2.5rem] font-bold">
              Finest Haircuts
            </h2>
            <h2 className="montaga text-white text-[1.8rem] sm:text-[1.4rem] lg:text-[2.5rem] font-bold">
              in Town
            </h2>
          </div>

          <div className="sub-content w-full lg:w-[500px] px-2 lg:px-0 flex justify-center lg:justify-start">
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed lg:w-[95%]">
              Discover an unparalleled grooming experience where precision,
              style, and comfort meet. Our expert barbers are dedicated to
              giving you the perfect haircut and beard grooming, tailored to
              your unique style.
            </p>
          </div>

          <Button name={"Read more"} />
        </div>
      </div>
    </>
  );
}

export default About;
