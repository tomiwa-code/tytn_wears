import { BsSearch } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";

const SearchFaq = () => {
  return (
    <motion.div
      variants={fadeIn("down")}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="lg:w-[60%] md:mx-auto flex items-center justify-center relative px-5 md:px-14 lg:px-0"
    >
      <BsSearch className="text-dark-200 text-lg md:text-xl absolute left-8 md:left-20 lg:left-5 top-[50%] -translate-y-[50%]" />
      <input
        type="text"
        className="w-full px-10 py-4 text-sm rounded-lg shadow-xl md:py-6 md:text-base md:px-14 placeholder:text-dark-200 bg-light-100 focus:outline-none text-dark-500"
        placeholder="Search for articles"
      />
    </motion.div>
  );
};

export default SearchFaq;
