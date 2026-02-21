import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

const Timeline = ({ data, isDark, type }) => {
  const Icon = type === 'education' ? GraduationCap : Briefcase;

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`relative p-8 rounded-3xl border h-full transition-all hover:shadow-xl ${isDark ? 'bg-zinc-900/50 border-zinc-800 backdrop-blur-sm' : 'bg-white/80 border-slate-200 backdrop-blur-sm'}`}
    >
      <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
        <Icon className="text-emerald-500" size={28} /> {data.title}
      </h3>
      <div className="space-y-8 border-l-2 border-emerald-500/20 pl-6 ml-3">
        {data.items.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Glowing Dot Effect */}
            <div className={`absolute -left-[33px] top-1 w-4 h-4 rounded-full border-4 transition-all duration-300 group-hover:scale-150 group-hover:bg-emerald-400 ${isDark ? 'bg-emerald-500 border-zinc-900' : 'bg-emerald-500 border-white'}`}></div>
            
            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 px-2 py-1 rounded bg-emerald-500/10 inline-block mb-2 font-bold tracking-wider">
              {item.year || item.date}
            </span>
            <h4 className="text-lg font-bold leading-tight group-hover:text-emerald-500 transition-colors">{item.title}</h4>
            <p className="text-sm opacity-75 mt-2 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Timeline;