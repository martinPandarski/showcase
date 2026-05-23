import { motion, type Variants } from "motion/react";
import type { PropsWithChildren } from "react";

const variants: Variants = {
  initial: { opacity: 0, y: 24 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] } },
  exit: { opacity: 0, y: -24, transition: { duration: 0.4, ease: [0.7, 0, 0.84, 0] } },
};

const PageWrap: React.FC<PropsWithChildren> = ({ children }) => (
  <motion.div
    variants={variants}
    initial="initial"
    animate="enter"
    exit="exit"
  >
    {children}
  </motion.div>
);

export default PageWrap;
