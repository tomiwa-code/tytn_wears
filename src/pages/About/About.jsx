import { BsInstagram, BsTwitter } from "react-icons/bs";
import man1 from "../../assets/img/man1.jpg";
import man2 from "../../assets/img/man2.jpg";
import lady2 from "../../assets/img/lady2.jpg";
import lady1 from "../../assets/img/lady1.jpg";
import lady3 from "../../assets/img/lady3.jpg";
import lady4 from "../../assets/img/lady4.jpg";
import { motion } from "framer-motion";
import { fadeIn, hero, SlideIn, staggerParent } from "../../variant";

const meetArr = [
  {
    id: 1,
    title: "CEO",
    name: "eren yeager",
    img: man1,
  },
  {
    id: 2,
    title: "designer",
    name: "mikasa ackerman",
    img: lady2,
  },
  {
    id: 3,
    title: "customer service",
    name: "armin arlert",
    img: man2,
  },
  {
    id: 4,
    title: "marketer",
    name: "annie leonhart",
    img: lady1,
  },
  {
    id: 5,
    title: "designer",
    name: "sasha braus",
    img: lady3,
  },
  {
    id: 6,
    title: "customer service",
    name: "gabi braun",
    img: lady4,
  },
];

const About = () => {
  return (
    <div>
      <motion.div
        variants={hero}
        initial="initial"
        animate="animate"
        className="overflow-hidden min-h-[730px] about-tytn -mt-20 relative before:absolute before:inset-0 before:bg-dark-500 before:bg-opacity-80"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.h2
            initial={{
              opacity: 0,
              y: -100,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: [1],
              transition: {
                duration: 2,
                type: "spring",
                stiffness: 150,
                delay: 0.5,
              },
            }}
            className="tracking-widest text-center font-extrabold text-5xl lg:text-8xl text-light-200 uppercase"
          >
            tytn
          </motion.h2>
          <motion.p
            animate={{
              y: [0, 10, 0],
              transition: {
                delay: 0.7,
                type: "spring",
                stiffness: 300,
                damping: 0.8,
              },
            }}
            className="italic text-light-100 font-light text-sm md:text-base text-center mt-2 md:mt-0"
          >
            Unleash the power of your style with TYTN
          </motion.p>
        </div>
        <div className="w-[110%] h-24 bg-light-200 blur-lg absolute -left-10 -bottom-10 hidden md:block"></div>
      </motion.div>
      <div className="mt-10">
        <motion.h2
          variants={fadeIn("up")}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={0.2}
          className="text-dark-500 text-center uppercase font-bold text-xl"
        >
          meet the team
        </motion.h2>

        <motion.p
          variants={fadeIn("down")}
          custom={0.9}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center text-dark-200 text-sm"
        >
          Don't forget you're also part of the team
        </motion.p>
        <motion.div
          variants={staggerParent}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-wrap items-center gap-x-5 gap-y-10 justify-center mt-10 w-[60%] mx-auto"
        >
          {meetArr.map(({ id, title, name, img }) => (
            <motion.div
              variants={SlideIn("left")}
              className="space-y-3"
              key={id}
            >
              <div className="w-60 h-72 overflow-hidden">
                <img
                  src={img}
                  alt="mike"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="text-center">
                <p className="capitalize font-semibold text-dark-500">{name}</p>
                <p className="text-dark-200 capitalize">{title}</p>
              </div>
              <div className="flex space-x-5 items-center justify-center">
                <a href="http://www.twitter.com">
                  <BsTwitter className="text-dark-200 text-2xl" />
                </a>
                <a href="http://www.twitter.com">
                  <BsInstagram className="text-dark-200 text-2xl" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.p
          variants={fadeIn("up")}
          initial="initial"
          whileInView="animate"
          className="font-medium text-xl text-dark-500 mt-24 italic text-center"
        >
          Thank you for choosing us
        </motion.p>
      </div>
    </div>
  );
};

export default About;
