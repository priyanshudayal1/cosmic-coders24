"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Send, CheckCircle } from "lucide-react";
import Button from "../ui/Button";
import SpotlightCard from "../SpotlightCard";
import SectionHeading from "../ui/SectionHeading";

const ResumeForm = ({ showRoleDropdown = false }) => {
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
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [uploadingFile, setUploadingFile] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
  });

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUploadingFile(true);
      setTimeout(() => {
        setFile(e.target.files[0]);
        setUploadingFile(false);
      }, 500);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("firstName", formData.firstName);
    data.append("lastName", formData.lastName);
    data.append("email", formData.email);
    if (showRoleDropdown) data.append("role", formData.role);
    data.append("resume", file);

    try {
      const res = await fetch("/api/careers/apply", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        setSubmitted(true);
        setFile(null);
        setFormData({ firstName: "", lastName: "", email: "", role: "" });
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <SpotlightCard
        className="bg-white/5 border-white/10 p-8 pt-10 rounded-3xl backdrop-blur-sm relative overflow-hidden"
        spotlightColor="rgba(168, 85, 247, 0.2)"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-[60px] rounded-full pointer-events-none" />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 relative z-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-400 ml-1">
                First Name
              </label>
              <input
                type="text"
                placeholder="John"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-400 ml-1">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Doe"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-400 ml-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
              required
            />
          </div>

          {showRoleDropdown && (
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-400 ml-1">
                Role Applying For
              </label>
              <div className="relative">
                <select
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                  className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 pr-10 text-white focus:outline-none focus:border-purple-500/50 transition-colors w-full appearance-none cursor-pointer"
                  required
                >
                  <option value="" className="bg-black">
                    Select a role
                  </option>
                  {roles.map((role, index) => (
                    <option key={index} value={role} className="bg-black">
                      {role}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
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
            </div>
          )}

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-400 ml-1">
              Resume / CV
            </label>
            <div className="relative">
              <input
                type="file"
                id="resume-upload"
                className="hidden"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
              />
              <label
                htmlFor="resume-upload"
                className="flex items-center justify-center gap-2 w-full border border-dashed border-white/20 bg-black/20 hover:bg-white/5 hover:border-purple-500/50 rounded-xl p-8 cursor-pointer transition-all duration-300 group"
              >
                {uploadingFile ? (
                  <div className="flex flex-col items-center gap-2 text-purple-400">
                    <div className="w-6 h-6 border-2 border-purple-400 border-t-transparent rounded-full animate-spin" />
                    <span className="text-sm font-medium">Loading file...</span>
                  </div>
                ) : file ? (
                  <div className="flex items-center gap-2 text-purple-400">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium truncate max-w-50">
                      {file.name}
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-2 text-gray-500 group-hover:text-gray-300">
                    <Upload className="w-6 h-6 mb-1" />
                    <span className="text-sm">
                      Click to upload or drag and drop
                    </span>
                    <span className="text-xs text-gray-600">
                      PDF, DOC up to 10MB
                    </span>
                  </div>
                )}
              </label>
            </div>
          </div>

          <Button
            type="submit"
            variant="glass"
            size="lg"
            disabled={loading || !file}
            className="w-full mt-4 rounded-full hover:bg-purple-600/30 hover:border-purple-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitted ? (
              <>
                <CheckCircle className="w-4 h-4" />
                <span>Application Sent!</span>
              </>
            ) : loading ? (
              <span>Submitting...</span>
            ) : (
              <>
                <span>Submit Application</span>
                <Send className="w-4 h-4 ml-1" />
              </>
            )}
          </Button>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/30 rounded-xl"
            >
              <CheckCircle className="w-5 h-5 text-green-400" />
              <p className="text-green-400 text-sm font-medium">
                Resume uploaded successfully! We&apos;ll be in touch soon.
              </p>
            </motion.div>
          )}
        </form>
      </SpotlightCard>
    </motion.div>
  );
};

export default ResumeForm;
