import React from 'react';
import { X, Download, FileText, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Vidhun_Krishna_S_Resume.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-[#0f0f14] border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-500 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">CURRICULUM VITAE</h3>
              <p className="text-xs font-mono-code text-neutral-400">{PERSONAL_INFO.name}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-orange-500 transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Summary Preview */}
        <div className="space-y-4 text-xs sm:text-sm text-neutral-300">
          <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-2">
            <div className="font-bold text-orange-400 font-mono-code">Professional Highlights:</div>
            <ul className="space-y-1.5 list-disc list-inside text-neutral-300">
              <li>BE Computer Science & Engineering (CGPA: 8.3 / 10)</li>
              <li>Strong proficiency in C++, DSA, and OOP principles</li>
              <li>Full-stack web experience using React, Spring Boot & Express</li>
              <li>3 Completed internships in software & frontend development</li>
              <li>13 Professional certifications (NPTEL, Infosys Springboard, Meta, Coursera)</li>
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={handleDownload}
            className="w-full flex-1 inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-orange-500/20 active:scale-95"
          >
            <Download className="w-4 h-4" />
            DOWNLOAD PDF RESUME
          </button>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-200 hover:text-white font-bold text-sm py-3.5 px-6 rounded-xl transition-all"
          >
            <ExternalLink className="w-4 h-4 text-orange-400" />
            VIEW IN BROWSER
          </a>
        </div>
      </div>
    </div>
  );
}
