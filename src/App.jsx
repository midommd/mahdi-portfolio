import React, { useState, useEffect } from 'react';
import { portfolioData } from './data/portfolioData';
import TerminalHero from './components/TerminalHero';
import BentoGrid from './components/BentoGrid';
import Timeline from './components/Timeline';
import Footer from './components/Footer';

const App = () => {
  const [lang, setLang] = useState('fr'); 
  const [darkMode, setDarkMode] = useState(true);
  const t = portfolioData[lang];

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  return (
    <div className={`relative min-h-screen transition-colors duration-500 font-sans selection:bg-emerald-500/30 ${darkMode ? 'bg-zinc-950 text-zinc-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Dynamic Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className={`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob ${darkMode ? 'bg-emerald-600' : 'bg-emerald-300'}`}></div>
        <div className={`absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob animation-delay-2000 ${darkMode ? 'bg-cyan-800' : 'bg-cyan-300'}`}></div>
        <div className={`absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob animation-delay-4000 ${darkMode ? 'bg-blue-900' : 'bg-blue-300'}`}></div>
      </div>

      {/* Glassmorphic Navigation */}
      <nav className={`fixed w-full top-0 z-50 backdrop-blur-xl border-b transition-colors duration-500 ${darkMode ? 'border-zinc-800/40 bg-zinc-950/50' : 'border-slate-300/40 bg-slate-50/50'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-mono font-black text-xl tracking-tight flex items-center gap-2 group cursor-pointer">
            <div className="w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform"></div>
            Daifi.dev_
          </span>
          <div className="flex gap-3">
            <button onClick={() => setLang(lang === 'en' ? 'fr' : 'en')} className={`px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wider rounded-lg transition-all border ${darkMode ? 'bg-zinc-900 border-zinc-700 hover:border-emerald-500 hover:text-emerald-400' : 'bg-white border-slate-300 hover:border-emerald-500 hover:text-emerald-600'}`}>
              {t.nav.langToggle}
            </button>
            <button onClick={() => setDarkMode(!darkMode)} className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all border ${darkMode ? 'bg-zinc-900 border-zinc-700 hover:border-emerald-500 hover:text-emerald-400' : 'bg-white border-slate-300 hover:border-emerald-500 hover:text-emerald-600'}`}>
              {darkMode ? t.nav.light : t.nav.dark}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative max-w-6xl mx-auto px-6 pt-36 pb-12 space-y-24 z-10">
        <TerminalHero data={t.hero} terminal={t.terminal} isDark={darkMode} />
        <BentoGrid projects={t.projects} skills={t.skills} isDark={darkMode} />
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <Timeline data={t.experience} isDark={darkMode} type="experience" />
          <Timeline data={t.education} isDark={darkMode} type="education" />
        </div>
      </main>

      <Footer data={t.footer} isDark={darkMode} />
    </div>
  );
};

export default App;