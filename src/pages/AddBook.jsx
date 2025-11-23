import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const AddBook = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    rating: "",
    coverImage: "",
    summary: "",
    userName: user?.displayName,
    userEmail: user?.email,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://deen-library-server.vercel.app/add-book",
        formData
      );
      toast.success("Book added successfully!");
      setFormData({
        title: "",
        author: "",
        genre: "",
        rating: "",
        coverImage: "",
        summary: "",
      });
    } catch (error) {
      console.error("Error adding book", error);
      alert("Failed to add book");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-5">
      <h1 className="text-2xl font-bold mb-5 text-teal-500">Add New Book</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={formData.title}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author Name"
          value={formData.author}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={formData.genre}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />

        <input
          type="text"
          name="rating"
          placeholder="Rating (1-5)"
          value={formData.rating}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />

        <input
          type="text"
          name="coverImage"
          placeholder="Cover Image URL"
          value={formData.coverImage}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <input
          type="text"
          name="userName"
          value={formData.userName}
          disabled
          className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
        />
        <input
          type="email"
          name="userEmail"
          value={formData.userEmail}
          disabled
          className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
        />
        <textarea
          name="summary"
          placeholder="Summary"
          value={formData.summary}
          onChange={handleChange}
          className="textarea textarea-bordered w-full"
          required
        ></textarea>
        <button type="submit" className="btn text-white bg-teal-500 w-full">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
