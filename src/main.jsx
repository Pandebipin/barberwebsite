import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./Store/store.js";
import Signup from "./pages/Signup/Signup.jsx";
import Login from "./pages/Login/Login.jsx";

const Home = lazy(() => import("./pages/Home/Home.jsx"));
const BlogsinglePost = lazy(() =>
  import("./components/BlogsinglePost/BlogsinglePost.jsx")
);
// const AppointmentFirst = lazy(() =>
//   import("./components/Appointment-firstsec/AppointmentFirst.jsx")
// );
// const AppointmentSecond = lazy(() =>
//   import("./components/Appointment-secondSec/Appointment-second.jsx")
// );
const AdminDashboard = lazy(() =>
  import("./pages/AdminDashboard/AdminDashboard.jsx")
);
const BookAppointment = lazy(() => import("./components/BookAppointment.jsx"));
const Userdata = lazy(() => import("./components/Userdata/Userdata.jsx"));
const Pricing = lazy(() => import("./components/Pricing/Pricing.jsx"));
const Services = lazy(() => import("./components/Services/Services.jsx"));
const History = lazy(() => import("./History-about/History.jsx"));
const Contact = lazy(() => import("./components/Contact/Contact.jsx"));
const Myprofile = lazy(() => import("./components/Myprofile/Myprofile.jsx"));

// Define router
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
      // {
      //   path: "/appointment",
      //   element: <AppointmentFirst />,
      // },
      {
        path: "/BookAppointment",
        element: <BookAppointment />,
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
      {
        path: "Myprofile",
        element: <Myprofile />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/Admindashboard",
        element: <AdminDashboard />,
      },
    ],
  },
]);

// Render the app with Suspense wrapper
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<div>Loading...</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </PersistGate>
    </Provider>
  </StrictMode>
);
