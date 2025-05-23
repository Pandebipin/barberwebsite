import "./App.css";
import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Signup from "./pages/Signup/Signup";
import { auth } from "./Firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { CheckAuth } from "./Store/AuthSlice";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      dispatch(CheckAuth(currentUser ? true : false));
      setLoading(false);
    });

    return () => unsubscribe();
  }, [dispatch]);

  if (loading) return <p className="text-white text-center mt-4">Loading...</p>;

  return (
    <div className="bg-[#050514]">
      <Header />
      {user ? <Outlet /> : <Signup />}
      <Footer />
    </div>
  );
}

export default App;
