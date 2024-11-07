import React, { useState } from "react";
import { Box, Button, Modal } from "@mui/material";
import "./Gallery.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "gray",
  boxShadow: 24,
  p: 4,
};

function Gallery() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="w-full lg:max-w-screen-2xl max-w-[18rem] py-4 mx-auto">
      <div className="content pb-6 text-center">
        <h1 className="text-white text-xl ">Our Gallery</h1>
        <span className="text-2xl text-white">Enjoy our awesome snapshot</span>
      </div>
      <div className="image h-[50vh] w-full">
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
              className="max-w-[15rem] md:max-w-xl lg:max-w-[1024px] w-full h-[80vh] overflow-auto outline-none rounded-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="content-images w-full">
                  <img
                    className="w-[400px]"
                    src="https://img.freepik.com/premium-photo/young-man-barbershop-trimming-shaving_752325-15382.jpg?semt=ais_hybrid"
                    alt=""
                  />
                </div>

                <div className="content-images w-full">
                  <img
                    className="w-[400px]"
                    src="https://img.freepik.com/premium-photo/young-man-barbershop-trimming-shaving_752325-15382.jpg?semt=ais_hybrid"
                    alt=""
                  />
                </div>
                <div className="content-images w-full">
                  <img
                    className="w-[400px]"
                    src="https://img.freepik.com/premium-photo/young-man-barbershop-trimming-shaving_752325-15382.jpg?semt=ais_hybrid"
                    alt=""
                  />
                </div>
                <div className="content-images w-full">
                  <img
                    className="w-[400px]"
                    src="https://img.freepik.com/premium-photo/young-man-barbershop-trimming-shaving_752325-15382.jpg?semt=ais_hybrid"
                    alt=""
                  />
                </div>
                <div className="content-images">
                  <img
                    src="https://img.freepik.com/premium-photo/young-man-barbershop-trimming-shaving_752325-15382.jpg?semt=ais_hybrid"
                    alt=""
                  />
                </div>
                <div className="content-images">
                  <img
                    src="https://img.freepik.com/premium-photo/young-man-barbershop-trimming-shaving_752325-15382.jpg?semt=ais_hybrid"
                    alt=""
                  />
                </div>
                <div className="content-images">
                  <img
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
