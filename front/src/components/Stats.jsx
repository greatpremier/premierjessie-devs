import React from 'react';

const Stats = () => {
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-12 border border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
            {[
              { label: "Clients Served", val: "150+" },
              { label: "Avg ROI Increase", val: "340%" },
              { label: "Keywords Ranked #1", val: "500+" },
              { label: "Marketing Awards", val: "18" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-4xl md:text-5xl font-black text-white mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">{stat.val}</span>
                <span className="text-cyan-500 text-sm font-bold uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;