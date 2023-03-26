import { Link, useParams } from "react-router-dom";
import { BsFilter } from "react-icons/bs";
import { colorArr, styleArr } from "./filter";
import { shopArr } from "../Home/data";
import { useState } from "react";
import { motion } from "framer-motion";
import { IO, prods, SlideIn } from "../../variant";
import ListProduct from "../../components/ListProduct";

const Shop = () => {
  const cat = useParams().cat;
  const [cate, setCate] = useState("all product");
  const [openDropDown, setCloseDropDown] = useState(false);

  const handleDropDown = () => {
    setCloseDropDown((prev) => !prev);
  };

  return (
    <div className="px-5 mt-2 md:px-10 md:mt-5 lg:mt-12">
      <motion.div
        variants={prods}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex items-center text-sm md:text-base justify-between"
      >
        <div className="flex items-center space-x-3">
          <Link to={"/"} className="capitalize text-gray-500 font-medium">
            home /
          </Link>
          <p className="capitalize text-dark-500 font-semibold">
            shop {"->"} {cat === "allproducts" ? "everything" : cat}
          </p>
        </div>
        <div className=" text-dark-400 md:hidden font-semibold relative">
          <button
            className="flex items-center justify-center space-x-2"
            onClick={handleDropDown}
          >
            <BsFilter className="text-lg" />
            <span className="capitalize">filter</span>
          </button>
          {openDropDown && (
            <motion.div
              variants={IO}
              initial="initial"
              animate="animate"
              className="absolute bg-light-500 text-dark-500 shadow-3xl rounded z-40 py-3 top-8 right-0"
            >
              <li className="capitalize list-none font-medium py-3 px-10 text-center">
                hoodie
              </li>
              <li className="capitalize list-none font-medium py-3 px-10 text-center">
                t-shirt
              </li>
              <li className="capitalize list-none font-medium py-3 px-10 text-center border-t border-gray-100">
                sweatshirt
              </li>
              <li className="capitalize list-none font-medium py-3 px-10 text-center border-t border-gray-100">
                short
              </li>
              <li className="capitalize list-none font-medium py-3 px-10 text-center border-t border-gray-100">
                jogger
              </li>
            </motion.div>
          )}
        </div>
      </motion.div>
      <div className="md:flex mt-8 text-dark-500">
        <motion.div
          variants={SlideIn("left")}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex-1 bg-white rounded-lg px-8 py-6 hidden md:block"
        >
          <div className="flex item-center space-x-3 mb-6">
            <BsFilter className="text-2xl" />
            <p className="opacity-90 text-xl font-raleway font-semibold">
              Filter
            </p>
          </div>
          <div className="mt-6 space-y-3">
            <p className="font-semibold">Price</p>
            <div className="flex space-x-3 items-center">
              <input type="checkbox" className="w-5 h-5" value="asc" />
              <label htmlFor="medium" className="capitalize">
                Asc
              </label>
            </div>
            <div className="flex space-x-3 items-center">
              <input type="checkbox" className="w-5 h-5" value="dsc" />
              <label htmlFor="medium" className="capitalize">
                dsc
              </label>
            </div>
            <div className="flex space-x-3 items-center">
              <input type="checkbox" className="w-5 h-5" value="4999" />
              <label htmlFor="medium" className="capitalize">
                below 5000
              </label>
            </div>
            <div className="flex space-x-3 items-center">
              <input type="checkbox" className="w-5 h-5" value="5000" />
              <label htmlFor="medium" className="capitalize">
                above 5000
              </label>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            <p className="font-semibold">Style</p>
            {styleArr.map(({ id, title }) => (
              <div className="flex space-x-3 items-center" key={id}>
                <input type="checkbox" className="w-5 h-5" value={title} />
                <label htmlFor="medium" className="capitalize">
                  {title}
                </label>
              </div>
            ))}
          </div>
          <div className="mt-6 space-y-3">
            <p className="font-semibold">Colors</p>
            {colorArr.map(({ id, title }) => (
              <div className="flex space-x-3 items-center" key={id}>
                <input type="checkbox" className="w-5 h-5" value={title} />
                <label htmlFor="medium" className="capitalize">
                  {title}
                </label>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={SlideIn("right")}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex-[4] flex items-start justify-center gap-x-5 gap-y-8 md:gap-y-12 flex-wrap"
        >
          {shopArr.map((items) => (
            <ListProduct prodData={items} key={items.id} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Shop;
