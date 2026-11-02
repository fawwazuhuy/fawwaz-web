'use client';

import React, { useState } from 'react';
import { profileData } from '../data/profile';
import Link from './Link';
import {
  Github,
  Linkedin,
  ArrowRight,
  Send,
  Terminal,
  Code2,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
} from 'lucide-react';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#10B981]/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-[#34D399]/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#112438] border border-[#10B981]/30 text-xs font-medium text-[#34D399] shadow-[0_0_15px_rgba(16,185,129,0.15)] mx-auto lg:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
              </span>
              <span>{profileData.status}</span>
            </div>

            <div className="space-y-2">
              <p className="text-[#94A3B8] font-mono text-base md:text-lg tracking-wide flex items-center justify-center lg:justify-start gap-2">
                <span className="text-[#10B981]">&gt;</span> Hello, I&apos;m
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight">
                {profileData.name}
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#34D399] tracking-tight">
                {profileData.title}
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {profileData.shortDescription}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#10B981] hover:bg-[#34D399] text-[#07111F] font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#10B981]/25 hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] group"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0D1B2A] hover:bg-[#112438] text-[#F8FAFC] border border-[#1E354A] hover:border-[#10B981]/50 font-semibold text-sm transition-all duration-200 group"
              >
                <Send className="w-4 h-4 text-[#10B981] transition-transform group-hover:rotate-12" />
                <span>Contact Me</span>
              </Link>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-[#0D1B2A]/60 hover:bg-[#112438] text-[#94A3B8] hover:text-[#F8FAFC] border border-[#1E354A] text-xs font-mono transition-all"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#10B981]" />
                    <span className="text-[#10B981]">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{profileData.email}</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 border-t border-[#1E354A]/60 text-sm text-[#94A3B8]">
              <span className="font-mono text-xs">Find me on:</span>
              <div className="flex items-center gap-2.5">
                <a
                  href={profileData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-[#0D1B2A] hover:bg-[#112438] text-[#94A3B8] hover:text-[#10B981] border border-[#1E354A] hover:border-[#10B981]/40 transition-all hover:scale-105"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={profileData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-[#0D1B2A] hover:bg-[#112438] text-[#94A3B8] hover:text-[#10B981] border border-[#1E354A] hover:border-[#10B981]/40 transition-all hover:scale-105"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <span className="text-xs text-[#94A3B8]/60 hidden sm:inline">•</span>
              <span className="text-xs text-[#94A3B8]/80 hidden sm:inline">
                {profileData.location}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#10B981]/30 to-[#34D399]/20 blur-xl opacity-50" />

              <div className="relative rounded-2xl bg-[#0D1B2A] border border-[#1E354A] shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 bg-[#07111F]/90 border-b border-[#1E354A]">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#94A3B8]">
                    <Terminal className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>developer.config.ts</span>
                  </div>
                  <div className="w-10" />
                </div>

                <div className="p-5 font-mono text-xs space-y-4">
                  <div className="flex items-center gap-3.5 p-3 rounded-xl bg-[#112438]/80 border border-[#1E354A]">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-[#07111F] border border-[#10B981]/40 flex-shrink-0">
                      <img
                        src={profileData.profileImage}
                        alt={profileData.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-[#10B981] font-bold text-base">&lt;/&gt;</div>`;
                          }
                        }}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-bold text-[#F8FAFC] truncate">
                        {profileData.name}
                      </div>
                      <div className="text-[11px] text-[#10B981] truncate">
                        {profileData.title}
                      </div>
                      <div className="text-[10px] text-[#94A3B8] truncate">
                        {profileData.education}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-[11.5px] leading-relaxed text-[#94A3B8] bg-[#07111F]/60 p-3.5 rounded-xl border border-[#1E354A]/80">
                    <p>
                      <span className="text-purple-400">const</span>{' '}
                      <span className="text-blue-300">developer</span> = &#123;
                    </p>
                    <p className="pl-4">
                      <span className="text-[#94A3B8]">name:</span>{' '}
                      <span className="text-[#34D399]">&quot;{profileData.name}&quot;</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-[#94A3B8]">role:</span>{' '}
                      <span className="text-[#34D399]">&quot;{profileData.title}&quot;</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-[#94A3B8]">focus:</span> [
                      <span className="text-amber-300">&quot;Full-Stack&quot;</span>,{' '}
                      <span className="text-amber-300">&quot;DevOps&quot;</span>,{' '}
                      <span className="text-amber-300">&quot;Cloud&quot;</span>],
                    </p>
                    <p className="pl-4">
                      <span className="text-[#94A3B8]">seeking:</span>{' '}
                      <span className="text-[#10B981]">&quot;Certifications &amp; Novels&quot;</span>,
                    </p>
                    <p>&#125;;</p>
                  </div>

                  <div className="flex items-center justify-between pt-1 text-[11px] text-[#94A3B8]">
                    <div className="flex items-center gap-1.5 text-[#10B981]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>All tests passing</span>
                    </div>
                    <div className="flex items-center gap-1 font-mono text-[10px] text-[#94A3B8]/80">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span>Ready to deploy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
