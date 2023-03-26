import { motion } from "framer-motion";
import ListProduct from "../../components/ListProduct";
import { prods, SlideIn } from "../../variant";
import { newArrivalArr } from "../Home/data";

const SavedItems = () => {
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
        Saved items
      </motion.h2>
      <div className="mt-5 grid grid-cols-3 gap-y-10">
        {newArrivalArr.map((items) => (
          <ListProduct prodData={items} saved={true} key={items.id} />
        ))}
      </div>
    </motion.div>
  );
};

export default SavedItems;
