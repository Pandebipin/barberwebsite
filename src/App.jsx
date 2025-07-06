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

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(user);
      dispatch(CheckAuth(currentUser ? true : false));
      setLoading(false);
    });

    return () => unsubscribe();
  }, [dispatch]);
  const auth = getAuth();
  const CurrentUser = auth.currentUser;
  const CurrentEmail = CurrentUser?.email;
  console.log(CurrentEmail);
  if (loading) return <p className="text-white text-center mt-4">Loading...</p>;
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
      {CurrentEmail === import.meta.env.VITE_ADMIN_KEY ? (
        <div>
          <AdminLayout />
        </div>
      ) : (
        <div>
          <UserLayout />
        </div>
      )}
    </div>
  );
}

export default App;
