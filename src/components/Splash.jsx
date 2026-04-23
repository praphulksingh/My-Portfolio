import { motion } from "framer-motion";
import { Terminal, Code2, Cloud } from "lucide-react";

export function Splash() {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      // The fade-out happens at 3.2 seconds
      transition={{ duration: 0.8, delay: 3.2, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background pointer-events-none overflow-hidden"
    >
      {/* 1. Ambient Background Pulse */}
      <div className="absolute inset-0 flex items-center justify-center">
         <motion.div
           initial={{ scale: 0, opacity: 0 }}
           animate={{ scale: [0.5, 1.5, 2], opacity: [0, 0.15, 0] }}
           transition={{ duration: 3, ease: "easeInOut" }}
           className="w-96 h-96 bg-accent rounded-full filter blur-[100px]"
         />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        
        {/* 2. Floating Tech Icons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex gap-8 mb-8 text-secondary/50"
        >
          <Terminal size={32} className="animate-pulse" style={{ animationDelay: '0ms' }} />
          <Code2 size={32} className="animate-pulse" style={{ animationDelay: '300ms' }} />
          <Cloud size={32} className="animate-pulse" style={{ animationDelay: '600ms' }} />
        </motion.div>

        {/* 3. Cinematic Logo Reveal (Blur to Focus) */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, filter: "blur(15px)" }}
          animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.6, type: "spring", stiffness: 100 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter flex items-center gap-3 mb-10"
        >
          <span className="text-secondary opacity-50">&lt;</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500 relative">
            Praphul
            {/* Subtle text glow effect */}
            <span className="absolute inset-0 text-accent filter blur-[20px] opacity-40 mix-blend-screen">Praphul</span>
          </span>
          <span className="text-secondary opacity-50">/&gt;</span>
        </motion.div>

        {/* 4. Animated Progress Bar */}
        <div className="w-64 h-1 bg-surface border border-glass-border rounded-full overflow-hidden relative shadow-inner">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.5, delay: 1.2, ease: "circOut" }}
            className="absolute top-0 bottom-0 left-0 w-full bg-gradient-to-r from-accent to-purple-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
          />
        </div>
        
        {/* 5. Terminal Loading Text */}
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: [0, 1, 0.5, 1] }}
           transition={{ duration: 1.5, delay: 1.2 }}
           className="mt-4 text-xs font-mono text-secondary uppercase tracking-[0.3em]"
        >
          Initializing Environment...
        </motion.div>

      </div>
    </motion.div>
  );
}