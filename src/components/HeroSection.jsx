import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Importing brand icons here!
import { BentoCard } from "./BentoCard";
import { PORTFOLIO_DATA } from "../data";

export function HeroSection() {
  return (
    <section className="pt-32 pb-12 px-6 max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Intro Card */}
        <BentoCard className="md:col-span-2 row-span-2 flex flex-col justify-center" delay={0.1}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
              Available for Work
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">{PORTFOLIO_DATA.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl">
              {PORTFOLIO_DATA.tagline}
            </p>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
                View Projects <ArrowRight size={18} />
              </button>
              <button className="flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-colors border border-white/10">
                Contact Me
              </button>
            </div>
          </motion.div>
        </BentoCard>

        {/* Info / About Snippet */}
        <BentoCard className="md:col-span-1 bg-gradient-to-br from-surface to-surface/50" delay={0.2}>
          <h3 className="text-xl font-semibold mb-3">About</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {PORTFOLIO_DATA.about}
          </p>
        </BentoCard>

        {/* Social Links */}
        <BentoCard className="md:col-span-1 flex items-center justify-between" delay={0.3}>
          <div className="flex w-full justify-around text-gray-400">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors p-3 bg-white/5 rounded-full hover:bg-white/10">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors p-3 bg-white/5 rounded-full hover:bg-white/10">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:test@example.com" className="hover:text-white transition-colors p-3 bg-white/5 rounded-full hover:bg-white/10">
              <Mail size={24} />
            </a>
          </div>
        </BentoCard>
      </div>
    </section>
  );
}