import { GiPencil } from "react-icons/gi";
import { motion } from "framer-motion";
import { prods, SlideIn } from "../../variant";

const Overview = ({ switchToAddress }) => {
  return (
    <motion.div
      variants={SlideIn("right")}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-between">
        <motion.h2
          variants={prods}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="capitalize text-xl font-semibold"
        >
          account overview
        </motion.h2>
        <GiPencil
          className="text-dark-500 text-xl cursor-pointer"
          onClick={() => switchToAddress("address-book")}
        />
      </div>
      <div className="flex mt-10">
        <div className="flex-1">
          <div className="w-[450px] space-y-2 border border-gray-100 rounded-lg px-8 h-52 py-10">
            <h2 className="capitalize text-dark-500 text-xl font-semibold">
              ayoola ogunbase
            </h2>
            <p className="text-dark-200 ">Id: tytn120231921412125321</p>
            <p className="text-dark-300">Email: ogunbaseayoola@gmail.com</p>
            <p className="text-dark-500">
              <span className="mr-2 font-medium">Level:</span> Newbie
            </p>
          </div>
        </div>
        <div className="flex-1">
          <div className="w-[450px] space-y-2 border border-gray-100 rounded-lg px-8 h-52 py-10">
            <h2 className=" text-lg text-dark-500 font-semibold">
              Shipping address
            </h2>
            <div className="space-y-3">
              <p className=" text-dark-400 capitalize">
                <span className="mr-2 font-medium">Address:</span>10 soyindo
                ile-fayiga ogun state ogun-sagamu-remo ogijo
              </p>
              <p className="w-[500px] text-dark-400 capitalize">
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
