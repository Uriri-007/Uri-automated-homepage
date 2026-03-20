export default function Footer() {
  return (
    <footer className="py-20 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col">
            <div className="font-bold text-2xl tracking-tighter mb-2">
              URI<span className="text-accent">OKHAI</span>
            </div>
            <p className="text-[10px] font-mono text-[var(--muted)] uppercase tracking-[0.3em]">
              Full Stack Engineer / Author
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex space-x-8 text-[10px] font-mono uppercase tracking-widest text-[var(--muted)]">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            </div>
            <p className="text-[var(--muted)] text-xs font-light">
              © {new Date().getFullYear()} — Built with precision using React & Tailwind.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
