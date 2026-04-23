import { BentoCard } from "./BentoCard";
import { Send, MapPin, Mail, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto relative z-10 mb-20">
      <BentoCard className="p-0 overflow-hidden bg-gradient-to-br from-surface to-surface/30">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Contact Info Side */}
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-surfaceBorder bg-white/5">
            <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
            <p className="text-gray-400 mb-8 text-sm leading-relaxed">
              I'm currently looking for new opportunities as a Junior Web Developer. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent"><Mail size={20} /></div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Email</p>
                  <p className="font-medium">contact@prafulkumar.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent"><MapPin size={20} /></div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Location</p>
                  <p className="font-medium">India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-8 md:p-12">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Your Name</label>
                <input type="text" className="w-full bg-background border border-surfaceBorder rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="John Doe" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                <input type="email" className="w-full bg-background border border-surfaceBorder rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="john@example.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                <textarea rows="4" className="w-full bg-background border border-surfaceBorder rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none" placeholder="Hello Praful, I'd like to talk about..." required></textarea>
              </div>
              <button type="submit" className="w-full bg-accent text-white font-medium py-3 rounded-xl hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 mt-4 shadow-lg shadow-accent/20">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </BentoCard>
    </section>
  );
}