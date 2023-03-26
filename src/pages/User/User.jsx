import { BsCartCheck, BsHeart } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { TbAddressBook } from "react-icons/tb";
import { motion } from "framer-motion";
import { hero, SlideIn } from "../../variant";
import { useState } from "react";
import Orders from "./Orders";
import SavedItems from "./SavedItems";
import Overview from "./Overview";
import Address from "./Address";

const User = () => {
  const [currentElement, setCurrentElement] = useState("overview");

  const handleCurrentElement = (prop) => {
    setCurrentElement((prev) => (prev = prop));
  };

  return (
    <motion.div
      variants={hero}
      initial="initial"
      whileInView="animate"
      className="px-10 mt-8 overflow-hidden"
    >
      <div className="flex gap-x-10 h-full min-h-[600px]">
        <motion.div
          variants={SlideIn("left")}
          className="flex-1 bg-white rounded-tl-lg rounded-tr-lg overflow-hidden relative"
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
            <p className="font-medium capitalize text-base">
              my <span className="uppercase tracking-wide">tytn</span> account
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
            <p className="font-medium capitalize text-base">orders</p>
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
            <p className="font-medium capitalize text-base">saved items</p>
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
            <p className="font-medium capitalize text-base">address book</p>
          </div>

          {/* Logout  */}
          <div className="absolute cursor-pointer bottom-0 py-5 text-center uppercase w-full border-t border-gray-200 font-semibold text-dark-500 hover:tracking-wider duration-200">
            logout
          </div>
        </motion.div>
        <motion.div
          variants={hero}
          className="flex-[3] w-full bg-white rounded-lg p-8"
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
    </motion.div>
  );
};

export default User;
