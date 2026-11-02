 'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from './Link';
import { profileData } from '../data/profile';
import { Github, Menu, X, Terminal, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Certificates', href: '/certificates' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07111F]/90 backdrop-blur-md border-b border-[#1E354A] shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#10B981] rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#10B981]/20 to-[#112438] border border-[#10B981]/40 flex items-center justify-center text-[#10B981] group-hover:border-[#10B981] group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all">
              <Terminal className="w-5 h-5 text-[#10B981]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[#F8FAFC] font-bold text-base sm:text-lg tracking-tight group-hover:text-[#34D399] transition-colors">
                {profileData.name.replace('[', '').replace(']', '')}
                <span className="text-[#10B981]">.dev</span>
              </span>
              <span className="text-[11px] text-[#94A3B8] font-mono -mt-1 hidden sm:block">
                @{profileData.username.replace('[', '').replace(']', '').toLowerCase()}
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1 bg-[#0D1B2A]/80 border border-[#1E354A] rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    active
                      ? 'text-[#F8FAFC] bg-[#112438] shadow-[0_0_12px_rgba(16,185,129,0.2)] border border-[#10B981]/30 font-semibold'
                      : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#112438]/50'
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#10B981] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#F8FAFC] bg-[#0D1B2A] hover:bg-[#112438] border border-[#1E354A] hover:border-[#10B981]/40 rounded-xl transition-all duration-200 group hover:shadow-[0_0_15px_rgba(16,185,129,0.15)]"
            >
              <Github className="w-4 h-4 text-[#94A3B8] group-hover:text-[#10B981] transition-colors" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#10B981] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-[#94A3B8] hover:text-[#F8FAFC] bg-[#0D1B2A] border border-[#1E354A] hover:border-[#10B981]/40 transition-colors focus:outline-none focus:ring-2 focus:ring-[#10B981]"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07111F]/98 border-b border-[#1E354A] px-4 pt-3 pb-6 mt-3 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200 shadow-2xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    active
                      ? 'bg-[#112438] text-[#10B981] border border-[#10B981]/30 font-semibold'
                      : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#0D1B2A]'
                  }`}
                >
                  <span>{link.name}</span>
                  {active && <span className="w-2 h-2 bg-[#10B981] rounded-full" />}
                </Link>
              );
            })}
            <div className="pt-3 mt-2 border-t border-[#1E354A]">
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-medium text-[#F8FAFC] bg-[#0D1B2A] hover:bg-[#112438] border border-[#1E354A] rounded-xl transition-all"
              >
                <Github className="w-4 h-4 text-[#10B981]" />
                <span>GitHub Profile</span>
                <ArrowUpRight className="w-4 h-4 text-[#94A3B8]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
