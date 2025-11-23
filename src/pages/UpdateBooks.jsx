import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { useParams, useNavigate } from "react-router";

const UpdateBooks = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    rating: "",
    coverImage: "",
    summary: "",
    userName: "",
    userEmail: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    axios
      .get(`https://deen-library-server.vercel.app/book-details/${id}`)
      .then((res) => {
        const book = res.data || {};
        setFormData({
          title: book.title ?? "",
          author: book.author ?? "",
          genre: book.genre ?? "",
          rating: book.rating ?? "",
          coverImage: book.coverImage ?? "",
          summary: book.summary ?? "",
          userName: book.userName ?? user?.displayName ?? "",
          userEmail: book.userEmail ?? user?.email ?? "",
        });
      })
      .catch((err) => {
        console.error("Failed to load book:", err);
        toast.error("Failed to load book data");
      })
      .finally(() => setLoading(false));
  }, [id, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      toast.error("Title is required");
      return;
    }

    try {
      const payload = {
        ...formData,
        rating:
          formData.rating === ""
            ? ""
            : isNaN(Number(formData.rating))
            ? formData.rating
            : Number(formData.rating),
      };

      await axios.patch(
        `https://deen-library-server.vercel.app/update-book/${id}`,
        payload
      );

      toast.success("Book updated successfully!");
      navigate("/myBooks");
    } catch (error) {
      console.error("Error updating book", error);
      toast.error("Failed to update");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="max-w-xl mx-auto p-5">
      <h1 className="text-2xl font-bold mb-5 text-teal-500">
        Update Your Book
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />

        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />

        <input
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />

        {/* SIMPLE TEXT INPUT FOR RATING – LIKE BEFORE */}
        <input
          type="text"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          className="input input-bordered w-full"
          placeholder="Rating (1-5)"
        />

        <input
          type="text"
          name="coverImage"
          value={formData.coverImage}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        <input
          type="text"
          name="userName"
          value={formData.userName}
          disabled
          className="input input-bordered w-full bg-gray-100"
        />

        <input
          type="email"
          name="userEmail"
          value={formData.userEmail}
          disabled
          className="input input-bordered w-full bg-gray-100"
        />

        <textarea
          name="summary"
          value={formData.summary}
          onChange={handleChange}
          className="textarea textarea-bordered w-full"
        ></textarea>

        <button type="submit" className="btn text-white bg-teal-500 w-full">
          Update Book
        </button>
      </form>
    </div>
  );
};

export default UpdateBooks;
