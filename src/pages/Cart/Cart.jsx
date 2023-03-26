import { AnimatePresence, motion } from "framer-motion";
import { cart } from "../../variant";
import emptyCart from "../../assets/img/emptyCart.png";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import new2 from "../../assets/img/new2.jpg";
import { useState } from "react";

const Cart = ({ openCart, closeCart }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <AnimatePresence>
      {openCart && (
        <div className="w-full">
          <motion.div
            variants={cart}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-[80%] md:w-[450px] absolute z-50 h-screen bg-light-200 right-0 pt-4 md:pt-8"
          >
            {/* header  */}
            <div className="flex items-center px-4 md:px-8">
              <div className="flex-1">
                <MdClose
                  className="text-2xl text-dark-500 cursor-pointer"
                  onClick={() => closeCart()}
                />
              </div>
              <h1 className="capitalize text-center text-md md:text-xl font-semibold flex-[2]">
                shopping bag
              </h1>
              <div className="flex-1 text-right">
                <button className="font-medium text-red-500 leading-3">
                  Clear
                </button>
              </div>
            </div>

            {/* Cart item and checkout  */}
            <div className="h-full overflow-y-auto px-4 md:px-8 mt-8 space-y-8 pb-32 md:pb-20">
              {[0, 1, 2, 4, 6].map((items) => (
                <div className="flex items-center md:gap-x-5" key={items}>
                  <div className="flex-1">
                    <div className="w-16 h-16 md:w-24 md:h-24 overflow-hidden rounded-lg">
                      <img
                        src={new2}
                        alt="new2"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-[2]">
                    <div className="space-y-1 px-5">
                      <h2 className="text-dark-500 text-sm md:text-base font-semibold capitalize">
                        swift hoodie
                      </h2>
                      <div className="flex flex-wrap items-center">
                        <div className="space-y-1">
                          <p className="text-dark-300 text-sm md:text-base font-medium capitalize">
                            NGN 6000.00
                          </p>
                          <div className="flex space-x-2 items-center">
                            <button className="bg-light-500 text-dark-800 text-lg w-8 h-8 rounded flex items-center justify-center">
                              -
                            </button>
                            <p className="bg-light-100 text-dark-800 text-lg w-8 h-8 rounded flex items-center justify-center">
                              {quantity}
                            </p>
                            <button className="bg-light-500 text-dark-800 text-lg w-8 h-8 rounded flex items-center justify-center">
                              +
                            </button>
                          </div>
                        </div>
                        <div className="flex space-x-3 items-center mt-3">
                          <p className="text-dark-400 uppercase text-sm md:text-base">
                            <span className="font-semibold text-dark-500 capitalize mr-2">
                              size:
                            </span>
                            l
                          </p>
                          <p className="text-dark-400 capitalize text-sm md:text-base">
                            <span className="font-semibold text-dark-500 capitalize mr-2">
                              color:
                            </span>
                            black
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex items-center justify-end">
                    <MdClose className="text-2xl cursor-pointer text-red-500" />
                  </div>
                </div>
              ))}

              {/* empty cart  */}
              {/* <div className="h-[90%] w-full flex flex-col items-center justify-center">
                <div className="w-56 h-56 overflow-hidden">
                  <img
                    src={emptyCart}
                    alt="empty cart"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-base mt-2 text-gray-400">
                  Your bag is currently empty.
                </p>
                <Link
                  to={"/shop/allproducts"}
                  className="rounded-lg px-6 py-3 bg-dark-800 text-light-500 mt-4"
                  onClick={() => closeCart()}
                >
                  Go to Shop
                </Link>
              </div> */}

              {/* checkout  */}
              <div className="bg-light-500 py-8 space-y-3 rounded-tl-3xl rounded-tr-3xl">
                <div className="w-full text-center space-y-1">
                  <p className="text-dark-400 font-medium text-lg md:text-xl">
                    Total Price
                  </p>
                  <h2 className="md:text-2xl text-xl font-bold text-dark-500">
                    NGN 6000.00
                  </h2>
                </div>
                <div className="w-full text-center">
                  <button className="bg-dark-800 py-4 md:py-5 w-[200px] md:w-[300px] text-light-500 rounded-lg mx-auto">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Dark overlay  */}
          <div
            className="absolute inset-0 bg-dark-500 z-[45] bg-opacity-20 backdrop-blur-sm cursor-pointer"
            onClick={() => closeCart()}
          ></div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Cart;
