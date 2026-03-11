import React, { useState } from 'react';
import { Mail, MapPin, CheckCircle, Send } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle');

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      e.target.reset();
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 relative">
       <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <RevealOnScroll>
            <div>
              <h2 className="text-5xl font-bold text-white mb-6">Ready to <span className="text-cyan-400">Scale Your Business?</span></h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Let's discuss how we can help you achieve explosive growth through strategic digital marketing and optimization.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-cyan-500 transition-colors">
                    <Mail className="w-6 h-6 text-slate-300 group-hover:text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Email Us</p>
                    <p className="text-white text-xl">hello@premierjessie.co.za</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-purple-500 transition-colors">
                    <MapPin className="w-6 h-6 text-slate-300 group-hover:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Visit HQ</p>
                    <p className="text-white text-xl">49 Swinburne Rd, Steeledale, JHB</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <form onSubmit={handleContactSubmit} className="glass-card p-8 md:p-10 rounded-3xl border border-slate-700/50 shadow-2xl relative">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400 ml-1">Name</label>
                    <input required type="text" className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400 ml-1">Email</label>
                    <input required type="email" className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600" placeholder="john@company.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Service Needed</label>
                  <select className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all">
                    <option>SEO & SEM</option>
                    <option>Social Media Marketing</option>
                    <option>Content Marketing</option>
                    <option>Analytics & Optimization</option>
                    <option>Full Growth Strategy</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Tell us about your goals</label>
                  <textarea required rows={4} className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600" placeholder="What are your current challenges and growth objectives?"></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending' || formStatus === 'success'}
                  className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-[1.02] ${
                    formStatus === 'success' ? 'bg-emerald-500 text-white' : 'bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                  }`}
                >
                  {formStatus === 'sending' ? (
                    <span className="animate-pulse">Processing...</span>
                  ) : formStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5" /> Message Sent
                    </>
                  ) : (
                    <>
                      Start Your Growth Journey <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Contact;