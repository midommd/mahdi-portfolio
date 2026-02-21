import React from 'react';
import { motion } from 'framer-motion';
import { Database, Layout, Wrench, Globe, ExternalLink, Code2 } from 'lucide-react';

const BentoGrid = ({ projects, skills, isDark }) => {
  const cardBase = `relative overflow-hidden p-6 rounded-3xl border transition-all duration-300 group hover:-translate-y-1 ${isDark ? 'bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:border-emerald-500/30' : 'bg-white/80 border-slate-200 backdrop-blur-sm hover:bg-white hover:shadow-[0_10px_40px_rgba(16,185,129,0.1)] hover:border-emerald-500/30'}`;

  return (
    <motion.section initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }} className="z-10 relative">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Skills Bento Box */}
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className={`${cardBase} lg:col-span-1 space-y-6`}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
          <h3 className="text-2xl font-black flex items-center gap-2"><Code2 size={24} className="text-emerald-500" /> {skills.title}</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="flex items-center gap-2 font-mono text-sm text-emerald-500 mb-1"><Database size={16} /> Backend</h4>
              <p className="text-sm opacity-90 leading-relaxed font-medium">{skills.backend}</p>
            </div>
            <div>
              <h4 className="flex items-center gap-2 font-mono text-sm text-emerald-500 mb-1"><Layout size={16} /> Frontend</h4>
              <p className="text-sm opacity-90 leading-relaxed font-medium">{skills.frontend}</p>
            </div>
            <div>
              <h4 className="flex items-center gap-2 font-mono text-sm text-emerald-500 mb-1"><Wrench size={16} /> DevOps & Tools</h4>
              <p className="text-sm opacity-90 leading-relaxed font-medium">{skills.tools}</p>
            </div>
            <div>
              <h4 className="flex items-center gap-2 font-mono text-sm text-emerald-500 mb-1"><Globe size={16} /> Languages</h4>
              <p className="text-sm opacity-90 leading-relaxed font-medium">{skills.languages}</p>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className={`${cardBase} lg:col-span-2`}>
          <h3 className="text-2xl font-black mb-6">{projects.title}</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {projects.items.map((proj, idx) => (
              <motion.div whileHover={{ scale: 1.02 }} key={idx} className={`p-5 rounded-2xl border flex flex-col justify-between group/item transition-colors ${isDark ? 'bg-zinc-950/50 border-zinc-800/80 hover:border-emerald-500/50' : 'bg-slate-50/80 border-slate-200 hover:border-emerald-500/50'}`}>
                <div>
                  <h4 className="text-lg font-bold flex justify-between items-start mb-2">
                    {proj.name}
                    {proj.link && (
                      <a href={proj.link} target="_blank" rel="noreferrer" className="text-emerald-500 opacity-0 group-hover/item:opacity-100 transition-opacity">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </h4>
                  <div className="inline-block px-2 py-1 bg-emerald-500/10 rounded font-mono text-[10px] text-emerald-500 uppercase tracking-wider font-bold mb-3">
                    {proj.stack}
                  </div>
                  <p className="text-sm opacity-80 leading-relaxed">{proj.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default BentoGrid;