"use client";
import { motion } from "framer-motion";

const Animate = ({
  index,
  children,
}: {
  index?: number;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 100 }}
      exit={{ x: -200, opacity: 0 }}
      transition={{
        duration: index ? 0.5 * index : 0.7,
        ease: "easeInOut",
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default Animate;
