import React, { useRef } from "react";
import customer1 from "../assets/customer1.jpeg";
import customer2 from "../assets/customer2.jpeg";
import customer3 from "../assets/customer3.jpeg";
import customer4 from "../assets/customer4.jpeg";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";
import video5 from "../assets/video5.mp4";
import { motion } from "framer-motion";

const Review = () => {
  const videoRefs = useRef([]);

  const handleMouseEnter = (index) => {
    videoRefs.current[index].play();
  };

  const handleMouseLeave = (index) => {
    videoRefs.current[index].pause();
  };

  return (
    <section
      className="container mx-auto mb-8 mt-10 lg:mt-0 pb-16 px-10"
      id="review"
    >
      <div className="flex flex-col">

        <p className="my-8 text-center text-3xl tracking-tighter lg:text-4xl">Cutomers Reviews</p>
        <motion.p
        initial={{opacity:0,x:-10}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:1,delay:0.3}}
        className="mb-7 text-xl font-light lg:leading-normal tracking-tighter lg:mx-40 lg:mt-10 lg:text-[2rem]">
          As a seasoned food critic, my expectations are always high when
          stepping into a new dining &#127869; establishment. Madras Classic Cafe, with
          its unassuming exterior and elegantly designed interior, promised a
          unique culinary experience from the moment I walked in. And I must
          say, it delivered beyond my expectations &#129505;.
        </motion.p>

        <motion.p
        initial={{opacity:0,x:10}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:1,delay:0.3}}
        className="mb-7 text-xl font-light lg:leading-normal tracking-tighter lg:mx-40 lg:mt-10 lg:text-[2rem]">
          I recently dined at Madras Classic Cafe &#127980;, and it was a delightful
          experience. The crispy, golden fries &#127844; were perfectly seasoned and
          complemented the juicy, tender burger. The fresh, vibrant salad added
          a refreshing touch to the meal. Service was attentive and friendly,
          making the visit even more enjoyable. Overall, a fantastic spot for
          delicious &#128523; comfort food!
        </motion.p>

        <motion.p 
        initial={{opacity:0,x:-10}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:1,delay:0.3}}
        className="mb-7 text-xl font-light lg:leading-normal tracking-tighter lg:mx-40 lg:mt-10 lg:text-[2rem]">
          The grilled steak &#127830; at Madras Classic Cafe is a culinary masterpiece &#128175;. Each
          bite reveals a perfectly seasoned, tender cut of meat with a
          delightful smoky char. The accompanying roasted vegetables are fresh
          and flavorful, adding a wonderful balance to the dish.
        </motion.p>
      </div>

      <div className="mt-14 grid grid-cols-2 justify-items-center gap-5  lg:hidden">
        {[customer1, customer2, customer3, customer4].map((customer, index) => (
          <img
            key={index}
            src={customer}
            alt="customer"
            className="h-full rounded-br-3xl rounded-tl-3xl object-cover"
          />
        ))}
      </div>

      <div className="mt-14 flex flex-col items-center justify-center gap-2 md:flex-row">
        {[video1, video2, video3, video4, video5].map((videoSrc, index) => (
          <video
          
            key={index}
            ref={(el) => (videoRefs.current[index] = el)}
            src={videoSrc}
            className="cursor-pointer max-lg:hidden h-[300px] w-[200px] rounded-br-3xl rounded-tl-3xl object-cover transition-opacity opacity-50 hover:opacity-100 lg:hover:-translate-y-2 shadow-2xl hover:shadow-gray-200/20"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            muted
          ></video>
        ))}
      </div>
    </section>
  );
};

export default Review;
