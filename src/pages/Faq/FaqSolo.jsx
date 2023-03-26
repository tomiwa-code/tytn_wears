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
    <div className="px-10">
      <SearchFaq />
      <div className="flex mt-10 gap-12 items-start overflow-hidden">
        <motion.div
          variants={prods}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex-[2] bg-light-300 rounded-lg pt-8 overflow-hidden min-h-[700px]"
        >
          <div className="flex items-center space-x-3 px-8">
            <Link to={"/"} className="capitalize text-dark-300">
              home /
            </Link>
            <Link to={"/faqs"} className="capitalize text-dark-300">
              faqs /
            </Link>
            <Link
              to={"/faqs/global"}
              className="capitalize text-dark-400 flex space-x-2 items-center"
            >
              <BsCart2 className="text-2xl text-dark-200" />
              <span>shop</span>
            </Link>
          </div>
          <div className="mt-10 px-8 pb-10">
            <h2 className="text-dark-500 text-2xl capitalize font-semibold">
              shop
            </h2>
            <p className="capitalize text-sm mt-5 text-dark-200">
              last updated: 24d
            </p>
            <div className="mt-6 text-justify">
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
