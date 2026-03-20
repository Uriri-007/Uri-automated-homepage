import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { XIcon } from '../Icons';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center pt-32 pb-20 overflow-hidden">
      <div className="flex-1 px-6 sm:px-12 lg:px-24 py-12 lg:py-0 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 glass px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.3em] font-mono text-accent mb-12"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span>Ship-First Mindset</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-7xl md:text-[120px] font-bold tracking-tighter mb-8 leading-[0.85] text-gradient"
        >
          Uri <br /> Okhai
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-[var(--muted)] max-w-xl mb-12 leading-relaxed font-light"
        >
          Full-Stack Developer specializing in <span className="text-[var(--ink)] font-medium">React, Node.js, and Supabase</span>. 
          Engineering precision meets creative world-building.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap items-center gap-6"
        >
          <a 
            href="#projects" 
            className="px-10 py-5 bg-[var(--ink)] text-[var(--bg)] font-bold rounded-full hover:bg-accent hover:text-white transition-all flex items-center justify-center group"
          >
            Explore Projects
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </a>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/Uriri-007" target="_blank" rel="noreferrer" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-muted-alpha transition-all text-[var(--muted)] hover:text-[var(--ink)]">
              <Github size={20} />
            </a>
            <a href="https://x.com/IamOkhai" target="_blank" rel="noreferrer" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-muted-alpha transition-all text-[var(--muted)] hover:text-[var(--ink)]">
              <XIcon size={18} />
            </a>
            <a href="https://share.google/48NMDppvJMHecUeE7" target="_blank" rel="noreferrer" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-muted-alpha transition-all text-[var(--muted)] hover:text-[var(--ink)]">
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="flex-1 relative w-full h-[50vh] lg:h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
        >
          <div className="absolute inset-0 bg-accent/20 blur-[120px] rounded-full animate-pulse" />
          <img 
            src="https://ais-dev-o5uuotgeftrsjr3oaifxeb-255209144970.europe-west2.run.app/attachment/00806950-0697-4315-9948-42217e57c5e5" 
            alt="Uri Okhai" 
            className="relative z-10 w-full h-full object-cover rounded-[3rem] border border-line shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -right-6 glass p-6 rounded-3xl z-20 hidden md:block">
            <p className="text-[10px] uppercase tracking-widest font-mono text-accent mb-1">Status</p>
            <p className="text-sm font-bold">Shipping Daily</p>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-12 hidden lg:block"
      >
        <div className="flex items-center space-x-4">
          <div className="w-px h-12 bg-line" />
          <span className="text-[10px] uppercase tracking-[0.4em] font-mono text-[var(--muted)] vertical-text">Scroll to explore</span>
        </div>
      </motion.div>
    </section>
  );
}
