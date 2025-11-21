import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 px-4">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-bold mb-4 text-teal-600">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Oops! Page not found</h2>
        <p className="mb-6 text-gray-600">
          The page you are looking for might have been moved, deleted, or never
          existed.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow hover:bg-teal-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
