import "./App.css";
import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Signup from "./pages/Signup/Signup";

function App() {
  useEffect(() => {
    <Signup />;
  });
  return (
    <>
      <div className="bg-[#050514]">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
