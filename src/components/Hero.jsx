import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles, Terminal, Code } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';
import heroPortrait from '../assets/hero-portrait.jpg';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './SocialIcons';

export default function Hero({ onOpenResume }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-[#070709]"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f230f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f230f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text + Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono-code text-xs font-semibold tracking-wider">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              HELLO, I'M
            </div>

            {/* Name */}
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none">
                VIDHUN <span className="text-orange-500">KRISHNA S</span>
              </h1>
              <p className="mt-2 text-sm sm:text-base font-mono-code text-neutral-400 font-medium tracking-wide">
                Full-Stack Developer <span className="text-orange-500">|</span> C++ Programmer <span className="text-orange-500">|</span> React <span className="text-orange-500">|</span> Spring Boot <span className="text-orange-500">|</span> Express
              </p>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-200 leading-snug tracking-tight">
              BUILDING FULL-STACK SYSTEMS THAT <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">SOLVE REAL PROBLEMS.</span>
            </h2>

            {/* Subtitle / Bio */}
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              {PERSONAL_INFO.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-all duration-300 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 active:scale-95"
              >
                VIEW PROJECTS
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700 hover:border-orange-500 text-neutral-200 hover:text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-300 active:scale-95"
              >
                <Download className="w-4 h-4 text-orange-500" />
                DOWNLOAD RESUME
              </button>
            </div>

            {/* Social Links Bar */}
            <div className="pt-4 flex items-center gap-4 border-t border-neutral-800/80">
              <span className="text-xs font-mono-code text-neutral-500 uppercase tracking-wider">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-orange-500 text-neutral-400 hover:text-orange-400 flex items-center justify-center transition-all duration-300 hover:scale-105"
                  title="GitHub Profile"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-orange-500 text-neutral-400 hover:text-orange-400 flex items-center justify-center transition-all duration-300 hover:scale-105"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>

                <a
                  href={PERSONAL_INFO.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-orange-500 text-neutral-400 hover:text-orange-400 flex items-center justify-center transition-all duration-300 hover:scale-105"
                  title="LeetCode Profile"
                  aria-label="LeetCode"
                >
                  <Code className="w-5 h-5" />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Hero Portrait Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group w-full max-w-md">
              {/* Decorative Frame Elements */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-orange-500/40 via-amber-500/20 to-transparent blur-xl opacity-60 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative bg-[#0d0d12] border border-neutral-800 group-hover:border-orange-500/50 rounded-3xl p-3 overflow-hidden shadow-2xl transition-all duration-300">
                
                {/* Hero Image Container */}
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-neutral-950">
                  <img
                    src={heroPortrait}
                    alt="Vidhun Krishna S - Full Stack Developer"
                    className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 filter contrast-[1.05]"
                  />
                  {/* Subtle Dark Overlay Gradient at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-transparent to-transparent opacity-80" />

                  {/* Corner Accent Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-neutral-900/90 backdrop-blur-md border border-neutral-700/80 p-3 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-xs font-semibold text-neutral-200">Focused on C++ & Full-Stack</span>
                    </div>
                    <Terminal className="w-4 h-4 text-orange-400" />
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
