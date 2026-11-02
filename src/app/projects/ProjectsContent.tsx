'use client';

import React, { useMemo, useState } from 'react';
import { Project } from '../../data/projects';
import ProjectCard from '../../components/ProjectCard';
import { FolderGit2, Search, X } from 'lucide-react';

interface ProjectsContentProps {
  projects: Project[];
}

export default function ProjectsContent({ projects }: ProjectsContentProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const categories = useMemo<string[]>(() => [
    'All',
    ...new Set(
      projects
        .map((project) => project.category)
        .filter(
          (category): category is NonNullable<Project['category']> =>
            category !== undefined,
        ),
    ),
  ], [projects]);
  const filteredProjects = useMemo(() => projects.filter((project) => {
    const query = searchQuery.toLowerCase().trim();
    return (selectedCategory === 'All' || project.category === selectedCategory) &&
      (!query || project.title.toLowerCase().includes(query) || project.description.toLowerCase().includes(query) || project.technologies.some((technology) => technology.toLowerCase().includes(query)));
  }), [selectedCategory, searchQuery]);

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28 min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#112438] border border-[#10B981]/30 text-xs font-mono text-[#10B981] mb-3"><span>&lt;02. Archive /&gt;</span></div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">My Projects</h1>
          <p className="mt-3 text-base sm:text-lg text-[#94A3B8] leading-relaxed">A comprehensive catalog of software applications, academic assignments, tools, and experiments built with modern web technologies.</p>
        </div>
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#1E354A]">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((category) => <button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${selectedCategory === category ? 'bg-[#10B981] text-[#07111F] font-semibold shadow-[0_0_15px_rgba(16,185,129,0.25)]' : 'bg-[#112438] text-[#94A3B8] hover:text-[#F8FAFC] border border-[#1E354A] hover:border-[#10B981]/40'}`}>{category}</button>)}
          </div>
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input type="text" placeholder="Search tech or title..." value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} className="w-full pl-9 pr-9 py-2 rounded-xl bg-[#112438] text-xs text-[#F8FAFC] placeholder-[#94A3B8]/60 border border-[#1E354A] focus:outline-none focus:ring-2 focus:ring-[#10B981]/40 focus:border-[#10B981] transition-all" />
            {searchQuery && <button onClick={() => setSearchQuery('')} aria-label="Clear search query" className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#F8FAFC]"><X className="w-3.5 h-3.5" /></button>}
          </div>
        </div>
        {filteredProjects.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">{filteredProjects.map((project: Project) => <ProjectCard key={project.id} project={project} />)}</div> : <div className="rounded-2xl bg-[#112438] border border-[#1E354A] p-12 text-center max-w-lg mx-auto space-y-4"><div className="w-12 h-12 rounded-xl bg-[#0D1B2A] text-[#94A3B8] border border-[#1E354A] flex items-center justify-center mx-auto"><FolderGit2 className="w-6 h-6" /></div><h3 className="text-lg font-bold text-[#F8FAFC]">No Projects Found</h3><p className="text-xs text-[#94A3B8] leading-relaxed">No projects matched your active filters. Try resetting your filters to explore all available projects.</p><button onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#10B981] text-[#07111F] text-xs font-semibold hover:bg-[#34D399] transition-all">Reset Filters</button></div>}
      </div>
    </div>
  );
}
