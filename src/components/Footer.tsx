'use client';

import React from 'react';
import { profileData } from '../data/profile';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';
import Link from './Link';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#07111F] border-t border-[#1E354A] text-[#94A3B8] transition-colors relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-[#F8FAFC]">
                {profileData.name}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 font-mono">
                Portfolio
              </span>
            </div>
            <p className="text-sm text-[#94A3B8] max-w-md leading-relaxed">
              {profileData.shortDescription} Crafted with modern web standards.
            </p>
            <div className="text-xs text-[#94A3B8]/80 font-mono">
              Designed & Built for University Web Development Portfolio
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#F8FAFC] tracking-wider uppercase font-mono">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-[#10B981] transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#10B981] transition-colors">
                  All Projects
                </Link>
              </li>
              <li>
                <Link href="/certificates" className="hover:text-[#10B981] transition-colors flex items-center gap-1.5">
                  <span>Certificates</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-mono">Soon</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#10B981] transition-colors">
                  Get In Touch
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#F8FAFC] tracking-wider uppercase font-mono">
              Connect
            </h4>
            <div className="flex flex-col space-y-2 text-sm">
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#10B981] transition-colors group"
              >
                <Github className="w-4 h-4 text-[#94A3B8] group-hover:text-[#10B981]" />
                <span>GitHub ({profileData.username})</span>
              </a>
              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#10B981] transition-colors group"
              >
                <Linkedin className="w-4 h-4 text-[#94A3B8] group-hover:text-[#10B981]" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center gap-2 hover:text-[#10B981] transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#94A3B8] group-hover:text-[#10B981]" />
                <span>{profileData.email}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#1E354A] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#94A3B8] text-center sm:text-left">
            © {currentYear} {profileData.name}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-medium text-[#94A3B8] hover:text-[#10B981] bg-[#0D1B2A] hover:bg-[#112438] border border-[#1E354A] hover:border-[#10B981]/40 px-3.5 py-2 rounded-xl transition-all duration-200 group shadow-sm"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-[#10B981]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
