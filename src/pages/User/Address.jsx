import { motion } from "framer-motion";
import { SlideIn } from "../../variant";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import UserTitleLayout from "../../components/UserTitleLayout";

const Address = () => {
  return (
    <motion.div
      variants={SlideIn("right")}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <UserTitleLayout title={"address book"} />
      <form className="mt-8 space-y-6 md:space-y-10">
        <div className="space-y-5 md:space-y-0 md:gap-y-0 md:flex md:gap-x-10">
          <div className="relative flex-1">
            <p className="text-dark-200 text-xs md:text-sm absolute capitalize left-3 md:left-5 -top-[8px] lg:-top-[9px] bg-white">
              First name
            </p>
            <input
              type="text"
              placeholder="Ayoola"
              name="firstname"
              required
              className="w-full px-3 py-3.5 text-sm bg-transparent border border-gray-200 rounded-lg md:px-5 md:py-4 focus:outline-none md:text-base"
            />
          </div>
          <div className="relative flex-1">
            <p className="text-dark-200 text-xs md:text-sm absolute capitalize left-3 md:left-5 -top-[8px] lg:-top-[9px] bg-white">
              last name
            </p>
            <input
              type="text"
              placeholder="Ogunbase"
              name="lastname"
              required
              className="w-full px-3 py-3.5 md:px-5 text-sm md:text-base md:py-4 bg-transparent border border-gray-200 rounded-lg focus:outline-none"
            />
          </div>
        </div>
        <div className="space-y-5 md:space-y-0 md:gap-y-0 md:flex md:gap-x-10">
          <div className="flex items-center flex-1 space-x-3 md:space-x-6">
            <div className="space-y-1">
              <p className="text-xs text-dark-200 md:text-sm">Prefix</p>
              <p className="text-xs text-dark-500 md:text-sm">+234</p>
            </div>
            <div className="relative w-full">
              <p className="text-dark-200 text-xs md:text-sm absolute capitalize left-3 md:left-5 -top-[8px] lg:-top-[9px] bg-white">
                phone number
              </p>
              <input
                type="number"
                placeholder="9058419649"
                name="phone_number"
                required
                className="w-full px-3 py-3.5 md:px-5 text-sm md:text-base md:py-4 bg-transparent border border-gray-200 rounded-lg focus:outline-none"
              />
            </div>
          </div>
          <div className="flex flex-1 space-x-3 md:space-x-6">
            <div className="space-y-1">
              <p className="text-xs text-dark-200 md:text-sm">Prefix</p>
              <p className="text-xs text-dark-500 md:text-sm">+234</p>
            </div>
            <div className="relative w-full">
              <p className="text-dark-200 text-xs md:text-sm absolute capitalize left-3 md:left-5 -top-[8px] lg:-top-[9px] bg-white">
                additional phone number
              </p>
              <input
                type="number"
                placeholder="9058419649"
                name="add_phone_number"
                required
                className="w-full px-3 py-3.5 md:px-5 text-sm md:text-base md:py-4 bg-transparent border border-gray-200 rounded-lg focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div className="space-y-5 md:space-y-0 md:gap-y-0 md:flex md:gap-x-10">
          <div className="relative flex-1">
            <p className="text-dark-200 text-xs md:text-sm absolute capitalize left-3 md:left-5 -top-[8px] lg:-top-[9px] bg-white">
              delivery address
            </p>
            <textarea
              type="text"
              placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora"
              name="address"
              cols="30"
              rows="3"
              required
              className="w-full px-3 py-3.5 md:px-5 text-sm md:text-base md:py-4 bg-transparent border border-gray-200 rounded-lg focus:outline-none resize-none"
            />
          </div>
          <div className="relative flex-1">
            <p className="text-dark-200 text-xs md:text-sm absolute capitalize left-3 md:left-5 -top-[8px] lg:-top-[9px] bg-white">
              additional information
            </p>
            <textarea
              type="text"
              placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, optio similique officia neque"
              name="info"
              cols="30"
              rows="3"
              required
              className="w-full px-3 py-3.5 md:px-5 text-sm md:text-base md:py-4 bg-transparent border border-gray-200 rounded-lg focus:outline-none resize-none"
            />
          </div>
        </div>
        <div className="space-y-5 md:space-y-0 md:gap-y-0 md:flex md:gap-x-10">
          <div className="relative flex-1">
            <label
              htmlFor="regionId"
              className="text-dark-200 text-xs md:text-sm absolute capitalize left-3 md:left-5 -top-[8px] lg:-top-[9px] bg-white"
            >
              region
            </label>
            <select
              id="regionId"
              className="w-full px-3 py-3.5 text-sm md:text-base bg-transparent md:px-5 md:py-4 capitalize border border-gray-200 rounded-lg appearance-none text-dark-500 focus:outline-none"
            >
              <option>Please select</option>
              <option value="abia">abia</option>
              <option value="ogun">ogun</option>
              <option value="lagos">lagos</option>
              <option value="ibadan">ibadan</option>
            </select>
            <MdOutlineKeyboardArrowDown className="absolute top-[50%] -translate-y-[50%] right-5 text-xl md:text-2xl" />
          </div>
          <div className="relative flex-1">
            <label
              htmlFor="regionId"
              className="text-dark-200 text-xs md:text-sm absolute capitalize left-3 md:left-5 -top-[8px] lg:-top-[9px] bg-white"
            >
              city
            </label>
            <select
              id="regionId"
              className="w-full px-3 py-3.5 text-sm bg-transparent md:text-base md:px-5 md:py-4 capitalize border border-gray-200 rounded-lg appearance-none text-dark-500 focus:outline-none"
            >
              <option>Please select</option>
              <option value="abia">abia</option>
              <option value="ogun">ogun</option>
              <option value="lagos">lagos</option>
              <option value="ibadan">ibadan</option>
            </select>
            <MdOutlineKeyboardArrowDown className="absolute top-[50%] -translate-y-[50%] right-5 text-xl md:text-2xl" />
          </div>
        </div>
        <div className="flex justify-end w-full">
          <button className="w-[120px] py-2.5 md:w-[150px] rounded-lg md:py-4 bg-dark-600 text-light-500">
            Save
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Address;
