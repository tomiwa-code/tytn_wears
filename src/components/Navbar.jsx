import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";
import { ham, nav, navbar, navLinks } from "../variant";
import { useState } from "react";
import logoT from "../assets/img/logoT.png";
import logoT2 from "../assets/img/logoT2.png";
import { Link, useLocation } from "react-router-dom";
import Cart from "../pages/Cart/Cart";
import Search from "./Search";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  const linkArr = [
    {
      id: 1,
      title: "home",
      link: "/",
    },
    {
      id: 2,
      title: "shop",
      link: "/shop/allproducts",
    },
    {
      id: 3,
      title: "contact us",
      link: "/contact",
    },
    {
      id: 4,
      title: "TYTN",
      link: "/about",
    },
    {
      id: 5,
      title: "Account",
      link: "/customer",
      style: 'md:hidden'
    },
  ];

  const handleOpenCart = () => {
    setOpenCart(true);
    document.body.style.overflow = "hidden";
  };

  const closeCart = () => {
    setOpenCart(false);
    document.body.style.overflow = "auto";
  };

  const handleOpenSearch = () => {
    setOpenSearch(true);
    document.body.style.overflow = "hidden";
  };

  const closeSearch = () => {
    setOpenSearch(false);
    document.body.style.overflow = "auto";
  };

  const location = useLocation().pathname.split("/")[1];

  return (
    <>
      <div className="overflow-hidden">
        <Cart openCart={openCart} closeCart={closeCart} />
        {openSearch && <Search closeSearch={closeSearch} />}
      </div>
      <motion.div
        className="flex px-5 md:px-10 py-6 items-center relative z-40"
        variants={navbar}
        initial="initial"
        animate="animate"
      >
        <div className="flex-1">
          <div
            className="space-y-2 cursor-pointer w-10"
            onClick={() => setOpenNav((openNav) => !openNav)}
          >
            <motion.div
              variants={ham("top")}
              animate={openNav ? "animate" : "initial"}
              className={`w-6 md:w-8 py-[1px] ${
                location === "about" ? "bg-light-500" : "bg-dark-500"
              } `}
            ></motion.div>
            <motion.div
              variants={ham("bottom")}
              animate={openNav ? "animate" : "initial"}
              className={`w-6 md:w-8 py-[1px] ${
                location === "about" ? "bg-light-500" : "bg-dark-500"
              } `}
            ></motion.div>
          </div>
        </div>
        <div
          className={`flex-1 justify-center flex items-center ${
            location === "about" ? "text-light-500" : "text-dark-500"
          }`}
        >
          <Link
            to={"/"}
            className="space-x-2 justify-center flex items-center w-24"
          >
            {/* <div className="w-6 h-6 overflow-hidden">
              <img
                src={location === 'about' ? logoT2 : logoT}
                alt="logo"
                className="w-full h-full object-cover"
              />
            </div> */}
            <h2 className="uppercase font-semibold text-lg tracking-widest">
              tytn
            </h2>
          </Link>
        </div>
        <div
          className={`flex-1 ${
            location === "about" ? "text-light-500" : "text-dark-500"
          }`}
        >
          <div className="flex md:space-x-10 justify-end items-center">
            <GoSearch
              className="text-lg md:text-2xl  cursor-pointer mr-5 md:mr-0"
              onClick={handleOpenSearch}
            />
            <div className="relative cursor-pointer" onClick={handleOpenCart}>
              <HiOutlineShoppingBag className="text-lg md:text-2xl" />
              <span className="bg-dark-500 text-light-500 absolute w-4 h-4 flex items-center justify-center -top-1 -right-1 rounded-full text-xs">
                2
              </span>
            </div>
            <Link to={"/customer"}>
              <FaUserAlt className="text-xl cursor-pointer hidden md:block" />
            </Link>
          </div>
        </div>
        <AnimatePresence>
          {openNav && (
            <motion.div
              variants={nav}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-light-200 shadow-lg md:mx-10 py-3 absolute top-20 text-center left-0 right-0 z-50"
            >
              {linkArr.map(({ id, title, link, style }) => (
                <motion.li variants={navLinks} className="list-none" key={id}>
                  <Link
                    to={link}
                    className={`text-dark-500 block w-full py-5 capitalize font-medium hover:tracking-widest duration-200 ${style}`}
                    onClick={() => setOpenNav((openNav) => !openNav)}
                  >
                    {title}
                  </Link>
                </motion.li>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Navbar;
