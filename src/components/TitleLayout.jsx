import { motion } from "framer-motion";
import { fadeIn } from "../variant";

const TitleLayout = ({ title, subTitle }) => {
  return (
    <div className="md:space-y-2 w-full">
      <motion.h2
        variants={fadeIn("up")}
        custom={0.2}
        className="font-dancing font-bold text-2xl md:text-3xl text-dark-500 text-center w-full"
      >
        {title}
      </motion.h2>
      <motion.p
        variants={fadeIn("down")}
        custom={0.9}
        className="text-dark-200 text-center text-sm md:text-base"
      >
        {subTitle}
      </motion.p>
    </div>
  );
};

export default TitleLayout;
