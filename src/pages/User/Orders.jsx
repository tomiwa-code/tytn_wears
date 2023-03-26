import { motion } from "framer-motion";
import { useState } from "react";
import { prods, SlideIn } from "../../variant";
import new2 from "../../assets/img/new2.jpg";
import heroImg2 from "../../assets/img/heroImg2.jpg";
import short from "../../assets/img/short.jpg";
import Order from "../../components/Order";

const Orders = () => {
  const [openOrder, setOpenOrder] = useState(true);

  const openOrderArr = [
    {
      id: 234321,
      img: new2,
      title: "swift hoodie",
      price: 6000,
      status: "in production",
    },
    {
      id: 543323,
      img: heroImg2,
      title: "shorty hottie",
      price: 9500,
      status: "delivering",
    },
    {
      id: 343323,
      img: short,
      title: "shorty blue",
      price: 9500,
      status: "packaging",
    },
  ];

  const closeOrderArr = [
    {
      id: 234321,
      img: new2,
      title: "swift hoodie",
      price: 6000,
      status: "canceled",
    },
    {
      id: 543323,
      img: heroImg2,
      title: "shorty hottie",
      price: 9500,
      status: "delivered",
    },
  ];

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
        orders
      </motion.h2>
      <div className="w-full flex items-center border-b border-gray-100 mt-5">
        <button
          className={`${
            openOrder ? "bg-transparent border-b-2 border-dark-500" : ""
          } text-center px-6 uppercase py-4`}
          onClick={() => setOpenOrder((prev) => !prev)}
        >
          open orders ({openOrderArr.length})
        </button>
        <button
          className={`${
            !openOrder ? "bg-transparent border-b-2 border-dark-500" : ""
          } text-center px-6 uppercase py-4`}
          onClick={() => setOpenOrder((prev) => !prev)}
        >
          close orders ({closeOrderArr.length})
        </button>
      </div>
      <div className="w-full mt-8 space-y-5">
        {openOrder
          ? openOrderArr.map((items) => (
              <Order orderData={items} key={items.id} />
            ))
          : closeOrderArr.map((items) => (
              <Order orderData={items} key={items.id} />
            ))}
      </div>
    </motion.div>
  );
};

export default Orders;
