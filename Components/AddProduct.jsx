import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
    description: "",
  });

  const [image, setImage] = useState(null); // ✅ Separate state for file

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // ✅ Store File object, not string
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Create a new FormData object
    const formDataToSend = new FormData();

    // ✅ Append text fields
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    // ✅ Append image file only if selected
    if (image) {
      formDataToSend.append("image", image);
    }

    try {
      const response = await axios.post(
        "http://localhost:5100/product/create",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("✅ Product added:", response.data);
    } catch (error) {
      console.error("❌ Error adding product:", error);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 p-6 border rounded shadow-lg bg-green-50 mb-10">
      <h1 className="text-xl font-bold mb-4">Add New Product</h1>
      <form
        className="flex flex-col gap-4 mt-4 bg-green-100 p-6 rounded"
        onSubmit={handleSubmit}
      >
        <label className="flex flex-col">
          Product Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label className="flex flex-col">
          Price:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </label>

        <label className="flex flex-col">
          Stock:
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            required
          />
        </label>

        <label className="flex flex-col">
          Image:
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </label>

        <label className="flex flex-col">
          Category:
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </label>

        <label className="flex flex-col">
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </label>

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white py-2 rounded"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;

