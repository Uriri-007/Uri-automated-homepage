import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import GitHubStats from './components/sections/GitHubStats';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)] transition-colors duration-500 relative overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-animate opacity-30" />
          <div className="absolute inset-0 technical-grid opacity-20" />
          <div className="grid-animate" />
        </div>

        <CursorGlow />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <GitHubStats />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
