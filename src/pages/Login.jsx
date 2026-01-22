import React, { useState } from 'react';
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import BaseUrl from "../api"; // ✅ import your axios instance

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("❌ Please fill in all fields!");
      return;
    }

    setLoading(true);

    try {
    
      const res = await BaseUrl.post('/auth/login', { email, password });
      const data = res.data;

      // Save token from backend response
      localStorage.setItem("token", data.accesstoken);
      localStorage.setItem("user", JSON.stringify(data.user || { email }));

      toast.success("🎉 Login successful!");
      setEmail("");
      setPassword("");

      navigate("/alluser"); // ✅ redirect to protected page
    } catch (err) {
      console.error("Login error:", err.response || err.message);
      toast.error(err.response?.data?.message || "❌ Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(180deg, #3c1f0b 0%, #2e1205 100%)",
        padding: "0 20px",
      }}
    >
      <ToastContainer position="top-right" autoClose={3000} />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          backgroundColor: "#4c2a0c",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <h2
          style={{
            color: "#fef3e7",
            textAlign: "center",
            marginBottom: "30px",
            borderBottom: "3px solid #c08457",
            paddingBottom: "10px",
            fontWeight: "700",
          }}
        >
          Login
        </h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "15px 20px",
                borderRadius: "12px",
                border: "1px solid #c08457",
                backgroundColor: "#3c1f0b",
                color: "#fef3e7",
                fontSize: "16px",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "15px 20px",
                borderRadius: "12px",
                border: "1px solid #c08457",
                backgroundColor: "#3c1f0b",
                color: "#fef3e7",
                fontSize: "16px",
              }}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "15px",
              borderRadius: "12px",
              border: "none",
              backgroundColor: "#c08457",
              color: "#1a0f0a",
              fontWeight: "600",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </motion.button>
        </form>

        <p style={{ color: "#fef3e7", textAlign: "center", marginTop: "20px" }}>
          Don't have an account?{" "}
          <a href="/register" style={{ color: "#c08457" }}>Sign up</a>
        </p>
      </motion.div>
    </section>
  );
};

export default Login;
