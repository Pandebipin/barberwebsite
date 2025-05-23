import React from "react";
import Button from "../Button/Button";
import Form from "../Form/Form";

function About() {
  return (
    <section className="w-full bg-[#050514] py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10">
        {/* Left Image Section */}
        <div className="flex-shrink-0">
          <img
            className="w-[250px] h-[300px] sm:w-[280px] sm:h-[350px] md:w-[300px] md:h-[400px] lg:w-[300px] lg:h-[450px] object-cover rounded-md shadow-lg"
            src="https://media.istockphoto.com/id/506514230/photo/beard-grooming.jpg?s=612x612&w=0&k=20&c=QDwo1L8-f3gu7mcHf00Az84fVU8oNpQLgvUw6eGPEkc="
            alt="Barber grooming"
          />
        </div>

        {/* Right Text Section */}
        <div className="text-center lg:text-left flex flex-col gap-5 max-w-xl">
          <h1 className="text-[2rem] bg-gradient-to-r from-[#FF4500] via-[#FF6347] to-[#FF7F50] bg-clip-text text-transparent font-bold">
            About us
          </h1>

          <div className="space-y-1">
            <h2 className="text-white text-2xl sm:text-[1.8rem] md:text-3xl font-bold montaga">
              Experience the
            </h2>
            <h2 className="text-white text-2xl sm:text-[1.8rem] md:text-3xl font-bold montaga">
              Finest Haircuts
            </h2>
            <h2 className="text-white text-2xl sm:text-[1.8rem] md:text-3xl font-bold montaga">
              in Town
            </h2>
          </div>

          <p className="text-gray-400 text-base sm:text-[1rem] leading-relaxed">
            Discover an unparalleled grooming experience where precision, style,
            and comfort meet. Our expert barbers are dedicated to giving you the
            perfect haircut and beard grooming, tailored to your unique style.
          </p>

          <div className="flex justify-center lg:justify-start">
            <Button name="Read more" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
