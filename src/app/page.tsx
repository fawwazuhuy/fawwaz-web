import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import ProjectsSection from '../components/ProjectsSection';
import Link from '../components/Link';
import { ArrowRight, Mail, Sparkles, MessageCircle } from 'lucide-react';
import { profileData } from '../data/profile';

export default function HomePage() {
  return (
    <div className="space-y-0">
      <Hero />

      <About />

      <Skills />

      <ProjectsSection />

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#10B981]/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="rounded-3xl bg-gradient-to-r from-[#112438] via-[#0D1B2A] to-[#112438] border border-[#10B981]/30 p-8 sm:p-12 lg:p-16 text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 flex items-center justify-center mx-auto">
              <Sparkles className="w-6 h-6" />
            </div>

            <div className="space-y-3 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
                Interested in Collaborating?
              </h2>
              <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
                Whether you have an upcoming software project, an internship opportunity, or simply want to connect and discuss tech, my inbox is open!
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#10B981] hover:bg-[#34D399] text-[#07111F] font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#10B981]/25 hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] group"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0D1B2A] hover:bg-[#112438] text-[#F8FAFC] border border-[#1E354A] hover:border-[#10B981]/40 text-sm font-semibold transition-all group"
              >
                <Mail className="w-4 h-4 text-[#10B981]" />
                <span>Direct Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
