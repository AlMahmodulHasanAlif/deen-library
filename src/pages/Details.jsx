import React from "react";
import { useLoaderData } from "react-router";

const Details = () => {
  const book = useLoaderData();
  console.log(book);
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="card bg-base-100 shadow-md rounded-lg p-6">
        <figure className="mb-4">
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full max-w-sm mx-auto"
          />
        </figure>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">{book.title}</h2>
          <p className="font-medium">Author: {book.author}</p>
          <p className="font-medium">Genre: {book.genre}</p>
          <p>{book.summary}</p>
          <p className="font-medium">Uploaded by: {book.userEmail}</p>
          <div className="badge badge-outline mt-2">Rating: {book.rating}</div>
        </div>
      </div>
    </div>
  );
};

export default Details;
