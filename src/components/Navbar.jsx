import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export function Navbar({ isDark, toggleTheme }) {
  // Added Projects and Certifications back to the navigation!
  const links = ["Home", "Skills", "Education", "Certifications", "Experience", "Projects", "Contact"];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 px-6 py-4 transition-all duration-300 backdrop-blur-md bg-background/70 border-b border-surfaceBorder shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold font-mono tracking-tighter text-primary">
          &lt;<span className="text-accent">Praphul</span>/&gt;
        </a>
        
        <nav className="hidden md:flex gap-6 lg:gap-8 items-center">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-bold text-secondary hover:text-primary transition-colors">
              {link}
            </a>
          ))}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full bg-icon-bg hover:bg-glass-hover transition-colors text-yellow-500"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>
      </div>
    </motion.header>
  );
}