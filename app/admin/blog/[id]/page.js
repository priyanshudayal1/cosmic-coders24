"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Upload } from "lucide-react";
import RichTextEditor from "@/components/Admin/RichTextEditor";
import Image from "next/image";
import { Calendar, User } from "lucide-react";

export default function EditBlogPage({ params }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [blogId, setBlogId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    image: null, // File object or URL string
    imagePreview: "",
    content: "",
    excerpt: "",
    author: "",
    category: "Technology", // Default or fetch
    createdAt: new Date().toISOString(), // for preview
  });

  useEffect(() => {
    const init = async () => {
      try {
        // Handle params - Next.js 15+ params is a Promise
        const resolvedParams = await params;
        setBlogId(resolvedParams.id);
        await fetchBlog(resolvedParams.id);
      } catch (e) {
        console.error("Params error", e);
      }
    };
    init();
  }, [params]);

  const fetchBlog = async (id) => {
    try {
      const res = await fetch(`/api/blogs/${id}`);
      if (res.ok) {
        const data = await res.json();
        setFormData({
          title: data.title,
          image: data.image, // Keep existing URL
          imagePreview:
            data.image ||
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
          content: data.content,
          excerpt: data.excerpt || "",
          author: data.authorEmail || data.author || "Admin",
          category: data.category || "Technology",
          createdAt: data.createdAt,
        });
      } else {
        console.error("Failed to fetch");
        router.push("/admin");
      }
    } catch (error) {
      console.error("Error", error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Set image to File object, and update preview
        setFormData((prev) => ({
          ...prev,
          image: file,
          imagePreview: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    if (!blogId) return;

    const data = new FormData();
    data.append("title", formData.title);
    data.append("content", formData.content);
    data.append("excerpt", formData.excerpt);

    // Only append image if it's a File object (new upload)
    // If it's a string, it means we kept the old URL, backend handles it if we don't send "image"
    // OR backend expects "image" only if it changes.
    // Our backend logic: if (imageFile && typeof imageFile !== 'string') -> update.
    // So if we don't send it, it keeps old. If we send File, it updates.
    if (formData.image instanceof File) {
      data.append("image", formData.image);
    }

    try {
      const res = await fetch(`/api/blogs/${blogId}`, {
        method: "PUT",
        body: data,
      });

      if (res.ok) {
        router.push("/admin");
      } else {
        const err = await res.json();
        alert(err.error || "Failed to update");
      }
    } catch (error) {
      console.error("Update error", error);
    }
  };

  if (loading)
    return <div className="h-screen bg-black text-white p-8">Loading...</div>;

  return (
    <div className="h-screen bg-black flex flex-col overflow-hidden">
      <div className="border-b border-zinc-800 p-4 shrink-0">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between">
          <button
            onClick={() => router.push("/admin")}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Admin</span>
          </button>
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors"
          >
            <Save className="w-4 h-4" />
            <span>Save Changes</span>
          </button>
        </div>
      </div>

      <div className="flex-1 min-h-0">
        <div className="grid grid-cols-2 gap-0 h-full max-w-[1800px] mx-auto">
          {/* Preview - Left Side */}
          <div className="h-full overflow-y-auto bg-[#030014] border-r border-zinc-800">
            <div className="relative w-full h-[300px]">
              <Image
                src={formData.imagePreview}
                alt={formData.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/50 to-transparent" />
            </div>

            <div className="max-w-3xl mx-auto px-6 -mt-24 relative z-10 pb-20">
              <div className="mb-4">
                <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold">
                  {formData.category}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                {formData.title}
              </h1>

              <div className="flex items-center gap-6 text-gray-400 mb-8 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">{formData.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">
                    {new Date(formData.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <div
                className="prose prose-invert max-w-none prose-p:text-zinc-300 prose-headings:text-white prose-strong:text-white"
                dangerouslySetInnerHTML={{ __html: formData.content }}
              />
            </div>
          </div>

          {/* Editor - Right Side */}
          <div className="h-full overflow-y-auto bg-black p-6">
            <div className="space-y-6">
              <div>
                <label className="text-sm text-zinc-400 mb-2 block">
                  Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white text-xl font-semibold focus:outline-none focus:border-zinc-700"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-zinc-400 mb-2 block">
                    Author
                  </label>
                  <input
                    type="text"
                    value={formData.author}
                    readOnly
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-500 cursor-not-allowed focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm text-zinc-400 mb-2 block">
                    Category
                  </label>
                  <input
                    type="text"
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-700"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-zinc-400 mb-2 block">
                  Featured Image
                </label>
                <label className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg cursor-pointer transition-colors w-fit">
                  <Upload className="w-4 h-4" />
                  <span>Upload Image</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
                {formData.image && (
                  <span className="text-sm text-zinc-400 mt-2 block">
                    {formData.image instanceof File
                      ? formData.image.name
                      : "Current Image URL stored"}
                  </span>
                )}
              </div>

              <div>
                <label className="text-sm text-zinc-400 mb-2 block">
                  Excerpt
                </label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) =>
                    setFormData({ ...formData, excerpt: e.target.value })
                  }
                  rows={3}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-700 resize-none"
                />
              </div>

              <div>
                <label className="text-sm text-zinc-400 mb-2 block">
                  Content
                </label>
                <RichTextEditor
                  key="editor"
                  content={formData.content}
                  onChange={(content) => {
                    setFormData((prev) => ({ ...prev, content }));
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
