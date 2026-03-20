import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Code2, Star, GitFork, ArrowUpRight, Search, Filter } from 'lucide-react';
import { useGitHubRepos } from '../../hooks/useGitHub';
import { useState, useMemo } from 'react';

const SkeletonCard = () => (
  <div className="bg-[var(--bg)] p-10 flex flex-col justify-between min-h-[420px] animate-pulse">
    <div>
      <div className="flex items-center justify-between mb-8">
        <div className="w-12 h-12 bg-line rounded-xl" />
        <div className="w-20 h-4 bg-line rounded-full" />
      </div>
      <div className="w-3/4 h-8 bg-line rounded-lg mb-4" />
      <div className="w-full h-4 bg-line rounded-lg mb-2" />
      <div className="w-5/6 h-4 bg-line rounded-lg" />
    </div>
    <div>
      <div className="w-24 h-6 bg-line rounded-full mb-8" />
      <div className="flex space-x-6">
        <div className="w-16 h-4 bg-line rounded-lg" />
        <div className="w-16 h-4 bg-line rounded-lg" />
      </div>
    </div>
  </div>
);

export default function Projects() {
  const { repos, loading, error } = useGitHubRepos();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('All');

  const languages = useMemo(() => {
    const langs = new Set(repos.map(repo => repo.language).filter(Boolean));
    return ['All', ...Array.from(langs)];
  }, [repos]);

  const filteredRepos = useMemo(() => {
    return repos.filter(repo => {
      const matchesSearch = repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesLanguage = selectedLanguage === 'All' || repo.language === selectedLanguage;
      return matchesSearch && matchesLanguage;
    });
  }, [repos, searchQuery, selectedLanguage]);

  return (
    <section id="projects" className="py-40 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <p className="text-[10px] uppercase tracking-[0.5em] font-mono text-accent">03 / Selected Works</p>
              <div className="h-px w-8 bg-accent/30" />
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
                className="text-[8px] font-mono text-accent/60 uppercase tracking-widest"
              >
                Live GitHub Data
              </motion.span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
              Digital <br />
              <span className="italic font-serif text-[var(--muted)]">Artifacts.</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[var(--muted)] max-w-xs text-sm font-light leading-relaxed"
          >
            A collection of open-source projects and experiments focused on automation, SaaS, and Web3.
          </motion.p>
        </div>

        {/* Search and Filter Controls */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between"
        >
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)] group-focus-within:text-accent transition-colors" size={18} />
            <input 
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-muted-alpha border border-line rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:border-accent transition-all font-mono text-sm"
            />
          </div>

          <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
            <Filter size={16} className="text-[var(--muted)] shrink-0" />
            {languages.map(lang => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`px-4 py-2 rounded-full text-[10px] font-mono uppercase tracking-widest transition-all shrink-0 border ${
                  selectedLanguage === lang 
                    ? 'bg-accent text-white border-accent shadow-lg shadow-accent/20' 
                    : 'bg-muted-alpha text-[var(--muted)] border-line hover:border-accent/50'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : error ? (
          <div className="p-12 text-center">
            <p className="text-red-500 font-mono text-sm">Error loading artifacts: {error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
            <AnimatePresence mode="popLayout">
              {filteredRepos.map((repo, i) => (
                <motion.div
                  key={repo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative bg-muted-alpha p-10 flex flex-col justify-between hover:bg-muted-alpha/80 transition-colors min-h-[420px] cursor-default rounded-[2rem]"
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/[0.02] transition-colors duration-500" />
                  <div className="absolute -inset-[1px] bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className="p-3 border border-line rounded-xl text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300"
                      >
                        <Code2 size={20} />
                      </motion.div>
                      <div className="flex items-center space-x-4 text-[10px] font-mono text-[var(--muted)]">
                        <span className="flex items-center gap-1">
                          <Star size={12} /> {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork size={12} /> {repo.forks_count}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors tracking-tight">
                      {repo.name.replace(/-/g, ' ')}
                    </h3>
                    <p className="text-[var(--muted)] text-sm leading-relaxed font-light line-clamp-3 mb-8">
                      {repo.description || 'A sophisticated technical solution developed with precision and modern architectural patterns.'}
                    </p>
                  </div>

                  <div className="relative z-10">
                    <div className="flex flex-wrap gap-2 mb-8">
                      {repo.language && (
                        <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-[10px] font-mono uppercase tracking-wider text-accent">
                          {repo.language}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center space-x-6">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--ink)] hover:text-accent transition-colors flex items-center gap-2 text-xs font-mono uppercase tracking-widest"
                      >
                        Source <Github size={14} />
                      </a>
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--ink)] hover:text-accent transition-colors flex items-center gap-2 text-xs font-mono uppercase tracking-widest"
                        >
                          Live <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Decorative hover element */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </motion.div>
              ))}
            </AnimatePresence>
            {filteredRepos.length === 0 && !loading && (
              <div className="col-span-full p-20 text-center bg-[var(--bg)]">
                <p className="text-[var(--muted)] font-mono text-sm">No artifacts matching your criteria.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
