import React, { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import beanImg from "../assets/coffee/be.png";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, contact } = formData;

    if (!name || !email || !password || !contact) {
      toast.error("All fields are required!");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:7000/user/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Registration failed");

      toast.success(data.message || "Registration successful!");
      setFormData({ name: "", email: "", password: "", contact: "" });
    } catch (err) {
      toast.error(err.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen bg-[#3c1f0b] overflow-hidden flex items-center justify-center px-4">

      {/* ☕ Floating Beans Background */}
      {[...Array(7)].map((_, i) => {
        const left = Math.random() * 100;
        const size = 24 + Math.random() * 36;
        const duration = 6 + Math.random() * 4;

        return (
          <motion.img
            key={i}
            src={beanImg}
            alt="bean"
            className="absolute opacity-20 hidden md:block"
            style={{ left: `${left}%`, width: size, height: size }}
            initial={{ y: -150, rotate: 0 }}
            animate={{ y: ["0%", "40%", "0%"], rotate: [0, 360] }}
            transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
          />
        );
      })}

      <ToastContainer position="top-right" autoClose={3000} />

      {/* 🧾 Register Card */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 80, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md bg-[#4c2a0c] p-8 rounded-2xl shadow-2xl"
      >
        <h2 className="text-3xl font-extrabold text-[#fef3e7] text-center mb-6 border-b-4 border-[#c08457] inline-block pb-2">
          Create Account
        </h2>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-4 p-4 rounded-xl bg-[#3c1f0b] text-[#fef3e7] placeholder-[#c08457] border border-[#c08457] focus:outline-none focus:ring-2 focus:ring-[#c08457]"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 p-4 rounded-xl bg-[#3c1f0b] text-[#fef3e7] placeholder-[#c08457] border border-[#c08457] focus:outline-none focus:ring-2 focus:ring-[#c08457]"
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-4 p-4 rounded-xl bg-[#3c1f0b] text-[#fef3e7] placeholder-[#c08457] border border-[#c08457] focus:outline-none focus:ring-2 focus:ring-[#c08457]"
        />

        {/* Contact */}
        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={handleChange}
          className="w-full mb-6 p-4 rounded-xl bg-[#3c1f0b] text-[#fef3e7] placeholder-[#c08457] border border-[#c08457] focus:outline-none focus:ring-2 focus:ring-[#c08457]"
        />

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          disabled={loading}
          className="w-full bg-[#c08457] text-[#1a0f0a] font-semibold py-3 rounded-xl shadow-lg hover:bg-[#d39a6a] transition-all disabled:opacity-60"
        >
          {loading ? "Registering..." : "Register"}
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Register;
