import { useState, useEffect } from "react";
import { Splash } from "./components/Splash";
import { Navbar } from "./components/Navbar";
import { BentoCard } from "./components/BentoCard";
import { ArrowUp, Send, Briefcase, GraduationCap, Award, ExternalLink, X, Building, Calendar, BookOpen } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion, AnimatePresence } from "framer-motion";
import * as Portfolio from "./portfolio"; 

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isDark, setIsDark] = useState(Portfolio.theme.isDark);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null); 
  const [selectedCert, setSelectedCert] = useState(null); // NEW: State for Certifications

  useEffect(() => {
    if (Portfolio.theme.isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setShowSplash(false);
      document.body.style.overflow = "auto";
    }, 3400);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll if ANY modal is open
  useEffect(() => {
    if (selectedProject || selectedCert) document.body.style.overflow = "hidden";
    else if (!showSplash) document.body.style.overflow = "auto";
  }, [selectedProject, selectedCert, showSplash]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-background text-primary selection:bg-accent/30 selection:text-accent transition-colors duration-500">
      
      {showSplash && <Splash />}
      
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-blob-purple rounded-full filter blur-[100px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40rem] h-[40rem] bg-blob-accent rounded-full filter blur-[100px] animate-blob animation-delay-2000"></div>
      </div>

      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <main className="relative z-10 pt-24 pb-24 max-w-7xl mx-auto px-6 space-y-20 lg:space-y-28">
        
        {/* 1. HERO SECTION */}
        <section id="home" className="min-h-[80vh] flex flex-col justify-center pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center w-full">
            <BentoCard className="lg:col-span-2 p-8 md:p-12 border-none bg-transparent shadow-none" delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 flex flex-col gap-3 text-primary">
                <span>{Portfolio.greeting.title} <span className="animate-bounce inline-block">👋</span></span>
                <span className="text-3xl md:text-5xl font-semibold mt-2 text-secondary h-[4rem]">
                  I'm a <TypeAnimation
                    sequence={Portfolio.greeting.roles}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500 font-mono ml-2"
                  />
                </span>
              </h1>
              <p className="text-lg md:text-xl text-secondary mb-8 max-w-2xl leading-relaxed mt-4">
                {Portfolio.greeting.subTitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-8">
                <a href={Portfolio.greeting.resumeLink} target="_blank" rel="noreferrer" className="bg-accent text-white px-8 py-3 rounded-full font-bold hover:bg-blue-600 transition-all shadow-lg shadow-accent/30 z-10">
                  See my Resume
                </a>
                <div className="flex gap-4 z-10">
                  {Portfolio.socialMediaLinks.map((social, i) => (
                    <a key={i} href={social.link} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-icon-bg hover:bg-accent hover:text-white transition-all text-secondary text-xl border border-glass-border shadow-sm">
                      <social.icon />
                    </a>
                  ))}
                </div>
              </div>
            </BentoCard>

            <div className="hidden lg:flex lg:col-span-1 justify-center items-center p-4">
               <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                  className="relative w-full max-w-sm aspect-[4/5] rounded-[2.5rem] overflow-hidden border-[6px] border-surface shadow-[0_0_50px_rgba(59,130,246,0.15)] group"
               >
                   <img 
                      src={Portfolio.greeting.heroImage} 
                      alt="Praful Kumar" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80"></div>
               </motion.div>
            </div>
          </div>
        </section>

        {/* 2. SKILLS SECTION */}
        <section id="skills">
          <h2 className="text-4xl font-bold mb-10 text-center text-primary">{Portfolio.skillsSection.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <BentoCard delay={0.1} className="flex justify-center items-center p-8 bg-gradient-to-br from-surface to-surface/50 h-full">
               <img src="/images/build-infrastructure.svg" alt="What I do" className="w-full h-auto object-contain drop-shadow-2xl" />
             </BentoCard>
             <div>
               <h3 className="text-2xl font-medium mb-6 text-secondary">{Portfolio.skillsSection.subTitle}</h3>
               <div className="flex flex-wrap gap-3 mb-8">
                 {Portfolio.skillsSection.softwareSkills.map((skill, i) => (
                   <div key={i} className="flex flex-col items-center group w-[4.5rem]">
                     <div className="w-14 h-14 rounded-full bg-icon-bg flex items-center justify-center text-2xl text-secondary group-hover:text-accent group-hover:bg-glass-hover transition-all group-hover:scale-110 border border-glass-border shadow-sm">
                        <skill.icon />
                     </div>
                     <p className="text-[10px] mt-2 text-secondary font-medium text-center">{skill.skillName}</p>
                   </div>
                 ))}
               </div>
               <div className="space-y-3">
                 {Portfolio.skillsSection.skills.map((skillText, i) => (
                   <p key={i} className="text-secondary font-medium text-sm leading-relaxed">{skillText}</p>
                 ))}
               </div>
             </div>
          </div>
        </section>

        {/* 3. EDUCATION */}
        <section id="education">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">{Portfolio.educationInfo.title}</h2>
            <p className="text-secondary max-w-2xl mx-auto uppercase tracking-widest text-sm">My academic journey</p>
          </div>
          <div className="relative w-full max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[2px] bg-gradient-to-b from-transparent via-surfaceBorder to-transparent -translate-x-1/2"></div>
            {Portfolio.educationInfo.schools.map((school, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center justify-between mb-12 w-full ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                   <div className="hidden md:block md:w-[45%]"></div>
                   <div className="absolute left-4 md:left-1/2 w-12 h-12 rounded-full bg-surface border-[4px] border-background shadow-[0_0_15px_rgba(236,72,153,0.3)] flex items-center justify-center -translate-x-1/2 z-20 top-6 md:top-1/2 md:-translate-y-1/2">
                     <GraduationCap size={20} className="text-pink-500" />
                   </div>
                   <div className="w-full pl-16 md:pl-0 md:w-[45%] group cursor-pointer">
                      <BentoCard delay={0.1 * idx} className="p-8 hover:bg-glass-hover transition-colors duration-300">
                        <span className="text-xs font-bold text-pink-500 mb-2 block tracking-widest uppercase">{school.duration}</span>
                        <h3 className="text-2xl font-bold text-primary mb-1 group-hover:text-pink-500 transition-colors">{school.schoolName}</h3>
                        <h4 className="text-secondary font-semibold mb-4">{school.subHeader}</h4>
                        <p className="text-secondary text-sm leading-relaxed">{school.desc}</p>
                      </BentoCard>
                   </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* 4. CERTIFICATIONS (NOW CLICKABLE) */}
        <section id="certifications">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2 flex justify-center items-center gap-3 text-primary">
              <Award className="text-accent"/> {Portfolio.certificationsInfo.title}
            </h2>
            <p className="text-secondary uppercase tracking-widest text-sm mt-2">Click to view certificates</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
             {Portfolio.certificationsInfo.certifications.map((cert, idx) => (
                <BentoCard 
                  key={idx} 
                  delay={0.1 * idx} 
                  onClick={() => setSelectedCert(cert)}
                  className="flex items-center p-6 hover:bg-glass-hover cursor-pointer transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 shadow-md"
                >
                  <div className="w-14 h-14 rounded-full bg-icon-bg flex items-center justify-center text-3xl border border-glass-border mr-6 shadow-sm">
                     {cert.logo}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-primary text-lg leading-tight group-hover:text-accent transition-colors">{cert.title}</h3>
                    <p className="text-secondary text-sm mt-1">{cert.issuer}</p>
                  </div>
                  <span className="text-accent font-bold bg-accent/10 px-3 py-1 rounded-full text-xs ml-4 whitespace-nowrap">
                    {cert.date}
                  </span>
                </BentoCard>
             ))}
          </div>
        </section>

        {/* 5. EXPERIENCE */}
        <section id="experience">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">{Portfolio.experience.title}</h2>
            <p className="text-secondary max-w-2xl mx-auto uppercase tracking-widest text-sm">What I have done so far</p>
          </div>
          <div className="relative w-full max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[2px] bg-gradient-to-b from-transparent via-surfaceBorder to-transparent -translate-x-1/2"></div>
            {Portfolio.experience.experiences.map((exp, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center justify-between mb-12 w-full ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                   <div className="hidden md:block md:w-[45%]"></div>
                   <div className="absolute left-4 md:left-1/2 w-12 h-12 rounded-full bg-surface border-[4px] border-background shadow-[0_0_15px_rgba(59,130,246,0.3)] flex items-center justify-center -translate-x-1/2 z-20 top-6 md:top-1/2 md:-translate-y-1/2">
                     <Briefcase size={18} className="text-accent" />
                   </div>
                   <div className="w-full pl-16 md:pl-0 md:w-[45%] group cursor-pointer">
                      <BentoCard delay={0.1 * idx} className="p-8 hover:bg-glass-hover transition-colors duration-300">
                        <span className="text-xs font-bold text-accent mb-2 block tracking-widest uppercase">{exp.duration}</span>
                        <h3 className="text-2xl font-bold text-primary mb-1 group-hover:text-accent transition-colors">{exp.title}</h3>
                        <h4 className="text-secondary font-semibold mb-4">{exp.company} | {exp.location}</h4>
                        <p className="text-secondary text-sm leading-relaxed">{exp.description}</p>
                      </BentoCard>
                   </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* 6. PROJECTS */}
        <section id="projects">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-bold mb-4 text-primary">{Portfolio.projectsHeader.title}</h2>
             <p className="text-secondary max-w-2xl mx-auto uppercase tracking-widest text-sm">{Portfolio.projectsHeader.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Portfolio.projectsHeader.projects.map((project, idx) => (
              <BentoCard 
                key={idx} delay={idx * 0.1} 
                className="p-5 flex flex-col h-full group relative overflow-visible shadow-xl bg-glass cursor-pointer hover:border-accent/40 transition-all duration-300 hover:-translate-y-1"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative w-full h-[230px] rounded-2xl overflow-hidden mb-6 bg-gray-200 dark:bg-black/50 shadow-inner">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-90 group-hover:opacity-100" />
                  
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <a href={project.githubLink} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="w-10 h-10 rounded-full bg-black/80 backdrop-blur-md flex justify-center items-center hover:bg-black hover:scale-110 transition-all shadow-lg" title="View Source">
                      <FaGithub size={20} className="text-white" />
                    </a>
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="w-10 h-10 rounded-full bg-accent/90 backdrop-blur-md flex justify-center items-center hover:bg-accent hover:scale-110 transition-all shadow-lg" title="Live Demo">
                        <ExternalLink size={18} className="text-white" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex-1 mb-6">
                  <h3 className="text-2xl font-bold mb-3 text-primary group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{project.description}</p>
                </div>

                <div className="mt-auto flex flex-wrap gap-3">
                  {project.tags.map((tag, i) => (
                    <p key={i} className={`text-xs font-bold tracking-wider ${tag.color}`}>
                      #{tag.name}
                    </p>
                  ))}
                </div>
              </BentoCard>
            ))}
          </div>
        </section>

        {/* 7. CONTACT FORM */}
        <section id="contact" className="pb-12">
          <BentoCard className="p-0 overflow-hidden bg-gradient-to-br from-surface to-bg">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-glass-border bg-icon-bg">
                <h2 className="text-4xl font-bold mb-4 text-primary">{Portfolio.contactInfo.title}</h2>
                <p className="text-secondary mb-8 text-sm leading-relaxed max-w-md">{Portfolio.contactInfo.subtitle}</p>
                <div className="space-y-4 mb-8">
                   <p className="text-2xl font-mono font-bold text-accent">{Portfolio.contactInfo.number}</p>
                   <p className="text-lg font-medium text-secondary break-words">{Portfolio.contactInfo.email_address}</p>
                </div>
              </div>
              <div className="p-8 md:p-12 bg-surface">
                <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
                  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                  <div>
                    <label className="block text-sm font-semibold text-secondary mb-1">Your Name</label>
                    <input type="text" name="name" className="w-full bg-background border border-glass-border rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-accent transition-colors shadow-sm" placeholder="Full Name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-secondary mb-1">Email Address</label>
                    <input type="email" name="email" className="w-full bg-background border border-glass-border rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-accent transition-colors shadow-sm" placeholder="email@example.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-secondary mb-1">Message</label>
                    <textarea name="message" rows="4" className="w-full bg-background border border-glass-border rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-accent transition-colors resize-none shadow-sm" placeholder="Hello Praphul..." required></textarea>
                  </div>
                  <button type="submit" className="w-full bg-accent text-white font-bold py-3 rounded-xl hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 mt-4 shadow-lg shadow-accent/20">
                    Send Message <Send size={18} />
                  </button>
                </form>
              </div>
            </div>
          </BentoCard>
        </section>

      </main>

      {/* PROJECT DETAILS MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-surface border border-glass-border rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 hover:bg-red-500 text-white flex items-center justify-center transition-colors z-10 backdrop-blur-md"
              >
                <X size={20} />
              </button>

              <div className="w-full h-64 sm:h-80 relative bg-gray-200 dark:bg-black">
                 <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent"></div>
              </div>
              
              <div className="p-8 -mt-16 relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4 drop-shadow-md">{selectedProject.title}</h3>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className={`text-sm font-bold px-3 py-1 bg-icon-bg border border-glass-border rounded-full ${tag.color}`}>
                      #{tag.name}
                    </span>
                  ))}
                </div>

                <p className="text-secondary text-lg leading-relaxed mb-8 font-medium">
                  {selectedProject.fullDescription || selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-4 pt-6 border-t border-glass-border">
                  <a href={selectedProject.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-icon-bg text-primary px-6 py-3 rounded-xl font-bold hover:bg-glass-hover transition-colors border border-glass-border shadow-sm">
                    <FaGithub size={20} /> Source Code
                  </a>
                  {selectedProject.liveLink && (
                    <a href={selectedProject.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-accent/30">
                      <ExternalLink size={20} /> Live Preview
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NEW: CERTIFICATE DETAILS MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-surface border border-glass-border rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 hover:bg-red-500 text-white flex items-center justify-center transition-colors z-20 backdrop-blur-md"
              >
                <X size={20} />
              </button>

              {/* Certificate Image Frame */}
              <div className="w-full bg-gray-100 dark:bg-black/50 p-6 sm:p-10 flex justify-center items-center border-b border-glass-border relative">
                 {/* Decorative background glow for the certificate */}
                 <div className="absolute inset-0 flex justify-center items-center opacity-30 blur-3xl pointer-events-none">
                    <div className="w-64 h-64 bg-accent rounded-full"></div>
                 </div>
                 
                 <img 
                   src={selectedCert.image} 
                   alt={selectedCert.title} 
                   className="w-full max-w-lg h-auto object-contain rounded-xl shadow-2xl z-10 border border-glass-border bg-white" 
                 />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">{selectedCert.title}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-secondary">
                     <div className="w-10 h-10 rounded-full bg-icon-bg flex justify-center items-center text-accent"><Building size={18}/></div>
                     <div>
                       <p className="text-xs uppercase tracking-wider font-semibold opacity-70">Organization / Issuer</p>
                       <p className="font-bold text-primary text-lg">{selectedCert.issuer}</p>
                     </div>
                  </div>

                  <div className="flex items-center gap-4 text-secondary">
                     <div className="w-10 h-10 rounded-full bg-icon-bg flex justify-center items-center text-pink-500"><BookOpen size={18}/></div>
                     <div>
                       <p className="text-xs uppercase tracking-wider font-semibold opacity-70">Related Field</p>
                       <p className="font-medium text-primary">{selectedCert.relatedField || "Computer Science"}</p>
                     </div>
                  </div>

                  <div className="flex items-center gap-4 text-secondary">
                     <div className="w-10 h-10 rounded-full bg-icon-bg flex justify-center items-center text-purple-500"><Calendar size={18}/></div>
                     <div>
                       <p className="text-xs uppercase tracking-wider font-semibold opacity-70">Date Issued</p>
                       <p className="font-medium text-primary">{selectedCert.date}</p>
                     </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TOP BUTTON */}
      {showTopBtn && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-4 rounded-full bg-accent text-white shadow-lg hover:bg-blue-600 hover:-translate-y-1 transition-all"
        >
          <ArrowUp size={24} />
        </button>
      )}

    </div>
  );
}

export default App;