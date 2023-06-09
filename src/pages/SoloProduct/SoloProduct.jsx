import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ListProduct from "../../components/ListProduct";
import SoloProductDetails from "../../components/SoloProductDetails";
import { getSoloProduct, trendingShopArr } from "../Home/data";
import { motion } from "framer-motion";
import { prods, SlideIn, staggerParent } from "../../variant";

const SoloProduct = () => {
  const productId = useParams().id;
  const [selectedImage, setSelectedImage] = useState("img");

  return (
    <div className="mt-12 px-10">
      <motion.div
        variants={prods}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="space-x-3 flex items-center"
      >
        <Link
          to={"/"}
          className="capitalize text-gray-500 opacity-80 font-medium"
        >
          home /
        </Link>
        <Link
          to={"/shop/allproduts"}
          className="capitalize text-gray-500 opacity-80 font-medium"
        >
          shop /
        </Link>
        <Link
          to={`/shop/hoodie`}
          className="capitalize text-gray-500 opacity-80 font-medium"
        >
          hoodie /
        </Link>
        <p className="capitalize text-dark-500 opacity-90 font-semibold">
          swift hoodie
        </p>
      </motion.div>
      <div className="mt-10 flex px-6 gap-x-10 items-center">
        <motion.div
          variants={SlideIn("left")}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="rounded-xl w-[500px] h-[500px] overflow-hidden">
            <img
              src={getSoloProduct.img}
              alt="solo product"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
        <SoloProductDetails soloProduct={getSoloProduct} />
      </div>

      {/* Releated products  */}
      <div className="mt-20 space-y-10">
        <motion.h2
          variants={prods}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.7 }}
          className="capitalize font-semibold text-xl text-dark-500 px-[102px]"
        >
          related products
        </motion.h2>
        <motion.div
          variants={staggerParent}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          className="flex gap-x-5 items-center justify-center"
        >
          {trendingShopArr.map((items) => (
            <motion.div variants={prods} key={items.id}>
              <ListProduct prodData={items} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SoloProduct;
