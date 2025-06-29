import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import Img from "../src/assets/images/product.jpg";
import Img2 from "../src/assets/images/home.jpg";
import Banner from "../src/assets/images/Banner.webp";
import Banner1 from "../src/assets/images/Banner1.webp";
import Banner2 from "../src/assets/images/Banner_2.webp";
import Banner3 from "../src/assets/images/Banner3.webp";

import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  const handleShopNow = () => {
    navigate("/Signup"); // Redirect to the signup page
  };

  return (
    <div>
      {/* <div className="flex justify-center items-center  bg-green-200">
        <img src={Banner1} width="100%" height="100%" alt="banner" />
      </div> */}

      <div className="w-full mx-auto ">
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <img src={Banner1} width="100%" height="100%" alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Banner2} width="100%" height="100%" alt="Slide 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Banner3} width="100%" height="100%" alt="Slide 3" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="bg-green-100 py-20 text-center ">
        <h1 className="text-4xl font-bold text-green-800">
          Welcome to SeedShop
        </h1>
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

      <div className="container mx-auto bg-green-500 px-4 py-10">
        <div className="flex  gap-4 bg-green-200">
          
          <div className="bg-green-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border p-4 rounded shadow hover:shadow-lg bg-white">
                <h3 className="text-lg font-bold text-green-700">Butter</h3>
                <img
                  src={Banner}
                  alt="banner"
                  className="w-full h-48 object-cover rounded"
                />
                <p className="text-green-600 mt-2">description</p>
                <p className="text-green-800 font-semibold mt-1">Price</p>
                <p className="text-gray-500">Category: Seed</p>
                <p className="text-gray-500">Stock: 250</p>
                <button className="mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

           <div className="bg-green-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border p-4 rounded shadow hover:shadow-lg bg-white">
                <h3 className="text-lg font-bold text-green-700">Butter</h3>
                <img
                  src={Banner}
                  alt="banner"
                  className="w-full h-48 object-cover rounded"
                />
                <p className="text-green-600 mt-2">description</p>
                <p className="text-green-800 font-semibold mt-1">Price</p>
                <p className="text-gray-500">Category: Seed</p>
                <p className="text-gray-500">Stock: 250</p>
                <button className="mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

           <div className="bg-green-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border p-4 rounded shadow hover:shadow-lg bg-white">
                <h3 className="text-lg font-bold text-green-700">Butter</h3>
                <img
                  src={Banner}
                  alt="banner"
                  className="w-full h-48 object-cover rounded"
                />
                <p className="text-green-600 mt-2">description</p>
                <p className="text-green-800 font-semibold mt-1">Price</p>
                <p className="text-gray-500">Category: Seed</p>
                <p className="text-gray-500">Stock: 250</p>
                <button className="mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

        </div>

        <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
          submit
        </button> 
      </div>

      {/* <div className="flex">
        <div className=" md:w-1/2 ">
          <img src={Img} className="w-full h-full object-cover" alt="image" />
        </div>
        <div className=" md:w-1/2 ">
          <img src={Img2} className="w-full h-full object-cover" alt="image" />
        </div>
      </div> */}
 
      <Footer />
    </div>
  );
};

export default Home;
