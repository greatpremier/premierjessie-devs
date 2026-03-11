import React from 'react';
import { MousePointer, Target, TrendingUp, BarChart3 } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Process = () => {
  return (
    <section id="process" className="py-24 bg-slate-900 border-y border-white/5 relative overflow-hidden">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Growth Methodology</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A proven, data-driven approach that transforms your digital presence and drives measurable business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Audit & Analysis", desc: "Deep dive into your current digital presence, competitors, and market opportunities.", icon: <MousePointer /> },
            { step: "02", title: "Strategy Development", desc: "Craft a customized growth plan with clear KPIs and measurable objectives.", icon: <Target /> },
            { step: "03", title: "Implementation", desc: "Execute campaigns, optimize content, and implement tracking across all channels.", icon: <TrendingUp /> },
            { step: "04", title: "Optimization & Scale", desc: "Monitor performance, A/B test, and scale what works for maximum ROI.", icon: <BarChart3 /> }
          ].map((item, i) => (
            <RevealOnScroll key={i} delay={i * 150}>
              <div className="relative group">
                <div className="text-8xl font-black text-slate-800/50 absolute -top-10 -left-4 z-0 group-hover:text-slate-800 transition-colors select-none">
                  {item.step}
                </div>
                <div className="relative z-10 pt-10">
                  <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;