import food4_1 from "../assets/food4_1.mp4";
import { MISSION } from "../constants";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section id="mission">
      <div className="container mx-auto mt-20 lg:mt-0 text-center pb-16 px-10 md:px-0 ">

        <div className="relative flex items-center justify-center">
          <motion.video
            className="w-full rounded-3xl"
            autoPlay
            muted
            loop
            playsInline
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <source src={food4_1} type="video/mp4" />
          </motion.video>

          <div
            className="absolute h-full w-full  bg-black/30"
          />
          <motion.p
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute max-w-lg tracking-tighter  lg:text-3xl"
          >
            {MISSION}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
