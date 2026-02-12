"use client";

import { useState } from "react";
import {
  FileText,
  BookOpen,
  Users,
  LogOut,
  Briefcase,
  Menu,
  X,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const AdminSidebar = ({ activeTab, setActiveTab, userRole }) => {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    {
      id: "forms",
      label: "Form Submissions",
      icon: FileText,
      roles: ["admin"],
    },
    {
      id: "queries",
      label: "Queries",
      icon: MessageSquare,
      roles: ["admin"],
    },
    {
      id: "blogs",
      label: "Blog Manager",
      icon: BookOpen,
      roles: ["admin", "blog-manager"],
    },
    { id: "managers", label: "Blog Managers", icon: Users, roles: ["admin"] },
    {
      id: "resumes",
      label: "Career Applications",
      icon: Briefcase,
      roles: ["admin"],
    },
  ];

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      localStorage.removeItem("adminUser");
      router.push("/admin/auth");
    } catch (e) {
      console.error("Logout error:", e);
      localStorage.removeItem("adminUser");
      router.push("/admin/auth");
    }
  };

  const handleTabClick = (id) => {
    setActiveTab(id);
    setMobileOpen(false);
  };

  const sidebarContent = (
    <>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
        <p className="text-sm text-zinc-500 mt-1">
          {userRole === "admin" ? "Admin" : "Blog Manager"}
        </p>
      </div>

      <nav className="space-y-2 flex-1">
        {menuItems
          .filter((item) => item.roles.includes(userRole))
          .map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                  activeTab === item.id
                    ? "bg-zinc-700 text-white"
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-white",
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
      </nav>

      <div className="border-t border-zinc-700 pt-4">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all duration-200"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden fixed top-4 left-4 z-60 p-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white"
        aria-label="Toggle sidebar"
      >
        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-screen w-64 bg-zinc-900 border-r border-zinc-700 p-6 flex flex-col z-50 transition-transform duration-300 md:hidden",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {sidebarContent}
      </aside>

      {/* Desktop sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-zinc-900 border-r border-zinc-700 p-6 flex-col hidden md:flex z-50">
        {sidebarContent}
      </aside>
    </>
  );
};

export default AdminSidebar;
