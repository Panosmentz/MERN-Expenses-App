import React from "react";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <motion.h2
      className="text-center text-white mt-5"
      initial={{ y: "-100vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.2,
        duration: 1,
      }}
      whileHover={{
        scale: 0.9,
        textShadow: "0px 0px 8px rgb(48,145,255)",
        transition: { yoyo: Infinity },
      }}
    >
      Manage your Transactions
    </motion.h2>
  );
};
