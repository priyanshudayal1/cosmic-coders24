"use client";

import React, { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import GlassButton from "../ui/GlassButton";
import LoadingSpinner from "../ui/LoadingSpinner";

const ContactForm = ({ serviceName = "Website Development" }) => {
  const [formState, setFormState] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    service: serviceName,
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
    setTimeout(() => {
      setSubmitted(true);
      setSubmitting(false);
      setFormState((prev) => ({
        ...prev,
        name: "",
        business: "",
        email: "",
        phone: "",
        message: "",
      }));
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  // Update form state if serviceName prop changes
  React.useEffect(() => {
    setFormState((prev) => ({ ...prev, service: serviceName }));
  }, [serviceName]);

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
            placeholder="Name"
            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="business"
            className="text-sm font-medium text-gray-400 ml-1"
          >
            Business Name
          </label>
          <input
            type="text"
            id="business"
            name="business"
            value={formState.business}
            onChange={handleChange}
            placeholder="Business Name"
            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            placeholder="Email"
            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="phone"
            className="text-sm font-medium text-gray-400 ml-1"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
            required
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="service"
          className="text-sm font-medium text-gray-400 ml-1"
        >
          Service Required
        </label>
        <input
          type="text"
          id="service"
          name="service"
          defaultValue={serviceName}
          readOnly
          className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-gray-400 focus:outline-none cursor-not-allowed"
        />
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
          placeholder="Message"
          className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
          required
        />
      </div>

      <div className="flex justify-center mt-4">
        <GlassButton
          type="submit"
          disabled={submitting}
          size="lg"
          className="w-full md:w-auto min-w-50 rounded-full hover:bg-purple-600/30 hover:border-purple-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? (
            <>
              <LoadingSpinner size="sm" />
              <span className="ml-2">Sending...</span>
            </>
          ) : submitted ? (
            <>
              <CheckCircle className="w-4 h-4 ml-2 inline-block" />
              <span className="ml-2">Message Sent!</span>
            </>
          ) : (
            <>
              <span>Submit Request</span>
              <Send className="w-4 h-4 ml-1 inline-block" />
            </>
          )}
        </GlassButton>
      </div>
    </form>
  );
};

export default ContactForm;
