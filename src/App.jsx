import "./App.css";
import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Signup from "./pages/Signup/Signup";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { CheckAuth } from "./Store/AuthSlice";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      dispatch(CheckAuth(!!currentUser));
      // console.log(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [dispatch, auth]);

  const CurrentEmail = user?.email;

  if (loading)
    return (
      <div className="flex flex-col justify-center items-center">
        <DotLottieReact
          src="https://lottie.host/e18e37a5-9212-472c-bf16-ed179bd9ab58/tKckBztGL4.lottie"
          loop
          autoplay
          style={{ width: "60%", height: "60%" }}
        />
        <span className="text-xl font-sans text-center">
          Barbershop vibes incoming…"
        </span>
      </div>
    );

  const UserLayout = () => (
    <div>
      <Header />
      {user ? <Outlet /> : <Signup />}
      <Footer />
    </div>
  );

  const AdminLayout = () => (
    <div>
      <Header />
      <AdminDashboard />
      <Footer />
    </div>
  );

  return (
    <div className="bg-[#050514]">
      {user ? (
        CurrentEmail === import.meta.env.VITE_ADMIN_KEY ? (
          <AdminLayout />
        ) : (
          <UserLayout />
        )
      ) : (
        <UserLayout />
      )}
    </div>
  );
}

export default App;
