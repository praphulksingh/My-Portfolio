import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export function BentoCard({ children, className, delay = 0, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ scale: 0.99 }}
      className={twMerge(
        // Notice we replaced bg-white/5 with bg-glass and border-white/10 with border-glass-border
        "relative overflow-hidden bg-glass backdrop-blur-xl border border-glass-border rounded-3xl p-6 md:p-8 shadow-xl",
        className
      )}
    >
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      {children}
    </motion.div>
  );
}