"use client";

import { useState } from "react";
import AdminSidebar from "@/components/Admin/AdminSidebar";
import FormSubmissions from "@/components/Admin/FormSubmissions";
import BlogManager from "@/components/Admin/BlogManager";
import BlogManagersPanel from "@/components/Admin/BlogManagersPanel";

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("forms");

  return (
    <div className="min-h-screen bg-black">
      <div className="flex">
        <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 p-8 ml-64 min-h-screen">
          {activeTab === "forms" && <FormSubmissions />}
          {activeTab === "blogs" && <BlogManager />}
          {activeTab === "managers" && <BlogManagersPanel />}
        </main>
      </div>
    </div>
  );
}
