import React, { useState, useEffect, useRef } from 'react';
import { 
  Code, 
  Smartphone, 
  Globe, 
  Megaphone, 
  BarChart, 
  Shield, 
  Menu, 
  X, 
  CheckCircle, 
  MapPin, 
  Mail, 
  Phone, 
  ArrowRight,
  Cpu,
  Zap,
  Layers,
  MousePointer,
  Send
} from 'lucide-react';

/**
 * UTILITY: Scroll Reveal Component
 * Adds a fade-up animation when elements enter the viewport
 */
const RevealOnScroll = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {children}
    </div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState('idle');

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'services', 'process', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      e.target.reset();
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  const techStack = [
    "React", "Node.js", "Python", "AWS", "Google Ads", "SEO", "TypeScript", "Figma", "Firebase", "Next.js", "Analytics"
  ];

  const services = [
    {
      title: "Custom Development",
      desc: "Bespoke web and software solutions engineered for scale. We don't use templates; we build digital assets.",
      icon: <Code className="w-8 h-8 text-cyan-400" />,
      color: "group-hover:border-cyan-500/50"
    },
    {
      title: "Mobile Ecosystems",
      desc: "Native and cross-platform applications that provide seamless user experiences on iOS and Android.",
      icon: <Smartphone className="w-8 h-8 text-purple-400" />,
      color: "group-hover:border-purple-500/50"
    },
    {
      title: "Growth Marketing",
      desc: "Data-driven campaigns using AI-enhanced targeting to maximize ROI across Google and Social channels.",
      icon: <Megaphone className="w-8 h-8 text-pink-400" />,
      color: "group-hover:border-pink-500/50"
    },
    {
      title: "Cyber Intelligence",
      desc: "Fortify your infrastructure with penetration testing, security audits, and real-time threat monitoring.",
      icon: <Shield className="w-8 h-8 text-emerald-400" />,
      color: "group-hover:border-emerald-500/50"
    }
  ];

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

      {/* NAVIGATION */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 group cursor-pointer">
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
              {['Home', 'Services', 'Process', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:text-cyan-400 ${
                    activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-slate-400'
                  }`}
                >
                  {item}
                </a>
              ))}
              <a href="#contact" className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#06B6D4_50%,#E2E8F0_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-colors hover:bg-slate-900">
                  Start Project
                </span>
              </a>
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
          <div className="md:hidden glass-nav absolute w-full border-t border-slate-800/50 animate-in slide-in-from-top-5">
            <div className="px-4 py-6 space-y-4">
              {['Home', 'Services', 'Process', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-lg font-medium text-slate-300 hover:text-cyan-400"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
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
                <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">Johannesburg Based</span>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={100}>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight">
                Forging <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">Digital Empires</span>
              </h1>
            </RevealOnScroll>
            
            <RevealOnScroll delay={200}>
              <p className="mt-4 text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
                PremierJessie Devs is the intersection of logic and creativity. We engineer robust software solutions and craft high-velocity marketing strategies for brands that refuse to blend in.
              </p>
            </RevealOnScroll>
            
            <RevealOnScroll delay={300}>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a href="#contact" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-cyan-600 font-pj rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-600 hover:bg-cyan-500">
                  <Zap className="w-5 h-5 mr-2 group-hover:text-yellow-300 transition-colors" />
                  Accelerate Growth
                </a>
                <a href="#services" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-transparent border-2 border-slate-700 rounded-lg hover:border-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-700 hover:bg-slate-800/50">
                  Explore Systems
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* INFINITE MARQUEE */}
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

      {/* SERVICES SECTION */}
      <section id="services" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
              <div className="max-w-2xl">
                <h2 className="text-cyan-500 font-semibold tracking-wide uppercase text-sm mb-2">Capabilities</h2>
                <h3 className="text-4xl md:text-5xl font-bold text-white">Engineering The Future</h3>
              </div>
              <p className="text-slate-400 max-w-md mt-6 md:mt-0 text-lg">
                We move beyond basic websites to create fully integrated digital ecosystems.
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

      {/* PROCESS SECTION (NEW) */}
      <section id="process" className="py-24 bg-slate-900 border-y border-white/5 relative overflow-hidden">
        {/* Grid Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Methodology</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              We don't guess. We follow a rigorous, agile-driven process to ensure every line of code and every pixel serves a purpose.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "We map your business logic and market position.", icon: <MousePointer /> },
              { step: "02", title: "Strategy", desc: "Architecting the solution and user journey.", icon: <Layers /> },
              { step: "03", title: "Execution", desc: "Agile development sprints with rigorous testing.", icon: <Code /> },
              { step: "04", title: "Launch", desc: "Deployment, optimization, and scaling.", icon: <Globe /> }
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

      {/* STATS / PROOF */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-12 border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
              {[
                { label: "Projects Shipped", val: "100+" },
                { label: "Client ROI Avg", val: "300%" },
                { label: "Lines of Code", val: "2M+" },
                { label: "Tech Awards", val: "12" },
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

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 relative">
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll>
              <div>
                <h2 className="text-5xl font-bold text-white mb-6">Let's Build Something <br/><span className="text-cyan-400">Extraordinary.</span></h2>
                <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                  Whether you need a complex SaaS platform or a high-conversion marketing funnel, we are ready to deploy.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-14 h-14 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-cyan-500 transition-colors">
                      <Mail className="w-6 h-6 text-slate-300 group-hover:text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Email Us</p>
                      <p className="text-white text-xl">hello@premierjessiedevs.co.za</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-14 h-14 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-purple-500 transition-colors">
                      <MapPin className="w-6 h-6 text-slate-300 group-hover:text-purple-400" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Visit HQ</p>
                      <p className="text-white text-xl">15 Alice Lane, Sandton, JHB</p>
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
                    <label className="text-sm font-medium text-slate-400 ml-1">Project Type</label>
                    <select className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all">
                      <option>Custom Web Development</option>
                      <option>Mobile App</option>
                      <option>Digital Marketing / SEO</option>
                      <option>Cybersecurity Audit</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400 ml-1">Message</label>
                    <textarea required rows={4} className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600" placeholder="Tell us about your vision..."></textarea>
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
                        Send Request <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 opacity-60 hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-2">
             <Cpu className="text-cyan-500 w-5 h-5" />
             <span className="font-bold text-white tracking-wider">PremierJessie Devs</span>
          </div>
          <div className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Engineered in Johannesburg.
          </div>
        </div>
      </footer>
    </div>
  );
}