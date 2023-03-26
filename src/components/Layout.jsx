import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-light-200">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
