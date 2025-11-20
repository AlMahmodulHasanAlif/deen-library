import React from "react";
import { useLoaderData } from "react-router";

const Details = () => {
  const book = useLoaderData();
  console.log(book);
  return (
    <div key={book._id} className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src="book.coverImage" alt="book image" />
      </figure>
      <div className="card-body">
        <h2 className="font-semibold text-xl">{book.title}</h2>
        <h2 className="font-semibold mt-[-5px]">Author: {book.author}</h2>
        <h2 className="font-semibold m-[-8px] p-0">Genre: {book.genre}</h2>

        <p className="m-2">{book.summary}</p>
        <div className="card-actions justify-center">
          <div className="badge badge-outline">Rating: {book.rating}</div>
        </div>
      </div>
    </div>
  );
};

export default Details;
