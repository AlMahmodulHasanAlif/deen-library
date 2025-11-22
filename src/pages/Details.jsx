import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";

const Details = () => {
  const book = useLoaderData();
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);

  const fetchComments = () => {
    axios
      .get(`http://localhost:3000/comments/${id}`)
      .then((res) => setComments(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchComments();
    const interval = setInterval(fetchComments, 3000);
    return () => clearInterval(interval);
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!commentText.trim()) return;

    const newComment = {
      bookId: id,
      userName: user?.displayName,
      userPhoto: user?.photoURL,
      comment: commentText,
      userEmail: user?.email,
      createdAt: new Date(),
    };

    await axios.post("http://localhost:3000/add-comment", newComment);

    setCommentText("");
    fetchComments();
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Book Info side by side */}
      <div className="card bg-base-100 shadow-md rounded-lg p-6 flex flex-col md:flex-row gap-6">
        <figure className="mb-4 md:mb-0 md:w-1/3 flex-shrink-0">
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full h-auto rounded-lg"
          />
        </figure>

        <div className="space-y-2 md:w-2/3">
          <h2 className="text-2xl font-semibold">{book.title}</h2>
          <p className="font-medium">Author: {book.author}</p>
          <p className="font-medium">Genre: {book.genre}</p>
          <p>{book.summary}</p>
          <p className="font-medium">Uploaded by: {book.userEmail}</p>
          <div className="badge badge-outline mt-2">Rating: {book.rating}</div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="mt-8 card p-5 shadow-md">
        <h3 className="text-xl font-semibold mb-4">Comments</h3>

        {user && (
          <form onSubmit={handleSubmit} className="mb-4 space-y-3">
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Write a comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            ></textarea>

            <button className="btn bg-teal-500 text-white w-full">
              Post Comment
            </button>
          </form>
        )}

        {/* Comments */}
        <div className="space-y-4">
          {comments.map((cmt) => (
            <div
              key={cmt._id}
              className="flex gap-3 p-3 bg-base-200 rounded-lg"
            >
              <img
                src={cmt.userPhoto}
                alt="user"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">{cmt.userName}</p>
                <p>{cmt.comment}</p>
                <p className="text-xs text-gray-500">
                  {new Date(cmt.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
          ))}

          {comments.length === 0 && (
            <p className="text-gray-500">No comments yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
