import { BentoCard } from "./BentoCard";
import { PORTFOLIO_DATA } from "../data";
import { ExternalLink } from "lucide-react";

export function ProjectsSection() {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto relative z-10">
      <h2 className="text-3xl font-bold mb-8 pl-2">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PORTFOLIO_DATA.projects.map((project, idx) => (
          <BentoCard key={idx} delay={idx * 0.1 + 0.2} className="flex flex-col h-full group cursor-pointer">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
            </div>
            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs font-medium px-2 py-1 bg-white/5 border border-white/10 rounded-md text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
              <a href={project.link} className="inline-flex items-center gap-2 text-sm text-accent hover:text-white transition-colors">
                View Project <ExternalLink size={16} />
              </a>
            </div>
          </BentoCard>
        ))}
      </div>
    </section>
  );
}