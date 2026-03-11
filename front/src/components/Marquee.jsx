import React from 'react';

const Marquee = () => {
  const techStack = [
    "Google Ads", "Facebook Ads", "SEO", "Content Marketing", "Social Media", "Analytics", "PPC", "Email Marketing", "Conversion Optimization", "A/B Testing", "Data Analysis", "Growth Hacking"
  ];

  return (
    <div className="w-full py-10 bg-slate-900/50 border-y border-white/5 overflow-hidden">
      <div className="flex whitespace-nowrap overflow-hidden w-full">
        <div className="flex animate-scroll">
          {[...techStack, ...techStack].map((tech, i) => (
            <div key={i} className="mx-8 flex items-center gap-2 text-slate-500 font-bold text-2xl uppercase tracking-widest opacity-50 hover:opacity-100 hover:text-cyan-400 transition-all cursor-default">
              <div className="w-2 h-2 bg-slate-700 rounded-full" />
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;