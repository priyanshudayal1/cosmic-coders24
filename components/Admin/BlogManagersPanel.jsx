"use client";

import { useState } from "react";
import { Plus, Trash2, Eye, EyeOff } from "lucide-react";

const BlogManagersPanel = () => {
  const [managers, setManagers] = useState([
    { id: 1, username: "admin", password: "admin123", createdAt: "2024-01-10" },
  ]);
  const [isCreating, setIsCreating] = useState(false);
  const [showPasswords, setShowPasswords] = useState({});
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newManager = {
      id: Date.now(),
      ...formData,
      createdAt: new Date().toISOString().split("T")[0],
    };
    setManagers([...managers, newManager]);
    setFormData({ username: "", password: "" });
    setIsCreating(false);
  };

  const handleDelete = (id) => {
    setManagers(managers.filter((m) => m.id !== id));
  };

  const togglePasswordVisibility = (id) => {
    setShowPasswords((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Blog Managers</h2>
          <p className="text-zinc-400">Manage blog manager accounts</p>
        </div>
        <button
          onClick={() => setIsCreating(!isCreating)}
          className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add Manager</span>
        </button>
      </div>

      {isCreating && (
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Create Blog Manager</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-zinc-400 mb-2 block">Username</label>
              <input
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-700"
                required
              />
            </div>
            <div>
              <label className="text-sm text-zinc-400 mb-2 block">Password</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-700"
                required
              />
            </div>
            <div className="flex gap-3">
              <button type="submit" className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors">
                Create Manager
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

      <div className="grid gap-4">
        {managers.map((manager) => (
          <div key={manager.id} className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors">
            <div className="flex justify-between items-center">
              <div className="space-y-2">
                <div>
                  <span className="text-sm text-zinc-400">Username:</span>
                  <p className="text-white font-medium">{manager.username}</p>
                </div>
                <div>
                  <span className="text-sm text-zinc-400">Password:</span>
                  <div className="flex items-center gap-2">
                    <p className="text-white font-mono">
                      {showPasswords[manager.id] ? manager.password : "••••••••"}
                    </p>
                    <button
                      onClick={() => togglePasswordVisibility(manager.id)}
                      className="p-1 hover:bg-zinc-800 rounded transition-colors"
                    >
                      {showPasswords[manager.id] ? (
                        <EyeOff className="w-4 h-4 text-zinc-400" />
                      ) : (
                        <Eye className="w-4 h-4 text-zinc-400" />
                      )}
                    </button>
                  </div>
                </div>
                <div>
                  <span className="text-sm text-zinc-400">Created:</span>
                  <p className="text-white text-sm">{manager.createdAt}</p>
                </div>
              </div>
              <button
                onClick={() => handleDelete(manager.id)}
                className="p-3 hover:bg-red-950 rounded-lg transition-colors"
              >
                <Trash2 className="w-5 h-5 text-red-400" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogManagersPanel;
