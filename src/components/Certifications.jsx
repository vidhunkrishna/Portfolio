import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CERTIFICATIONS } from '../data/portfolio';
import { Award, ChevronDown, ChevronUp, Calendar, CheckCircle } from 'lucide-react';

const CATEGORIES = ["ALL", "PROGRAMMING", "DATA & AI", "CORE CS", "CLOUD & NETWORKING", "PROBLEM SOLVING", "TESTING"];

export default function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [showAll, setShowAll] = useState(false);

  // Filter logic
  const filtered = CERTIFICATIONS.filter(c => {
    if (selectedCategory === "ALL") return true;
    return c.category === selectedCategory;
  });

  // Display limit
  const visibleCerts = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section id="certifications" className="py-24 bg-[#09090d] border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono-code text-xs font-semibold tracking-wider mb-4">
            CREDENTIALS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            CERTIFICATIONS & <span className="text-orange-500">COURSES</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Verified technical certifications across programming paradigms, data structures, AI/ML, networking, databases, and testing.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setShowAll(true); // Auto expand when specific filter clicked
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono-code font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                  : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visibleCerts.map((cert, idx) => (
              <motion.div
                key={cert.title + idx}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0f0f14] border border-neutral-800/90 hover:border-orange-500/40 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
              >
                <div>
                  {/* Category & Icon */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-orange-400 font-mono-code text-[10px] font-bold">
                      {cert.category}
                    </span>
                    <Award className="w-4 h-4 text-neutral-500 group-hover:text-orange-500 transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors tracking-tight line-clamp-2">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p className="text-xs font-semibold text-neutral-400 mt-1">
                    {cert.issuer}
                  </p>
                </div>

                {/* Footer details */}
                <div className="mt-4 pt-4 border-t border-neutral-800/60 flex items-center justify-between text-[11px] text-neutral-500 font-mono-code">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-orange-500" />
                    {cert.date}
                  </span>

                  {cert.grade && (
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold">
                      {cert.grade}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All Toggle Button */}
        {filtered.length > 6 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-orange-500 text-neutral-200 hover:text-white font-bold text-xs px-6 py-3.5 rounded-xl transition-all shadow-md active:scale-95"
            >
              {showAll ? (
                <>
                  SHOW LESS CERTIFICATIONS
                  <ChevronUp className="w-4 h-4 text-orange-500" />
                </>
              ) : (
                <>
                  VIEW ALL {filtered.length} CERTIFICATIONS
                  <ChevronDown className="w-4 h-4 text-orange-500" />
                </>
              )}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
