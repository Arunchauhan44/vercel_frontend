import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for API calls

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(""); // State to handle errors

  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an API call to login
      const response = await axios.post("http://localhost:5000/user/login", {
        email: formData.email,
        password: formData.password,
      });

      console.log("Login successful:", response.data);
      setSubmitted(true);
      setError("");

      // Redirect to the product page after successful login
      navigate("/products");
    } catch (err) {
      console.error("Error during login:", err.response?.data || err.message);
      setError(
        err.response?.data?.error ||
          "Invalid email or password. Please try again."
      );
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url('./login.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "90vh",
      }}
    >
      <div className="container mx-auto p-4 flex items-center justify-center h-full ">
        <div className="  p-6 rounded shadow-md w-full max-w-sm text-left h-[60%]   ">
          <h1 className="text-2xl font-bold mb-8  ml-8">Login</h1>
          {submitted && (
            <p className="text-green-600 mb-4">
              Login successful! Redirecting...
            </p>
          )}
          {error && <p className="text-red-600 mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
              />
              <br />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
              />
              <br />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
