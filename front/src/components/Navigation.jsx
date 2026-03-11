import React, { useState } from 'react';
import { Cpu, Menu, X } from 'lucide-react';

const Navigation = ({ activePage, activeSection, handleNavClick, scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClickInternal = (page, sectionId) => {
    setIsMenuOpen(false);
    handleNavClick(page, sectionId);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => handleNavClickInternal('home', 'home')}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-200"></div>
              <div className="relative bg-slate-900 p-2 rounded-lg border border-slate-800">
                <Cpu className="text-cyan-400 w-6 h-6" />
              </div>
            </div>
            <span className="font-bold text-xl tracking-tight text-white">
              Premier<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Jessie</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <button onClick={() => handleNavClickInternal('home', 'home')} className={`text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:text-cyan-400 ${activePage === 'home' && activeSection === 'home' ? 'text-cyan-400' : 'text-slate-400'}`}>Home</button>
            <button onClick={() => handleNavClickInternal('home', 'services')} className={`text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:text-cyan-400 ${activePage === 'home' && activeSection === 'services' ? 'text-cyan-400' : 'text-slate-400'}`}>Services</button>
            <button onClick={() => handleNavClickInternal('portfolio')} className={`text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:text-cyan-400 ${activePage === 'portfolio' ? 'text-cyan-400' : 'text-slate-400'}`}>Case Studies</button>
              <button onClick={() => handleNavClickInternal('blog')} className={`text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:text-cyan-400 ${activePage === 'blog' ? 'text-cyan-400' : 'text-slate-400'}`}>Blog</button>
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-colors hover:bg-slate-900">
                Get Started
              </span>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-cyan-400 transition-colors">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <><div className="md:hidden glass-nav absolute w-full border-t border-slate-800/50 animate-in slide-in-from-top-5">
          <div className="px-4 py-6 space-y-4">
            <button onClick={() => handleNavClickInternal('home', 'home')} className="block text-lg font-medium text-slate-300 hover:text-cyan-400">Home</button>
            <button onClick={() => handleNavClickInternal('home', 'services')} className="block text-lg font-medium text-slate-300 hover:text-cyan-400">Services</button>
            <button onClick={() => handleNavClickInternal('portfolio')} className="block text-lg font-medium text-slate-300 hover:text-cyan-400">Case Studies</button>
            <button onClick={() => handleNavClickInternal('about')} className="block text-lg font-medium text-slate-300 hover:text-cyan-400">About</button>
            <button onClick={() => handleNavClickInternal('contact')} className="block text-lg font-medium text-slate-300 hover:text-cyan-400">Contact</button>
          </div>
        </div><button onClick={() => handleNavClickInternal('blog')} className="block text-lg font-medium text-slate-300 hover:text-cyan-400">Blog</button></>      )}
    </nav>
  );
};

export default Navigation;