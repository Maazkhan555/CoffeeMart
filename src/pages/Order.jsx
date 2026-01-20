import React from "react";
import { motion } from "framer-motion";
import beanImg from "../assets/coffee/be.png";

const Order = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#3c1f0b] overflow-hidden p-8 md:p-16 pt-48 md:pt-56">

      {/* 🌧️ Falling → Floating Beans */}
      {[...Array(8)].map((_, i) => {
        const left = Math.random() * 100;
        const size = 24 + Math.random() * 40;
        const fallDelay = Math.random() * 0.8;
        const floatDuration = 6 + Math.random() * 4;

        return (
          <motion.img
            key={i}
            src={beanImg}
            alt="Bean"
            className="absolute opacity-20 hidden md:block"
            style={{
              left: `${left}%`,
              width: size,
              height: size,
              pointerEvents: "none",
            }}
            initial={{
              y: -150,
              opacity: 0,
              rotate: Math.random() * 180,
            }}
            animate={{
              y: ["0%", "40%", "0%"],
              opacity: 0.25,
              rotate: [0, 360],
            }}
            transition={{
              y: {
                delay: fallDelay + 1,
                duration: floatDuration,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotate: {
                delay: fallDelay + 1,
                duration: floatDuration,
                repeat: Infinity,
                ease: "linear",
              },
              opacity: {
                delay: fallDelay,
                duration: 1,
              },
            }}
          />
        );
      })}

      {/* 🧾 Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-[#fef3e7] text-center mb-12 border-b-4 border-[#c08457] inline-block pb-2 relative z-10"
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Place Your Order
      </motion.h2>

      {/* 📦 Order Card */}
      <motion.div
        className="max-w-3xl mx-auto bg-[#4c2a0c] rounded-2xl shadow-2xl p-8 md:p-12 relative z-10"
        initial={{ opacity: 0, y: 80, scale: 0.85 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <form className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 rounded-xl bg-[#3c1f0b] text-[#fef3e7] placeholder-[#c08457] border border-[#c08457] focus:outline-none focus:ring-2 focus:ring-[#c08457]"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-4 rounded-xl bg-[#3c1f0b] text-[#fef3e7] placeholder-[#c08457] border border-[#c08457] focus:outline-none focus:ring-2 focus:ring-[#c08457]"
          />
          <textarea
            placeholder="Your Order Details"
            rows="5"
            className="p-4 rounded-xl bg-[#3c1f0b] text-[#fef3e7] placeholder-[#c08457] border border-[#c08457] focus:outline-none focus:ring-2 focus:ring-[#c08457]"
          />

          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            className="bg-[#c08457] text-[#1a0f0a] font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-[#d39a6a] transition-all"
          >
            Submit Order
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Order;
