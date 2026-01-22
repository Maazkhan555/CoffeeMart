import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Primium from "./pages/Primium";
import Order from "./pages/Order";
import Allproduct from "./pages/Allproduct";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Alluser from "./pages/Alluser";

import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <>
      {/* 🔝 NAVBAR */}
      <Navbar />

      {/* 🔀 ROUTES */}
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/premium" element={<Primium />} />
        <Route path="/order" element={<Order />} />
        <Route path="/products" element={<Allproduct />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* 🔐 PROTECTED ROUTE */}
        <Route
          path="/alluser"
          element={
            <ProtectedRoute>
              <Alluser />
            </ProtectedRoute>
          }
        />

        {/* ❌ OPTIONAL: 404 */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
              404 | Page Not Found
            </div>
          }
        />
      </Routes>

      {/* 🔻 FOOTER */}
      <Footer />
    </>
  );
};

export default App;
