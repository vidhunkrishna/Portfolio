import React from 'react';
import { Mail, ArrowUp, Code } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050507] border-t border-neutral-800/80 pt-16 pb-12 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-neutral-800/80">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#hero" className="inline-flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-700 text-orange-500 font-mono-code font-bold flex items-center justify-center">
                VK
              </div>
              <span className="font-extrabold text-xl text-white tracking-wider">
                VIDHUN <span className="text-orange-500">KRISHNA S</span>
              </span>
            </a>
            <p className="mt-2 text-xs font-mono-code text-neutral-400 max-w-sm">
              Full-Stack Developer & C++ Programmer focused on problem solving & software engineering.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-orange-500 text-neutral-400 hover:text-orange-400 flex items-center justify-center transition-all"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-orange-500 text-neutral-400 hover:text-orange-400 flex items-center justify-center transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            <a
              href={PERSONAL_INFO.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-orange-500 text-neutral-400 hover:text-orange-400 flex items-center justify-center transition-all"
              aria-label="LeetCode"
            >
              <Code className="w-5 h-5" />
            </a>

            <a
              href={PERSONAL_INFO.socials.email}
              className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-orange-500 text-neutral-400 hover:text-orange-400 flex items-center justify-center transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-neutral-400">
          <div>
            © 2026 Vidhun Krishna S. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-orange-400 transition-colors p-2 rounded-lg bg-neutral-900 border border-neutral-800"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
