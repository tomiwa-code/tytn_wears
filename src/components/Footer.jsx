import { Link } from "react-router-dom";
import logoT from "../assets/img/logoT.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";

const Footer = () => {
  return (
    <div className="mt-16 md:mt-24 mx-10 pb-16">
      <motion.div
        variants={fadeIn("up")}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: true, amount: 0.5 }}
        custom={0.2}
      >
        <div className="flex items-center justify-center space-x-2 mb-3">
          <div className="w-5 h-5 md:w-8 md:h-8 overflow-hidden">
            <img src={logoT} alt="logo" className="w-full h-full object-cover" />
          </div>
          <p className="tracking-widest text-dark-500 font-bold text-center text-base md:text-xl">
            TYTN
          </p>
        </div>
        <div className="space-x-3 flex text-sm md:text-base items-center justify-center">
          <Link to={"/faqs"} className="text-center text-dark-200 font-light">
            FAQs
          </Link>
          <p className="text-dark-200 font-light">|</p>
          <Link to={"/shop/allproducts"} className="text-center text-dark-200 font-light">
            Shop
          </Link>
          <p className="text-dark-200 font-light">|</p>

          <Link
            to={"/contact"}
            className="text-center text-dark-200 font-light"
          >
            Contact
          </Link>
        </div>
        <p className="capitalize text-dark-400 text-center mt-3 text-sm md:text-base">
          © 2023. all right reserved.
        </p>
      </motion.div>
    </div>
  );
};

export default Footer;
