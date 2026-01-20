import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/coffee/coffee1.png"; // main image

const About = () => {
  return (
    <motion.section
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 80, damping: 20, duration: 1.5 }}
      className="relative w-full min-h-screen flex items-center bg-[#3c1f0b] p-8 md:p-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side - Text */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[#fef3e7]"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 border-b-4 border-[#c08457] inline-block pb-2">
            About BrewCoffee
          </h2>
          <p className="mb-6 text-lg md:text-xl leading-relaxed text-[#e7d3c1]">
            At BrewCoffee, we believe in crafting the perfect cup every time. 
            From sourcing the finest beans to roasting them to perfection, our 
            passion for coffee drives every blend. Experience rich aromas, bold 
            flavors, and a premium coffee journey like no other.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-xl bg-[#c08457] px-6 py-3 font-semibold text-[#1a0f0a] shadow-lg hover:bg-[#d39a6a]"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Right Side - Animated Image */}
        <motion.div
          initial={{ y: -400, opacity: 0, rotate: -15, scale: 0.8 }}
          whileInView={{ y: 0, opacity: 1, rotate: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 90, damping: 15, duration: 1.5 }}
          className="flex justify-center"
        >
          <img
            src={aboutImg}
            alt="About BrewCoffee"
            className="max-w-full rounded-2xl drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
