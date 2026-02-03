"use client";
import { useState } from "react";
import toast from "react-hot-toast";

export default function AddPost({ addPost }) {
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addPost({
      id: Date.now(),
      username,
      content,
      likes: 0,
    });

    toast.success("Post added successfully!");
    setUsername("");
    setContent("");
  };

  return (

    
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 space-y-4">
      <input
        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
      />

      <textarea
        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        placeholder="What's on your mind?"
        rows="3"
        value={content}
        onChange={e => setContent(e.target.value)}
        required
      />

      <button className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors">
        Add Post
      </button>
    </form>
  );
}

