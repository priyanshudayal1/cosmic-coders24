"use client";

import { useState, useEffect } from "react";
import {
  Mail,
  MessageSquare,
  Trash2,
  Calendar,
  CheckCircle,
} from "lucide-react";
import LoadingSpinner from "../ui/LoadingSpinner";

const QuerySubmissions = () => {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);

  useEffect(() => {
    fetchQueries();
  }, []);

  const fetchQueries = async () => {
    try {
      const response = await fetch("/api/queries");
      if (!response.ok) throw new Error("Failed to fetch queries");
      const data = await response.json();
      setQueries(data);
    } catch (error) {
      console.error("Error fetching queries:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this query?")) return;

    setDeleting(id);
    try {
      const response = await fetch(`/api/queries?id=${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete query");

      setQueries(queries.filter((q) => q.id !== id));
    } catch (error) {
      console.error("Error deleting query:", error);
      alert("Failed to delete query");
    } finally {
      setDeleting(null);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-100">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">
          General Inquiries & Queries
        </h2>
        <p className="text-zinc-400">
          Submissions from the contact form ({queries.length} total)
        </p>
      </div>

      {queries.length === 0 ? (
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-12 text-center">
          <MessageSquare className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
          <p className="text-zinc-400 text-lg">No queries yet</p>
          <p className="text-zinc-500 text-sm mt-2">
            Query submissions will appear here
          </p>
        </div>
      ) : (
        <div className="grid gap-6">
          {queries.map((query) => (
            <div
              key={query.id}
              className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {query.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center gap-2 text-zinc-400">
                      <Mail className="w-4 h-4 text-zinc-500" />
                      <span>{query.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-400">
                      <Calendar className="w-4 h-4 text-zinc-500" />
                      <span>{formatDate(query.submittedAt)}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {query.status === "new" && (
                    <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      New
                    </span>
                  )}
                  <button
                    onClick={() => handleDelete(query.id)}
                    disabled={deleting === query.id}
                    className="p-2 text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Delete query"
                  >
                    {deleting === query.id ? (
                      <LoadingSpinner size="sm" />
                    ) : (
                      <Trash2 className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex gap-2 text-zinc-300 bg-zinc-950 p-4 rounded-lg border border-zinc-800">
                <MessageSquare className="w-4 h-4 text-zinc-500 mt-1 shrink-0" />
                <p className="text-sm whitespace-pre-wrap">{query.message}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuerySubmissions;
