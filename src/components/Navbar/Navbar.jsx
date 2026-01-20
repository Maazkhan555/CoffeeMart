import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect (optional for subtle shadow/scale)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full z-30 top-0 left-0 backdrop-blur-md rounded-b-3xl transition-all duration-500`}
      style={{
        background: scrolled
          ? "rgba(60,31,11,0.95)"
          : "rgba(60,31,11,0.85)", // Hero-like brown
        boxShadow: scrolled ? "0 8px 25px rgba(0,0,0,0.6)" : "0 4px 15px rgba(0,0,0,0.4)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center h-20">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-[#f5d0a9] hover:text-[#d39a6a] transition-all duration-300"
        >
          BrewCoffee
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-[#fef3e7] font-medium">
          {["Home", "About", "Premium", "Products", "Order" ,"Register", "Login"].map((item, i) => (
            <motion.li
              key={i}
              whileHover={{ y: -3, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to={`/${item === "Home" ? "" : item.toLowerCase().replace(" ", "-")}`}
                className="hover:text-[#c08457] transition-all duration-300"
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#fef3e7] focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="md:hidden absolute w-full top-20 left-0 rounded-b-3xl"
            style={{
              background: "rgba(60,31,11,0.95)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
            }}
          >
            <div className="px-6 py-6 space-y-4 text-[#fef3e7] font-medium">
              {["Home", "About", "Premium", "Products", "Order"].map((item, i) => (
                <Link
                  key={i}
                  to={`/${item === "Home" ? "" : item.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-4 rounded-lg hover:bg-[#c08457]/20 hover:text-[#c08457] transition-all duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
