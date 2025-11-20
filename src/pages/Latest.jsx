import React, { useEffect, useState } from "react";
import axios from "axios";

const Latest = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/latest-books")
      .then((res) => setBooks(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mx-auto pt-8">
      <h1 className="text-center font-bold text-3xl mb-6 text-teal-500 border-teal-500 underline underline-offset-7">Latest Books</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map((book) => (
          <div key={book._id} className="card bg-base-100 shadow-md p-4">
            <figure>
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-100 object-cover"
              />
            </figure>
            <div className="card-body bg-teal-100 rounded-xl">
              <h2 className="font-semibold text-xl">{book.title}</h2>
              <p className="text-sm text-gray-700">Author: {book.author}</p>
              <p className="mt-2">{book.summary.slice(0, 100)}...</p>
              <div className="badge badge-outline mt-2">
                Rating: {book.rating}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latest;
