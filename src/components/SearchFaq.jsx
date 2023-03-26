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
      className="w-[60%] mx-auto flex items-center justify-center relative"
    >
      <BsSearch className="text-dark-200 text-xl absolute left-5 top-[50%] -translate-y-[50%]" />
      <input
        type="text"
        className="w-full py-6 px-14 rounded-lg shadow-xl placeholder:text-dark-200 bg-light-100 focus:outline-none text-dark-500"
        placeholder="Search for articles"
      />
    </motion.div>
  );
};

export default SearchFaq;
