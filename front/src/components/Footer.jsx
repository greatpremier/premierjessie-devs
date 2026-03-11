import React from 'react';
import { Cpu } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 opacity-60 hover:opacity-100 transition-opacity">
        <div className="flex items-center gap-2">
           <Cpu className="text-cyan-500 w-5 h-5" />
           <span className="font-bold text-white tracking-wider">PremierJessie Growth Agency</span>
        </div>
        <div className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Driving Growth in Johannesburg.
        </div>
      </div>
    </footer>
  );
};

export default Footer;