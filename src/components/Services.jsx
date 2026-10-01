import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../data/portfolio';
import { Cpu, Layout, Server, Layers, Database, ShieldCheck } from 'lucide-react';

const ICONS = [Cpu, Layout, Server, Layers, Database, ShieldCheck];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#070709] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono-code text-xs font-semibold tracking-wider mb-4">
            CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            WHAT I <span className="text-orange-500">BUILD</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Engineering robust software solutions across problem solving, frontend user interfaces, backend APIs, and database design.
          </p>
        </div>

        {/* Services Grid (Figma template style 3x2 grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const IconComponent = ICONS[index % ICONS.length];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-[#0f0f14] border border-neutral-800/90 hover:border-orange-500/50 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-orange-500/10"
              >
                {/* Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono-code text-2xl font-bold text-neutral-600 group-hover:text-orange-500 transition-colors">
                    {service.id}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 group-hover:bg-orange-500 group-hover:border-orange-500 text-orange-400 group-hover:text-white flex items-center justify-center transition-all duration-300">
                    <IconComponent className="w-6 h-6 transition-transform group-hover:scale-110" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors tracking-tight mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom Border Glow on Hover */}
                <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-orange-500/0 to-transparent group-hover:via-orange-500 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
