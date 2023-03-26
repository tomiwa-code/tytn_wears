import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsInstagram, BsPhone, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import new2 from "../assets/img/new2.jpg";
import { motion } from "framer-motion";
import { cart } from "../variant";

const SideSection = () => {
  return (
    <motion.div
      variants={cart}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="w-[400px]"
    >
      <div className="w-full bg-light-500 rounded-lg overflow-hidden px-5 py-8">
        <p className="text-dark-500 font-medium text-xl mb-2 px-3">
          Trending products
        </p>
        {[0, 1, 2, 3].map((items) => (
          <Link
            to={"/shop"}
            className="py-6 hover:bg-light-200 flex items-center space-x-5 bg-light-500 rounded-lg px-3 relative"
            key={items}
          >
            <div className="w-16 h-16 overflow-hidden rounded-lg">
              <img
                src={new2}
                alt="new2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1">
              <p className="font-semibold capitalize text-dark-500">
                swift hoodie
              </p>
              <p className="font-medium capitalize text-dark-500">6000.00</p>
            </div>
            <MdOutlineKeyboardArrowRight className="text-2xl text-dark-500 absolute top-[50%] -translate-y-[50%] right-3" />
          </Link>
        ))}
      </div>
      <div className="mt-8 py-8">
        <h2 className="text-center italic font-semibold text-xl">
          Need to talk with us?
        </h2>
        <div className="mt-5 flex justify-center space-x-8 items center">
          <div className="bg-dark-500 text-light-500 hover:bg-light-500 hover:text-dark-500 duration-150 p-3 rounded-full">
            <a href="www.whatsapp.com">
              <BsWhatsapp className="text-3xl" />
            </a>
          </div>
          <div className="bg-dark-500 text-light-500 hover:bg-light-500 hover:text-dark-500 duration-150 p-3 rounded-full">
            <a href="www.instagram.com">
              <BsInstagram className="text-3xl" />
            </a>
          </div>
          <div className="bg-dark-500 text-light-500 hover:bg-light-500 hover:text-dark-500 duration-150 p-3 rounded-full">
            <a href="www.instagram.com">
              <BsPhone className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SideSection;
