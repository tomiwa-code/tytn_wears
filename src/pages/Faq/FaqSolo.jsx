import SideSection from "../../components/SideSection";
import { Link } from "react-router-dom";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { GiEarthAfricaEurope } from "react-icons/gi";
import SearchFaq from "../../components/SearchFaq";
import { motion } from "framer-motion";
import { prods } from "../../variant";

const FaqSolo = () => {
  return (
    <div className="lg:px-10">
      <SearchFaq />
      <div className="items-start px-5 mt-3 overflow-hidden md:mt-10 md:gap-12 lg:flex md:px-10 lg:px-0">
        <motion.div
          variants={prods}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex-[2] bg-light-300 rounded-lg pt-8 overflow-hidden min-h-[700px]"
        >
          <div className="flex items-center space-x-3 md:px-8">
          <Link
              to={"/"}
              className="text-sm capitalize md:font-medium text-dark-200 md:text-base"
            >
              home /
            </Link>
            <Link
              to={"/faqs"}
              className="text-sm capitalize md:font-medium text-dark-200 md:text-base"
            >
              faqs /
            </Link>
            <Link
              to={"/faqs/global"}
              className="flex items-center space-x-2 text-sm font-medium capitalize text-dark-400 md:text-base md:font-normal"
            >
              <BsCart2 className="text-lg md:text-2xl text-dark-200" />
              <span>shop</span>
            </Link>
          </div>
          <div className="mt-5 md:mt-10 md:pb-10 md:px-8">
            <h2 className="text-base font-semibold capitalize md:text-xl lg:text-2xl text-dark-500">
              shop
            </h2>
            <p className="mt-3 text-xs capitalize md:text-sm md:mt-5 text-dark-200">
              last updated: 24d
            </p>
            <div className="mt-3 md:mt-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel non
              maiores a deleniti omnis, explicabo nisi vitae sed inventore
              tempore quisquam labore aliquid? Quo ab sed perferendis, saepe
              exercitationem provident?
              <br /> <br />
              <strong>
                <li>Hold this phone</li>
                <li>Request for help</li>
              </strong>
            </div>
          </div>
        </motion.div>
        <div className="flex-1">
          <SideSection />
        </div>
      </div>
    </div>
  );
};

export default FaqSolo;
