"use client";

import { FileText, BookOpen, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const AdminSidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: "forms", label: "Form Submissions", icon: FileText },
    { id: "blogs", label: "Blog Manager", icon: BookOpen },
    { id: "managers", label: "Blog Managers", icon: Users },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-zinc-950 border-r border-zinc-800 p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
        <p className="text-sm text-zinc-500 mt-1">Cosmic Coders 24</p>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                activeTab === item.id
                  ? "bg-zinc-800 text-white"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default AdminSidebar;
