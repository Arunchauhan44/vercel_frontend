import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 

const ProductList = () => {

  const [ products, setProducts ] = useState([]);

  useEffect( () => {
    axios.get("http://localhost:5100/product/product-list?page=5")
      .then(response => {
        setProducts(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching product data:", error);
      });
  }, []);

  console.log(products);

  return (
    <div className="bg-green-50 min-h-screen">
      <div className="container mx-auto py-10">

        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          All Products
        </h2>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        

            {products.map( (product) => ( 
              <div key={product.id} className="border p-4 rounded shadow hover:shadow-lg bg-white">
                <h3 className="text-lg font-bold text-green-700">{product.name}</h3>
                <img src={product.image ?  `http://localhost:5100/uploads/${product.image}` : "https://via.placeholder.com/200"} className="w-full h-48 object-cover rounded" />
                <p className="text-green-600 mt-2">{product.description}</p>
              <p className="text-green-800 font-semibold mt-1">₹ {product.price}</p>
              <p className="text-gray-500">Category: {product.category}</p>
              <p className="text-gray-500">Stock: {product.stock}</p>
              <button className="mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800">
                Add to Cart
              </button> 
            </div>
            ))}

          </div>
      </div>

      <Link to="/add-product">
        <button className="mt-4 w-full px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 mb-6">Add Product</button>
      </Link>

    </div>
  );
};

export default ProductList;
