import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5100/product/product-list")
      .then((response) => {
        // Agar response.data ek array hai toh use set karo, warna response.data.products use karo
        setProducts(Array.isArray(response.data) ? response.data : response.data.products || []);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch products. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div className="bg-green-50 min-h-screen">
      <div className="container mx-auto py-10">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          All Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id || product._id}
              className="border p-4 rounded shadow hover:shadow-lg bg-white"
            >
              <h3 className="text-lg font-bold text-green-700">
                {product.name}
              </h3>
              <img
                src={`http://localhost:5100/uploads/${product.image}`}
                alt={product.name}
                className="w-full h-48 object-cover rounded"
              />
              <p className="text-green-600 mt-2">{product.description}</p>
              <p className="text-green-800 font-semibold mt-1">
                ₹{product.price}
              </p>
              <p className="text-gray-500">Category: {product.category}</p>
              <p className="text-gray-500">Stock: {product.stock}</p>
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