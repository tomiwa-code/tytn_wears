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
    <div className="mt-8 space-y-14">
      <SearchFaq />
      <div className="flex px-10 gap-12">
        <motion.div
          variants={prods}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex-[2] overflow-hidden bg-light-300 py-8 rounded-lg"
        >
          <div className="flex items-center space-x-3 px-8">
            <Link to={"/"} className="capitalize text-dark-200 font-medium">
              home /
            </Link>
            <Link to={"/faqs"} className="capitalize text-dark-200 font-medium">
              faqs /
            </Link>
            <p className="capitalize text-dark-500 font-medium">shop</p>
          </div>
          <div className="mt-10 flex items-center space-x-3 pb-10 px-8">
            <BsCart2 className="text-2xl text-dark-500" />
            <h2 className="capitalize text-xl text-dark-500 font-semibold">
              shop
            </h2>
          </div>
          {[0, 1, 2, 3, 4].map((items) => (
            <Link
              to={`/faq`}
              className="space-y-3 py-6 block border-t border-gray-100 hover:bg-gray-100 px-8"
              key={items}
            >
              <h2 className="font-medium text-xl text-dark-500">
                My order has not arrived. What can I do?
              </h2>
              <p className="text-dark-300">
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
