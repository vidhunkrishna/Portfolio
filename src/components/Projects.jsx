import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../data/portfolio';
import { ExternalLink, Gamepad2, Users, Car } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const PROJECT_ICONS = {
  'dodge-game': Gamepad2,
  'tutor-application': Users,
  'car-viewer': Car,
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#09090d] border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono-code text-xs font-semibold tracking-wider mb-4">
            PORTFOLIO WORK
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            FEATURED <span className="text-orange-500">PROJECTS</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Real working applications engineered using React, HTML5 Canvas, Spring Boot, PostgreSQL, and REST APIs.
          </p>
        </div>

        {/* Projects Grid (Figma layout: 3-cols desktop, 2-cols tablet, 1-col mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => {
            const IconComponent = PROJECT_ICONS[project.id] || Gamepad2;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group bg-[#0d0d12] border border-neutral-800/90 hover:border-orange-500/50 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-orange-500/10"
              >
                {/* Visual Header Box */}
                <div>
                  <div className="relative aspect-[16/9] bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 p-6 flex flex-col justify-between border-b border-neutral-800/80 overflow-hidden">
                    {/* Background Pattern Accent */}
                    <div className="absolute inset-0 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:16px_16px] opacity-10 group-hover:opacity-20 transition-opacity" />
                    
                    {/* Top Tag & Icon */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-neutral-900/90 border border-neutral-700 text-orange-400 font-mono-code text-[11px] font-semibold">
                        {project.category}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Middle Stylized Visual Title */}
                    <div className="relative z-10 my-auto py-4">
                      <h4 className="text-2xl font-black text-neutral-300 group-hover:text-white transition-colors tracking-tight font-mono-code">
                        {project.title}
                      </h4>
                    </div>

                    {/* Tech Badges */}
                    <div className="relative z-10 flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded bg-neutral-950/80 border border-neutral-800 text-neutral-400 text-[10px] font-mono-code"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors tracking-tight mb-2">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 pb-6 pt-2 border-t border-neutral-800/60 flex items-center justify-between gap-3">
                  {/* GitHub Button */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-600 text-neutral-300 hover:text-white text-xs font-semibold py-2.5 px-3 rounded-xl transition-all"
                  >
                    <GithubIcon className="w-4 h-4 text-orange-400" />
                    GitHub
                  </a>

                  {/* Live Demo Button (if available) */}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-3 rounded-xl transition-all shadow-md shadow-orange-500/20 active:scale-95"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                  ) : (
                    <span className="flex-1 text-center py-2.5 px-3 rounded-xl bg-neutral-900/40 border border-neutral-800/50 text-neutral-500 text-[11px] font-mono-code">
                      In Development
                    </span>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
