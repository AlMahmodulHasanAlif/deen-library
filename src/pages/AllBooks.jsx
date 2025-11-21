import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    fetch(
      `http://localhost:3000/all-books${sortOrder ? `?sort=${sortOrder}` : ""}`
    )
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error(err));
  }, [sortOrder]);

  return (
    <div className="overflow-x-auto w-full px-10 py-5">
      <div className="mb-4">
        <label className="mr-2 font-semibold">Sort by Rating:</label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="select select-bordered"
        >
          <option value="">Default</option>
          <option value="rating_desc">High → Low</option>
          <option value="rating_asc">Low → High</option>
        </select>
      </div>

      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>Cover</th>
            <th>Name</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>
                <img
                  className="h-20 w-16 object-cover rounded"
                  src={book.coverImage}
                  alt="book"
                />
              </td>
              <td className="font-semibold">{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>
                <div className="badge badge-outline">{book.rating}</div>
              </td>
              <td>
                <Link
                  to={`/book-details/${book._id}`}
                  className="btn btn-sm btn-outline btn-primary"
                >
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBooks;
