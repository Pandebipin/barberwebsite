import React, { useState } from "react";
import { Box, Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
  padding: "1rem",
};

function Gallery() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const images = [
    "https://i.ytimg.com/vi/XsJXW98YzpA/hq720.jpg",
    "https://images.squarespace-cdn.com/content/v1/525637f7e4b08267e5b1ec09/1727734291254-D4ZJEFGPRKFE130G0HJY/GMBsept24-5.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr2xJVMXX3pDkDfgqswoet4C4yDdj3oWxhiQ&s",
    "https://www.mensroombarbershop.com/wp-content/uploads/2023/10/A1580-Mens-Room-Barber-Shop-HERO.jpg",
    "https://thumbs.dreamstime.com/b/barber-shop-graffiti-wallpaper-design-bricks-wooden-background-interior-270689352.jpg",
    "https://static01.nyt.com/images/2023/05/21/multimedia/00CelebrityBarbers-JP1/00CelebrityBarbers-lede-try-btcf-facebookJumbo.jpg?year=2023&h=550&w=1050",
    "https://img.freepik.com/premium-photo/young-man-barbershop-trimming-shaving_752325-15382.jpg?semt=ais_hybrid",
  ];

  return (
    <div className="w-full max-w-7xl px-4 py-8 mx-auto">
      <div className="text-center mb-6">
        <h1 className="text-white text-2xl font-semibold">Our Gallery</h1>
        <p className="text-white text-lg">Enjoy our awesome snapshot</p>
      </div>

      <div className="relative h-60 md:h-80 lg:h-[35vh] w-full cursor-pointer">
        <div
          className="absolute inset-0 bg-white opacity-10 z-10"
          onClick={handleOpen}
        ></div>
        <img
          src="https://i.ytimg.com/vi/XsJXW98YzpA/hq720.jpg"
          alt="gallery preview"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="gallery-modal-title"
        aria-describedby="gallery-modal-description"
      >
        <Box
          sx={style}
          className="w-full max-w-[90vw] md:max-w-3xl lg:max-w-5xl h-[80vh] overflow-auto bg-white rounded-xl outline-none"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((src, idx) => (
              <div key={idx} className="w-full">
                <img
                  loading="lazy"
                  src={src}
                  alt={`gallery-${idx}`}
                  className="w-full h-auto object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Gallery;
