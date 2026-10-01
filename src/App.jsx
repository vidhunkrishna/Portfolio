import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickStats from './components/QuickStats';
import Services from './components/Services';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import LeetCodeStats from './components/LeetCodeStats';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070709] text-neutral-100 flex flex-col justify-between selection:bg-orange-500 selection:text-white">
      {/* Navigation Bar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Page Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* Quick Stats Bar */}
        <QuickStats />

        {/* Services / What I Build */}
        <Services />

        {/* About Me */}
        <About onOpenResume={() => setResumeOpen(true)} />

        {/* Skills & Technologies */}
        <Skills />

        {/* Portfolio Projects */}
        <Projects />

        {/* Experience & Internships */}
        <Experience />

        {/* Academic Education */}
        <Education />

        {/* Live LeetCode Problem Solving Dashboard */}
        <LeetCodeStats />

        {/* Certifications */}
        <Certifications />

        {/* Contact Form */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Preview/Download Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
