import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Import your store images
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";

const footerLinks = ["Home", "About", "Premium", "Products", "Order"];

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 150, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full backdrop-blur-md  shadow-inner overflow-hidden"
      style={{
        background: "rgba(60,31,11,0.95)", // Hero-like brown
        boxShadow: "0 -12px 40px rgba(0,0,0,0.7)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center py-16 gap-10">
        {/* Logo / Name and Description */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <Link
            to="/"
            className="text-4xl md:text-5xl font-extrabold text-[#f5d0a9] hover:text-[#d39a6a] transition-all duration-300"
          >
            MAAZKHAN
          </Link>
          <p className="text-[#e7d3c1] mt-2 text-lg md:text-xl max-w-md">
            Premium Coffee Experience — Bringing the world’s finest coffee right to your doorstep.
          </p>
        </motion.div>

        {/* Footer Links */}
        <motion.ul
          className="flex flex-col md:flex-row gap-6 text-[#fef3e7] font-semibold justify-center items-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {footerLinks.map((item, i) => (
            <motion.li
              key={i}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              whileHover={{ y: -3, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to={`/${item === "Home" ? "" : item.toLowerCase().replace(" ", "-")}`}
                className="hover:text-[#c08457] transition-all duration-300 text-lg md:text-xl"
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* App Store / Play Store Images */}
        <motion.div
          className="flex gap-4 items-center justify-center md:justify-end"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <a href="#">
            <img src={AppStoreImg} alt="App Store" className="w-36 md:w-40 hover:scale-105 transition-transform" />
          </a>
          <a href="#">
            <img src={PlayStoreImg} alt="Play Store" className="w-36 md:w-40 hover:scale-105 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Bottom copyright */}
      <motion.div
        className="text-center text-[#e7d3c1] text-lg md:text-xl py-6"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        © {new Date().getFullYear()} MAAZKHAN. All Rights Reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
