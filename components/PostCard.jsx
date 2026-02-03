export default function PostCard({ post, onLike }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold">
          {post.username.charAt(0).toUpperCase()}
        </div>
        <h3 className="font-semibold text-gray-800">{post.username}</h3>
      </div>
      
      <p className="text-gray-600 my-4">{post.content}</p>

      <button
        onClick={onLike}
        className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors"
      >
        ❤️ {post.likes}
      </button>
    </div>
  );
}

