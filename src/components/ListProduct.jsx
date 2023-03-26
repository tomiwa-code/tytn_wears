import { BsHeart, BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ListProduct = ({ prodData, saved }) => {
  const { id, img, title, price } = prodData;

  return (
    <div className="pb-5 bg-light-500 w-[150px] md:w-52 lg:w-72 overflow-hidden">
      <Link to={`/shop_product/${id}`}>
        <div className="w-full h-[150px] md:h-52 lg:h-72 overflow-hidden">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover hover:scale-110 duration-200"
          />
        </div>
      </Link>
      <div className="px-3 md:px-5">
        <div className="flex items-center justify-between mt-3">
          <h2 className="font-medium text-sm md:text-lg capitalize text-dark-500">
            {title}
          </h2>
          {saved ? (
            <BsHeartFill className="text-sm md:text-lg text-dark-500 cursor-pointer" />
          ) : (
            <BsHeart className="text-sm md:text-lg text-dark-500 cursor-pointer" />
          )}
        </div>
        <div className="flex items-center justify-between mt-2">
          <p className="font-medium text-base md:text-lg text-dark-300">
            NGN {price.toFixed(2)}
          </p>
          {/* <button className="text-dark-500 font-semibold hover:tracking-wider duration-150">
            Buy Now
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
