import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { hide, slideAcross } from "../variant";

const CollectionsLayout = ({
  height,
  height2,
  custom1,
  custom2,
  img,
  text,
  linkTo,
}) => {
  return (
    <Link
      to={linkTo}
      className={`block ${height} ${
        height2 ? height2 : "md:h-auto"
      }  md:flex-1 relative overflow-hidden group`}
    >
      <motion.div
        variants={slideAcross}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        custom={custom1}
        className="absolute bg-dark-100 h-full z-10"
      ></motion.div>
      <motion.img
        variants={hide}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        custom={custom2}
        src={img}
        alt={text}
        className="w-full h-full object-cover"
      />
      <motion.p
        variants={hide}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="capitalize bottom-0 lg:translate-y-20 lg:group-hover:translate-y-0 duration-300 bg-dark-500 w-full h-10 lg:h-12 flex items-center justify-center absolute text-light-500 font-dancing text-lg md:text-2xl font-medium z-10"
      >
        {text}
      </motion.p>
    </Link>
  );
};

export default CollectionsLayout;
