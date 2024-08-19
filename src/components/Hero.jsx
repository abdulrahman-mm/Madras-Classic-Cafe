import React from "react";
import video3_2 from "../assets/food3_2.mp4";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="relative flex items-center justify-center h-screen">
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <video
          className="h-full w-full object-cover"
          src={video3_2}
          muted
          autoPlay
          loop
          playsInline
          preload='auto'
          
        ></video>
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black"></div>

      <div className="absolute z-20 flex h-screen flex-col justify-end mb-40 md:mb-0 pb-14">

        <motion.p
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 2, delay: 3 }}
         className="w-full px-9 text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold font-serif text-white/50"
        >
          Madras Classic Cafe
        </motion.p>

      </div>
    </section>
  );
};

export default Hero;
