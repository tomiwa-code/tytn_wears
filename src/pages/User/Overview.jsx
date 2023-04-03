import { GiPencil } from "react-icons/gi";
import { motion } from "framer-motion";
import { prods, SlideIn } from "../../variant";
import UserTitleLayout from "../../components/UserTitleLayout";

const Overview = ({ switchToAddress }) => {
  return (
    <motion.div
      variants={SlideIn("right")}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-between">
        <UserTitleLayout title={"account overview"} />
        <GiPencil
          className="text-base cursor-pointer text-dark-500 md:text-xl"
          onClick={() => switchToAddress("address-book")}
        />
      </div>
      <div className="flex-wrap mt-5 space-y-5 md:flex md:gap-x-6 lg:gap-x-0 lg:mt-10 md:space-y-0 gap-y-5">
        <div className="flex-1">
          <div className="lg:w-[450px] space-y-2 border border-gray-200 rounded-lg p-5 lg:px-8 lg:h-52 lg:py-10">
            <h2 className="text-sm font-semibold capitalize text-dark-500 md:text-lg lg:text-xl">
              ayoola ogunbase
            </h2>
            <p className="text-sm text-dark-200 md:text-base">
              Id: tytn120231921412125321
            </p>
            <p className="text-sm text-dark-300 md:text-base">
              Email: ogunbaseayoola@gmail.com
            </p>
            <p className="text-sm text-dark-500 md:text-base">
              <span className="mr-2 font-medium">Level:</span> Newbie
            </p>
          </div>
        </div>
        <div className="flex-1">
          <div className="lg:w-[450px] space-y-2 border border-gray-200 rounded-lg p-5 lg:px-8 lg:h-52 lg:py-10">
            <h2 className="text-sm font-semibold capitalize text-dark-500 md:text-lg lg:text-xl">
              Shipping address
            </h2>
            <div className="space-y-3">
              <p className="text-sm capitalize text-dark-400 md:text-base">
                <span className="mr-2 text-sm font-medium md:text-base">
                  Address:
                </span>
                10 soyindo ile-fayiga ogun state ogun-sagamu-remo ogijo
              </p>
              <p className="lg:w-[500px] text-dark-400 capitalize text-sm md:text-base">
                <span className="mr-2 font-medium">Phones:</span>+2349120749746
                / +2349058419649
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Overview;
