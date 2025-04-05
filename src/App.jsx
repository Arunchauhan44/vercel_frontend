import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";

import Home from "../Pages/Home";
import Products from "../Pages/Products";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
 
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
