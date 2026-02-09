"use client";

import { FileText, BookOpen, Users, LogOut, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const AdminSidebar = ({ activeTab, setActiveTab, userRole }) => {
  const router = useRouter();

  const menuItems = [
    {
      id: "forms",
      label: "Form Submissions",
      icon: FileText,
      roles: ["admin"],
    },
    {
      id: "blogs",
      label: "Blog Manager",
      icon: BookOpen,
      roles: ["admin", "blog-manager"],
    },
    { id: "managers", label: "Blog Managers", icon: Users, roles: ["admin"] },
    { id: "resumes", label: "Career Applications", icon: Briefcase, roles: ["admin"] },
  ];

  const handleLogout = async () => {
    try {
      // Call logout endpoint to clear httpOnly cookie
      await fetch("/api/admin/logout", { method: "POST" });

      // Clear localStorage
      localStorage.removeItem("adminUser");

      // Redirect to login
      router.push("/admin/auth");
    } catch (e) {
      console.error("Logout error:", e);
      // Still clear localStorage and redirect even if API fails
      localStorage.removeItem("adminUser");
      router.push("/admin/auth");
    }
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-zinc-950 border-r border-zinc-800 p-6 flex flex-col">
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
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                  activeTab === item.id
                    ? "bg-zinc-800 text-white"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-white",
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
      </nav>

      <div className="border-t border-zinc-800 pt-4">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all duration-200"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
