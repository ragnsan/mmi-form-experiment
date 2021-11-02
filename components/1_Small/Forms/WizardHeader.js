import { motion } from "framer-motion";
import { ThreeThreeThree } from "../Base";

export const WizardHeader = ({ number, name, pTxt, isHere }) => {
  const dropIn = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        ease: [0.6, 0, 0.2, 1],
      },
    },
  };
  const child = {
    hidden: {
      y: "20px",
      opacity: 0,
    },
    visible: {
      y: "0vh",
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.6, 0, 0.2, 1],
        transform: [0.6, 0, 0.2, 1],
      },
    },
  };

  return (
    <ThreeThreeThree>
      <motion.div
        className="flex flex-col items-center text-center"
        // variants={dropIn}
        // initial="hidden"
        // animate="visible"
      >
        <div
          className={`${
            isHere != null ? "bg-primary_700" : "bg-neutral_300"
          } w-80 h-80  rounded-circle flex items-center justify-center mb-8`}
        >
          <motion.span
            // variants={child}
            className={`${
              isHere != null ? "text-white" : "text-neutral_500"
            } text-h3 font-bold`}
          >
            {number}
          </motion.span>
        </div>
        <motion.h2
          // variants={child}
          className="text-h3 text-neutral_900 font-bold"
        >
          {name}
        </motion.h2>
        <motion.p
          // variants={child}
          className="text-neutral_500 text-body_medium px-16"
        >
          {pTxt}
        </motion.p>
      </motion.div>
    </ThreeThreeThree>
  );
};
