import { motion } from "framer-motion";
import { prods } from "../variant";

const UserTitleLayout = ({ title }) => {
  return (
    <motion.h2
      variants={prods}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="text-base font-medium capitalize md:text-lg lg:text-xl md:font-semibold"
    >
      {title}
    </motion.h2>
  );
};

export default UserTitleLayout;
