import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../data/portfolio';
import { Briefcase, Calendar, MapPin, ExternalLink, Code2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#070709] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono-code text-xs font-semibold tracking-wider mb-4">
            WORK HISTORY
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            INTERNSHIP <span className="text-orange-500">EXPERIENCE</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Hands-on practical development experience across full-stack engineering, frontend React development, and modern web application building.
          </p>
        </div>

        {/* Timeline / Card Cards */}
        <div className="max-w-4xl mx-auto space-y-8 relative">
          
          {/* Vertical Connecting Line */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-[2px] bg-neutral-800" />

          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative md:pl-20 group"
            >
              {/* Timeline Marker Icon (Desktop) */}
              <div className="hidden md:flex absolute left-4 top-6 w-8 h-8 rounded-full bg-[#0d0d12] border-2 border-orange-500 items-center justify-center -translate-x-1/2 group-hover:bg-orange-500 group-hover:scale-110 transition-all shadow-md shadow-orange-500/20 z-10">
                <Briefcase className="w-3.5 h-3.5 text-orange-400 group-hover:text-white transition-colors" />
              </div>

              {/* Card Container */}
              <div className="bg-[#0f0f14] border border-neutral-800/90 hover:border-orange-500/40 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/5">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="text-xs font-mono-code font-bold text-orange-500 uppercase tracking-wider">
                      {exp.company}
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 font-mono-code text-xs">
                      <Calendar className="w-3.5 h-3.5 text-orange-400" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Sub info */}
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                  <span>{exp.location}</span>
                </div>

                {/* Description */}
                <p className="text-neutral-300 text-sm leading-relaxed">
                  {exp.description}
                </p>

                {/* Project worked on entry inside card */}
                {exp.project && (
                  <div className="mt-5 pt-4 border-t border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs text-neutral-300">
                      <Code2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                      <span className="text-neutral-400 font-mono-code">Project worked on:</span>
                      <span className="font-bold text-white font-mono-code tracking-wide">{exp.project.name}</span>
                    </div>

                    <a
                      href={exp.project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-orange-500/50 text-neutral-200 hover:text-white text-xs font-semibold px-3.5 py-2 rounded-xl transition-all shadow-sm group/link w-fit"
                      title={`View ${exp.project.name} on GitHub`}
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-orange-400 group-hover/link:scale-110 transition-transform" />
                      <span>View on GitHub</span>
                      <ExternalLink className="w-3 h-3 text-neutral-500 group-hover/link:text-orange-400 transition-colors" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
