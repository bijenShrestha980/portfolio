"use client";
import { motion } from "framer-motion";

const Animate = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 100 }}
      exit={{ x: -200, opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default Animate;
