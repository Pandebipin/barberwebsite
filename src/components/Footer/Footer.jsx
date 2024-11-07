import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
export const Footer = () => {
  return (
    <div className="lg:h-[50vh] h-full w-full py-8 mt-6 text-white bg-[#17172B] ">
      <div className="flex flex-col md:justify-around md:flex-row px-4 lg:items-center gap-8  ">
        <div className="first flex flex-col gap-4">
          <img
            className="w-[100px] h-[70px] object-cover text-white cursor-pointer"
            src="https://marketplace.canva.com/EAGGacYcM1I/1/0/1600w/canva-vintage-ornament-barbershop-logo-CeBhjirpIjM.jpg"
            alt=""
          />
          <div className="">
            <p className="text-white">we create style for the</p>
            <p className="text-white">way you look and live!</p>
          </div>
          <div className="flex gap-2">
            <FacebookOutlinedIcon />
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </div>
        </div>
        <div className="first flex flex-col gap-4">
          <h2 className="text-xl capitalize">contact us</h2>
          <div className="flex flex-col gap-2">
            <span className="flex gap-2">
              {" "}
              <LocationOnIcon />
              new york 450 2nd, st.suite
            </span>
            <span className="flex gap-2">
              {" "}
              <EmailIcon /> hello@barber.gmail.com
            </span>
            <span>
              {" "}
              <LocalPhoneIcon /> +1-2020-555-0135
            </span>
            <span className="flex gap-2">
              {" "}
              <AccessTimeIcon /> mon-sat: 9.00-18.00
            </span>
          </div>
        </div>
        <div className="first flex flex-col gap-1">
          <h1>Links</h1>
          <div className="py-2">
            <h2>Services</h2>
            <h2>Book Appointment</h2>
            <h2>About</h2>
            <h2>Privacy Policy</h2>
            <h2>contact</h2>
          </div>
        </div>
        <div className="first flex flex-col gap-4">
          <h1>Photo Gallery</h1>
          <img
            className="w-32 h-[120px] object-cover"
            src="https://img.freepik.com/premium-photo/two-serious-guys-are-barbershop-one-them-is-cu%20stomer-sitting-chair-while-hairstylist-is-making-some-magic-by-cutting-some-beard_152404-1768.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
