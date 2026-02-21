import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = ({ data, isDark }) => {
  return (
    <footer className={`mt-20 border-t py-10 z-10 relative ${isDark ? 'border-zinc-800/50 text-zinc-400' : 'border-slate-200 text-slate-500'}`}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="flex items-center gap-2 font-mono font-bold text-lg">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          Daifi.dev_
        </div>

        <p className="text-sm font-medium">{data.text}</p>

        <div className="flex gap-4">
          <a href="#" className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-zinc-800 hover:text-emerald-400' : 'hover:bg-slate-200 hover:text-emerald-600'}`}><Github size={20} /></a>
          <a href="#" className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-zinc-800 hover:text-emerald-400' : 'hover:bg-slate-200 hover:text-emerald-600'}`}><Linkedin size={20} /></a>
          <a href={`mailto:mohammedelmahdidaifi@gmail.com`} className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-zinc-800 hover:text-emerald-400' : 'hover:bg-slate-200 hover:text-emerald-600'}`}><Mail size={20} /></a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;