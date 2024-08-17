import about from "../assets/about.jpeg";
import { ABOUT } from "../constants";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section
      className="container mx-auto mb-16 mt-10 lg:mt-0 lg:pb-24 px-10"
      id="about"
    >
      <h2 className="mb-8 text-center text-3xl  lg:text-4xl">About Us</h2>

      <div className="flex flex-wrap justify-center items-center gap-8">
        <div className="w-full h-full p-4 lg:w-1/3">
          <motion.img 
          alt="about image"
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 1, delay: 0.2 }}
          src={about} className="rounded-3xl" />
        </div>

        <div className="w-full  lg:w-1/2">
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-4xl tracking-tighter lg:text-6xl "
          >
            {ABOUT.header}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8 mt-1 h-2 w-36 bg-rose-300 rotate-3"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className=" text-xl leading-relaxed tracking-tight lg:max-w-xl"
          >
            {ABOUT.content}
          </motion.p>
        </div>
      </div>
    </section>
  );
};
