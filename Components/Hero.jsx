import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleShopNow = () => {
    navigate("/Signup"); // Redirect to the signup page
  };

  return (
    <div className="bg-green-100 py-20 text-center">
      <h1 className="text-4xl font-bold text-green-800">Welcome to SeedShop</h1>
      <p className="text-lg text-green-600 mt-4">
        Your one-stop shop for premium quality seeds.
      </p>
      <button
        onClick={handleShopNow} // Call the handleShopNow function on click
        className="mt-6 px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800"
      >
        Shop Now
      </button>
    </div>
  );
};

export default Hero;
