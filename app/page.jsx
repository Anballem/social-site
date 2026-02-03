"use client";
import { useState } from "react";
import PostCard from "@/components/PostCard";
import AddPost from "@/components/AddPost";
import Navbar from "@/components/Navbar";
import initialPosts from "@/data/initialPosts";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const [posts, setPosts] = useState(initialPosts);

  const handleLike = (id) => {
    setPosts(posts.map(post =>
      post.id === id
        ? { ...post, likes: post.likes + 1 }
        : post
    ));
  };

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="max-w-2xl mx-auto py-8 px-4">
        <AddPost addPost={addPost} />
        <div className="space-y-6 mt-6">
          {posts.map(post => (
            <PostCard
              key={post.id}
              post={post}
              onLike={() => handleLike(post.id)}
            />
          ))}
        </div>
      </main>
      <Toaster />
    </div>
  );
}

