'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, RefreshCw, Mail, User, Tag, MessageSquare, Info } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g., alex@example.com).';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify a subject.';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject should be at least 3 characters long.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please include a message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-[#112438] border border-[#10B981]/40 p-8 text-center space-y-6 shadow-[0_0_30px_rgba(16,185,129,0.15)] animate-in fade-in zoom-in-95 duration-200">
        <div className="w-16 h-16 rounded-2xl bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-[#F8FAFC]">
            Thank You, {formData.name}!
          </h3>
          <p className="text-sm text-[#94A3B8] max-w-md mx-auto">
            Your form validation passed successfully. Since this is an assignment portfolio prototype, no emails were transmitted to a real inbox.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#0D1B2A] border border-[#1E354A] text-left text-xs font-mono space-y-1.5 max-w-md mx-auto text-[#94A3B8]">
          <div><strong className="text-[#F8FAFC]">Subject:</strong> {formData.subject}</div>
          <div><strong className="text-[#F8FAFC]">Email:</strong> {formData.email}</div>
          <div className="truncate"><strong className="text-[#F8FAFC]">Message:</strong> {formData.message}</div>
        </div>

        <button
          onClick={handleReset}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0D1B2A] hover:bg-[#1E354A] text-[#F8FAFC] border border-[#1E354A] hover:border-[#10B981]/40 text-sm font-medium transition-all"
        >
          <RefreshCw className="w-4 h-4 text-[#10B981]" />
          <span>Send Another Message</span>
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl bg-[#112438] border border-[#1E354A] p-6 sm:p-8 space-y-5 shadow-xl relative"
    >
      <div className="flex items-center justify-between pb-2 border-b border-[#1E354A]">
        <h3 className="text-lg font-bold text-[#F8FAFC] flex items-center gap-2">
          <Send className="w-4 h-4 text-[#10B981]" />
          <span>Send a Direct Message</span>
        </h3>
        <span className="text-[11px] font-mono text-[#94A3B8] flex items-center gap-1">
          <Info className="w-3.5 h-3.5 text-[#10B981]" />
          Client-side validation
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label htmlFor="name" className="block text-xs font-medium text-[#F8FAFC] flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-[#94A3B8]" />
            <span>Full Name <span className="text-[#10B981]">*</span></span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Alex Johnson"
            className={`w-full px-4 py-2.5 rounded-xl bg-[#0D1B2A] text-sm text-[#F8FAFC] placeholder-[#94A3B8]/50 border transition-all focus:outline-none focus:ring-2 focus:ring-[#10B981]/40 ${
              errors.name ? 'border-red-500/80' : 'border-[#1E354A] focus:border-[#10B981]'
            }`}
          />
          {errors.name && (
            <p className="text-xs text-red-400 flex items-center gap-1 mt-1 font-mono">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-xs font-medium text-[#F8FAFC] flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-[#94A3B8]" />
            <span>Email Address <span className="text-[#10B981]">*</span></span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. alex@example.com"
            className={`w-full px-4 py-2.5 rounded-xl bg-[#0D1B2A] text-sm text-[#F8FAFC] placeholder-[#94A3B8]/50 border transition-all focus:outline-none focus:ring-2 focus:ring-[#10B981]/40 ${
              errors.email ? 'border-red-500/80' : 'border-[#1E354A] focus:border-[#10B981]'
            }`}
          />
          {errors.email && (
            <p className="text-xs text-red-400 flex items-center gap-1 mt-1 font-mono">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="subject" className="block text-xs font-medium text-[#F8FAFC] flex items-center gap-1.5">
          <Tag className="w-3.5 h-3.5 text-[#94A3B8]" />
          <span>Subject <span className="text-[#10B981]">*</span></span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="e.g. Collaboration Inquiry / Project Opportunity"
          className={`w-full px-4 py-2.5 rounded-xl bg-[#0D1B2A] text-sm text-[#F8FAFC] placeholder-[#94A3B8]/50 border transition-all focus:outline-none focus:ring-2 focus:ring-[#10B981]/40 ${
            errors.subject ? 'border-red-500/80' : 'border-[#1E354A] focus:border-[#10B981]'
          }`}
        />
        {errors.subject && (
          <p className="text-xs text-red-400 flex items-center gap-1 mt-1 font-mono">
            <AlertCircle className="w-3 h-3" />
            <span>{errors.subject}</span>
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="block text-xs font-medium text-[#F8FAFC] flex items-center gap-1.5">
          <MessageSquare className="w-3.5 h-3.5 text-[#94A3B8]" />
          <span>Message <span className="text-[#10B981]">*</span></span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project, timeline, or questions..."
          className={`w-full px-4 py-3 rounded-xl bg-[#0D1B2A] text-sm text-[#F8FAFC] placeholder-[#94A3B8]/50 border transition-all focus:outline-none focus:ring-2 focus:ring-[#10B981]/40 resize-y min-h-[110px] ${
            errors.message ? 'border-red-500/80' : 'border-[#1E354A] focus:border-[#10B981]'
          }`}
        />
        {errors.message && (
          <p className="text-xs text-red-400 flex items-center gap-1 mt-1 font-mono">
            <AlertCircle className="w-3 h-3" />
            <span>{errors.message}</span>
          </p>
        )}
      </div>

      <div className="p-3 rounded-xl bg-[#0D1B2A]/70 border border-[#1E354A] text-xs text-[#94A3B8] leading-relaxed flex items-start gap-2">
        <Info className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" />
        <span>
          Note: This form demonstrates client-side validation logic. Submitting simulates feedback without sending external network payloads.
        </span>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#10B981] hover:bg-[#34D399] disabled:opacity-50 text-[#07111F] font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#10B981]/25 hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <RefreshCw className="w-4 h-4 animate-spin" />
            <span>Verifying &amp; Submitting...</span>
          </>
        ) : (
          <>
            <span>Submit Message</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
