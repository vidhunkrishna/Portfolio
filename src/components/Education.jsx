import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../data/portfolio';
import { GraduationCap, MapPin, Award, BookOpen } from 'lucide-react';

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

        {/* Minimal Education Card */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0f0f14] border border-neutral-800/90 hover:border-orange-500/40 rounded-3xl p-8 transition-all duration-300 shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-orange-500 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-md">
                  <GraduationCap className="w-7 h-7" />
                </div>

                <div>
                  <span className="text-xs font-mono-code font-bold text-orange-400 uppercase tracking-widest">
                    {EDUCATION.degree}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-0.5">
                    {EDUCATION.field}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-neutral-400 mt-2">
                    <div className="flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-orange-500" />
                      <span>{EDUCATION.institution}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                      <span>{EDUCATION.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CGPA Badge */}
              <div className="bg-neutral-900 border border-neutral-800 group-hover:border-orange-500/40 rounded-2xl px-6 py-4 text-center shrink-0 w-full sm:w-auto">
                <div className="text-2xl font-extrabold text-orange-500 font-mono-code">
                  {EDUCATION.cgpa}
                </div>
                <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mt-0.5">
                  Cumulative CGPA
                </div>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
