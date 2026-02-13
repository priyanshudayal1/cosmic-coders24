"use client";

import { useState, useEffect } from "react";
import {
  Download,
  Trash2,
  Filter,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import AdminModal from "@/components/ui/AdminModal";
import { formatDate } from "@/utils/dateUtils";

const ITEMS_PER_PAGE = 10;

const ResumeSubmissions = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRole, setSelectedRole] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [modal, setModal] = useState({
    isOpen: false,
    id: null,
    isLoading: false,
  });

  const roles = [
    "UI/UX Designers",
    "Software Developers",
    "Graphics Designers",
    "Video Editors",
    "Branding Strategist",
    "Social Media Managers",
    "Content Strategists",
    "S.E.O Executives",
    "Wix Developers",
    "Shopify Developers",
  ];

  useEffect(() => {
    fetchApplications();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedRole]);

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
      const link = document.createElement("a");
      link.href = blobUrl;
      const nameWithoutExt = fileName.replace(/\.[^/.]+$/, "");
      link.download = `${nameWithoutExt}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed:", error);
      window.open(url, "_blank");
    }
  };

  const handleDelete = async () => {
    setModal((prev) => ({ ...prev, isLoading: true }));
    try {
      const res = await fetch(`/api/careers/apply/${modal.id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        await fetchApplications();
      }
    } catch (error) {
      console.error("Delete failed", error);
    } finally {
      setModal({ isOpen: false, id: null, isLoading: false });
    }
  };

  const filteredApplications =
    selectedRole === "all"
      ? applications
      : applications.filter((app) => app.role === selectedRole);

  const totalPages = Math.ceil(filteredApplications.length / ITEMS_PER_PAGE);
  const paginatedApplications = filteredApplications.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const renderPagination = () => {
    if (totalPages <= 1) return null;
    return (
      <div className="flex items-center justify-between bg-zinc-900 border border-zinc-800 rounded-lg p-4 mt-4">
        <p className="text-sm text-zinc-400">
          Page {currentPage} of {totalPages}
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-lg border border-zinc-700 text-zinc-300 hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter(
              (page) =>
                page === 1 ||
                page === totalPages ||
                Math.abs(page - currentPage) <= 1,
            )
            .reduce((acc, page, idx, arr) => {
              if (idx > 0 && page - arr[idx - 1] > 1) acc.push("...");
              acc.push(page);
              return acc;
            }, [])
            .map((page, idx) =>
              page === "..." ? (
                <span key={`dots-${idx}`} className="text-zinc-500 px-1">
                  ...
                </span>
              ) : (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 rounded-lg text-sm transition-colors ${
                    currentPage === page
                      ? "bg-purple-600 text-white"
                      : "border border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                  }`}
                >
                  {page}
                </button>
              ),
            )}
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg border border-zinc-700 text-zinc-300 hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
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
        <h2 className="text-3xl font-bold text-white mb-2">
          Career Applications
        </h2>
        <p className="text-zinc-400">
          View and manage resume submissions ({applications.length} total)
        </p>
      </div>

      {applications.length > 0 && (
        <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-lg p-4">
          <Filter className="w-5 h-5 text-zinc-400" />
          <label className="text-sm font-medium text-zinc-300">
            Filter by Role:
          </label>
          <div className="relative">
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="bg-zinc-800 border border-zinc-700 rounded-lg pl-4 pr-10 py-2 text-white focus:outline-none focus:border-purple-500/50 transition-colors appearance-none cursor-pointer"
            >
              <option value="all">All Roles</option>
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg
                className="w-4 h-4 text-zinc-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          <span className="ml-auto text-sm text-zinc-400">
            Showing {filteredApplications.length} of {applications.length}
          </span>
        </div>
      )}

      {applications.length === 0 ? (
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-12 text-center">
          <p className="text-zinc-400">No applications yet</p>
        </div>
      ) : (
        <>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-zinc-950 border-b border-zinc-800">
                  <tr>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-zinc-300">
                      Name
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-zinc-300">
                      Email
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-zinc-300">
                      Role
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-zinc-300">
                      Submitted
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-zinc-300">
                      Resume
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  {paginatedApplications.map((app) => (
                    <tr
                      key={app.id}
                      className="hover:bg-zinc-800/50 transition-colors"
                    >
                      <td className="px-6 py-4 text-white">
                        {app.firstName} {app.lastName}
                      </td>
                      <td className="px-6 py-4 text-zinc-400">{app.email}</td>
                      <td className="px-6 py-4 text-zinc-400">
                        {app.role ? (
                          <span className="px-2 py-1 bg-indigo-500/20 text-indigo-400 rounded-lg text-xs">
                            {app.role}
                          </span>
                        ) : (
                          <span className="text-zinc-500">Not specified</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-zinc-400">
                        {formatDate(app.submittedAt)}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              handleDownload(app.resumeUrl, app.fileName)
                            }
                            className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-600/20 hover:bg-purple-600/30 text-purple-400 rounded-lg transition-colors text-sm"
                          >
                            <Download className="w-4 h-4" />
                            <span>Download</span>
                          </button>
                          <button
                            onClick={() =>
                              setModal({
                                isOpen: true,
                                id: app.id,
                                isLoading: false,
                              })
                            }
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

          {renderPagination()}
        </>
      )}
    </div>
  );
};

export default ResumeSubmissions;
