import React from 'react';
import { Zap } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Hero = ({ handleNavClick }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">Johannesburg Based Growth Agency</span>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight">
              Accelerate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">Business Growth</span>
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <p className="mt-4 text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              PremierJessie is a full-service growth agency specializing in digital marketing, SEO, PPC campaigns, and conversion optimization. We turn clicks into customers and visitors into loyal fans.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={300}>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button onClick={() => handleNavClick('contact')} className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-cyan-600 font-pj rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-600 hover:bg-cyan-500">
                <Zap className="w-5 h-5 mr-2 group-hover:text-yellow-300 transition-colors" />
                Start Growing Today
              </button>
              <button onClick={() => handleNavClick('portfolio')} className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-transparent border-2 border-slate-700 rounded-lg hover:border-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-700 hover:bg-slate-800/50">
                View Case Studies
              </button>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Hero;