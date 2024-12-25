import React from "react";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="md:h-screen mx-auto p-3">
      <h1 className="text-xl text-white text-center py-6">Contact Us</h1>
      <div className="flex flex-col md:flex-row  gap-5 p-2 ">
        <div className="map md:w-1/2 px-5">
          <iframe
            className="rounded-lg w-full h-[350px] md:h-[400px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d700.3455905070192!2d83.03695737006608!3d27.66103836716012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996f9d70b40613f%3A0x3855c12c1e22b8e!2sSiddhartha%20Bank%20Limited%2C%20Gorusinghe%20Branch!5e0!3m2!1sen!2snp!4v1732964286673!5m2!1sen!2snp"
            height="350"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="form">
          <form
            action=""
            onSubmit={handleSubmit}
            className="md:max-w-md max-w-xs mx-auto"
          >
            <div className="relative mb-5">
              <input
                type="email"
                name="email"
                id="email"
                className="block bg-transparent outline-none peer focus:text-white border-0 border-b-2 border-gray-700"
              />
              <label
                htmlFor="email"
                className="text-white absolute top-0 transition-all duration-200 peer-focus:text-blue-700 peer-focus:-translate-y-4 "
              >
                email
              </label>
            </div>
            <div className="relative mb-5">
              <input
                type="Name"
                name="text"
                id="Name"
                className="block bg-transparent outline-none  peer focus:text-white border-0 border-b-2 border-gray-700"
              />
              <label
                htmlFor="Name"
                className="text-white absolute top-0 transition-all duration-200 peer-focus:text-blue-700 peer-focus:-translate-y-4 "
              >
                name
              </label>
            </div>
            <div className="relative mb-5">
              <label htmlFor="textarea" className="text-white">
                message:
              </label>
              <textarea
                rows={"6"}
                cols={"26"}
                type="textarea"
                name="textarea"
                id="email"
                className="block bg-transparent border-gray-700 border-2 text-white"
              />
            </div>

            <div className="but">
              <button
                type="submit"
                className="text-white border-2 px-5 md:px-0 py-1 cursor-pointer hover:bg-blue-600 hover:outline-none transition-all hover:border-none rounded-md md:w-full border-gray-700"
              >
                Submit
              </button>

              <div className="text-center py-4">
                <h1 className="text-xl text-white text-center mb-1">Or</h1>
                <button
                  type="button"
                  className="text-white mb-3 bg-blue-700 text-center px-6 py-2 rounded-md hover:bg-blue-800 transition-all"
                  onClick={() =>
                    (window.location.href = "mailto:bp9777643@email.com")
                  }
                >
                  Direct with Email
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
