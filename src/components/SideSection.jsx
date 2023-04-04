import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import new2 from "../assets/img/new2.jpg";
import { motion } from "framer-motion";
import { cart } from "../variant";
import TalkWithUs from "./TalkWithUs";

const SideSection = () => {
  return (
    <motion.div
      variants={cart}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="lg:w-[400px]"
    >
      <div className="w-full overflow-hidden rounded-lg md:py-8 md:px-5 bg-light-500">
        <p className="mb-5 text-base font-medium md:text-xl md:px-3 text-dark-500">
          Trending products
        </p>
        {[0, 1, 2, 3].map((items) => (
          <Link
            to={"/shop"}
            className="relative flex items-center py-6 space-x-5 rounded-lg md:px-3 hover:bg-light-200 bg-light-500"
            key={items}
          >
            <div className="w-12 h-12 overflow-hidden rounded-lg md:w-16 md:h-16">
              <img
                src={new2}
                alt="new2"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-semibold capitalize text-dark-500 md:text-base">
                swift hoodie
              </p>
              <p className="text-sm font-medium capitalize text-dark-500 md:text-base">6000.00</p>
            </div>
            <MdOutlineKeyboardArrowRight className="text-lg md:text-2xl text-dark-500 absolute top-[50%] -translate-y-[50%] right-3" />
          </Link>
        ))}
      </div>

      <TalkWithUs />
    </motion.div>
  );
};

export default SideSection;
