import { motion, useCycle, Variants } from "framer-motion";

const loaderVariants: Variants = {
  animationOne: {
    x: [-25, 25],
    y: [0, -30],
    transition: {
      x: {
        repeatType: "reverse",
        repeat: Infinity,
        duration: 0.5,
      },
      y: {
        repeatType: "reverse",
        repeat: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
  animationTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        repeatType: "reverse",
        repeat: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

const Loader = () => {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");

  return (
    <>
      <motion.div className="loader" variants={loaderVariants} animate={animation}></motion.div>
      <div style={{ cursor: "pointer" }} onClick={() => cycleAnimation()}>
        Change Loader
      </div>
    </>
  );
};

export default Loader;
