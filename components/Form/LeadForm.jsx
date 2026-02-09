"use client";

import React, { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import Button from "../ui/Button";
import LoadingSpinner from "../ui/LoadingSpinner";

const LeadForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
      setSubmitting(false);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-sm font-medium text-gray-400 ml-1"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-gray-400 ml-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
            required
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-gray-400 ml-1"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us about your project..."
          className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
          required
        />
      </div>

      <div className="flex justify-center mt-4">
        <Button
          type="submit"
          disabled={submitting}
          variant="glass"
          size="lg"
          className="w-full md:w-auto min-w-50 rounded-full hover:bg-purple-600/30 hover:border-purple-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? (
            <>
              <LoadingSpinner size="sm" />
              <span className="ml-2">Sending...</span>
            </>
          ) : submitted ? (
            <>
              <CheckCircle className="w-4 h-4" />
              <span>Message Sent!</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <Send className="w-4 h-4 ml-1" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default LeadForm;
