import React from "react";
import { Link, useLoaderData } from "react-router";

const AllBooks = () => {
  const books = useLoaderData();
  console.log(books);
  return (
    <div className="grid grid-cols-3 mx-10 w-full gap-7 m-5 mx-auto">
      {books.map((book) => (
        <div key={book._id} className="card bg-base-100 shadow-sm bg-teal-100">
          <figure>
            <img className="h-100 w-full" src={book.coverImage} alt="book image" />
          </figure>
          <div className="card-body">
            <h2 className="font-semibold text-xl">{book.title}</h2>
            <h2 className="font-semibold mt-[-5px]">Author: {book.author}</h2>
            <h2 className="font-semibold m-[-8px] p-0">Genre: {book.genre}</h2>

            <p className="m-2">{book.summary}</p>
            <div className="card-actions justify-center">
              <div className="badge badge-outline">Rating: {book.rating}</div>
            </div>
            <Link
              to={`/book-details/${book._id}`}
              className="text-teal-800 px-7 py-2 font-semibold rounded-md bg-gradient-to-r from-[#FFFFFF] to-[#E0E0E0]"
            >
              Show Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllBooks;
