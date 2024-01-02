import { motion } from "framer-motion";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}

const AnimationFadeIn = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationFadeIn;
