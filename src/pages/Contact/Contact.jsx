import { MdAttachFile, MdOutlineClose } from "react-icons/md";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, SlideIn } from "../../variant";
import contactImg from "../../assets/img/contact.jpg";
import TalkWithUs from "../../components/TalkWithUs";

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
    <div className="px-5 mt-2 overflow-hidden lg:px-10 md:mt-5 lg:mt-8">
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
              className="object-cover w-full h-full"
            />
          </div>
          <h2 className="absolute capitalize font-medium z-10 font-dancing lg:text-4xl xl:text-5xl lg:top-[30%] xl:top-[23%] left-[54%] opacity-95 text-light-300">
            contact us.
          </h2>
        </motion.div>
        <div className="flex-1 rounded-lg lg:bg-white md:px-6 lg:py-8">
          <motion.h2
            variants={fadeIn("down")}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-5 text-2xl font-semibold text-dark-500 md:text-3xl lg:hidden"
          >
            Contact us
          </motion.h2>
          <motion.form
            variants={SlideIn("right")}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-2 md:space-y-5"
          >
            <div className="items-center gap-8 space-y-2 md:flex md:space-y-0">
              <div className="flex-1 space-y-1 md:space-y-3">
                <span className="text-xs font-medium md:text-sm text-dark-500">
                  Full name
                </span>
                <input
                  type="text"
                  placeholder="Ayoola ogunbase"
                  className="w-full placeholder:text-dark-200 text-xs md:text-base focus:outline-none bg-[transparent] rounded-lg border border-dark-100 p-3 md:py-4 md:px-5"
                />
              </div>
              <div className="flex-1 space-y-1 md:space-y-3">
                <span className="text-xs font-medium md:text-sm text-dark-500">
                  Your email address
                </span>
                <input
                  type="text"
                  placeholder="example@gmail.com"
                  className="w-full placeholder:text-dark-200 text-xs md:text-base focus:outline-none bg-[transparent] rounded-lg border border-dark-100 p-3 md:py-4 md:px-5"
                />
              </div>
            </div>
            <div className="space-y-1 md:space-y-3">
              <span className="text-xs font-medium md:text-sm text-dark-500">
                Type of issue
              </span>
              <input
                type="text"
                placeholder="I want to make a pre-order"
                className="w-full placeholder:text-dark-200 text-xs md:text-base focus:outline-none bg-[transparent] rounded-lg border border-dark-100 p-3 md:py-4 md:px-5"
              />
            </div>
            <div className="space-y-1 md:space-y-3">
              <span className="text-xs font-medium md:text-sm text-dark-500">
                Tell us more
              </span>
              <textarea
                cols="30"
                rows="5"
                placeholder="I would like to make a pre-order and I  don't know if that is possible..."
                className="w-full placeholder:text-dark-200 text-xs md:text-base resize-none focus:outline-none bg-[transparent] rounded-lg border border-dark-100 p-3 md:py-4 md:px-5"
              ></textarea>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium md:text-sm">
                  Attach a file
                </span>
                <p className="text-xs text-dark-200 md:text-sm">
                  Maximum file size: 25 MB
                </p>
              </div>
              <div className="relative w-full p-3 border rounded-lg border-dark-100 md:py-4 md:px-5">
                <label
                  htmlFor="attachment-file-input"
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <MdAttachFile className="text-lg md:text-3xl text-dark-200" />
                  {fileInfo.name !== "" && fileInfo.size !== "" ? (
                    <span className="text-sm">
                      {fileInfo.name}{" "}
                      <span className="text-xs text-dark-200 md:text-base">
                        ({fileInfo.size}MB)
                      </span>
                    </span>
                  ) : (
                    <span className="text-xs text-dark-200 md:text-base">
                      Choose Files
                    </span>
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
                    className="text-dark-200 text-lg md:text-2xl cursor-pointer absolute right-5 top-[50%] -translate-y-[50%]"
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
              <div className="pt-4 md:pt-6">
                <button className="w-full px-8 py-3 text-sm font-medium rounded-lg md:text-base md:py-5 bg-dark-700 text-light-500">
                  Submit
                </button>
              </div>
            </div>
          </motion.form>
        </div>
      </div>

      <TalkWithUs />
    </div>
  );
};

export default Contact;
