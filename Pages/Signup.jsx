import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/user/signup", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      });

      console.log("Signup successful:", response.data);
      setSubmitted(true);
      setError("");

      // Redirect to login page after successful signup
      navigate("/login");
    } catch (err) {
      console.error("Error during signup:", err.response?.data || err.message);
      setError(
        err.response?.data?.error || "Something went wrong. Please try again."
      );
       
    }
  };

  return (
    <div className="bg-green-100 py-20 text-left"  style={{
      backgroundImage: "url('./vite.svg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}  >
       
      <div className="container mx-auto p-4 flex items-center justify-center h-full ">
      <div className=" p-6 rounded shadow-md w-full max-w-sm text-left h-[60%] bg-opacity-50 ">
        <h1 className="text-2xl font-bold mb-4">SignIn</h1>
        {submitted && (
          <p className="text-green-600 mb-4">
            SignIn successful! Redirecting to login...
          </p>
        )}
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
            />
          </div>
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
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
            />
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
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
          >
            SignIn
          </button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Signup;
