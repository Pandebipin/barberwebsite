import React, { useState } from "react";
import { Box, Button, Modal } from "@mui/material";
import "./Gallery.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  boxShadow: 24,
  p: 4,
};

function Gallery() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="w-full lg:max-w-screen-2xl max-w-[20rem] py-4 mx-auto">
      <div className="content pb-6 text-center">
        <h1 className="text-white text-xl ">Our Gallery</h1>
        <span className="text-2xl text-white">Enjoy our awesome snapshot</span>
      </div>
      <div className="image h-[35vh] md:h-[50vh] w-full">
        <div>
          <div
            className="w-full h-[60vh] opacity-5 bg-white"
            onClick={handleOpen}
          ></div>

          <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
          >
            <Box
              sx={style}
              className="max-w-[15rem] md:max-w-xl  bg-slate-100 lg:max-w-[1024px] w-full h-[80vh] overflow-auto outline-none rounded-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="content-images w-full">
                  <img
                    className="w-[400px]"
                    src="https://i.ytimg.com/vi/XsJXW98YzpA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDTHM1L4jRODO-pRnOYD0ReZojCWg"
                    alt=""
                  />
                </div>

                <div className="content-images w-full">
                  <img
                    loading="lazy"
                    className="w-[400px]"
                    src="https://images.squarespace-cdn.com/content/v1/525637f7e4b08267e5b1ec09/1727734291254-D4ZJEFGPRKFE130G0HJY/GMBsept24-5.jpg"
                    alt=""
                  />
                </div>
                <div className="content-images w-full">
                  <img
                    loading="lazy"
                    className="w-[400px]"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr2xJVMXX3pDkDfgqswoet4C4yDdj3oWxhiQ&s"
                    alt=""
                  />
                </div>
                <div className="content-images w-full">
                  <img
                    loading="lazy"
                    className="w-[400px]"
                    src="https://www.mensroombarbershop.com/wp-content/uploads/2023/10/A1580-Mens-Room-Barber-Shop-HERO.jpg"
                    alt=""
                  />
                </div>
                <div className="content-images">
                  <img
                    loading="lazy"
                    src="https://thumbs.dreamstime.com/b/barber-shop-graffiti-wallpaper-design-bricks-wooden-background-interior-270689352.jpg"
                    alt=""
                  />
                </div>
                <div className="content-images">
                  <img
                    loading="lazy"
                    src="https://static01.nyt.com/images/2023/05/21/multimedia/00CelebrityBarbers-JP1/00CelebrityBarbers-lede-try-btcf-facebookJumbo.jpg?year=2023&h=550&w=1050&s=cc8046ed95476d8d9db706f556a06021b7e16b58cb875d97d3822b3988dcab52&k=ZQJBKqZ0VN"
                    alt=""
                  />
                </div>
                <div className="content-images">
                  <img
                    loading="lazy"
                    src="https://img.freepik.com/premium-photo/young-man-barbershop-trimming-shaving_752325-15382.jpg?semt=ais_hybrid"
                    alt=""
                  />
                </div>
              </div>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
