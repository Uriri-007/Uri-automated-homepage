import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Send, ArrowRight } from 'lucide-react';
import { XIcon } from '../Icons';
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:ogboumahokhai@gmail.com?subject=Portfolio Inquiry from ${formData.name}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0AFrom: ${formData.name} (${formData.email})`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[10px] uppercase tracking-[0.5em] font-mono text-accent mb-8">04 / Contact</p>
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.85] mb-12">
                Let's <br />
                <span className="italic font-serif text-[var(--muted)]">Connect.</span>
              </h2>
              <p className="text-[var(--muted)] text-xl font-light leading-relaxed max-w-md mb-12">
                Have a project in mind or just want to chat about the future of AI and Web3? I'm always open to new opportunities.
              </p>

              <div className="space-y-8">
                <a 
                  href="mailto:ogboumahokhai@gmail.com" 
                  className="group flex items-center space-x-6 text-[var(--ink)] hover:text-accent transition-colors"
                >
                  <div className="w-12 h-12 border border-line rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  <span className="text-lg font-medium">ogboumahokhai@gmail.com</span>
                </a>
                
                <div className="flex items-center space-x-4 pt-4">
                  {[
                    { icon: Github, href: 'https://github.com/Uriri-007' },
                    { icon: Linkedin, href: 'https://share.google/48NMDppvJMHecUeE7' },
                    { icon: XIcon, href: 'https://x.com/IamOkhai' }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 border border-line rounded-full flex items-center justify-center text-[var(--muted)] hover:text-accent hover:border-accent transition-all"
                    >
                      <social.icon size={social.icon === XIcon ? 18 : 20} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-muted-alpha border border-line p-10 md:p-16 rounded-[2.5rem] relative"
          >
            <form className="space-y-10" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-mono text-[var(--muted)]">Your Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-line py-4 focus:outline-none focus:border-accent transition-colors text-lg font-light"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-mono text-[var(--muted)]">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b border-line py-4 focus:outline-none focus:border-accent transition-colors text-lg font-light"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-mono text-[var(--muted)]">Message</label>
                <textarea 
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b border-line py-4 focus:outline-none focus:border-accent transition-colors text-lg font-light resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button 
                type="submit"
                className="group w-full py-6 bg-[var(--ink)] text-[var(--bg)] rounded-full font-bold text-lg hover:bg-accent transition-all flex items-center justify-center space-x-3"
              >
                <span>Send Message</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white rotate-12">
              <Send size={20} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
