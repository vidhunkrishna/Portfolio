import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../data/portfolio';
import { Code2, Terminal, Cpu, Database, Shield, Wrench, BookOpen, Sparkles } from 'lucide-react';

const CATEGORIES = [
  { key: 'programming', title: 'PROGRAMMING', icon: Terminal, desc: 'Core languages with deep C++ emphasis' },
  { key: 'frontend', title: 'FRONTEND', icon: Code2, desc: 'Modern responsive web interfaces' },
  { key: 'backend', title: 'BACKEND', icon: Cpu, desc: 'REST APIs & backend services' },
  { key: 'databases', title: 'DATABASES', icon: Database, desc: 'Relational & document data stores' },
  { key: 'authentication', title: 'AUTHENTICATION', icon: Shield, desc: 'User security & OAuth protocols' },
  { key: 'tools', title: 'TOOLS & FRAMEWORKS', icon: Wrench, desc: 'Version control & ORM frameworks' },
  { key: 'coreCs', title: 'CORE COMPUTER SCIENCE', icon: BookOpen, desc: 'Fundamental CS domain knowledge' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#070709] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono-code text-xs font-semibold tracking-wider mb-4">
            TECHNICAL PROFICIENCY
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            SKILLS & <span className="text-orange-500">TECHNOLOGIES</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Categorized technical stack spanning low-level language concepts, full-stack frameworks, databases, and computer science fundamentals.
          </p>
        </div>

        {/* Featured C++ Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 bg-gradient-to-r from-orange-500/15 via-neutral-900 to-neutral-900 border border-orange-500/40 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-orange-500 text-white font-mono-code font-black text-2xl flex items-center justify-center shadow-xl shadow-orange-500/30 shrink-0">
              C++
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono-code text-orange-400 font-bold uppercase tracking-wider">Primary Language Focus</span>
                <Sparkles className="w-4 h-4 text-amber-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                C++ & Data Structures & Algorithms
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-2xl">
                Primary language choice for algorithmic problem solving, competitive coding, memory efficiency, and complex logic design.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <span className="px-4 py-2 rounded-xl bg-orange-500/20 border border-orange-500/40 text-orange-300 text-xs font-mono-code font-bold">
              DSA Baseline
            </span>
          </div>
        </motion.div>

        {/* Skills Grid Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat, idx) => {
            const items = SKILLS_DATA[cat.key] || [];
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-[#0f0f14] border border-neutral-800/90 hover:border-orange-500/40 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-orange-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white tracking-wide">
                        {cat.title}
                      </h4>
                      <p className="text-[11px] text-neutral-500">{cat.desc}</p>
                    </div>
                  </div>

                  {/* Skill Chips */}
                  <div className="flex flex-wrap gap-2 pt-3">
                    {items.map((skill, sIdx) => {
                      const isCpp = skill.name === 'C++';
                      return (
                        <span
                          key={sIdx}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 ${
                            isCpp
                              ? 'bg-orange-500 text-white font-mono-code font-bold shadow-md shadow-orange-500/20'
                              : 'bg-neutral-900 text-neutral-300 border border-neutral-800 hover:border-orange-500/40 hover:text-white'
                          }`}
                        >
                          {skill.name}
                        </span>
                      );
                    })}
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
