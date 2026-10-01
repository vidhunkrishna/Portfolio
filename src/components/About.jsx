import React from 'react';
import { motion } from 'framer-motion';
import { Download, CheckCircle2, Award } from 'lucide-react';
import { ABOUT_CONTENT } from '../data/portfolio';
import passportPhoto from '../assets/about-passport.png';

export default function About({ onOpenResume }) {
  return (
    <section id="about" className="py-24 bg-[#09090d] border-t border-neutral-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Passport Image Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-full max-w-sm">
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-br from-orange-500/30 to-amber-600/10 blur-xl opacity-50 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative bg-[#0d0d12] border border-neutral-800 group-hover:border-orange-500/50 rounded-3xl p-4 shadow-2xl">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800">
                  <img
                    src={passportPhoto}
                    alt="Vidhun Krishna S Portrait"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle Badge */}
                  <div className="absolute bottom-3 left-3 right-3 bg-neutral-900/90 backdrop-blur-md border border-neutral-700/80 p-2.5 rounded-xl flex items-center gap-3">
                    <Award className="w-5 h-5 text-orange-500 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white">BE Computer Science & Engineering</div>
                      <div className="text-[11px] font-mono-code text-neutral-400">Sri Krishna College of Technology</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono-code text-xs font-semibold tracking-wider">
              BIOGRAPHY
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              ABOUT <span className="text-orange-500">ME</span>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
              {ABOUT_CONTENT.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Key Strengths Grid */}
            <div className="pt-2">
              <h3 className="text-xs font-mono-code text-orange-400 uppercase tracking-widest font-bold mb-3">
                Core Strengths & Focus Areas:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ABOUT_CONTENT.keyStrengths.map((strength, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 bg-neutral-900/80 border border-neutral-800/80 px-3.5 py-2.5 rounded-xl"
                  >
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                    <span className="text-xs font-semibold text-neutral-200">{strength}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Resume Download Link */}
            <div className="pt-4 flex items-center gap-3">
              <a
                href="/resume.pdf"
                download="Vidhun_Krishna_S_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-all duration-300 shadow-xl shadow-orange-500/20 hover:shadow-orange-500/35 active:scale-95"
              >
                <Download className="w-4 h-4" />
                DOWNLOAD RESUME
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
