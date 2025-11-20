import React from "react";

const topRatedBooks = [
  {
    _id: "1",
    title: "Al-Muwatta",
    author: "Imam Malik",
    rating: "★★★★★",
    coverImage: "https://i.ibb.co.com/JwrRRn3m/image.png",
  },
  {
    _id: "2",
    title: "Gardens of Purification",
    author: "Ibn Taymiyyah",
    rating: "★★★★★",
    coverImage: "https://i.ibb.co.com/yFjRTqVk/image.png",
  },
  {
    _id: "3",
    title: "The Relief from Distress",
    author: "Ibn Taymiyyah",
    rating: "★★★★★",
    coverImage: "https://i.ibb.co.com/MyZQc8hN/the-relief-from-distress.png",
  },
];

const TopRated = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-center text-3xl font-bold mb-6 text-teal-500 underline underline-offset-8">
        Top Rated Books
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {topRatedBooks.map((book) => (
          <div key={book._id} className="card bg-base-200 shadow-lg p-4">
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-full h-100 object-cover rounded"
            />

            <h3 className="text-xl font-semibold mt-3">{book.title}</h3>
            <p className="text-gray-600">{book.author}</p>

            <p className="text-yellow-500 text-lg mt-1">{book.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRated;
