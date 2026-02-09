"use client";

import { useState, useEffect } from "react";
import { Plus, Trash2, Key } from "lucide-react";
import AdminModal from "@/components/ui/AdminModal";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

const BlogManagersPanel = () => {
  const [managers, setManagers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [modal, setModal] = useState({
    isOpen: false,
    type: "confirm",
    title: "",
    message: "",
    inputPlaceholder: "",
    onConfirm: () => {},
  });

  const fetchManagers = async () => {
    try {
      const res = await fetch("/api/admin/managers");
      if (res.ok) {
        const data = await res.json();
        setManagers(data);
      }
    } catch (error) {
      console.error("Failed to fetch managers", error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/admin/managers");
        if (res.ok) {
          const data = await res.json();
          setManagers(data);
        }
      } catch (error) {
        console.error("Failed to fetch managers", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCreating(true);
    try {
      const res = await fetch("/api/admin/managers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        const newManager = await res.json();
        setManagers([...managers, newManager]);
        setFormData({ username: "", password: "" });
        setIsCreating(false);
      }
    } catch (error) {
      console.error("Failed to create manager", error);
    } finally {
      setCreating(false);
    }
  };

  const deleteManager = async (id) => {
    try {
      const res = await fetch(`/api/admin/managers/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setManagers(managers.filter((m) => m.id !== id));
      }
      setModal({ ...modal, isOpen: false });
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = (id) => {
    setModal({
      isOpen: true,
      type: "input", // Require admin password to delete
      title: "Confirm Deletion",
      message: "Enter your admin password to confirm deleting this manager.",
      confirmText: "Verify & Delete",
      onConfirm: async (adminPassword) => {
        // 1. Verify Request
        try {
          const res = await fetch("/api/admin/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ password: adminPassword }),
          });

          if (res.ok) {
            // 2. If verified, delete
            await deleteManager(id);
          } else {
            // Show error modal instead of alert
            setModal((prev) => ({ ...prev, isOpen: false }));
            setTimeout(() => {
              setModal({
                isOpen: true,
                type: "danger",
                title: "Verification Failed",
                message: "Incorrect Admin Password",
                confirmText: "Close",
                onConfirm: () =>
                  setModal((prev) => ({ ...prev, isOpen: false })),
              });
            }, 100);
          }
        } catch (error) {
          console.error("Failed", error);
        }
      },
    });
  };

  const updateManagerPassword = async (id, newPassword) => {
    try {
      const res = await fetch(`/api/admin/managers/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: newPassword }),
      });
      if (res.ok) {
        setModal({
          isOpen: true,
          type: "confirm", // Use confirm type for info/success message
          title: "Success",
          message: "Password updated successfully",
          confirmText: "Close",
          onConfirm: () => setModal((prev) => ({ ...prev, isOpen: false })),
        });
      } else {
        setModal({
          isOpen: true,
          type: "danger",
          title: "Error",
          message: "Failed to update password",
          confirmText: "Close",
          onConfirm: () => setModal((prev) => ({ ...prev, isOpen: false })),
        });
      }
    } catch (e) {
      console.error(e);
      setModal({
        isOpen: true,
        type: "danger",
        title: "Error",
        message: "Error updating password",
        confirmText: "Close",
        onConfirm: () => setModal((prev) => ({ ...prev, isOpen: false })),
      });
    }
  };

  const handleUpdatePassword = (id) => {
    setModal({
      isOpen: true,
      type: "input",
      title: "Verify Admin Access",
      message:
        "Enter your admin password to authorize updating this manager's password.",
      confirmText: "Verify",
      inputPlaceholder: "Enter Admin Password",
      onConfirm: async (adminPassword) => {
        try {
          const res = await fetch("/api/admin/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ password: adminPassword }),
          });

          if (res.ok) {
            setModal((prev) => ({ ...prev, isOpen: false }));
            // Wait for modal to close then open new one
            setTimeout(() => {
              setModal({
                isOpen: true,
                type: "input",
                title: "Update Manager Password",
                message: "Enter the new password for this manager.",
                confirmText: "Update Password",
                inputPlaceholder: "Enter New Password",
                onConfirm: (newPassword) => {
                  if (newPassword) {
                    updateManagerPassword(id, newPassword);
                  }
                },
              });
            }, 100);
          } else {
            // Show error modal instead of alert
            setModal((prev) => ({ ...prev, isOpen: false }));
            setTimeout(() => {
              setModal({
                isOpen: true,
                type: "danger",
                title: "Verification Failed",
                message: "Incorrect Admin Password",
                confirmText: "Close",
                onConfirm: () =>
                  setModal((prev) => ({ ...prev, isOpen: false })),
              });
            }, 100);
          }
        } catch (error) {
          console.error("Error", error);
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
        inputPlaceholder={modal.inputPlaceholder}
      />

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
          <h3 className="text-xl font-semibold text-white mb-4">
            Add New Manager
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-zinc-400 mb-2 block">
                Username / Email
              </label>
              <input
                type="text"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-700"
                required
              />
            </div>
            <div>
              <label className="text-sm text-zinc-400 mb-2 block">
                Password
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-700"
                required
              />
            </div>
            <div className="flex gap-3">
              <button
                type="submit"
                disabled={creating}
                className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {creating ? (
                  <>
                    <LoadingSpinner size="sm" />
                    <span>Creating...</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    <span>Create Account</span>
                  </>
                )}
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

      <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-zinc-950 border-b border-zinc-800">
            <tr>
              <th className="p-4 text-zinc-400 font-medium">Username</th>
              <th className="p-4 text-zinc-400 font-medium">Password</th>
              <th className="p-4 text-zinc-400 font-medium">Created At</th>
              <th className="p-4 text-zinc-400 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800">
            {loading ? (
              <tr>
                <td colSpan={4} className="p-6">
                  <div className="flex justify-center">
                    <LoadingSpinner size="md" text="Loading managers..." />
                  </div>
                </td>
              </tr>
            ) : managers.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-6 text-center text-zinc-500">
                  No managers found.
                </td>
              </tr>
            ) : (
              managers.map((manager) => (
                <tr
                  key={manager.id}
                  className="hover:bg-zinc-800/50 transition-colors"
                >
                  <td className="p-4 text-white font-medium">
                    {manager.email || manager.username}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-500 font-mono">••••••••</span>
                      <button
                        onClick={() => handleUpdatePassword(manager.id)}
                        className="p-1 hover:bg-zinc-800 rounded transition-colors text-zinc-400 hover:text-white"
                        title="Update Password"
                      >
                        <Key className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                  <td className="p-4 text-zinc-400">
                    {new Date(manager.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => handleDelete(manager.id)}
                      className="p-2 hover:bg-red-950 rounded-lg transition-colors group"
                      title="Delete manager"
                    >
                      <Trash2 className="w-4 h-4 text-zinc-400 group-hover:text-red-400" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogManagersPanel;
