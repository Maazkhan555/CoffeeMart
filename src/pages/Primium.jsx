import React from "react";
import { motion } from "framer-motion";
import premiumImg from "../assets/coffee/coffee3.png"; // main premium image
import beanImg from "../assets/coffee/be.png"; // floating beans

// Online coffee images for cards
const coffeeCards = [
  {
    title: "Espresso Supreme",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Cappuccino Delight",
    img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Latte Luxe",
    img: "https://coswin.pk/cdn/shop/files/Eunomia_11.png?v=1758125253",
  },
  {
    title: "Mocha Magic",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkGDfAVXwJ1I_b6qWnKxO96zGkoVmpKkaddw&s",
  },
  {
    title: "Flat White Premium",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa-Ng2RuQ0_n56k2hxMcd4I41WjDPsxhUIGg&s",
  },
  {
    title: "Americano Classic",
    img: "https://goodmockups.com/wp-content/uploads/2024/08/Free-Premium-Coffee-Bag-With-Cup-Mockup-PSD-Set-4.jpg",
  },
  {
    title: "Irish Coffee",
    img: "https://unblast.com/wp-content/uploads/2018/08/Coffee-Package-Mockup-PSD.jpg",
  },
  {
    title: "Vienna Roast",
    img: "https://m.media-amazon.com/images/I/61SaHwm6DwL._AC_UF350,350_QL80_.jpg",
  },
];

const Primium = () => {
  return (
    <section className="relative w-full bg-[#3c1f0b] overflow-hidden">

      {/* First Premium Section (keep as you provided) */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative w-full min-h-screen flex items-center p-8 md:p-16 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[#fef3e7]"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 border-b-4 border-[#c08457] inline-block pb-2">
              Premium Blends
            </h2>
            <p className="mb-6 text-lg md:text-xl leading-relaxed text-[#e7d3c1]">
              Our Premium selection offers the finest coffee experience. Carefully curated, 
              roasted to perfection, and delivered with elegance. Taste the richness of 
              flavors that only our premium beans can offer.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-xl bg-[#c08457] px-6 py-3 font-semibold text-[#1a0f0a] shadow-lg hover:bg-[#d39a6a]"
            >
              Explore Premium
            </motion.button>
          </motion.div>

          {/* Right Side - Animated Image */}
          <motion.div
            initial={{ y: -300, opacity: 0, rotate: -10, scale: 0.8 }}
            whileInView={{ y: 0, opacity: 1, rotate: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 90, damping: 15, duration: 1.5 }}
            className="flex justify-center relative"
          >
            <motion.img
              src={premiumImg}
              alt="Premium Coffee"
              className="max-w-full rounded-2xl drop-shadow-2xl"
              animate={{ y: [0, -20, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Floating Beans behind the cards */}
      <motion.img
        src={beanImg}
        alt="Bean"
        className="absolute top-[-50px] left-10 w-20 opacity-30 hidden md:block"
        animate={{ y: [0, 200, 0], rotate: [0, 360, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={beanImg}
        alt="Bean"
        className="absolute top-[50px] right-10 w-24 opacity-25 hidden md:block"
        animate={{ y: [0, 250, 0], rotate: [0, -360, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Premium Coffee Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-0 py-16 relative z-10">
        {coffeeCards.map((coffee, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.2, duration: 1, ease: "easeOut" }}
            className="bg-[#4c2a0c] rounded-2xl overflow-hidden shadow-2xl hover:scale-105 hover:shadow-3xl transition-transform duration-300 cursor-pointer"
          >
            <img
              src={coffee.img}
              alt={coffee.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-[#fef3e7]">{coffee.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Why Choose Premium Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-6 md:px-0 pb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#fef3e7] text-center mb-12">
          Why Choose Premium?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: "☕", title: "Finest Beans", desc: "Only the top 1% of beans make it into our premium blends." },
            { icon: "🔥", title: "Perfect Roast", desc: "Expertly roasted for maximum flavor and aroma." },
            { icon: "🌿", title: "Sustainable", desc: "Sourced responsibly to protect the environment." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.2, duration: 1, ease: "easeOut" }}
              className="bg-[#4c2a0c]/80 rounded-2xl p-6 text-center shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-[#fef3e7] mb-2">{item.title}</h3>
              <p className="text-[#e7d3c1]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Primium;
