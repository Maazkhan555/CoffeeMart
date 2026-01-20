import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import WhereToBuy from "../components/WhereToBuy/WhereToBuy";
import AppBanner from "../components/AppBanner/AppBanner";

const Home = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="bg-[#3c1f0b] text-[#fef3e7]">
      {/* Hero Section */}
      <motion.section
        className="relative z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Hero />
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="relative z-10 py-20 px-6 md:px-16 bg-[#3c1f0b]/90"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Services />
      </motion.section>

      {/* WhereToBuy Section */}
      <motion.section
        className="relative z-10 py-20 px-6 md:px-16 bg-[#3c1f0b]/95"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <WhereToBuy />
      </motion.section>

      {/* App Banner / Promotion Section */}
      <motion.section
        className="relative z-10 py-20 px-6 md:px-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <AppBanner />
      </motion.section>
    </div>
  );
};

export default Home;
