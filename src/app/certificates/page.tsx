import React from 'react';
import Link from '../../components/Link';
import {
  Award,
  Hammer,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  FileCheck,
  GraduationCap,
  ArrowLeft,
} from 'lucide-react';

export const metadata = {
  title: 'Certificates | Under Construction',
  description:
    'Certifications and academic credentials are currently being curated and will be published soon.',
};

export default function CertificatesPage() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28 min-h-[85vh] relative overflow-hidden flex items-center justify-center">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#10B981]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="rounded-3xl bg-[#0D1B2A]/90 border border-[#1E354A] p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden backdrop-blur-sm">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#10B981] to-transparent" />

          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#112438] border border-amber-500/40 text-xs font-mono text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.15)] mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
            </span>
            <Hammer className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-semibold uppercase tracking-wider">Under Construction</span>
          </div>

          <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#10B981]/20 to-amber-500/10 blur-xl animate-pulse" />
            <div className="relative w-20 h-20 rounded-2xl bg-[#112438] border border-[#10B981]/40 flex items-center justify-center text-[#10B981] shadow-xl">
              <Award className="w-10 h-10 text-[#10B981]" />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8FAFC] tracking-tight mb-4">
            Certifications &amp; Credentials
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-[#34D399] tracking-tight mb-4">
            Coming Soon!
          </p>

          <p className="text-base sm:text-lg text-[#94A3B8] max-w-xl mx-auto leading-relaxed mb-8">
            This section is currently under development. Verified academic certificates, course completions, and competitive programming achievements are being compiled and will be available here soon.
          </p>

          <div className="max-w-md mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10 text-left">
            <div className="p-3.5 rounded-xl bg-[#112438]/80 border border-[#1E354A] flex flex-col items-center sm:items-start text-center sm:text-left">
              <ShieldCheck className="w-5 h-5 text-[#10B981] mb-1.5" />
              <span className="text-xs font-semibold text-[#F8FAFC]">Web Security</span>
              <span className="text-[10px] text-[#94A3B8] font-mono">Verification pending</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#112438]/80 border border-[#1E354A] flex flex-col items-center sm:items-start text-center sm:text-left">
              <GraduationCap className="w-5 h-5 text-[#34D399] mb-1.5" />
              <span className="text-xs font-semibold text-[#F8FAFC]">Full-Stack Track</span>
              <span className="text-[10px] text-[#94A3B8] font-mono">Course completion</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#112438]/80 border border-[#1E354A] flex flex-col items-center sm:items-start text-center sm:text-left">
              <FileCheck className="w-5 h-5 text-amber-400 mb-1.5" />
              <span className="text-xs font-semibold text-[#F8FAFC]">Algorithms</span>
              <span className="text-[10px] text-[#94A3B8] font-mono">In progress</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 border-t border-[#1E354A]/60">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#10B981] hover:bg-[#34D399] text-[#07111F] font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#10B981]/25 hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] group"
            >
              <span>Explore Projects Instead</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#112438] hover:bg-[#1E354A] text-[#F8FAFC] border border-[#1E354A] hover:border-[#10B981]/40 text-sm font-semibold transition-all group"
            >
              <ArrowLeft className="w-4 h-4 text-[#94A3B8] group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#07111F] hover:bg-[#112438] text-[#94A3B8] hover:text-[#F8FAFC] border border-[#1E354A] text-sm font-medium transition-all"
            >
              <span>Contact Me</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
