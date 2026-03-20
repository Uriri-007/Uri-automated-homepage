import { motion } from 'motion/react';
import { useGitHubStats } from '../../hooks/useGitHubStats';
import { Github, Star, Code2, GitBranch, Activity, Layout, Terminal, Cpu } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, delay }: { icon: any, label: string, value: string | number, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="bg-muted-alpha p-8 rounded-[2rem] border border-line group hover:border-accent/30 transition-all duration-500"
  >
    <div className="flex items-center justify-between mb-6">
      <div className="p-3 bg-accent/5 rounded-2xl text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
        <Icon size={20} />
      </div>
      <span className="text-[10px] font-mono text-[var(--muted)] uppercase tracking-[0.2em]">{label}</span>
    </div>
    <div className="text-5xl font-bold tracking-tighter mb-2">{value}</div>
    <div className="h-1 w-12 bg-accent/20 rounded-full group-hover:w-full transition-all duration-500" />
  </motion.div>
);

export default function GitHubStats() {
  const { stats, loading, error } = useGitHubStats('Uriri-007');

  if (loading) return (
    <div className="py-20 max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-48 bg-muted-alpha rounded-[2rem] border border-line animate-pulse" />
        ))}
      </div>
    </div>
  );

  if (error || !stats) return null;

  return (
    <section className="py-20 relative border-b border-line overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Github className="text-accent" size={16} />
              <p className="text-[10px] uppercase tracking-[0.5em] font-mono text-accent">Engineering Metrics</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
              GitHub <span className="italic font-serif text-[var(--muted)]">Intelligence.</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4 glass px-6 py-3 rounded-2xl border border-line w-full md:w-auto justify-between md:justify-start"
          >
            <div className="flex -space-x-2">
              {stats.topLanguages.map((lang, i) => (
                <div 
                  key={lang.name}
                  className="w-8 h-8 rounded-full border-2 border-[var(--bg)] bg-accent/10 flex items-center justify-center text-[8px] font-bold text-accent uppercase"
                  style={{ zIndex: 5 - i }}
                  title={lang.name}
                >
                  {lang.name[0]}
                </div>
              ))}
            </div>
            <div className="h-8 w-px bg-line" />
            <div className="text-[10px] font-mono text-[var(--muted)] uppercase tracking-widest">
              Polyglot <br /> Engineer
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <StatCard 
            icon={Code2} 
            label="Total Repositories" 
            value={stats.totalRepos} 
            delay={0.1} 
          />
          <StatCard 
            icon={Star} 
            label="Total Stars" 
            value={stats.totalStars} 
            delay={0.2} 
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-muted-alpha p-8 rounded-[2rem] border border-line group hover:border-accent/30 transition-all duration-500 md:col-span-1"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-accent/5 rounded-2xl text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <Activity size={20} />
              </div>
              <span className="text-[10px] font-mono text-[var(--muted)] uppercase tracking-[0.2em]">Tech Stack</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {stats.topLanguages.map((lang) => (
                <div 
                  key={lang.name}
                  className="flex items-center space-x-2 px-4 py-2 bg-[var(--bg)] border border-line rounded-xl group-hover:border-accent/20 transition-all"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-xs font-mono text-[var(--ink)]">{lang.name}</span>
                  <span className="text-[10px] font-mono text-[var(--muted)]">{lang.count}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[10px] font-mono text-[var(--muted)] uppercase tracking-[0.3em]"
        >
          <div className="flex items-center space-x-2">
            <Layout size={12} />
            <span>Architecture</span>
          </div>
          <div className="hidden sm:block h-1 w-1 bg-line rounded-full" />
          <div className="flex items-center space-x-2">
            <Terminal size={12} />
            <span>Automation</span>
          </div>
          <div className="hidden sm:block h-1 w-1 bg-line rounded-full" />
          <div className="flex items-center space-x-2">
            <Cpu size={12} />
            <span>Optimization</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
