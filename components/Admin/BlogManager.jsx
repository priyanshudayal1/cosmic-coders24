"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Edit, Trash2, Save } from "lucide-react";

const BlogManager = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Getting Started with Web Development",
      author: "Admin",
      date: "2024-01-15",
      excerpt: "Learn the basics of web development...",
    },
  ]);
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    content: "",
    excerpt: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      id: Date.now(),
      ...formData,
      date: new Date().toISOString().split("T")[0],
    };
    setBlogs([newBlog, ...blogs]);
    setFormData({ title: "", author: "", content: "", excerpt: "" });
    setIsCreating(false);
  };

  const handleDelete = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Blog Manager</h2>
          <p className="text-zinc-400">Create and manage blog posts</p>
        </div>
        <button
          onClick={() => setIsCreating(!isCreating)}
          className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>New Blog</span>
        </button>
      </div>

      {isCreating && (
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Create New Blog Post</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-zinc-400 mb-2 block">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-700"
                required
              />
            </div>
            <div>
              <label className="text-sm text-zinc-400 mb-2 block">Author</label>
              <input
                type="text"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-700"
                required
              />
            </div>
            <div>
              <label className="text-sm text-zinc-400 mb-2 block">Excerpt</label>
              <input
                type="text"
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-700"
                required
              />
            </div>
            <div>
              <label className="text-sm text-zinc-400 mb-2 block">Content</label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                rows={8}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-700 resize-none"
                required
              />
            </div>
            <div className="flex gap-3">
              <button type="submit" className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors">
                <Save className="w-4 h-4" />
                <span>Publish</span>
              </button>
              <button
                type="button"
                onClick={() => setIsCreating(false)}
                className="px-4 py-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">{blog.title}</h3>
                <p className="text-zinc-400 text-sm mb-2">{blog.excerpt}</p>
                <div className="flex gap-4 text-sm text-zinc-500">
                  <span>By {blog.author}</span>
                  <span>•</span>
                  <span>{blog.date}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => router.push(`/admin/blog/${blog.id}`)}
                  className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
                >
                  <Edit className="w-4 h-4 text-zinc-400" />
                </button>
                <button
                  onClick={() => handleDelete(blog.id)}
                  className="p-2 hover:bg-red-950 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4 text-red-400" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogManager;
