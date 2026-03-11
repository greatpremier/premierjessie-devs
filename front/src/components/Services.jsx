import React from 'react';
import { ArrowRight, Search, Target, TrendingUp, Users, BarChart3, Megaphone } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Services = () => {
  const services = [
    {
      title: "SEO & SEM",
      desc: "Dominate search results with data-driven SEO strategies and high-converting PPC campaigns that drive qualified traffic and boost conversions.",
      icon: <Search className="w-8 h-8 text-cyan-400" />,
      color: "group-hover:border-cyan-500/50"
    },
    {
      title: "Social Media Marketing",
      desc: "Build engaged communities and drive brand awareness across all major social platforms with targeted content and paid advertising.",
      icon: <Users className="w-8 h-8 text-purple-400" />,
      color: "group-hover:border-purple-500/50"
    },
    {
      title: "Content Marketing",
      desc: "Create compelling content that attracts, engages, and converts your audience into loyal customers through blogs, videos, and infographics.",
      icon: <Megaphone className="w-8 h-8 text-pink-400" />,
      color: "group-hover:border-pink-500/50"
    },
    {
      title: "Analytics & Optimization",
      desc: "Track performance, identify opportunities, and continuously optimize your digital presence for maximum ROI and growth.",
      icon: <BarChart3 className="w-8 h-8 text-emerald-400" />,
      color: "group-hover:border-emerald-500/50"
    }
  ];

  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-cyan-500 font-semibold tracking-wide uppercase text-sm mb-2">Our Services</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white">Growth-Driven Marketing Solutions</h3>
            </div>
            <p className="text-slate-400 max-w-md mt-6 md:mt-0 text-lg">
              We combine strategic thinking with cutting-edge tactics to accelerate your business growth.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div className={`group glass-card p-10 rounded-3xl hover:-translate-y-2 transition-all duration-500 border border-slate-800 ${service.color}`}>
                <div className="flex justify-between items-start mb-8">
                  <div className="bg-slate-900/80 p-4 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <ArrowRight className="text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{service.title}</h4>
                <p className="text-slate-400 leading-relaxed text-lg">
                  {service.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;