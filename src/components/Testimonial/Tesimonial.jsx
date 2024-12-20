import React, { useEffect, useState } from "react";

function Tesimonial() {
  const [currentIndex, setcurrentIndex] = useState(0);
  const images = [
    "https://content.latest-hairstyles.com/wp-content/uploads/low-fade-with-beard.jpg",
    " https://img.freepik.com/premium-photo/two-serious-guys-are-barbershop-one-them-is-cu stomer-sitting-chair-while-hairstylist-is-making-some-magic-by-cutting-some-beard_152404-1768.jpg",
    "https://i.pinimg.com/736x/f4/31/d2/f431d2e25e928bb1efaf91bab8a95321.jpg",
  ];
  const desc = [
    "I've been coming to this barber shop for years, and the service is always top-notch. The attention to detail is incredible, and I always leave feeling confident and refreshed. Highly recommend it!",
    "The atmosphere here is so welcoming, and the staff really listen to what you want. I’ve never been happier with my haircut! It's the perfect place for anyone looking for great service and style.",
    "The best barber shop in town! Every visit is a great experience, from the friendly team to the stylish cuts. They really know how to make you look your best. I wouldn’t go anywhere else!",
  ];
  const title = ["bipin pandey", "alex pandey", "samay raina"];

  const imageslider = () => {
    setcurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  useEffect(() => {
    const interval = setInterval(imageslider, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="max-w-4xl sm:mx-auto md:mx-auto py-4 mt-12 ">
      <div className="flex flex-col md:flex-row gap-8 w-full items-center">
        <div className="left w-[300px] sm:w-[300px] md:w-[300px] overflow-hidden rounded-lg p-2 border-orange-600 border-4 shadow-md">
          <img
            loading="lazy"
            className="w-full h-[390px] sm:h-[400px] object-cover"
            src={images[currentIndex]}
            alt="manpic"
          />
        </div>
        <div className="flex-grow">
          <div className="right text-white bg-[#17172B] rounded-sm h-[300px] p-6 flex flex-col gap-4">
            <h1 className="text-white lg:w-[1.4rem] capitalize text-nowrap">
              {title[currentIndex]}
            </h1>
            <span className="text-white font-sans font-[300]">customer</span>
            <p className="w-[270px] lg:w-[450px] text-sm">
              {desc[currentIndex]}
            </p>
          </div>
          <div className="dot flex justify-center mt-4 text-white">
            {images.map((_, index) => (
              <span
                key={index}
                onClick={() => setcurrentIndex(index)}
                className={`cursor-pointer mx-2 w-[14px] h-[14px] bg-slate-300 rounded-xl ${
                  currentIndex === index ? "bg-orange-600" : "bg-white"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tesimonial;
