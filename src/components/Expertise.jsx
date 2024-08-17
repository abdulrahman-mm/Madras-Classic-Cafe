import React from "react";
import { CUSINES } from "../constants";
import { motion } from "framer-motion";

const Expertise = () => {
  return (
    <section id="expertise" className="lg:pb-20 ">
      <h2 className="my-8 text-center text-3xl tracking-tighter lg:text-4xl">
        Our Expertise
      </h2>

      <div className="container mx-auto px-4">
        {CUSINES.map((cuisine, index) => (
          <motion.div
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            key={index}
            className="flex items-center border-b-4 border-dotted border-neutral-700/40 py-8"
          >
            <div className="flex-shrink-0 pr-8 text-2xl">{cuisine.number}</div>
            <div className="w-1/4 flex-shrink-0">
              <img
                src={cuisine.image}
                alt={cuisine.title}
                className="h-auto rounded-3xl"
              />
            </div>

            <div className="pl-8">
              <h3 className="text-2xl uppercase  text-rose-300">
                {cuisine.title}
              </h3>
              <p className="mt-4 text-lg tracking-tighter">
                {cuisine.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
