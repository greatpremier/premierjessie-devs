import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Process from './components/Process';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Blog from './components/Blog';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('home'); // Routing State
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Only track sections if we are on the home page
      if (activePage === 'home') {
        const sections = ['home', 'services', 'process', 'contact'];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activePage]);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const handleNavClick = (page, sectionId) => {
    setIsMenuOpen(false);

    if (page === 'home') {
      setActivePage('home');
      // If navigating to a specific section on home
      if (sectionId) {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      setActivePage(page);
    }
  };

  return (
    <div className="font-sans text-slate-200 bg-slate-950 min-h-screen selection:bg-cyan-500 selection:text-white overflow-x-hidden">

      {/* GLOBAL STYLES FOR ANIMATIONS */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll { animation: scroll 20s linear infinite; }

        .glass-nav {
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .glass-card {
          background: rgba(30, 41, 59, 0.4);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
      `}</style>

      <Navigation
        activePage={activePage}
        activeSection={activeSection}
        handleNavClick={handleNavClick}
        scrolled={scrolled}
      />

      {/* -------------------------------------------
        CONDITIONAL RENDER: PAGE CONTENT
        -------------------------------------------
      */}
      {activePage === 'portfolio' ? (
        <Portfolio />
      ) : activePage === 'about' ? (
        <About />
      ) : activePage === 'blog' ? (
        <Blog />
      ) : activePage === 'contact' ? (
        <div className="pt-32 pb-20 min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Contact />
          </div>
        </div>
      ) : (
        <>
          <Hero handleNavClick={handleNavClick} />
          <Marquee />
          <Services />
          <Process />
          <Stats />
          <Contact />
        </>
      )}

      <Footer />
    </div>
  );
}
