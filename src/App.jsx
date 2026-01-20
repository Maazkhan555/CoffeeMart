import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Primium from "./pages/Primium";
import Order from "./pages/Order";
import Allproduct from "./pages/Allproduct";
import Footer from "./components/Footer/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";





const App = () => {
  return (
    <>
    
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/premium" element={<Primium />} />
        <Route path="/order" element={<Order />} />
        <Route path="/products" element={<Allproduct />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />



      </Routes>
      
      <Footer/>
    
    </>
  );
};

export default App;
