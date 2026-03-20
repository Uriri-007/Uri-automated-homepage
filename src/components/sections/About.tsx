import { motion } from 'motion/react';
import { Cpu, Globe, Terminal, BookOpen, Zap, Binary } from 'lucide-react';

const focusAreas = [
  { 
    name: 'AI & Automation', 
    icon: Binary, 
    desc: 'Building custom CLI tools and intelligent agents to streamline workflows.' 
  },
  { 
    name: 'SaaS Architecture', 
    icon: Globe, 
    desc: 'Developing multi-tenant platforms with React, Node.js, and Supabase.' 
  },
  { 
    name: 'Web3 & DeFi', 
    icon: Zap, 
    desc: 'Exploring the Solana ecosystem and decentralized finance protocols.' 
  },
];

export default function About() {
  return (
    <section id="about" className="py-60 relative border-y border-line">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[10px] uppercase tracking-[0.5em] font-mono text-accent mb-8">01 / Background</p>
              <h2 className="text-5xl md:text-7xl font-bold mb-12 tracking-tighter leading-none">
                Engineering <br />
                <span className="italic font-serif text-[var(--muted)]">Precision.</span>
              </h2>
              <div className="space-y-10 text-[var(--muted)] text-xl leading-relaxed font-light max-w-2xl">
                <p>
                  I am <span className="text-[var(--ink)] font-medium underline decoration-accent/30 underline-offset-8">Uri Okhai</span>, a frontend developer focused on building scalable, well-structured systems — not just interfaces.
                </p>
                <p>
                  My approach is rooted in <span className="text-[var(--ink)] font-medium">first principles</span>: breaking down complex problems into clear, efficient solutions that are easy to maintain and extend.
                </p>
                <p>
                  I specialize in <span className="text-[var(--ink)] font-medium">Next.js and React</span>, where I bridge technical constraints with intuitive user experiences. I prioritize clarity, modularity, and long-term reliability in every codebase I work on.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="text-[10px] uppercase tracking-[0.5em] font-mono text-accent mb-8">02 / Focus</p>
            <div className="space-y-4">
              {focusAreas.map((area, i) => (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 border border-line rounded-3xl hover:bg-muted-alpha transition-all group relative overflow-hidden"
                >
                  <div className="flex items-start space-x-6 relative z-10">
                    <div className="w-12 h-12 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                      <area.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{area.name}</h3>
                      <p className="text-[var(--muted)] text-sm leading-relaxed">{area.desc}</p>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-mono text-accent">ACTIVE</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
