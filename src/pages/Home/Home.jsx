import heroImg from "../../assets/img/heroImg.jpg";
import heroImg2 from "../../assets/img/heroImg2.jpg";
import new1 from "../../assets/img/new1.jpg";
import short from "../../assets/img/short.jpg";
import hoodie from "../../assets/img/hoodie.jpg";
import joggers from "../../assets/img/joggers.jpg";
import tshirt from "../../assets/img/tshirt.jpg";
import sweaty from "../../assets/img/sweaty.jpg";
import { TbTruckDelivery } from "react-icons/tb";
import { TbHanger } from "react-icons/tb";
import { TbTruckReturn } from "react-icons/tb";
import { BsBoxSeam } from "react-icons/bs";
import { motion } from "framer-motion";
import {
  fadeIn,
  hero,
  heroImgAnimate,
  heroProd,
  hideText,
  hideText2,
  navLinks,
  prods,
  staggerParent,
} from "../../variant";
import Carousel from "antd/es/carousel";
import { heroProduct, newArrivalArr, trendingArr, weOffer } from "./data";
import ListProduct from "../../components/ListProduct";
import TitleLayout from "../../components/TitleLayout";
import CollectionsLayout from "../../components/CollectionsLayout";

const Home = () => {
  function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }
  const randomNum = getRandomNum(0, 3);

  return (
    <motion.div
      variants={hero}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="px-5 md:px-0"
    >
      {/* Hero Section  */}
      <div className="min-h-[650px] md:flex md:space-x-12 lg:space-x-0 overflow-hidden space-y-20 md:space-y-0 mt-6">
        <div className="flex-1">
          <div className="relative h-full flex items-center justify-center md:justify-end lg:pr-8">
            <div className="absolute left-10 z-10 hidden lg:block">
              <motion.h2
                variants={hideText}
                className="text-7xl md:text-8xl font-bold text-dark-300 tracking-wide"
              >
                TYTN
              </motion.h2>
              <motion.p
                variants={hideText2}
                className="font-dancing text-5xl text-center font-medium text-dark-500"
              >
                wears
              </motion.p>
            </div>
            <motion.div
              variants={heroImgAnimate}
              className="w-80 h-[450px] overflow-hidden"
            >
              <Carousel autoplay dots={false}>
                <img
                  src={heroImg}
                  alt="heroImg"
                  className="w-full h-full object-cover"
                />
                <img
                  src={new1}
                  alt="heroImg"
                  className="w-full h-full object-cover"
                />
                <img
                  src={heroImg2}
                  alt="heroImg"
                  className="w-full h-full object-cover"
                />
              </Carousel>
            </motion.div>
          </div>
        </div>

        <motion.div variants={heroProd} className="flex-1">
          <div className="relative h-full flex items-center lg:pl-20">
            <div className="lg:w-96 w-full">
              <div className="w-[70%] h-44 lg:w-[80%] md:h-52 overflow-hidden">
                <img
                  src={heroProduct[randomNum].img}
                  alt={heroProduct[randomNum].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex w-[80%] items-center md:justify-between mt-5 space-x-5 md:space-x-0">
                <h2 className="capitalize font-medium md:font-semibold text-base md:text-xl text-dark-500">
                  {heroProduct[randomNum].title}
                </h2>
                <p className="text-dark-400 md:text-dark-300 font-medium text-sm md:text-lg">
                  NGN {heroProduct[randomNum].price.toFixed(2)}
                </p>
              </div>
              <p className="hidden md:block text-base text-dark-500 md:mt-2 md:w-[80%] lg:w-auto">
                {heroProduct[randomNum].desc}
              </p>
              <p className="text-dark-300 w-[70%] text-sm mt-1 md:hidden">
                {heroProduct[randomNum].desc.substring(0, 50)}...
              </p>
              <button className="bg-dark-500 text-light-500 mt-2 md:rounded-lg px-6 py-2.5 md:px-10 md:py-4">
                Buy now
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* New  */}
      <motion.div
        variants={hero}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: true }}
        className="mt-20 md:mt-20 md:px-10"
      >
        {/* Title  */}
        <TitleLayout
          title={"New arrival"}
          subTitle={"Have a look at our new arrivals"}
        />

        <motion.div
          variants={staggerParent}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap items-start justify-center gap-x-5 gap-y-8 md:gap-y-12"
        >
          {newArrivalArr.map((items) => (
            <motion.div variants={prods} key={items.id}>
              <ListProduct prodData={items} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Collections  */}
      <div className="mt-20 md:mt-32 md:px-10">
        {/* Title  */}
        <TitleLayout
          title={"Collections"}
          subTitle={"Here are our collection"}
        />
        <div className="md:flex md:h-[400px] lg:h-[500px] mt-8 overflow-hidden rounded-xl">
          <div className="md:flex-1 md:flex">
            {/* Short  */}
            <CollectionsLayout
              height={"h-52"}
              custom1={1.4}
              custom2={2}
              img={short}
              text={"short"}
              linkTo={"shop/short"}
            />
            {/* Pullover  */}
            <CollectionsLayout
              height={"h-52"}
              custom1={1.6}
              custom2={2.2}
              img={hoodie}
              text={"hoodie"}
              linkTo={"shop/hoodie"}
            />
          </div>
          <div className="flex-1">
            <div className="w-full h-[250px]">
              {/* Sweatshirt  */}
              <CollectionsLayout
                height={"h-full"}
                height2={"h-full"}
                custom1={1.8}
                custom2={2.4}
                img={sweaty}
                text={"Sweatshirt"}
                linkTo={"shop/sweatshirt"}
              />
            </div>
            <div className="flex w-full h-[250px] lg:h-[250px] md:h-[150px]">
              {/* T-shirt  */}
              <CollectionsLayout
                height={"h-full"}
                custom1={2}
                custom2={2.6}
                img={tshirt}
                text={"T-shirt "}
                linkTo={"shop/tshirt "}
              />
              {/* Joggers  */}
              <CollectionsLayout
                height={"h-full"}
                custom1={2.2}
                custom2={2.8}
                img={joggers}
                text={"joggers "}
                linkTo={"shop/joggers "}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Trending products  */}
      <motion.div
        variants={hero}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: true }}
        className="mt-20 md:mt-40 md:px-10"
      >
        {/* Title  */}
        <TitleLayout
          title={"Trending products"}
          subTitle={"New trends you should look out for"}
        />
        <motion.div
          variants={staggerParent}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap items-start justify-center gap-x-5 gap-y-8 md:gap-y-12"
        >
          {trendingArr.map((items) => (
            <motion.div variants={prods} key={items.id}>
              <ListProduct prodData={items} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Discount on first order  */}
      <motion.div
        variants={fadeIn("up")}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: true, amount: 0.5 }}
        className="mt-20 md:mt-36 bg-dark-500 relative h-[300px] lg:h-[400px] before:opacity-10 offer before:absolute before:inset-0 overflow-hidden md:mx-10 rounded-xl flex items-center before:blur-sm"
      >
        <div className="text-center space-y-2 w-full">
          <h1 className="font-bold text-6xl lg:text-8xl text-light-500">
            20%
            <span className="font-semibold text-5xl lg:text-7xl text-light-500 block">
              Discounts
            </span>
            <span className="font-medium text-xl lg:text-2xl text-light-500 block">
              On first order
            </span>
          </h1>
        </div>
      </motion.div>

      {/* offers  */}
      <motion.div
        variants={staggerParent}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: true, amount: 0.5 }}
        className="grid grid-cols-2 gap-y-8 md:gap-y-0 md:flex md:space-x-2 mt-20 md:mt-40 md:px-20"
      >
        {weOffer.map(({ id, title }) => (
          <motion.div variants={navLinks} className="flex-1 space-y-5" key={id}>
            <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] text-3xl md:text-4xl lg:text-5xl text-light-500 bg-dark-500 rounded-full mx-auto flex items-center justify-center">
              {id === 1 ? (
                <TbTruckDelivery />
              ) : id === 2 ? (
                <BsBoxSeam />
              ) : id === 3 ? (
                <TbHanger />
              ) : (
                <TbTruckReturn />
              )}
            </div>
            <p className="text-center md:font-medium text-xs lg:text-base">
              {title}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Newsletter */}
      <motion.div
        variants={hero}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: true }}
        className="md:px-10 md:mt-32 mt-20"
      >
        <div className="space-y-3 md:space-y-4">
          <motion.h2
            variants={fadeIn("up")}
            custom={0.2}
            className="text-xl md:text-3xl text-dark-500 text-center font-semibold "
          >
            Be the
            <span className="text-light-500 px-2 py-1 bg-dark-500 uppercase tracking-wide">
              First
            </span>
            to know
          </motion.h2>
          <motion.p
            variants={fadeIn("down")}
            custom={0.9}
            className="text-dark-400 text-center text-sm md:text-base"
          >
            Whenever a new product is in stock
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn("up")}
          custom={1.2}
          className="mt-8 md:mt-12 space-y-5 flex items-center justify-center flex-col"
        >
          <input
            type="text"
            className="w-full md:w-[500px] bg-transparent border md:border-2 px-6 placeholder:text-dark-200 py-4 rounded-lg border-dark-200 block focus:outline-none text-sm md:text-base"
            placeholder="example@gmail.com"
          />
          <button className="w-full md:w-[500px] py-4 md:py-5 rounded-lg bg-dark-500 text-light-500 text-lg">
            Subscribe
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
