import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".4" className="h-[63vh] bg-[#004D43] rounded-t-2xl items-center justify-center pt-[7vw]">
      <div className="h-[70%] text-nowrap text-white flex text-[19vw] pb-[3vw] items-center justify-between font-semibold font-Arial overflow-hidden tracking-[-1.9vw] border-b-[1.5px] border-zinc-400 border-t-[1.5px]">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="flex pr-10"
        >
          WE ARE OCHI
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="flex pr-10"
        >
          WE ARE OCHI
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
