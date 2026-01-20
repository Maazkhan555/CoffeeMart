import React from "react";
import { motion } from "framer-motion";

// Example service data
const services = [
  {
    title: "Premium Coffee",
    description:
      "Handcrafted blends made from the world’s finest beans for the perfect cup every time.",
    icon: "☕",
  },
  {
    title: "Fast Delivery",
    description:
      "Get your coffee delivered fresh and hot straight to your door in record time.",
    icon: "🚚",
  },
  {
    title: "Coffee Subscription",
    description:
      "Never run out of your favorite coffee with our monthly subscription plans.",
    icon: "📦",
  },
];

const Services = () => {
  return (
    <section className="relative py-20 bg-[#1a0f0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#fef3e7] mb-6">
          Our Services
        </h2>
        <p className="text-[#e7d3c1] mb-12 max-w-2xl mx-auto">
          Discover what makes our coffee experience extraordinary. From premium
          blends to fast delivery, we’ve got you covered.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 perspective">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#c08457]/10 rounded-2xl p-8 text-center shadow-2xl cursor-pointer hover:shadow-3xl"
              initial={{ opacity: 0, y: 80, rotateY: 0 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 360 }}
              transition={{ duration: 1.2, delay: index * 0.4, ease: "easeInOut" }}
              whileHover={{
                scale: 1.05,
                rotateY: [0, 10, -10, 0],
                y: [0, -10, 0],
                transition: { duration: 1, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <motion.div
                className="text-5xl mb-4"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
              >
                {service.icon}
              </motion.div>

              <h3 className="text-2xl font-bold text-[#fef3e7] mb-2">
                {service.title}
              </h3>
              <p className="text-[#e7d3c1]">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
