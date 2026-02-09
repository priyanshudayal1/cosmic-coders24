"use client";

import { useState } from "react";
import { Mail, Phone, Building2, MessageSquare } from "lucide-react";

const FormSubmissions = () => {
  const [submissions] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+1234567890",
      business: "Tech Corp",
      service: "Website Development",
      message: "Need a new website for our business",
      date: "2024-01-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+0987654321",
      business: "Design Studio",
      service: "Branding & Logo Design",
      message: "Looking for complete branding package",
      date: "2024-01-14",
    },
  ]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">Form Submissions</h2>
        <p className="text-zinc-400">View all contact form submissions</p>
      </div>

      <div className="grid gap-6">
        {submissions.map((submission, index) => (
          <div key={submission.id} className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">{submission.name}</h3>
                <p className="text-sm text-zinc-500">{submission.date}</p>
              </div>
              <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm">
                {submission.service}
              </span>
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
              <div className="flex items-center gap-2 text-zinc-300">
                <Building2 className="w-4 h-4 text-zinc-500" />
                <span className="text-sm">{submission.business}</span>
              </div>
            </div>

            <div className="flex gap-2 text-zinc-300 bg-zinc-950 p-4 rounded-lg border border-zinc-800">
              <MessageSquare className="w-4 h-4 text-zinc-500 mt-1 shrink-0" />
              <p className="text-sm">{submission.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormSubmissions;
