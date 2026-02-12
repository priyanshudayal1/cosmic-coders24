"use client";

import { useState, useEffect } from "react";
import AdminSidebar from "@/components/Admin/AdminSidebar";
import FormSubmissions from "@/components/Admin/FormSubmissions";
import BlogManager from "@/components/Admin/BlogManager";
import BlogManagersPanel from "@/components/Admin/BlogManagersPanel";
import ResumeSubmissions from "@/components/Admin/ResumeSubmissions";
import { useRouter } from "next/navigation";

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("forms");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("adminUser");
    if (!storedUser) {
      router.push("/admin/auth");
      return;
    }

    try {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);

      // If manager, default to blogs and hide others
      if (parsedUser.type === "blog-manager") {
        setActiveTab("blogs");
      }
    } catch (e) {
      console.error("Failed to parse user", e);
      router.push("/admin/auth");
    } finally {
      setLoading(false);
    }
  }, [router]);

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-black text-white p-8 flex items-center justify-center">
        <div className="animate-pulse">Loading Admin Panel...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="flex">
        <AdminSidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          userRole={user.type}
        />
        <main className="flex-1 p-4 sm:p-6 md:p-8 ml-0 md:ml-64 min-h-screen">
          {activeTab === "forms" && user.type === "admin" && (
            <FormSubmissions />
          )}
          {activeTab === "blogs" && <BlogManager user={user} />}
          {activeTab === "managers" && user.type === "admin" && (
            <BlogManagersPanel />
          )}
          {activeTab === "resumes" && user.type === "admin" && (
            <ResumeSubmissions />
          )}
        </main>
      </div>
    </div>
  );
}
