import React from "react";
import { motion } from "framer-motion";
import worldMap from "../../assets/world-map.png"; // World map
import beanImg from "../../assets/coffee/be.png"; // Small transparent coffee bean PNG

const locations = [
  { name: "Downtown Coffee Shop", address: "123 Main St, Cityville" },
  { name: "Uptown Cafe", address: "456 High St, Metropolis" },
  { name: "Online Store", address: "www.brewcoffee.com" },
  { name: "Airport Kiosk", address: "Terminal 1, Coffee Hub" },
];

const WhereToBuy = () => {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: `url(${worldMap})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for cinematic look */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Floating glowing coffee dots */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#f5d0a9] rounded-full opacity-50"
          style={{
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 90}%`,
            boxShadow: "0 0 15px #f5d0a9",
          }}
          animate={{
            y: [0, -10 - Math.random() * 20, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Floating coffee beans drifting across the map */}
      {[...Array(10)].map((_, i) => (
        <motion.img
          key={i}
          src={beanImg}
          alt="Coffee Bean"
          className="absolute w-6 opacity-50"
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
          }}
          animate={{
            y: [0, -50 - Math.random() * 50, 0],
            x: [0, -20 + Math.random() * 40, 0],
            rotate: [0, 360, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-[#fef3e7] mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Where to Buy
        </motion.h2>

        <motion.p
          className="text-[#e7d3c1] mb-12 max-w-2xl mx-auto drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Find BrewCoffee near you or order online for a premium coffee experience
          delivered straight to your door.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {locations.map((loc, index) => (
            <motion.div
              key={index}
              className="bg-[#c08457]/10 rounded-2xl p-6 text-center shadow-2xl hover:shadow-3xl hover:scale-105 transition-transform cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.3,
                ease: "easeOut",
              }}
            >
              <h3 className="text-2xl font-bold text-[#fef3e7] mb-2">{loc.name}</h3>
              <p className="text-[#e7d3c1]">{loc.address}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhereToBuy;
