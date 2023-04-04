import { motion } from "framer-motion";
import ListProduct from "../../components/ListProduct";
import { SlideIn } from "../../variant";
import { newArrivalArr } from "../Home/data";
import UserTitleLayout from "../../components/UserTitleLayout";

const SavedItems = () => {
  return (
    <motion.div
      variants={SlideIn("right")}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <UserTitleLayout title={"saved items"} />
      <div className="flex flex-wrap items-center mt-5 gap-x-5 gap-y-5 md:gap-y-10">
        {newArrivalArr.map((items) => (
          <ListProduct prodData={items} saved={true} key={items.id} />
        ))}
      </div>
    </motion.div>
  );
};

export default SavedItems;
