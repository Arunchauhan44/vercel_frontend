import React from 'react'
import Img from "../src/assets/images/product.jpg"; 
import Img2 from "../src/assets/images/home.jpg"; 
import Banner from "../src/assets/images/Banner.webp"; 
import Banner1 from "../src/assets/images/banner1.webp"; 
// import Banner2 from "../src/assets/images/Banner2.webp"; 



import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";


const Home = () => {

  const navigate = useNavigate(); // Initialize the navigate function
  const handleShopNow = () => {
    navigate("/Signup"); // Redirect to the signup page
  };

  return (
    <div>
       <div className="flex justify-center items-center h-200 bg-green-200">
        <img src={Banner1} width="100%" height="100%" alt="banner" />
      </div>
      
        <div className="bg-green-100 py-20 text-center">
      <h1 className="text-4xl font-bold text-green-800">Welcome to SeedShop</h1>
      <p className="text-lg text-green-600 mt-4">
        Your one-stop shop for premium quality seeds.
      </p>
      <button
        onClick={handleShopNow} 
        className="mt-6 px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800"
      >
        Shop Now
      </button>
    </div>
    <div className="flex justify-center items-center h-200 bg-green-200">
        <img src={Banner} width="100%" height="100%" alt="banner" />
        
      </div>

      <div className="flex  gap-2  ">
        <div className=" md:w-1/2 ">
       <img src={Img} className='w-full h-full object-cover' width="100%" height="100%" alt="image" />
        </div>
        <div className=" md:w-1/2 ">
          <img src={Img2}  width="100%" height="100%" alt="image" />
        </div>

      </div>

      <Footer/>
    </div>
  )
}

export default Home;
