"use client";

import { useState, useEffect } from "react";
import { Download, Trash2 } from "lucide-react";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import AdminModal from "@/components/ui/AdminModal";

const ResumeSubmissions = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState({ isOpen: false, id: null, isLoading: false });

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await fetch("/api/careers/apply");
      if (res.ok) {
        const data = await res.json();
        setApplications(data);
      }
    } catch (error) {
      console.error("Failed to fetch applications", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (url, fileName) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      const nameWithoutExt = fileName.replace(/\.[^/.]+$/, "");
      link.download = `${nameWithoutExt}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Download failed:', error);
      window.open(url, '_blank');
    }
  };

  const handleDelete = async () => {
    setModal((prev) => ({ ...prev, isLoading: true }));
    try {
      const res = await fetch(`/api/careers/apply/${modal.id}`, { method: "DELETE" });
      if (res.ok) {
        await fetchApplications();
      }
    } catch (error) {
      console.error("Delete failed", error);
    } finally {
      setModal({ isOpen: false, id: null, isLoading: false });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <AdminModal
        isOpen={modal.isOpen}
        onClose={() => setModal({ isOpen: false, id: null, isLoading: false })}
        title="Delete Application"
        message="Are you sure you want to delete this resume submission? This action cannot be undone."
        type="danger"
        onConfirm={handleDelete}
        confirmText="Delete"
        isLoading={modal.isLoading}
      />
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">Career Applications</h2>
        <p className="text-zinc-400">View and manage resume submissions</p>
      </div>

      {applications.length === 0 ? (
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-12 text-center">
          <p className="text-zinc-400">No applications yet</p>
        </div>
      ) : (
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-zinc-950 border-b border-zinc-800">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-zinc-300">Name</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-zinc-300">Email</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-zinc-300">Submitted</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-zinc-300">Resume</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {applications.map((app) => (
                  <tr key={app.id} className="hover:bg-zinc-800/50 transition-colors">
                    <td className="px-6 py-4 text-white">
                      {app.firstName} {app.lastName}
                    </td>
                    <td className="px-6 py-4 text-zinc-400">{app.email}</td>
                    <td className="px-6 py-4 text-zinc-400">
                      {new Date(app.submittedAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleDownload(app.resumeUrl, app.fileName)}
                          className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-600/20 hover:bg-purple-600/30 text-purple-400 rounded-lg transition-colors text-sm"
                        >
                          <Download className="w-4 h-4" />
                          <span>Download</span>
                        </button>
                        <button
                          onClick={() => setModal({ isOpen: true, id: app.id, isLoading: false })}
                          className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg transition-colors text-sm"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeSubmissions;
