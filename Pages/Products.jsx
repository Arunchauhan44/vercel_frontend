import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]); // State to store products
  const [error, setError] = useState(null); // State to handle errors
  const [loading, setLoading] = useState(true); // State to handle loading

useEffect(() => {
  axios
    .get("http://localhost:5100/product/product-list")
    .then((response) => {
      console.log("API response:", response.data); // Debug: check the structure
      // If products are inside a property, use that property
      setProducts(Array.isArray(response.data) ? response.data : response.data.products || []);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
      setError("Failed to fetch products. Please try again later.");
      setLoading(false);
    });
}, []);

  if (loading) {
    return <p>Loading products...</p>; // Show loading message while fetching
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>; // Show error message if there's an error
  }

  return (
    <div
      style={{
        backgroundColor: "#e4f0e7",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto py-10">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          All Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded shadow hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-green-700">
                {product.name}
              </h3>
              <img
                src={`http://localhost:5100/uploads/${product.image}`} // Prepend the base URL
                alt={product.name} // Use product name as the alt text
                className="w-full h-48 object-cover rounded" // Optional: Add styling for the image
              />
              <h3 className="text-lg font-bold text-green-700">
                {product.description}
              </h3>
              <p className="text-green-600">${product.price}</p>
              <p className="text-green-600 text-gray-500">
                Category: {product.category}
              </p>
              <p className="text-green-600 text-gray-500">
                Stock: {product.stock}
              </p>
              <button className="mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



export default ProductList;