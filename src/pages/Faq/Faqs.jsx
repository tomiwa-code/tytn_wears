import {
  BsCart2,
  BsInstagram,
  BsPhone,
  BsSearch,
  BsWhatsapp,
} from "react-icons/bs";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { MdKeyboardArrowRight, MdOutlineSettingsSuggest } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, hero, navLinks, prods, staggerParent } from "../../variant";

const Faqs = () => {
  return (
    <div className="px-10 mt-8 overflow-hidden">
      <motion.div
        variants={prods}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="rounded-2xl w-full h-[500px] bg-dark-500 flex relative offer before:absolute before:inset-0 before:opacity-10"
      >
        <h2 className="uppercase absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] text-light-500 opacity-5 text-[140px] font-raleway font-extrabold">
          faq
        </h2>
        <div className="space-y-5 absolute -bottom-8 left-[50%] -translate-x-[50%]">
          <h2 className="text-light-500 text-3xl font-semibold text-center">
            Hello, how can we be of help to you?
          </h2>
          <div className="relative w-[800px]">
            <BsSearch className="text-xl text-dark-400 absolute left-4 top-[50%] -translate-y-[50%]" />
            <input
              type="text"
              placeholder="Search for articles"
              className="rounded-lg bg-light-200 placeholder:text-dark-300 text-lg shadow-3xl px-12 py-6 w-full focus:outline-none"
            />
          </div>
        </div>
      </motion.div>
      <div className="mt-20 px-10">
        <motion.h2
          variants={fadeIn("bottom")}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={0.5}
          className="text-xl text-dark-500 font-semibold"
        >
          Popular articles
        </motion.h2>
        <motion.div
          variants={staggerParent}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-10 rounded-xl relative bg-light-100 grid grid-cols-3 shadow-3xl overflow-hidden"
        >
          {[0, 1, 2, 3, 4, 5].map((items) => (
            <motion.div
              variants={navLinks}
              className="h-[200px] px-10 py-10 border-r border-b border-gray-100"
              key={items}
            >
              <Link to={`/faq`}>
                <div className="space-x-2 flex items-center">
                  <BsCart2 className="text-xl text-dark-200" />
                  <p className="text-dark-300 opacity-70 capitalize">shop</p>
                </div>
                <p className="text-xl text-dark-500 font-medium mt-5">
                  My order has not arrived what can I do?
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="mt-24 px-10">
        <motion.h2
          variants={fadeIn("bottom")}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={0.5}
          className="text-xl font-semibold text-dark-500"
        >
          Browse articles
        </motion.h2>
        <motion.div
          variants={staggerParent}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          className="flex gap-8 mt-10"
        >
          {[0, 1, 2].map((items) => (
            <motion.div
              variants={navLinks}
              className="flex-1 shadow-3xl bg-light-100 rounded-lg"
              key={items}
            >
              <div className="flex space-x-2 items-center w-full py-6 px-6 border-b border-gray-100">
                <GiEarthAfricaEurope className="text-2xl text-dark-400" />
                <h2 className="text-xl font-medium text-dark-400">General</h2>
              </div>
              {[0, 1, 2].map((items) => (
                <div
                  className="px-6 py-4 flex items-center justify-between border-b border-gray-100"
                  key={items}
                >
                  <Link to={`/faq`} className="block text-dark-500 text-base">
                    Where can I edit my billing and shipping address?
                  </Link>
                  <span>
                    <MdKeyboardArrowRight className="text-3xl text-dark-300" />
                  </span>
                </div>
              ))}

              <Link
                to={`/faqs/global`}
                className="flex items-center justify-end space-x-2 px-6 pt-4 pb-8"
              >
                <span className="text-dark-500">More</span>
                <MdKeyboardArrowRight className="text-3xl text-dark-300" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("up")}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="mt-24 py-10"
      >
        <h2 className="text-center font-semibold text-2xl">
          Need to talk with us?
        </h2>
        <div className="mt-10 flex justify-center space-x-8 items center">
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
      </motion.div>
    </div>
  );
};

export default Faqs;
