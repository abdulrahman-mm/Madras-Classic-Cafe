import React from "react";
import video3_1 from "../assets/food3_1.mp4";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="relative flex items-center justify-center h-screen">
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <video
          className="h-full w-full object-cover"
          src={video3_1}
          muted
          autoPlay
          loop
          playsInline
          
        ></video>
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black"></div>

      <div className="absolute z-20 flex h-screen flex-col justify-end pb-14">

        <motion.p
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 4, delay: 4 }}
         className="w-full px-9 text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold font-serif text-white/50"
        >
          Madras Classic Cafe
        </motion.p>

      </div>
    </section>
  );
};

export default Hero;
