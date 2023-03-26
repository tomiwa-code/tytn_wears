import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import new2 from "../assets/img/new2.jpg";

const Search = ({ closeSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    function handleEscapeKey(e) {
      if (e.code === "Escape") {
        closeSearch();
      }
    }
    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, []);

  return (
    <div className="fixed inset-0 z-50">
      {/* Dark overlay  */}
      <div
        className="absolute inset-0 bg-dark-500 z-10 bg-opacity-20 backdrop-blur-sm cursor-pointer"
        onClick={() => closeSearch()}
      ></div>
      <div className="mx-5 rounded-xl md:mx-auto md:w-[80%] lg:w-[55%] mt-20 bg-dark-700 min-h-[200px] md:min-h-[300px] relative z-20">
        <div className="px-3 md:px-5 border-b border-dark-100 flex items-center justify-between py-4">
          <div className="flex space-x-5 items-center text-light-500">
            <BsSearch />
            <input
              type="text"
              placeholder="Search product"
              className="focus:outline-none md:w-[400px] text-sm md:text-base w-[80%] bg-transparent placeholder:text-dark-300"
              onChange={handleSearch}
              autoFocus
            />
          </div>
          <button
            className="text-light-200 px-2 py-1 rounded-lg bg-dark-300 text-xs"
            onClick={() => closeSearch()}
          >
            Esc
          </button>
        </div>
        <div className="py-3 md:py-6">
          <>
            <h2 className="text-light-200 px-5 md:px-10 font-medium text-base md:text-xl mb-5">
              You search for "{searchInput}"
            </h2>
            <div className="space-y-3 h-[300px] md:h-[400px] overflow-y-auto">
              {[0, 1, 2, 3].map((items) => (
                <div
                  className="mx-3 md:mx-6 p-4 bg-dark-600 rounded-lg hover:bg-dark-400 hover:text-light-500 text-dark-200"
                  key={items}
                >
                  <Link
                    to={`/shop_product/${items}`}
                    className="flex items-center justify-between"
                    onClick={() => closeSearch()}
                  >
                    <div className="flex items-center space-x-5">
                      <div className="overflow-hidden rounded-lg w-14 h-14 md:w-20 md:h-20">
                        <img src={new2} alt="title" className="object-cover" />
                      </div>
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm md:text-lg capitalize font-medium">
                          swift hoodie
                        </p>
                        <p className="text-sm md:text-lg">NGN 6000.00</p>
                      </div>
                    </div>
                    <MdOutlineKeyboardArrowRight className="text-3xl" />
                  </Link>
                </div>
              ))}
            </div>
          </>
          {/* <h2 className="text-light-500 px-6 absolute top-[55%] -translate-y-[50%] w-full text-center  text-xl font-raleway">
            "No result for {searchInput}"
          </h2> */}
          {/* <h2 className="text-light-500 px-6 absolute top-[55%] w-full text-center -translate-y-[50%] md:text-xl font-raleway">
            Waiting for you to search
          </h2> */}
        </div>
      </div>
    </div>
  );
};

export default Search;
