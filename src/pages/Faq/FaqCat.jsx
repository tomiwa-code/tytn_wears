import { GiEarthAfricaEurope } from "react-icons/gi";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import SideSection from "../../components/SideSection";
import SearchFaq from "../../components/SearchFaq";
import { motion } from "framer-motion";
import { prods } from "../../variant";

const FaqCat = () => {
  return (
    <div className="mt-5 md:mt-8 space-y-6 lg:space-y-14">
      <SearchFaq />
      <div className="px-5 md:gap-12 md:px-10 lg:flex">
        <motion.div
          variants={prods}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex-[2] overflow-hidden bg-light-300 py-8 rounded-lg"
        >
          <div className="flex items-center mt-3 space-x-3 md:mt-0 md:px-8">
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
            <p className="text-sm font-medium capitalize text-dark-500 md:text-base">
              shop
            </p>
          </div>
          <div className="flex items-center mt-5 space-x-3 md:mt-10 md:px-8 md:pb-10">
            <BsCart2 className="text-xl md:text-2xl text-dark-500" />
            <h2 className="text-base font-medium capitalize md:font-semibold md:text-xl text-dark-500">
              shop
            </h2>
          </div>
          {[0, 1, 2, 3, 4].map((items) => (
            <Link
              to={`/faq/how-to-get-away`}
              className="block py-6 space-y-3 border-t border-gray-100 md:px-8 lg:hover:bg-gray-100"
              key={items}
            >
              <h2 className="text-base font-medium md:text-xl text-dark-500">
                My order has not arrived. What can I do?
              </h2>
              <p className="text-sm text-dark-300 md:text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit doloribus laudantium excepturi dolorum facere
                possimus unde quisquam autem eaque soluta iure...
              </p>
            </Link>
          ))}
        </motion.div>

        {/* Side section  */}
        <SideSection />
      </div>
    </div>
  );
};

export default FaqCat;
