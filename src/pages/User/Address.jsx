import { motion } from "framer-motion";
import { prods, SlideIn } from "../../variant";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Address = () => {
  return (
    <motion.div
      variants={SlideIn("right")}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.h2
        variants={prods}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="capitalize text-xl font-semibold"
      >
        Address book
      </motion.h2>
      <form className="space-y-10 mt-8">
        <div className="flex gap-x-10">
          <div className="flex-1 relative">
            <p className="text-dark-200 text-sm absolute capitalize left-5 -top-[9px] bg-white">
              First name
            </p>
            <input
              type="text"
              placeholder="Ayoola"
              name="firstname"
              required
              className="w-full bg-transparent rounded-lg px-5 py-4 border border-gray-200 focus:outline-none"
            />
          </div>
          <div className="flex-1 relative">
            <p className="text-dark-200 text-sm absolute capitalize left-5 -top-[9px] bg-white">
              last name
            </p>
            <input
              type="text"
              placeholder="Ogunbase"
              name="lastname"
              required
              className="w-full bg-transparent rounded-lg px-5 py-4 border border-gray-200 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex gap-x-10">
          <div className="flex-1 flex space-x-6">
            <div className="space-y-1">
              <p className="text-dark-200">Prefix</p>
              <p className="text-dark-500">+234</p>
            </div>
            <div className="relative w-full">
              <p className="text-dark-200 text-sm absolute capitalize left-5 -top-[9px] bg-white">
                phone number
              </p>
              <input
                type="number"
                placeholder="9058419649"
                name="phone_number"
                required
                className="w-full bg-transparent rounded-lg px-5 py-4 border border-gray-200 focus:outline-none placeholder:text-dark-200"
              />
            </div>
          </div>
          <div className="flex-1 flex space-x-6">
            <div className="space-y-1">
              <p className="text-dark-200">Prefix</p>
              <p className="text-dark-500">+234</p>
            </div>
            <div className="relative w-full">
              <p className="text-dark-200 text-sm absolute capitalize left-5 -top-[9px] bg-white">
                additional phone number
              </p>
              <input
                type="number"
                placeholder="9058419649"
                name="add_phone_number"
                required
                className="w-full bg-transparent rounded-lg px-5 py-4 border border-gray-200 focus:outline-none placeholder:text-dark-200"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-x-10">
          <div className="flex-1 relative">
            <p className="text-dark-200 text-sm absolute capitalize left-5 -top-[9px] bg-white">
              delivery address
            </p>
            <textarea
              type="text"
              placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora"
              name="address"
              cols="30"
              rows="3"
              required
              className="w-full bg-transparent rounded-lg px-5 py-4 border border-gray-200 focus:outline-none placeholder:text-dark-200 resize-none"
            />
          </div>
          <div className="flex-1 relative">
            <p className="text-dark-200 text-sm absolute capitalize left-5 -top-[9px] bg-white">
              additional information
            </p>
            <textarea
              type="text"
              placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, optio similique officia neque"
              name="info"
              cols="30"
              rows="3"
              required
              className="w-full bg-transparent rounded-lg px-5 py-4 border border-gray-200 focus:outline-none placeholder:text-dark-200 resize-none"
            />
          </div>
        </div>
        <div className="flex gap-x-10">
          <div className="flex-1 relative">
            <label
              htmlFor="regionId"
              className="text-dark-200 text-sm absolute capitalize left-5 -top-[9px] bg-white"
            >
              region
            </label>
            <select
              id="regionId"
              className="w-full appearance-none rounded-lg px-5 text-dark-500 capitalize py-4 border border-gray-200 focus:outline-none"
            >
              <option>Please select</option>
              <option value="abia">abia</option>
              <option value="ogun">ogun</option>
              <option value="lagos">lagos</option>
              <option value="ibadan">ibadan</option>
            </select>
            <MdOutlineKeyboardArrowDown className="absolute top-[50%] -translate-y-[50%] right-5 text-2xl" />
          </div>
          <div className="flex-1 relative">
            <label
              htmlFor="regionId"
              className="text-dark-200 text-sm absolute capitalize left-5 -top-[9px] bg-white"
            >
              city
            </label>
            <select
              id="regionId"
              className="w-full appearance-none rounded-lg px-5 text-dark-500 capitalize py-4 border border-gray-200 focus:outline-none"
            >
              <option>Please select</option>
              <option value="abia">abia</option>
              <option value="ogun">ogun</option>
              <option value="lagos">lagos</option>
              <option value="ibadan">ibadan</option>
            </select>
            <MdOutlineKeyboardArrowDown className="absolute top-[50%] -translate-y-[50%] right-5 text-2xl" />
          </div>
        </div>
        <div className="w-full flex justify-end">
          <button className="w-[150px] rounded-lg py-4 bg-dark-600 text-light-500">
            Save
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Address;
