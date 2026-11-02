'use client';

import React, { useState } from 'react';
import { profileData } from '../../data/profile';
import ContactForm from '../../components/ContactForm';
import { Github, Linkedin } from 'lucide-react';

export default function ContactContent() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const copyEmail = async () => {
    await navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28 min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#112438] border border-[#10B981]/30 text-xs font-mono text-[#10B981] mb-3"><span>&lt;03. Connection /&gt;</span></div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">Let&apos;s Work Together</h1>
          <p className="mt-3 text-base sm:text-lg text-[#94A3B8] leading-relaxed">I am always excited to discuss software engineering, web development projects, internship opportunities, or academic collaborations.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-[#112438] border border-[#1E354A] p-6 space-y-4 shadow-lg"><h3 className="text-xl font-bold text-[#F8FAFC]">{profileData.status}</h3><p className="text-sm text-[#94A3B8] leading-relaxed">Currently open to software engineering internships, open-source projects, and student developer opportunities.</p></div>
            <div className="rounded-2xl bg-[#112438] border border-[#1E354A] p-6 space-y-4 shadow-lg"><h3 className="text-base font-bold text-[#F8FAFC]">Contact Channels</h3><div className="p-3.5 rounded-xl bg-[#0D1B2A] border border-[#1E354A] flex items-center justify-between gap-3"><div className="min-w-0"><div className="text-[11px] text-[#94A3B8] font-mono">Direct Email</div><div className="text-sm font-semibold text-[#F8FAFC] truncate">{profileData.email}</div></div><button onClick={copyEmail} className="p-2 rounded-lg bg-[#112438] text-[#94A3B8] border border-[#1E354A]" title="Copy email">{copiedEmail ? 'Copied' : 'Copy'}</button></div><a href={profileData.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0D1B2A] border border-[#1E354A] text-sm text-[#F8FAFC] hover:border-[#10B981]/40"><Github className="w-5 h-5 text-[#10B981]" />GitHub Profile</a><a href={profileData.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0D1B2A] border border-[#1E354A] text-sm text-[#F8FAFC] hover:border-[#10B981]/40"><Linkedin className="w-5 h-5 text-[#10B981]" />LinkedIn Network</a></div>
            <div className="rounded-2xl bg-[#0D1B2A] border border-[#1E354A] p-5 text-xs text-[#94A3B8]">Based in <strong className="text-[#F8FAFC]">{profileData.location}</strong>. Available for remote work across flexible international timezones.</div>
          </div>
          <div className="lg:col-span-7"><ContactForm /></div>
        </div>
      </div>
    </div>
  );
}
