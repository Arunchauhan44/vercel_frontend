import React, { useEffect, useState } from "react";
import axios from "axios";

// const ProductList = () => {
//   const [products, setProducts] = useState([]); // State to store products
//   const [error, setError] = useState(null); // State to handle errors
//   const [loading, setLoading] = useState(true); // State to handle loading

//   useEffect(() => {
//     // Fetch products from the API
//     axios
//       .get("http://localhost:5000/product/product-list")
//       .then((response) => {
//         setProducts(response.data); // Set the fetched products
//         setLoading(false); // Set loading to false
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//         setError("Failed to fetch products. Please try again later.");
//         setLoading(false); // Set loading to false
//       });
//   }, []);

//   if (loading) {
//     return <p>Loading products...</p>; // Show loading message while fetching
//   }

//   if (error) {
//     return <p style={{ color: "red" }}>{error}</p>; // Show error message if there's an error
//   }

//   return (
//     <div
//       style={{
//         backgroundColor: "#e4f0e7",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="container mx-auto py-10">
//         <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
//           All Products
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="border p-4 rounded shadow hover:shadow-lg"
//             >
//               <h3 className="text-lg font-bold text-green-700">
//                 {product.name}
//               </h3>
//               <img
//                 src={`http://localhost:5000/uploads/${product.image}`} // Prepend the base URL
//                 alt={product.name} // Use product name as the alt text
//                 className="w-full h-48 object-cover rounded" // Optional: Add styling for the image
//               />
//               <h3 className="text-lg font-bold text-green-700">
//                 {product.description}
//               </h3>
//               <p className="text-green-600">${product.price}</p>
//               <p className="text-green-600 text-gray-500">
//                 Category: {product.category}
//               </p>
//               <p className="text-green-600 text-gray-500">
//                 Stock: {product.stock}
//               </p>
//               <button className="mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800">
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };


const ProductList = () => {
  const [products, setProducts] = useState([]); // State to store products
  const [error, setError] = useState(null); // State to handle errors
  const [loading, setLoading] = useState(true); // State to handle loading
  const [cartMessage, setCartMessage] = useState(""); // State to show cart messages

  useEffect(() => {
    // Fetch products from the API
    axios
      .get("http://localhost:5000/product/product-list")
      .then((response) => {
        setProducts(response.data); // Set the fetched products
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("Failed to fetch products. Please try again later.");
        setLoading(false); // Set loading to false
      });
  }, []);

  const handleAddToCart = async (productId) => {
    try {
      const token = localStorage.getItem("token"); // Retrieve the token from localStorage
      console.log("Token :",token);

      if (!token) {
        setCartMessage("You must be logged in to add products to the cart.");
        return;
      }

      // Make a POST request to add the product to the cart
      const response = await axios.post(
        "http://localhost:5000/cart/add-to-cart",
        { productId, quantity: 1 }, // Send productId and quantity
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        }
      );

      setCartMessage(response.data.message); // Show success message
      setTimeout(() => setCartMessage(""), 3000); // Clear the message after 3 seconds
    } catch (error) {
      console.error("Error adding to cart:", error);
      setCartMessage("Failed to add product to cart. Please try again.");
      setTimeout(() => setCartMessage(""), 3000); // Clear the message after 3 seconds
    }
  };

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
        {cartMessage && (
          <p className="text-center text-green-600 mb-4">{cartMessage}</p>
        )}
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
                src={`http://localhost:5000/uploads/${product.image}`} // Prepend the base URL
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
              <button
                onClick={() => handleAddToCart(product.id)} // Call handleAddToCart with product ID
                className="mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
              >
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