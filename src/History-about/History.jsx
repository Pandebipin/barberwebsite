import React from "react";

function History() {
  return (
    <div className="container w-full md:h-[100vh] xl:h-auto py-6 mx-auto px-4">
      <h1 className="text-gray-100 text-center text-lg md:text-2xl font-bold">
        Our History
      </h1>
      <div className="para text-center">
        <span className="text-[#e4e7ee] md:text-xl font-sans">
          With an idea to bring back that old fashioned barbershop experience
          for men of all ages!
        </span>
      </div>
      <div className="flex flex-col md:flex-row xl:flex-col gap-6 px-2 py-8">
        <img
          className="max-w-[400px] md:max-w-screen-md object-cover xl:max-w-screen-xl h-[400px]"
          src="https://thebarbersonline.com/wp-content/uploads/2018/02/babers-start-1-370x564.jpg"
          alt=""
        />

        <p className="max-w-[400px] md:max-w-screen-md xl:text-center xl:max-w-screen-xl text-[#8B8B8B]">
          Today, with ten Clark County Locations, seventeen Portland area
          locations, three Spokane locations, one Corvallis location, one Eugene
          location, over 300 Barbers and cutting the hair of over 50,000
          customers a month, the company has proven that men do enjoy the unique
          experience of a traditional barbershop. Before opening The Barbers,
          Don and Alison had extensive backgrounds in the beauty industry.
          Alison worked as a stylist and colorist in one of the most exclusive
          salons in downtown Portland, Magnum Opus. Les Madden, owner of Magnum
          Opus, is one of Portland’s most renowned barber trained haircutters.
          Alison apprenticed under Madden and learned the nuances of barbering
          and cutting men’s hair as well as becoming one of the top colorists in
          the Portland area.
        </p>
      </div>
    </div>
  );
}

export default History;
