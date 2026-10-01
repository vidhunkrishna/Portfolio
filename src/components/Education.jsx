import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../data/portfolio';
import { GraduationCap, MapPin, BookOpen, School, CheckCircle2, Clock } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-[#09090d] border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono-code text-xs font-semibold tracking-wider mb-4">
            ACADEMICS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            EDUCATION & <span className="text-orange-500">ACADEMICS</span>
          </h2>
        </div>

        {/* Education Cards Grid */}
        <div className="max-w-4xl mx-auto space-y-6">
          {EDUCATION.map((edu, idx) => {
            const Icon = edu.isCollege ? GraduationCap : School;
            return (
              <motion.div
                key={edu.id || idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-[#0f0f14] border border-neutral-800/90 hover:border-orange-500/40 rounded-3xl p-6 sm:p-8 transition-all duration-300 shadow-xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl pointer-events-none" />

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  
                  {/* Left Info */}
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-orange-500 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-md">
                      <Icon className="w-7 h-7" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-mono-code font-bold text-orange-400 uppercase tracking-widest">
                          {edu.degree}
                        </span>

                        {/* Status Badge */}
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono-code font-bold border ${
                          edu.statusBadge === "Pre-Final Year"
                            ? "bg-amber-500/10 border-amber-500/30 text-amber-400"
                            : "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                        }`}>
                          {edu.statusBadge}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
                        {edu.field}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-neutral-400 mt-2">
                        <div className="flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                          <span>{edu.institution}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Score Box */}
                  <div className="bg-neutral-900 border border-neutral-800 group-hover:border-orange-500/40 rounded-2xl px-6 py-4 text-center shrink-0 w-full sm:w-auto min-w-[160px]">
                    <div className="text-2xl font-extrabold text-orange-500 font-mono-code">
                      {edu.score}
                    </div>
                    <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mt-0.5">
                      {edu.scoreLabel}
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
