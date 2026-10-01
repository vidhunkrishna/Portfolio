import React from 'react';
import { motion } from 'framer-motion';
import { QUICK_STATS } from '../data/portfolio';

export default function QuickStats() {
  return (
    <section className="py-10 bg-[#09090d] border-y border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {QUICK_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-neutral-900/60 border border-neutral-800/90 hover:border-orange-500/40 rounded-2xl p-5 text-center group transition-all duration-300 backdrop-blur-sm"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-orange-500 group-hover:scale-105 transition-transform tracking-tight">
                {stat.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm font-semibold text-neutral-400 group-hover:text-neutral-200 transition-colors uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
