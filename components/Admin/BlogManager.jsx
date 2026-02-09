"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Plus, Edit, Trash2, Save, Image as ImageIcon } from "lucide-react";
import AdminModal from "@/components/ui/AdminModal";

const BlogManager = ({ user }) => {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    excerpt: "",
    image: null,
  });

  const [modal, setModal] = useState({
    isOpen: false,
    type: "confirm",
    title: "",
    message: "",
    onConfirm: () => {},
  });

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // If user is a manager, only fetch their blogs
        const query = user?.type === "blog-manager" ? "?my=true" : "";
        const res = await fetch(`/api/blogs${query}`);
        if (res.ok) {
          const data = await res.json();
          setBlogs(data);
        }
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      }
    };
    fetchBlogs();
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("content", formData.content);
    data.append("excerpt", formData.excerpt);
    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        const newBlog = await res.json();
        // Redirect to edit/preview page immediately
        router.push(`/admin/blog/${newBlog.id}`);
      }
    } catch (error) {
      console.error("Failed to create blog", error);
    }
  };

  const handleDelete = async (id) => {
    setModal({
      isOpen: true,
      type: "danger",
      title: "Delete Blog Post",
      message:
        "Are you sure you want to delete this blog post? This action cannot be undone.",
      confirmText: "Delete",
      onConfirm: async () => {
        try {
          const res = await fetch(`/api/blogs/${id}`, { method: "DELETE" });
          if (res.ok) {
            setBlogs(blogs.filter((blog) => blog.id !== id));
          }
          setModal({ ...modal, isOpen: false });
        } catch (error) {
          console.error("Failed to delete", error);
        }
      },
    });
  };

  return (
    <div className="space-y-6">
      <AdminModal
        isOpen={modal.isOpen}
        onClose={() => setModal({ ...modal, isOpen: false })}
        title={modal.title}
        message={modal.message}
        type={modal.type}
        onConfirm={modal.onConfirm}
        confirmText={modal.confirmText}
      />
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
          <h3 className="text-xl font-semibold text-white mb-4">
            Create New Blog Post
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-zinc-400 mb-2 block">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-700"
                required
              />
            </div>

            <div>
              <label className="text-sm text-zinc-400 mb-2 block">
                Cover Image
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files?.[0]) {
                      setFormData({ ...formData, image: e.target.files[0] });
                    }
                  }}
                  className="hidden"
                  id="cover-image-upload"
                />
                <label
                  htmlFor="cover-image-upload"
                  className="flex items-center gap-2 px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-400 cursor-pointer hover:bg-zinc-900 hover:text-white transition-colors"
                >
                  <ImageIcon className="w-4 h-4" />
                  <span>
                    {formData.image
                      ? formData.image.name
                      : "Upload Cover Image"}
                  </span>
                </label>
              </div>
            </div>

            <div>
              <label className="text-sm text-zinc-400 mb-2 block">
                Excerpt
              </label>
              <input
                type="text"
                value={formData.excerpt}
                onChange={(e) =>
                  setFormData({ ...formData, excerpt: e.target.value })
                }
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-700"
                required
              />
            </div>
            <div>
              <label className="text-sm text-zinc-400 mb-2 block">
                Content
              </label>
              <textarea
                value={formData.content}
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
                rows={8}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-700 resize-none"
                required
              />
            </div>
            <div className="flex gap-3">
              <button
                type="submit"
                className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors"
              >
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
        {blogs.map((blog) => {
          const canEdit =
            user?.type === "admin" ||
            String(blog.authorId) === String(user?.id);
          return (
            <div
              key={blog.id}
              className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-2">{blog.excerpt}</p>
                  <div className="flex gap-4 text-sm text-zinc-500">
                    <span>
                      By {blog.authorEmail || blog.author || "Unknown"}
                    </span>
                    <span>•</span>
                    <span>
                      {new Date(
                        blog.createdAt || blog.date,
                      ).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                {canEdit && (
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
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogManager;
