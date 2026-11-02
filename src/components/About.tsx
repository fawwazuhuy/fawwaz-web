import React from 'react';
import { profileData } from '../data/profile';
import { GraduationCap, BookOpen, Compass, Code, Award, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0D1B2A]/40 border-y border-[#1E354A]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#112438] border border-[#10B981]/30 text-xs font-mono text-[#10B981] mb-3">
            <span>&lt;01. Profile /&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
            About Me
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#94A3B8]">
            Get to know my academic background, technical philosophy, and areas of engineering passion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl bg-[#112438] border border-[#1E354A] p-6 sm:p-8 space-y-5 shadow-lg">
              <h3 className="text-xl font-bold text-[#F8FAFC] flex items-center gap-2.5">
                <Code className="w-5 h-5 text-[#10B981]" />
                <span>Engineering Mindset</span>
              </h3>
              <p className="text-[#94A3B8] leading-relaxed text-base">
                {profileData.aboutDescription}
              </p>
              <p className="text-[#94A3B8] leading-relaxed text-sm">
                Whether implementing dynamic frontend state architectures or designing scalable REST APIs, I prioritize clean code principles, strict typing, responsive layouts, and user-centric software design.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                <div className="p-3.5 rounded-xl bg-[#0D1B2A] border border-[#1E354A] text-center sm:text-left">
                  <div className="text-[#10B981] font-bold text-lg">Clean Code</div>
                  <div className="text-xs text-[#94A3B8] mt-0.5">Strict types &amp; modularity</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#0D1B2A] border border-[#1E354A] text-center sm:text-left">
                  <div className="text-[#34D399] font-bold text-lg">Responsive</div>
                  <div className="text-xs text-[#94A3B8] mt-0.5">Mobile-first precision</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#0D1B2A] border border-[#1E354A] text-center sm:text-left">
                  <div className="text-[#10B981] font-bold text-lg">Performance</div>
                  <div className="text-xs text-[#94A3B8] mt-0.5">Fast &amp; accessible web</div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-[#112438] border border-[#1E354A] p-6 sm:p-8 space-y-4 shadow-lg">
              <h3 className="text-lg font-bold text-[#F8FAFC] flex items-center gap-2.5">
                <Compass className="w-5 h-5 text-[#34D399]" />
                <span>Personal &amp; Technical Interests</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {profileData.interests.map((interest, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#0D1B2A]/70 border border-[#1E354A]/80 text-xs sm:text-sm text-[#94A3B8]"
                  >
                    <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                    <span>{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-[#112438] border border-[#1E354A] p-6 sm:p-8 space-y-5 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#10B981]/5 rounded-bl-full pointer-events-none" />

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-[#0D1B2A] border border-[#10B981]/30 text-[#10B981]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#F8FAFC]">Education</h3>
                  <p className="text-xs text-[#10B981] font-mono">Academic Background</p>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-[#0D1B2A] border border-[#1E354A] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#F8FAFC]">
                      {profileData.education}
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#10B981]/15 text-[#34D399] font-mono">
                      {profileData.graduationYear}
                    </span>
                  </div>
                  <div className="text-sm text-[#10B981] font-medium">
                    Major: {profileData.major}
                  </div>
                  <div className="text-xs text-[#94A3B8]">
                    {profileData.university}
                  </div>
                </div>

                <div className="space-y-2 text-xs text-[#94A3B8] pt-1">
                  <div className="flex items-start gap-2">
                    <BookOpen className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" />
                    <span>
                      Key Coursework: Web Development, Data Structures &amp; Algorithms, Database Systems, Software Architecture, Object-Oriented Programming.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-[#34D399] mt-0.5 flex-shrink-0" />
                    <span>
                      Actively participating in technical coding challenges, hackathons, and collaborative engineering projects.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-[#112438] to-[#0D1B2A] border border-[#10B981]/30 p-6 space-y-3">
              <h4 className="text-sm font-bold text-[#F8FAFC] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                University Web Development Submission
              </h4>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                This portfolio demonstrates proficiency in Next.js / React architectural paradigms, strict TypeScript typing, modular component segregation, and clean UI engineering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
