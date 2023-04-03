import { BsCartCheck, BsHeart } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { TbAddressBook } from "react-icons/tb";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";
import { hero, IO, SlideIn } from "../../variant";
import { useState } from "react";
import Orders from "./Orders";
import SavedItems from "./SavedItems";
import Overview from "./Overview";
import Address from "./Address";

const User = () => {
  const [currentElement, setCurrentElement] = useState("overview");
  const [openDropDown, setCloseDropDown] = useState(false);

  const handleCurrentElement = (prop) => {
    setCurrentElement(prop);
  };

  const handleDropDown = () => {
    setCloseDropDown((prev) => !prev);
  };

  const dropdownStyle =
    "capitalize list-none font-medium py-3 px-10 text-center border-t border-gray-100";

  return (
    <motion.div
      variants={hero}
      initial="initial"
      whileInView="animate"
      className="relative px-5 mt-2 overflow-hidden md:px-10 md:mt-8"
    >
      <div className="lg:flex lg:gap-x-10 min-h-[600px]">
        {/* mobile side bar  */}
        <div className="relative flex mb-5 lg:hidden">
          <div
            className="flex items-center px-3 py-3 space-x-3 bg-gray-100 rounded text-dark-500"
            onClick={handleDropDown}
          >
            {currentElement === "overview" ? (
              <p className="text-sm font-medium capitalize md:text-base">
                my tytn account
              </p>
            ) : (
              <p className="text-sm font-medium capitalize md:text-base">
                {currentElement}
              </p>
            )}
            <MdOutlineKeyboardArrowDown className="text-xl" />
          </div>
          {/* Dropdown  */}
          {openDropDown && (
            <motion.div
              variants={IO}
              initial="initial"
              animate="animate"
              className="absolute left-0 z-40 py-3 rounded bg-light-500 text-dark-500 shadow-3xl top-14"
            >
              <li
                className="px-10 py-3 font-medium text-center capitalize list-none"
                onClick={() => {
                  handleCurrentElement("overview"), handleDropDown();
                }}
              >
                my Tytn account
              </li>
              <li
                className={dropdownStyle}
                onClick={() => {
                  handleCurrentElement("orders");
                  handleDropDown();
                }}
              >
                orders
              </li>
              <li
                className={dropdownStyle}
                onClick={() => {
                  handleCurrentElement("saved");
                  handleDropDown();
                }}
              >
                saved items
              </li>
              <li
                className={dropdownStyle}
                onClick={() => {
                  handleCurrentElement("address-book"), handleDropDown();
                }}
              >
                address-book
              </li>
            </motion.div>
          )}
        </div>
        {/* web view side bar  */}
        <motion.div
          variants={SlideIn("left")}
          className="relative flex-1 hidden overflow-hidden bg-white rounded-tl-lg rounded-tr-lg lg:block"
        >
          {/* my TYTN account  */}
          <div
            className={`flex w-full space-x-3 items-center px-6 py-5 cursor-pointer ${
              currentElement === "overview"
                ? "bg-dark-500 text-light-500"
                : "text-dark-500 hover:bg-dark-100"
            }`}
            onClick={() => handleCurrentElement("overview")}
          >
            <BiUser className="text-xl" />
            <p className="text-base font-medium capitalize">
              my <span className="tracking-wide uppercase">tytn</span> account
            </p>
          </div>

          {/* Orders  */}
          <div
            className={`flex w-full space-x-3 items-center px-6 py-5 cursor-pointer ${
              currentElement === "orders"
                ? "bg-dark-500 text-light-500"
                : "text-dark-500 hover:bg-dark-100 duration-200"
            }`}
            onClick={() => handleCurrentElement("orders")}
          >
            <BsCartCheck className="text-xl" />
            <p className="text-base font-medium capitalize">orders</p>
          </div>

          {/* Saved Items  */}
          <div
            className={`flex w-full space-x-3 items-center px-6 py-5 cursor-pointer ${
              currentElement === "saved"
                ? "bg-dark-500 text-light-500"
                : "text-dark-500 hover:bg-dark-100 duration-200"
            }`}
            onClick={() => handleCurrentElement("saved")}
          >
            <BsHeart className="text-xl" />
            <p className="text-base font-medium capitalize">saved items</p>
          </div>

          {/* Address book  */}
          <div
            className={`flex w-full space-x-3 items-center px-6 py-5 cursor-pointer ${
              currentElement === "address-book"
                ? "bg-dark-500 text-light-500"
                : "text-dark-500 hover:bg-dark-100 duration-200"
            }`}
            onClick={() => handleCurrentElement("address-book")}
          >
            <TbAddressBook className="text-2xl" />
            <p className="text-base font-medium capitalize">address book</p>
          </div>

          {/* Logout  */}
          <div className="absolute bottom-0 w-full py-5 font-semibold text-center uppercase duration-200 border-t border-gray-200 cursor-pointer text-dark-500 hover:tracking-wider">
            logout
          </div>
        </motion.div>
        <motion.div
          variants={hero}
          className="flex-[3] w-full lg:bg-white rounded-lg lg:p-8"
        >
          {currentElement === "orders" ? (
            <Orders />
          ) : currentElement === "saved" ? (
            <SavedItems />
          ) : currentElement === "overview" ? (
            <Overview switchToAddress={handleCurrentElement} />
          ) : currentElement === "address-book" ? (
            <Address />
          ) : (
            "Selected tab not recognize"
          )}
        </motion.div>
      </div>
      {/* Logout  */}
      <button className="mt-3 lg:hidden px-6 py-2.5 rounded text-center uppercase bg-dark-600 font-semibold text-light-500 duration-200 text-sm">
        logout
      </button>
    </motion.div>
  );
};

export default User;
