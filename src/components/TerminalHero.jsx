import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Terminal as TerminalIcon } from 'lucide-react';

const TerminalHero = ({ data, terminal, isDark }) => {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(true);
  const scrollContainerRef = useRef(null);
  const inputRef = useRef(null);

  // 1. The Boot Sequence reads from the selected language
  useEffect(() => {
    // Clear history on mount or language change if we want a reboot, 
    // but to prevent annoying re-boots, we only run this once.
    if (history.length === 0) {
      let currentLine = 0;
      const bootInterval = setInterval(() => {
        setHistory(prev => [...prev, { type: 'system', text: terminal.boot[currentLine] }]);
        currentLine++;
        
        if (currentLine >= terminal.boot.length) {
          clearInterval(bootInterval);
          setIsProcessing(false);
        }
      }, 250);
      return () => clearInterval(bootInterval);
    }
  }, [terminal.boot]);

  // Keep scrolled to the bottom internal to the terminal
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [history]);

  const handleTerminalClick = () => {
    if (inputRef.current && !isProcessing) {
      inputRef.current.focus();
    }
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter' && !isProcessing && input.trim() !== '') {
      const cmd = input.trim().toLowerCase();
      setHistory(prev => [...prev, { type: 'input', text: `${terminal.prompt} ${input}` }]);
      setInput('');
      setIsProcessing(true);

      setTimeout(() => {
        let response = [];
        
        // Dynamically pull from our detailed bilingual dictionary
        if (terminal.commands[cmd]) {
          response = terminal.commands[cmd];
        } else if (cmd === 'skills') {
          // JSON formatting bypasses the dictionary for exact syntax
          const skillsJson = {
            backend: ["PHP", "Laravel", "MySQL", "Node.js", "NoSQL", "PL/SQL"],
            frontend: ["React.js", "Tailwind CSS", "HTML5", "JS ES6+"],
            devops: ["Git", "GitLab", "SonarQube", "Linux", "Jira", "UML"],
            status: "Highly Operational"
          };
          response = [{ type: 'code', text: JSON.stringify(skillsJson, null, 2) }];
        } else if (cmd === 'clear') {
          setHistory([]);
          setIsProcessing(false);
          return;
        } else if (cmd === 'rm -rf /') {
          response = [{ type: 'error', text: 'Nice try. I sanitize my inputs and backup my databases.' }];
        } else {
          response = [{ type: 'error', text: `bash: ${cmd}: ${terminal.commands.errorMsg}` }];
        }

        setHistory(prev => [...prev, ...response]);
        setIsProcessing(false);
      }, 300); 
    }
  };

  return (
    <header className="relative flex flex-col md:flex-row gap-12 items-center justify-between z-10">
      <div className="flex-1 space-y-6 w-full">
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-sm font-mono mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {terminal.readyBadge}
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-cyan-500">
            {data.name}
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mt-2 opacity-90">
            {data.title}
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex flex-wrap gap-4 font-mono text-sm">
          <a href={`mailto:${data.email}`} className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all hover:scale-105 ${isDark ? 'bg-zinc-900 border-zinc-800 hover:border-emerald-500/50' : 'bg-white border-slate-200 hover:border-emerald-500/50'}`}>
            <Mail size={16} className="text-emerald-500" /> {data.email}
          </a>
          <a href={`tel:${data.phone.replace(/\s+/g, '')}`} className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all hover:scale-105 ${isDark ? 'bg-zinc-900 border-zinc-800 hover:border-emerald-500/50' : 'bg-white border-slate-200 hover:border-emerald-500/50'}`}>
            <Phone size={16} className="text-emerald-500" /> {data.phone}
          </a>
        </motion.div>
        
        {/* Bilingual Hacker Terminal */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onClick={handleTerminalClick}
          className={`mt-10 overflow-hidden rounded-xl border backdrop-blur-md shadow-2xl flex flex-col h-80 cursor-text ${isDark ? 'bg-black/90 border-zinc-800/80' : 'bg-slate-900 border-slate-700/80'}`}
        >
          {/* Mac/Linux Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-zinc-900/90 border-b border-white/10 shrink-0">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/90 hover:bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/90 hover:bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/90 hover:bg-green-400"></div>
            </div>
            <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono tracking-wider">
              <TerminalIcon size={12} /> {terminal.rootPrompt}
            </div>
          </div>
          
          {/* Terminal Output Body */}
          <div 
            ref={scrollContainerRef}
            className="p-5 font-mono text-sm overflow-y-auto flex-1 custom-scrollbar scroll-smooth"
          >
            {history.map((line, index) => {
              let colorClass = 'text-emerald-400';
              if (line.type === 'input') colorClass = 'text-white font-bold';
              if (line.type === 'error') colorClass = 'text-red-400';
              if (line.type === 'system') colorClass = 'text-zinc-400 italic';
              if (line.type === 'code') colorClass = 'text-cyan-400 whitespace-pre';

              return (
                <div key={index} className={`mb-1.5 leading-relaxed ${colorClass}`}>
                  {line.text}
                </div>
              );
            })}
            
            {/* The Input Line */}
            <div className="flex items-center gap-2 mt-2">
              <span className="text-emerald-500 font-bold whitespace-nowrap">{terminal.prompt}</span>
              {isProcessing ? (
                <span className="w-2 h-4 bg-emerald-500 animate-pulse inline-block"></span>
              ) : (
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleCommand}
                  className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0"
                  spellCheck="false"
                  autoComplete="off"
                  autoFocus
                />
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default TerminalHero;