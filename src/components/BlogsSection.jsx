import { BentoCard } from "./BentoCard";
import { PORTFOLIO_DATA } from "../data";
import { BookOpen, ArrowRight } from "lucide-react";

export function BlogsSection() {
  if (!PORTFOLIO_DATA.blogs || PORTFOLIO_DATA.blogs.length === 0) return null;

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto relative z-10">
      <h2 className="text-3xl font-bold mb-8 pl-2 flex items-center gap-3">
        <BookOpen className="text-accent" /> Latest Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PORTFOLIO_DATA.blogs.map((blog, idx) => (
          <BentoCard key={idx} delay={0.1 * idx} className="flex flex-col h-full group cursor-pointer hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-medium px-2 py-1 bg-white/5 rounded-md text-gray-300">
                {blog.readTime}
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
              {blog.title}
            </h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-1">
              {blog.summary}
            </p>
            <a href={blog.link} className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-accent transition-colors">
              Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </BentoCard>
        ))}
      </div>
    </section>
  );
}