import React from 'react';
import { Project } from '../data/projects';
import { Github, ExternalLink, FolderGit2, Star, CheckCircle } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isPlaceholderTitle = project.title.startsWith('[');

  return (
    <div className="rounded-2xl bg-[#112438] border border-[#1E354A] hover:border-[#10B981]/50 transition-all duration-300 p-6 flex flex-col justify-between group hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2.5 rounded-xl bg-[#0D1B2A] border border-[#1E354A] group-hover:border-[#10B981]/30 transition-colors">
              <FolderGit2 className="w-5 h-5 text-[#10B981]" />
            </div>
            {project.category && (
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-[#0D1B2A] text-[#94A3B8] border border-[#1E354A]">
                {project.category}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="p-2 rounded-lg text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#0D1B2A] border border-transparent hover:border-[#1E354A] transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo for ${project.title}`}
                className="p-2 rounded-lg text-[#94A3B8] hover:text-[#10B981] hover:bg-[#0D1B2A] border border-transparent hover:border-[#1E354A] transition-all"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-xl font-bold text-[#F8FAFC] group-hover:text-[#34D399] transition-colors mb-2.5 flex items-center gap-2">
          <span>{project.title}</span>
          {project.featured && (
            <span className="inline-flex items-center gap-1 text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
              <Star className="w-2.5 h-2.5 fill-current" />
              Featured
            </span>
          )}
        </h3>

        <p className="text-sm text-[#94A3B8] leading-relaxed mb-4">
          {project.description}
        </p>

        {project.highlights && project.highlights.length > 0 && (
          <ul className="space-y-1.5 mb-4 text-xs text-[#94A3B8]/90">
            {project.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#10B981] mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="pt-4 border-t border-[#1E354A]/80">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-[#0D1B2A] text-[#94A3B8] group-hover:text-[#F8FAFC] border border-[#1E354A] transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-xs pt-1">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#10B981] hover:text-[#34D399] font-medium transition-colors"
          >
            <span>Repository</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="text-[#94A3B8]/50 text-[11px] font-mono">CLI / Local Service</span>
          )}
        </div>
      </div>
    </div>
  );
}
