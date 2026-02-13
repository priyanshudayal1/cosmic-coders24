"use client";

import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  Building2,
  MessageSquare,
  Filter,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import AdminModal from "@/components/ui/AdminModal";
import { formatDate } from "@/utils/dateUtils";

const ITEMS_PER_PAGE = 10;

const FormSubmissions = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedService, setSelectedService] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [modal, setModal] = useState({
    isOpen: false,
    id: null,
    isLoading: false,
  });

  const services = [
    "Website Development",
    "Branding & Logo Design",
    "Graphics Design",
    "SEO",
    "Social Media Marketing",
    "Video Editing",
    "Software Development",
    "Packaging Design",
  ];

  useEffect(() => {
    fetchSubmissions();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedService]);

  const fetchSubmissions = async () => {
    try {
      const res = await fetch("/api/service-requests");
      if (res.ok) {
        const data = await res.json();
        setSubmissions(data);
      }
    } catch (error) {
      console.error("Failed to fetch service requests:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    setModal((prev) => ({ ...prev, isLoading: true }));
    try {
      const res = await fetch(`/api/service-requests?id=${modal.id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setSubmissions((prev) => prev.filter((s) => s.id !== modal.id));
      }
    } catch (error) {
      console.error("Delete failed:", error);
    } finally {
      setModal({ isOpen: false, id: null, isLoading: false });
    }
  };

  const filteredSubmissions =
    selectedService === "all"
      ? submissions
      : submissions.filter((sub) => sub.service === selectedService);

  const totalPages = Math.ceil(filteredSubmissions.length / ITEMS_PER_PAGE);
  const paginatedSubmissions = filteredSubmissions.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const renderPagination = () => {
    if (totalPages <= 1) return null;
    return (
      <div className="flex items-center justify-between bg-zinc-900 border border-zinc-800 rounded-lg p-4">
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
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <AdminModal
        isOpen={modal.isOpen}
        onClose={() => setModal({ isOpen: false, id: null, isLoading: false })}
        title="Delete Service Request"
        message="Are you sure you want to delete this service request? This action cannot be undone."
        type="danger"
        onConfirm={handleDelete}
        confirmText="Delete"
        isLoading={modal.isLoading}
      />

      <div>
        <h2 className="text-3xl font-bold text-white mb-2">Service Requests</h2>
        <p className="text-zinc-400">
          View all service request submissions ({submissions.length} total)
        </p>
      </div>

      {submissions.length > 0 && (
        <div className="flex flex-wrap items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-lg p-4">
          <Filter className="w-5 h-5 text-zinc-400" />
          <label className="text-sm font-medium text-zinc-300">
            Filter by Service:
          </label>
          <div className="relative">
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="bg-zinc-800 border border-zinc-700 rounded-lg pl-4 pr-10 py-2 text-white focus:outline-none focus:border-purple-500/50 transition-colors appearance-none cursor-pointer"
            >
              <option value="all">All Services</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
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
            Showing {filteredSubmissions.length} of {submissions.length}
          </span>
        </div>
      )}

      {submissions.length === 0 ? (
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-12 text-center">
          <MessageSquare className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
          <p className="text-zinc-400 text-lg">No service requests yet</p>
          <p className="text-zinc-500 text-sm mt-2">
            Service request submissions will appear here
          </p>
        </div>
      ) : (
        <>
          <div className="grid gap-6">
            {paginatedSubmissions.map((submission) => (
              <div
                key={submission.id}
                className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {submission.name}
                    </h3>
                    <p className="text-sm text-zinc-500">
                      {formatDate(submission.submittedAt)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {submission.status === "new" && (
                      <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-xs">
                        New
                      </span>
                    )}
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm">
                      {submission.service}
                    </span>
                    <button
                      onClick={() =>
                        setModal({
                          isOpen: true,
                          id: submission.id,
                          isLoading: false,
                        })
                      }
                      className="p-2 text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-lg transition-all duration-200"
                      aria-label="Delete service request"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Mail className="w-4 h-4 text-zinc-500" />
                    <span className="text-sm">{submission.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Phone className="w-4 h-4 text-zinc-500" />
                    <span className="text-sm">{submission.phone}</span>
                  </div>
                  {submission.business && (
                    <div className="flex items-center gap-2 text-zinc-300">
                      <Building2 className="w-4 h-4 text-zinc-500" />
                      <span className="text-sm">{submission.business}</span>
                    </div>
                  )}
                </div>

                <div className="flex gap-2 text-zinc-300 bg-zinc-950 p-4 rounded-lg border border-zinc-800">
                  <MessageSquare className="w-4 h-4 text-zinc-500 mt-1 shrink-0" />
                  <p className="text-sm">{submission.message}</p>
                </div>
              </div>
            ))}
          </div>

          {renderPagination()}
        </>
      )}
    </div>
  );
};

export default FormSubmissions;
