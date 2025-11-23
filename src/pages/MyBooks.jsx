import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const MyBooks = () => {
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBooks = () => {
    if (user?.email) {
      fetch(
        `https://deen-library-server.vercel.app/myBooks?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setBooks(data))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [user?.email]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(
        `https://deen-library-server.vercel.app/delete-book/${id}`
      );
      toast.success("Book deleted successfully!");
      fetchBooks();
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete book");
    }
  };

  if (loading) return <p>Loading...</p>;

  if (!user?.email || books.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-5 h-screen flex items-center justify-center">
        No data available
      </p>
    );
  }

  return (
    <div className="overflow-x-auto p-5 h-screen">
      <Toaster position="top-right" reverseOrder={false} />
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>Book Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.rating}</td>
              <td className="flex gap-2">
                {/* View Details button */}
                <Link
                  to={`/book-details/${book._id}`}
                  id={`view-${book._id}`}
                  className="btn btn-sm "
                >
                  View
                </Link>
                <Tooltip
                  anchorId={`view-${book._id}`}
                  place="top"
                  content="View book details"
                />
                {/* Update button */}
                <Link
                  to={`/update-book/${book._id}`}
                  id={`update-${book._id}`}
                  className="btn btn-sm"
                >
                  Update
                </Link>
                <Tooltip
                  anchorId={`update-${book._id}`}
                  place="top"
                  content="Update book details"
                />

                {/* Delete button */}
                <button
                  onClick={() => handleDelete(book._id)}
                  id={`delete-${book._id}`}
                  className="btn btn-sm btn-error"
                >
                  Delete
                </button>
                <Tooltip
                  anchorId={`delete-${book._id}`}
                  place="top"
                  content="Delete this book"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBooks;
