import { BsCart2, BsSearch } from "react-icons/bs";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { MdKeyboardArrowRight, MdOutlineSettingsSuggest } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, navLinks, prods, staggerParent } from "../../variant";
import TalkWithUs from "../../components/TalkWithUs";

const Faqs = () => {
  return (
    <div className="px-5 mt-5 overflow-hidden md:px-10 md:mt-8">
      <motion.div
        variants={prods}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="rounded-2xl w-full h-[500px] bg-dark-500 flex relative offer before:absolute before:inset-0 before:opacity-10"
      >
        <h2 className="uppercase absolute left-[50%] -translate-x-[50%] text-7xl top-[50%] -translate-y-[50%] text-light-500 opacity-5 md:text-[140px] font-raleway font-semibold md:font-extrabold">
          faq
        </h2>
        <div className="space-y-5 w-full px-3 md:px-0 md:w-auto absolute bottom-5 md:-bottom-8 left-[50%] -translate-x-[50%]">
          <h2 className="px-5 text-lg text-center md:font-semibold md:text-xl lg:text-3xl text-light-500 md:px-0">
            Hello, how can we be of help to you?
          </h2>
          <div className="relative md:w-[500px] lg:w-[800px] w-full">
            <BsSearch className="text-sm md:tet-lg lg:text-xl text-dark-400 absolute left-4 top-[50%] -translate-y-[50%]" />
            <input
              type="text"
              placeholder="Search for articles"
              className="w-full px-10 lg:px-12 py-3.5 nd:text-sm lg:text-lg rounded-lg md:py-4 lg:py-6 text-sm bg-light-200 placeholder:text-dark-300 md:shadow-3xl focus:outline-none"
            />
          </div>
        </div>
      </motion.div>
      <div className="mt-8 md:px-10 md:mt-16 lg:mt-20">
        <motion.h2
          variants={fadeIn("bottom")}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={0.5}
          className="text-lg font-semibold lg:text-xl text-dark-500"
        >
          Popular articles
        </motion.h2>
        <motion.div
          variants={staggerParent}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="relative grid mt-5 overflow-hidden md:grid-cols-2 lg:grid-cols-3 md:mt-6 lg:mt-10 rounded-xl bg-light-100 shadow-3xl"
        >
          {[0, 1, 2, 3, 4, 5].map((items) => (
            <motion.div
              variants={navLinks}
              className="lg:h-[200px] px-5 md:px-10 py-10 border-r border-b border-gray-100"
              key={items}
            >
              <Link to={`/faq/how-to-get-away`}>
                <div className="flex items-center space-x-2">
                  <BsCart2 className="text-lg md:text-xl text-dark-200" />
                  <p className="text-sm capitalize text-dark-300 opacity-70">
                    shop
                  </p>
                </div>
                <p className="mt-5 text-sm font-medium md:text-lg lg:text-xl text-dark-500">
                  My order has not arrived what can I do?
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="mt-8 md:px-10 md:mt-10 lg:mt-24">
        <motion.h2
          variants={fadeIn("bottom")}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={0.5}
          className="text-lg font-semibold md:text-xl text-dark-500"
        >
          Browse articles
        </motion.h2>
        <motion.div
          variants={staggerParent}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 md:mt-6 lg:mt-10"
        >
          {[0, 1, 2].map((items) => (
            <motion.div
              variants={navLinks}
              className="flex-1 rounded-lg shadow-3xl bg-light-100"
              key={items}
            >
              <div className="flex items-center w-full px-6 py-6 space-x-2 border-b border-gray-100">
                <GiEarthAfricaEurope className="text-lg md:text-2xl text-dark-400" />
                <h2 className="text-sm font-medium md:text-xl text-dark-400">
                  General
                </h2>
              </div>
              {[0, 1, 2].map((items) => (
                <div
                  className="flex items-center justify-between px-6 py-4 border-b border-gray-100"
                  key={items}
                >
                  <Link
                    to={`/faq/how-to-get-away`}
                    className="block text-sm md:text-base text-dark-500"
                  >
                    Where can I edit my billing and shipping address?
                  </Link>
                  <span>
                    <MdKeyboardArrowRight className="text-xl md:text-3xl text-dark-300" />
                  </span>
                </div>
              ))}

              <Link
                to={`/faqs/global`}
                className="flex items-center justify-end px-6 pt-4 pb-8 space-x-2"
              >
                <span className="text-sm text-dark-500 md:text-base">More</span>
                <MdKeyboardArrowRight className="text-xl md:text-3xl text-dark-300" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <TalkWithUs />
    </div>
  );
};

export default Faqs;
