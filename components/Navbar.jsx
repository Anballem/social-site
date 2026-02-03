import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-slate-800 text-white py-4 px-6 shadow-md">
      <div className="max-w-2xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">Social Site</h1>
        <div className="flex items-center gap-4">

          <Link href="/add-post" className="hover:text-gray-300 transition-colors">Add Post</Link>
        
        </div>
      </div>
    </nav>
  );
}

