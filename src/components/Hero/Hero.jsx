import React from "react";
import { motion } from "framer-motion";

// Assets
import mainImg from "../../assets/black.png"; // Center coffee image

// Banner background color
const bannerBgColor = "#3c1f0b"; // Warm coffee brown

// Typing animation variant
const typingVariant = {
  hidden: { opacity: 0, x: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: { delay: i * 0.05, duration: 0.05 },
  }),
};

const Hero = () => {
  const textLeft = "Freshly Brewed Coffee";
  const textRight = "Delivered Fast";

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center overflow-hidden mt-16" // mt-16 to separate from Navbar
      style={{ backgroundColor: bannerBgColor }}
    >
      {/* Hero Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 items-center gap-6 w-full max-w-7xl px-6">

        {/* Left Text */}
        <motion.div className="text-left text-[#fef3e7]">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 flex flex-wrap">
            {textLeft.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={typingVariant}
                initial="hidden"
                animate="visible"
              >
                {char}
              </motion.span>
            ))}
          </h2>
          <p className="text-lg md:text-xl text-[#e7d3c1] max-w-md">
            Experience the aroma, flavor, and handcrafted blends made from the finest beans.
          </p>
        </motion.div>

        {/* Center Image with Glow */}
        <div className="relative flex justify-center items-center">
          {/* Glowing radial behind coffee */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: "22rem",
              height: "22rem",
              background: "radial-gradient(circle, #c08457 0%, transparent 70%)",
              filter: "blur(100px)",
              zIndex: -1,
            }}
            animate={{
              scale: [0.8, 1.1, 0.9, 1],
              opacity: [0.6, 0.9, 0.7, 0.8],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Floating particles/dust around coffee */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#f5d0a9] rounded-full opacity-30"
              style={{
                top: "50%",
                left: "50%",
                x: Math.random() * 200 - 100,
                y: Math.random() * 200 - 100,
              }}
              animate={{
                y: [0, Math.random() * -60 - 20],
                x: [0, Math.random() * 40 - 20],
                opacity: [0.3, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* Coffee image dropping and bouncing */}
          <motion.img
            src={mainImg}
            alt="Coffee"
            className="w-72 md:w-96 drop-shadow-2xl z-10"
            initial={{ opacity: 0, y: -800, scale: 0.5, rotate: -20 }}
            animate={{
              y: [-800, 0, 0, -20, 0], // fall + bounce
              scale: [0.5, 1.2, 1, 1.05, 1],
              rotate: [-20, 5, -5, 5, 0],
              opacity: [0, 1, 1, 1, 1],
            }}
            transition={{
              duration: 2.5,
              ease: "easeOut",
              times: [0, 0.4, 0.6, 0.8, 1],
            }}
          />
        </div>

        {/* Right Text */}
        <motion.div className="text-right text-[#fef3e7]">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 flex flex-wrap justify-end">
            {textRight.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={typingVariant}
                initial="hidden"
                animate="visible"
              >
                {char}
              </motion.span>
            ))}
          </h2>
          <p className="text-lg md:text-xl text-[#e7d3c1] max-w-md ml-auto">
            Get your favorite coffee blends straight to your door, hot and fresh every time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
