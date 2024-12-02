import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./Store/store.js";
import BlogsinglePost from "./components/BlogsinglePost/BlogsinglePost.jsx";
import AppointmentFirst from "./components/Appointment-firstsec/AppointmentFirst.jsx";
import AppointmentSecond from "./components/Appointment-secondSec/Appointment-Second.jsx";
import Userdata from "./components/Userdata/Userdata.jsx";
import Pricing from "./components/Pricing/Pricing.jsx";
import Services from "./components/Services/Services.jsx";
import History from "./History-about/History.jsx";
import Contact from "./components/Contact/Contact.jsx";
const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "blog/:id",
        element: <BlogsinglePost />,
      },
      {
        path: "/appointment",
        element: <AppointmentFirst />,
      },
      {
        path: "/appointmentcalendar/:haircut",
        element: <AppointmentSecond />,
      },
      {
        path: "userAvailable",
        element: <Userdata />,
      },
      {
        path: "/Pricing",
        element: <Pricing />,
      },
      {
        path: "/Services",
        element: <Services />,
      },
      {
        path: "/History-About",
        element: <History />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
