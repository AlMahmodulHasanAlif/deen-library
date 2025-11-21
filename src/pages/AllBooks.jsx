import React from "react";
import { Link, useLoaderData } from "react-router";

const AllBooks = () => {
  const books = useLoaderData();
  console.log(books);
  return (
    <div className="overflow-x-auto w-full px-10 py-5">
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
