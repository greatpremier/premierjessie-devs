import React from 'react';
import { Users, Target, Award, Heart } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-cyan-400" />,
      title: "Results-Driven",
      desc: "We measure success by your growth metrics, not vanity numbers."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: "Client Partnership",
      desc: "We work as an extension of your team, not just a vendor."
    },
    {
      icon: <Award className="w-8 h-8 text-pink-400" />,
      title: "Innovation First",
      desc: "We stay ahead of trends and leverage cutting-edge marketing technologies."
    },
    {
      icon: <Heart className="w-8 h-8 text-emerald-400" />,
      title: "Transparency",
      desc: "Clear communication and honest reporting at every step."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Growth Strategist",
      desc: "Former Google Ads specialist with 8+ years driving 300%+ ROI for clients."
    },
    {
      name: "Mike Chen",
      role: "SEO Director",
      desc: "Organic growth expert who has ranked 500+ keywords in competitive niches."
    },
    {
      name: "Lisa Rodriguez",
      role: "Content & Social Media Lead",
      desc: "Creative director with a passion for storytelling and community building."
    }
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-cyan-500 font-semibold tracking-wide uppercase text-sm mb-2">About Us</h2>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              Driving <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Business Growth</span> Since 2018
            </h1>
            <p className="text-slate-400 max-w-3xl mx-auto text-lg">
              PremierJessie was founded with a simple mission: to democratize access to enterprise-level growth marketing for businesses of all sizes. We believe every company deserves the tools and strategies to compete and win in the digital marketplace.
            </p>
          </div>
        </RevealOnScroll>

        {/* Values */}
        <section className="mb-20">
          <RevealOnScroll>
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
          </RevealOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <RevealOnScroll key={index} delay={index * 100}>
                <div className="glass-card p-6 rounded-2xl border border-slate-800 text-center">
                  <div className="bg-slate-900/80 p-4 rounded-2xl border border-white/10 w-fit mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-slate-400 text-sm">{value.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <RevealOnScroll>
            <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h2>
          </RevealOnScroll>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <RevealOnScroll key={index} delay={index * 150}>
                <div className="glass-card p-8 rounded-3xl border border-slate-800 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-medium mb-4">{member.role}</p>
                  <p className="text-slate-400 text-sm">{member.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* Mission */}
        <section>
          <RevealOnScroll>
            <div className="glass-card p-12 rounded-3xl border border-slate-800 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
                To empower businesses with data-driven marketing strategies that deliver measurable results. We bridge the gap between traditional marketing and modern digital tactics, ensuring our clients not only survive but thrive in an increasingly competitive landscape.
              </p>
            </div>
          </RevealOnScroll>
        </section>
      </div>
    </div>
  );
};

export default About;