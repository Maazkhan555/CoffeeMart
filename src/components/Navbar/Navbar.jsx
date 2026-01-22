import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  // Check scroll for shadow effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const token = localStorage.getItem("token"); // check login
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full z-30 top-0 left-0 backdrop-blur-md rounded-b-3xl transition-all duration-500`}
      style={{
        background: scrolled
          ? "rgba(60,31,11,0.95)"
          : "rgba(60,31,11,0.85)",
        boxShadow: scrolled
          ? "0 8px 25px rgba(0,0,0,0.6)"
          : "0 4px 15px rgba(0,0,0,0.4)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center h-20">
        <Link
          to="/"
          className="text-2xl font-extrabold text-[#f5d0a9] hover:text-[#d39a6a] transition-all duration-300"
        >
          BrewCoffee
        </Link>

        <ul className="hidden md:flex space-x-8 text-[#fef3e7] font-medium">
          {["Home", "About", "Premium", "Products", "Order", "Alluser"].map(
            (item, i) => (
              <motion.li
                key={i}
                whileHover={{ y: -3, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                  className="hover:text-[#c08457] transition-all duration-300"
                >
                  {item}
                </Link>
              </motion.li>
            )
          )}
          {!token && (
            <>
              <li>
                <Link
                  to="/login"
                  className="hover:text-[#c08457] transition-all duration-300"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="hover:text-[#c08457] transition-all duration-300"
                >
                  Register
                </Link>
              </li>
            </>
          )}
          {token && (
            <li>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-3 py-1 rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
