import React from 'react';
import { projectsData } from '../data/projects';
import ProjectCard from './ProjectCard';
import Link from './Link';
import { ArrowRight, Code, Sparkles } from 'lucide-react';

export default function ProjectsSection() {
  const featuredProjects = projectsData.filter((p) => p.featured || p.id <= 3).slice(0, 3);

  return (
    <section id="projects" className="py-20 bg-[#0D1B2A]/40 border-t border-[#1E354A]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#112438] border border-[#10B981]/30 text-xs font-mono text-[#10B981] mb-3">
              <span>&lt;03. Portfolio /&gt;</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-3 text-base text-[#94A3B8]">
              Selected works highlighting full-stack web applications, clean component architectures, and robust API designs.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#112438] hover:bg-[#1E354A] text-[#F8FAFC] border border-[#1E354A] hover:border-[#10B981]/50 text-sm font-semibold transition-all group self-start md:self-auto shadow-sm"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 text-[#10B981] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-5 rounded-2xl bg-[#112438]/70 border border-[#1E354A] max-w-xl mx-auto">
            <div className="p-2.5 rounded-xl bg-[#0D1B2A] text-[#10B981]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="text-center sm:text-left">
              <div className="text-sm font-semibold text-[#F8FAFC]">
                Looking for more project repositories?
              </div>
              <div className="text-xs text-[#94A3B8]">
                Check out the complete catalog with tags, source links, and live previews.
              </div>
            </div>
            <Link
              href="/projects"
              className="text-xs font-mono font-semibold px-4 py-2.5 rounded-xl bg-[#10B981] hover:bg-[#34D399] text-[#07111F] transition-all whitespace-nowrap"
            >
              Browse All ({projectsData.length})
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
