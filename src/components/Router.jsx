import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About/About";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Cart from "../pages/Cart/Cart";
import Contact from "../pages/Contact/Contact";
import FaqCat from "../pages/Faq/FaqCat";
import Faqs from "../pages/Faq/Faqs";
import FaqSolo from "../pages/Faq/FaqSolo";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import SoloProduct from "../pages/SoloProduct/SoloProduct";
import User from "../pages/User/User";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop/:cat",
        element: <Shop />,
      },
      {
        path: "/shop_product/:id",
        element: <SoloProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/customer",
        element: <User />,
      },
      {
        path: "/faqs",
        element: <Faqs />,
      },
      {
        path: "/faqs/:cat",
        element: <FaqCat />,
      },
      {
        path: "/faq/:link",
        element: <FaqSolo />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
