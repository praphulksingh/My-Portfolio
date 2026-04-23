import { BentoCard } from "./BentoCard";
import { PORTFOLIO_DATA } from "../data";
import { Briefcase, GraduationCap } from "lucide-react";

export function TimelineSection() {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Experience Column */}
        <div>
          <h2 className="text-3xl font-bold mb-6 pl-2 flex items-center gap-3">
            <Briefcase className="text-accent" /> Experience
          </h2>
          <div className="space-y-4">
            {PORTFOLIO_DATA.experience.map((exp, idx) => (
              <BentoCard key={idx} delay={0.1 * idx} className="p-6">
                <span className="text-xs font-semibold text-accent mb-2 block tracking-wider uppercase">{exp.duration}</span>
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <h4 className="text-gray-300 font-medium mb-3">{exp.company}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
              </BentoCard>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div>
          <h2 className="text-3xl font-bold mb-6 pl-2 flex items-center gap-3">
            <GraduationCap className="text-accent" /> Education
          </h2>
          <div className="space-y-4">
            {PORTFOLIO_DATA.education.map((edu, idx) => (
              <BentoCard key={idx} delay={0.2 + (0.1 * idx)} className="p-6">
                <span className="text-xs font-semibold text-accent mb-2 block tracking-wider uppercase">{edu.duration}</span>
                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                <h4 className="text-gray-300 font-medium mb-1">{edu.institution}</h4>
                <p className="text-gray-400 text-sm">{edu.focus}</p>
              </BentoCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}