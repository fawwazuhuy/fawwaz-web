import React from 'react';
import { skillCategoriesData, SkillCategory } from '../data/skills';
import { Layout, Server, Code2, Cpu, Check, Sparkles } from 'lucide-react';

export default function Skills() {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-[#10B981]" />;
      case 'Server':
        return <Server className="w-5 h-5 text-[#34D399]" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#10B981]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#34D399]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#10B981]" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#112438] border border-[#10B981]/30 text-xs font-mono text-[#10B981] mb-3">
            <span>&lt;02. Competencies /&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
            Skills &amp; Technologies
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#94A3B8]">
            Categorized technical capabilities and toolsets utilized across frontend, backend, and development workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategoriesData.map((category: SkillCategory, idx: number) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#112438] border border-[#1E354A] hover:border-[#10B981]/40 transition-all duration-300 p-6 sm:p-7 shadow-lg group hover:shadow-[0_0_25px_rgba(16,185,129,0.12)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="p-3 rounded-xl bg-[#0D1B2A] border border-[#1E354A] group-hover:border-[#10B981]/40 transition-colors">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#F8FAFC] group-hover:text-[#34D399] transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs text-[#94A3B8] line-clamp-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-3">
                  {category.skills.map((skill, sIdx) => {
                    const isCustomPlaceholder = skill.isPlaceholder || skill.name.startsWith('[');
                    return (
                      <span
                        key={sIdx}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 ${
                          isCustomPlaceholder
                            ? 'bg-[#10B981]/20 border border-[#10B981] text-[#34D399] font-mono shadow-[0_0_10px_rgba(16,185,129,0.2)]'
                            : 'bg-[#0D1B2A] border border-[#1E354A] text-[#F8FAFC] hover:border-[#10B981]/40 hover:text-[#34D399]'
                        }`}
                      >
                        {isCustomPlaceholder ? (
                          <Sparkles className="w-3 h-3 text-[#10B981]" />
                        ) : (
                          <Check className="w-3 h-3 text-[#10B981]/70" />
                        )}
                        <span>{skill.name}</span>
                        {isCustomPlaceholder && (
                          <span className="text-[10px] text-[#10B981] font-mono opacity-80">(Custom)</span>
                        )}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-[#1E354A]/60 flex items-center justify-between text-[11px] text-[#94A3B8] font-mono">
                <span>{category.skills.length} competencies listed</span>
                <span className="text-[#10B981]">TypeScript strict</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
