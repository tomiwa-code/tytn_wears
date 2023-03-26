import { useState } from "react";
import { BsCart2, BsCheck2 } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { motion } from "framer-motion";
import { SlideIn, fadeIn } from "../variant";

const SoloProductDetails = ({ soloProduct }) => {
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const { img, title, desc, price, sizes, colors } = soloProduct;
  const [showNote, setShowNote] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleAddToCart = () => {};

  return (
    <>
      {/* {showNote && (
        <motion.div variants={fadeIn("up")}
        initial="initial"
        animate="animate"
 className="absolute rounded-lg text-center shadow-3xl bg-white space-x-3 w-[300px] px-3 py-5 left-[50%] -translate-x-[50%] -top-20 flex items-center justify-between">
          <span className="bg-[#6dcc6d] rounded-full p-1">
            <BsCheck2 className="text-[white]" />
          </span>
          <p className="font-raleway font-semibold text-secondary">
            Product added to cart
          </p>
          <button onClick={() => setShowNote(false)} className="text-[#d9534f]">
            <MdClose className="text-xl font-bold" />
          </button>
        </motion.div>
      )} */}

      {/* {showError && (
        <motion.div variants={fadeIn("up")}
        initial="initial"
        animate="animate"  className="absolute rounded-lg text-center shadow-3xl bg-white space-x-3 w-[300px] px-3 py-5 left-[50%] -translate-x-[50%] -top-20 flex items-center justify-between">
          <span className="bg-[#d9534f] rounded-full p-1">
            <MdClose className="text-[white]" />
          </span>
          <p className="font-raleway font-semibold text-secondary">
            Select a color and a size
          </p>
          <button onClick={() => setShowNote(false)} className="text-[#d9534f]">
            <MdClose className="text-xl font-bold" />
          </button>
        </motion.div>
      )} */}

      {/* <div className="flex-1">
          <Skeleton className="rounded-lg py-5 w-[300px]" />
          <Skeleton className="rounded-lg py-5 w-[400px] mt-3" />
          <Skeleton className="rounded-lg py-8 w-[500px] mt-3" />
          <div className="flex mt-3 space-x-10">
            <Skeleton className="rounded-lg py-5 w-[200px]" />
            <Skeleton className="rounded-lg py-5 w-[200px]" />
          </div>
          <Skeleton className="rounded-lg py-5 w-[100px] mt-3" />
          <Skeleton className="rounded-lg py-5 w-[200px] mt-3" />
        </div> */}

      <motion.div
        variants={SlideIn("right")}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex-[2] px-10 space-y-3 text-dark-500"
      >
        <h2 className="capitalize font-bold text-3xl">{title}</h2>
        <div className="flex items-center space-x-6">
          <p className="font-semibold text-3xl text-primary">
            NGN {price.toFixed(2)}
          </p>
        </div>
        <p className="text-justify w-[500px]">{desc}</p>
        <div className="flex w-[600px] min-h-[100px] pt-2">
          <div className="flex-1 flex space-x-5 items-center">
            <p className="font-semibold text-lg text-dark-500">Size:</p>
            <div className="flex space-x-4">
              {sizes.map((items, index) => (
                <button
                  className={`font-semibold text-dark-500 w-10 h-10 rounded uppercase ${
                    size === items
                      ? "bg-dark-500 text-light-500"
                      : "bg-gray-200"
                  }`}
                  onClick={() => setSize(items)}
                  key={index}
                >
                  {items}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-5 flex-1">
            <p className="font-semibold text-lg">Colors:</p>
            <div className="flex items-center space-x-4">
              {colors.map((items, index) => (
                <div className="flex space-x-5" key={index}>
                  <div
                    className={`flex items-center duration-200 ${
                      color === items
                        ? "shadow-3xl py-3 px-5 space-x-4 rounded-full"
                        : ""
                    }  `}
                  >
                    <button
                      className="font-bold w-7 h-7 rounded-full"
                      onClick={() => setColor(items)}
                      style={{ backgroundColor: items }}
                    ></button>
                    {color === items && (
                      <p className="text-lg capitalize font-medium">{items}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-5">
          <p className="font-semibold text-lg">Quantity:</p>
          <div className="flex items-center space-x-2">
            <button
              className="w-10 h-10 bg-gray-200 text-2xl rounded"
              onClick={() => setQuantity((elem) => (elem === 1 ? 1 : elem - 1))}
            >
              -
            </button>
            <p className="w-10 h-10 rounded flex items-center justify-center text-lg">
              {quantity}
            </p>
            <button
              className="w-10 h-10 bg-gray-200 text-2xl rounded"
              onClick={() => setQuantity((elem) => elem + 1)}
            >
              +
            </button>
          </div>
        </div>
        <div className="pt-5 flex items-center space-x-5">
          <button
            className="w-52 flex items-center justify-center py-4 bg-dark-600 text-light-500 rounded text center space-x-2"
            onClick={handleAddToCart}
          >
            <BsCart2 className="text-lg" />
            <p className="text-lg">Add to cart</p>
          </button>
          <button
            className="w-52 flex items-center justify-center font-medium py-4 border-2 border-dark-600 text-dark-600 rounded text center space-x-2"
            onClick={handleAddToCart}
          >
            <HiOutlineShoppingBag className="text-lg" />
            <p className="text-lg">Buy Now</p>
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default SoloProductDetails;
