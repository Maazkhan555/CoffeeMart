import React, { useState } from "react";
import { motion } from "framer-motion";
import beanImg from "../assets/coffee/be.png";

const products = [
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

const Allproduct = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    setMousePos({ x, y });
  };

  return (
    <section
      className="relative w-full min-h-screen bg-[#3c1f0b] overflow-hidden p-8 md:p-16 pt-48 md:pt-56" // responsive padding top
      onMouseMove={handleMouseMove}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#c08457/20,transparent_70%)] z-0" />

      {/* Floating Beans */}
      {[...Array(6)].map((_, i) => {
        const randomTop = Math.random() * 80;
        const randomLeft = Math.random() * 90;
        const randomSpeed = 10 + Math.random() * 5;
        return (
          <motion.img
            key={i}
            src={beanImg}
            alt="Bean"
            className="absolute w-16 opacity-20 hidden md:block"
            style={{
              top: `${randomTop}%`,
              left: `${randomLeft}%`,
              transform: `translate(${mousePos.x * (i + 1) / 6}px, ${mousePos.y * (i + 1) / 6}px)`
            }}
            animate={{ y: [0, 30 + Math.random() * 50, 0], rotate: [0, 360, 0] }}
            transition={{ duration: randomSpeed, repeat: Infinity, ease: "easeInOut" }}
          />
        );
      })}

      {/* Animated Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-[#fef3e7] text-center mb-12 border-b-4 border-[#c08457] inline-block pb-2 relative z-10"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        All Products
      </motion.h2>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {products.map((product, i) => (
          <motion.div
            key={i}
            className="bg-[#4c2a0c] rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.2, duration: 1, ease: "easeOut" }}
            whileHover={{
              scale: 1.08,
              rotateY: mousePos.x / 2,
              rotateX: -mousePos.y / 2,
              boxShadow: "0 25px 50px rgba(0,0,0,0.6)",
            }}
          >
            <motion.img
              src={product.img}
              alt={product.title}
              className="w-full h-56 object-cover"
              animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-[#fef3e7]">{product.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Allproduct;
