import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

const NAV_ITEMS = [
  { label: 'HOME', href: '#hero' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SERVICES', href: '#services' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'EDUCATION', href: '#education' },
  { label: 'LEETCODE', href: '#leetcode' },
  { label: 'CERTIFICATIONS', href: '#certifications' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // ScrollSpy logic
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070709]/90 backdrop-blur-md border-b border-neutral-800/80 py-3 shadow-lg shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-700 group-hover:border-orange-500 flex items-center justify-center transition-all duration-300 shadow-md">
            <span className="font-mono-code font-bold text-lg text-orange-500 group-hover:scale-110 transition-transform">
              VK
            </span>
          </div>
          <span className="font-extrabold text-lg tracking-wider text-white group-hover:text-orange-400 transition-colors hidden sm:inline-block">
            VIDHUN<span className="text-orange-500">.</span>
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden xl:flex items-center gap-1 bg-neutral-900/60 border border-neutral-800/80 px-4 py-1.5 rounded-full backdrop-blur-md">
          {NAV_ITEMS.map(item => {
            const id = item.href.substring(1);
            const isActive = activeSection === id;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`px-3 py-1.5 text-xs font-semibold tracking-wider transition-all duration-200 rounded-full ${
                  isActive
                    ? 'text-orange-400 bg-orange-500/10 border border-orange-500/30'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA / Resume Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all duration-300 shadow-md shadow-orange-500/20 hover:shadow-orange-500/40 active:scale-95 border border-orange-400/30"
          >
            <Download className="w-3.5 h-3.5" />
            RESUME
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-orange-500 transition-all"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-orange-500" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0a0a0d] border-b border-neutral-800 px-4 pt-4 pb-6 space-y-2 shadow-2xl animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {NAV_ITEMS.map(item => {
              const id = item.href.substring(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-xs font-bold tracking-wider rounded-lg transition-colors ${
                    isActive
                      ? 'bg-orange-500/20 text-orange-400 border border-orange-500/40'
                      : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm py-3 rounded-xl transition-all shadow-lg shadow-orange-500/20"
          >
            <Download className="w-4 h-4" />
            DOWNLOAD RESUME
          </button>
        </div>
      )}
    </header>
  );
}
