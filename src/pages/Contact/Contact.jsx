import { MdAttachFile, MdOutlineClose } from "react-icons/md";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, SlideIn } from "../../variant";
import { BsInstagram, BsPhone, BsWhatsapp } from "react-icons/bs";
import contactImg from "../../assets/img/contact.jpg";

const Contact = () => {
  const [fileInfo, setFileInfo] = useState({
    name: "",
    size: 0,
  });

  const fileRef = useRef();

  const handleFileChange = (e) => {
    const name = e.target.files[0].name;
    const covertToByte = e.target.files[0].size / 1024;
    const size = covertToByte / 1024;
    setFileInfo({
      name: name,
      size: size.toFixed(1),
    });
  };

  return (
    <div className="px-5 lg:px-10 mt-2 md:mt-5 lg:mt-8 overflow-hidden">
      <div className="flex gap-x-10">
        <motion.div
          variants={SlideIn("left")}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex-1 h-[680px] hidden lg:block relative rounded-lg overflow-hidden before:absolute before:inset-0 before:bg-dark-500 before:bg-opacity-40"
        >
          <div className="w-full h-full overflow-hidden">
            <img
              src={contactImg}
              alt="contact"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="absolute capitalize font-medium z-10 font-dancing lg:text-4xl xl:text-5xl lg:top-[30%] xl:top-[23%] left-[54%] opacity-95 text-light-300">
            contact us.
          </h2>
        </motion.div>
        <div className="flex-1 lg:bg-white md:px-6 lg:py-8 rounded-lg">
          <motion.h2
            variants={fadeIn("down")}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-dark-500 text-2xl md:text-3xl font-semibold lg:hidden mb-5"
          >
            Contact us
          </motion.h2>
          <motion.form
            variants={SlideIn("right")}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="md:flex items-center gap-8 space-y-5 md:space-y-0">
              <div className="space-y-3 flex-1">
                <span className="text-sm font-medium text-dark-500">
                  Full name
                </span>
                <input
                  type="text"
                  placeholder="Ayoola ogunbase"
                  className="w-full placeholder:text-dark-200 text-sm md:text-base focus:outline-none bg-[transparent] rounded-lg border border-dark-100 py-4 px-5"
                />
              </div>
              <div className="space-y-3 flex-1">
                <span className="text-sm font-medium text-dark-500">
                  Your email address
                </span>
                <input
                  type="text"
                  placeholder="example@gmail.com"
                  className="w-full placeholder:text-dark-200 text-sm md:text-base focus:outline-none bg-[transparent] rounded-lg border border-dark-100 py-4 px-5"
                />
              </div>
            </div>
            <div className="space-y-3">
              <span className="text-sm font-medium text-dark-500">
                Type of issue
              </span>
              <input
                type="text"
                placeholder="I want to make a pre-order"
                className="w-full placeholder:text-dark-200 text-sm md:text-base focus:outline-none bg-[transparent] rounded-lg border border-dark-100 py-4 px-5"
              />
            </div>
            <div className="space-y-3">
              <span className="text-sm font-medium text-dark-500">
                Tell us more
              </span>
              <textarea
                cols="30"
                rows="5"
                placeholder="I would like to make a pre-order and I  don't know if that is possible..."
                className="w-full placeholder:text-dark-200 text-sm md:text-base resize-none focus:outline-none bg-[transparent] rounded-lg border border-dark-100 py-4 px-5"
              ></textarea>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Attach a file</span>
                <p className="text-dark-200 text-sm">
                  Maximum file size: 25 MB
                </p>
              </div>
              <div className="border border-dark-100 w-full rounded-lg py-4 px-5 relative">
                <label
                  htmlFor="attachment-file-input"
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <MdAttachFile className="text-3xl text-dark-200" />
                  {fileInfo.name !== "" && fileInfo.size !== "" ? (
                    <span className="text-sm">
                      {fileInfo.name}{" "}
                      <span className="text-dark-200">({fileInfo.size}MB)</span>
                    </span>
                  ) : (
                    <span className=" text-dark-200">Choose Files</span>
                  )}
                </label>
                <input
                  id="attachment-file-input"
                  type="file"
                  hidden
                  className="w-full text-sm md:text-base"
                  ref={fileRef}
                  onChange={handleFileChange}
                />
                {fileInfo.name !== "" && fileInfo.size !== "" && (
                  <MdOutlineClose
                    className="text-dark-200 text-sm md:text-2xl cursor-pointer absolute right-5 top-[50%] -translate-y-[50%]"
                    onClick={() => {
                      fileRef.current.value = "";
                      setFileInfo({
                        name: "",
                        size: "",
                      });
                    }}
                  />
                )}
              </div>
              <div className="pt-6">
                <button className="px-8 font-medium w-full py-5 bg-dark-700 text-light-500 rounded-lg">
                  Submit
                </button>
              </div>
            </div>
          </motion.form>
        </div>
      </div>

      <motion.div
        variants={fadeIn("up")}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="mt-6 md:mt-12 lg:mt-24 py-10"
      >
        <h2 className="text-center font-semibold text-xl md:text-2xl">
          Need to talk with us?
        </h2>
        <div className="mt-5 md:mt-10 flex justify-center space-x-8 items center">
          <div className="bg-dark-500 text-light-500 hover:bg-light-500 hover:text-dark-500 duration-150 p-3 rounded-full">
            <a href="www.whatsapp.com">
              <BsWhatsapp className="text-2xl md:text-3xl" />
            </a>
          </div>
          <div className="bg-dark-500 text-light-500 hover:bg-light-500 hover:text-dark-500 duration-150 p-3 rounded-full">
            <a href="www.instagram.com">
              <BsInstagram className="text-2xl md:text-3xl" />
            </a>
          </div>
          <div className="bg-dark-500 text-light-500 hover:bg-light-500 hover:text-dark-500 duration-150 p-3 rounded-full">
            <a href="www.instagram.com">
              <BsPhone className="text-2xl md:text-3xl" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
