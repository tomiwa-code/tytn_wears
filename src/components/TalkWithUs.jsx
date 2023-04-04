import { motion } from "framer-motion";
import { fadeIn } from "../variant";
import { BsInstagram, BsPhone, BsWhatsapp } from "react-icons/bs";

const TalkWithUs = () => {
  return (
    <motion.div
      variants={fadeIn("up")}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="py-10 mt-6 md:mt-12 lg:mt-24"
    >
      <h2 className="text-lg font-semibold text-center md:text-2xl">
        Need to talk with us?
      </h2>
      <div className="flex justify-center mt-5 space-x-8 md:mt-10 items center">
        <div className="p-3 duration-150 rounded-full bg-dark-500 text-light-500 hover:bg-light-500 hover:text-dark-500">
          <a href="www.whatsapp.com">
            <BsWhatsapp className="text-xl md:text-3xl" />
          </a>
        </div>
        <div className="p-3 duration-150 rounded-full bg-dark-500 text-light-500 hover:bg-light-500 hover:text-dark-500">
          <a href="www.instagram.com">
            <BsInstagram className="text-xl md:text-3xl" />
          </a>
        </div>
        <div className="p-3 duration-150 rounded-full bg-dark-500 text-light-500 hover:bg-light-500 hover:text-dark-500">
          <a href="www.instagram.com">
            <BsPhone className="text-xl md:text-3xl" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default TalkWithUs;
