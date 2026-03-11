import React from 'react';
import { ExternalLink, TrendingUp, Users, DollarSign } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Revenue Boost",
      category: "E-commerce Growth",
      desc: "Increased online sales by 280% through targeted PPC campaigns and conversion rate optimization for a fashion retailer.",
      metrics: ["280% Revenue Increase", "45% Lower CPA", "3x ROAS"],
      url: "#",
      icon: <TrendingUp className="w-12 h-12 text-cyan-400" />,
      color: "border-cyan-500/30 hover:border-cyan-400"
    },
    {
      title: "B2B Lead Generation",
      category: "B2B Marketing",
      desc: "Generated 500+ qualified leads monthly for a SaaS company through content marketing and LinkedIn advertising.",
      metrics: ["500+ Monthly Leads", "35% Conversion Rate", "$2.1M Pipeline"],
      url: "#",
      icon: <Users className="w-12 h-12 text-blue-500" />,
      color: "border-blue-500/30 hover:border-blue-400"
    },
    {
      title: "Local SEO Dominance",
      category: "Local Business",
      desc: "Achieved #1 rankings for 200+ local keywords, resulting in 150% increase in phone calls and in-store visits.",
      metrics: ["200+ #1 Rankings", "150% Call Increase", "Top 3 for 95% Keywords"],
      url: "#",
      icon: <DollarSign className="w-12 h-12 text-green-500" />,
      color: "border-green-500/30 hover:border-green-400"
    }
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-cyan-500 font-semibold tracking-wide uppercase text-sm mb-2">Case Studies</h2>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Results</span>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Real campaigns, real results. See how we've helped businesses across industries achieve extraordinary growth through strategic digital marketing.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <RevealOnScroll key={index} delay={index * 150}>
              <div className={`group relative bg-slate-900/50 backdrop-blur-xl border ${project.color} rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-900/20`}>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-slate-900/80 p-4 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{project.category}</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                  
                  <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                    {project.desc}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <div className="text-cyan-400 font-bold text-sm">{metric}</div>
                      </div>
                    ))}
                  </div>

                  <button className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-bold text-white transition-all duration-200 bg-slate-800 border border-slate-700 rounded-xl hover:bg-cyan-600 hover:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                    View Full Case Study <ExternalLink className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;