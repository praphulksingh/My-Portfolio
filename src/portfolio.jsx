
import { FaReact, FaNodeJs, FaDocker, FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaAws, FaHtml5, FaDatabase, FaGit, FaJenkins, FaCode, FaLinux, FaAngular, FaCloud, FaLaptopCode } from "react-icons/fa";
import { SiMongodb, SiExpress, SiCplusplus, SiTailwindcss, SiNextdotjs, SiPostman, SiKubernetes, SiJavascript, SiGnubash } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

export const theme = { isDark: true };

export const greeting = {
  username: "Praphul Kumar",
  title: "Hi all, I'm Praphul",
  roles: [
    "Full Stack Developer..", 1000,
    "Cloud Engineer..", 1000,
    "DevOps Engineer..", 1000,
    "MERN Stack Developer..", 1000,
    "Backend Developer..", 1000,
    "Frontend Developer..", 1000,
  ],
  subTitle: "A passionate Developer bridging modern frontend design with robust full-stack architecture, cloud computing and automated DevOps practices.",
  resumeLink: "/images/PraphulResume.pdf", 
  heroImage: "/images/devops-activity.svg" 
};

export const socialMediaLinks = [
  { name: "Github", link: "https://github.com/praphulksingh", icon: FaGithub },
  { name: "LinkedIn", link: "https://www.linkedin.com/in/praphulskumar/", icon: FaLinkedin },
  { name: "Instagram", link: "https://instagram.com/praphulksingh", icon: FaInstagram },
  { name: "Mail", link: "mailto:praphulkumar130@gmail.com", icon: FaEnvelope },
];

export const skillsSection = {
  title: "What I do",
  subTitle: "Full Stack Web Developer | MERN Stack, Cloud Computing & DevOps",
  softwareSkills: [
    { skillName: "C++", icon: SiCplusplus },
    { skillName: "HTML/CSS", icon: FaHtml5 },
    { skillName: "JavaScript", icon: SiJavascript },
    { skillName: "ReactJS", icon: FaReact },
    { skillName: "Next.js", icon: SiNextdotjs },
    { skillName: "NodeJS", icon: FaNodeJs },
    { skillName: "Express", icon: SiExpress },
    { skillName: "MongoDB", icon: SiMongodb },
    { skillName: "Tailwind", icon: SiTailwindcss },
    { skillName: "Docker", icon: FaDocker },
    { skillName: "Kubernetes", icon: SiKubernetes },
    { skillName: "AWS", icon: FaAws },
    { skillName: "Azure", icon: VscAzure },
    { skillName: "Bash", icon: SiGnubash },
    { skillName: "Postman", icon: SiPostman },
  ],
  skills: [
    "⚡ Programming: C++, Data Structures & Algorithms (DSA), OOP, Bash/Shell Scripting",
    "⚡ Frontend: HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS, shadcn/ui",
    "⚡ Backend & DB: Node.js, Express.js, MongoDB, SQL, Database Management Systems",
    "⚡ Cloud & DevOps: Microsoft Azure, AWS, Docker, Kubernetes, Jenkins",
    "⚡ Tools: Postman, Git, GitHub"
  ]
};

export const educationInfo = {
  title: "Education Journey",
  schools: [
    {
      schoolName: "Chandigarh University",
      subHeader: "MCA [Cloud Computing and DevOps]",
      duration: "2026",
      desc: "Focusing on scalable infrastructure, deployment automation and advanced backend development.",
    },
    {
      schoolName: "CTIMIT Jalandhar",
      subHeader: "Bachelor of Computer Applications (BCA)",
      duration: "2024",
      desc: "Core Computer Science, Data Structures & Algorithms and Database Management.",
    },
    {
      schoolName: "Nagina Ray Ucchmadhayamik School [BSEB]",
      subHeader: "12th Grade (Senior Secondary)",
      duration: "2019",
      desc: "Higher Secondary Education.",
    },
    {
      schoolName: "B D S Public School [CBSE]",
      subHeader: "10th Grade (Secondary)",
      duration: "2017",
      desc: "Secondary Education.",
    }
  ]
};

export const certificationsInfo = {
  title: "Licenses & Certifications",
  certifications: [
    { 
      title: "ReactJS", 
      issuer: "Infosys | Springboard", 
      date: "2024", 
      logo: <FaReact className="text-[#61DAFB]" />,
      relatedField: "Frontend Web Development",
      image: "/images/Screenshot 2026-04-28 005251.png"
    },
    { 
      title: "Node Js", 
      issuer: "Infosys | Springboard", 
      date: "Apr 2026", 
      logo: <FaNodeJs className="text-[#339933]" />,
      relatedField: "Web Development & Backend Development",
      image: "/images/Screenshot 2026-04-28 005153.png"
    },
    { 
      title: "Web Development Mastery: HTML, CSS, JS & More", 
      issuer: "Chandigarh University", 
      date: "Nov 2025", 
      logo: <FaHtml5 className="text-[#E34F26]" />,
      relatedField: "Web Development",
      image: "/images/Screenshot 2026-04-28 004720.png"
    },
    { 
      title: "AWS Academy Graduate - Cloud Foundations - Training Badge", 
      issuer: "AWS Academy", 
      date: "Aug 2025", 
      logo: <FaAws className="text-[#FF9900]" />,
      relatedField: "Cloud",
      image: "/images/Screenshot 2026-04-28 004633.png"
    },
    { 
      title: "Red Hat Enterprise Linux Automation with Ansible", 
      issuer: "Red Hat", 
      date: "March 2026", 
      logo: <FaLinux className="text-white" />,
      relatedField: "DevOps & Linux",
      image: "/images/Screenshot 2026-04-28 004450.png"
    },
    { 
      title: "Mastering Data Structures & Algorithms", 
      issuer: "Udemy", 
      date: "Jan 2026", 
      logo: <FaCode className="text-purple-400" />,
      relatedField: "Data Structures & Algorithms",
      image: "/images/dsa_udemy (1).jpg"
    },
    { 
      title: "Postman API Fundamentals Student Expert", 
      issuer: "Postman", 
      date: "Feb 2025", 
      logo: <SiPostman className="text-[#FF6C37]" />,
      relatedField: "API",
      image: "/images/Screenshot 2026-04-28 005221.png"
    },
    { 
      title: "Cloud Virtualization, Containers and API", 
      issuer: "Duke University", 
      date: "Sep 2025", 
      logo: <FaDocker className="text-[#2496ED]" />,
      relatedField: "DevOps, Virtualization & API",
      image: "/images/cloudVirtualization.png"
    },
    { 
      title: "Cloud-Based Testing Platforms Getting Started", 
      issuer: "Coursera", 
      date: "Feb 2026", 
      logo: <FaCloud className="text-blue-300" />,
      relatedField: "Cloud & Testing",
      image: "/images/Screenshot 2026-04-28 005040.png"
    },
    { 
      title: "Angular", 
      issuer: "Infosys | Springboard", 
      date: "Aug 2025", 
      logo: <FaAngular className="text-[#DD0031]" />,
      relatedField: "Frontend Web Development",
      image: "/images/Screenshot 2026-04-28 004804.png"
    },
    { 
      title: "Basic C Sharp Programming", 
      issuer: "Cisco Networking Academy", 
      date: "Sep 2024", 
      logo: <FaLaptopCode className="text-indigo-400" />,
      relatedField: "C#",
      image: "/images/Screenshot 2026-04-28 004848.png"
    }
  ]
};
export const projectsHeader = {
  title: "Featured Projects",
  description: "Click on any project card to view full details, source code, and live demos.",
  projects: [
    {
      title: "Student Nagri",
      description: "A comprehensive e-learning platform bridging students and educators with live classes and robust administrative controls.",
      fullDescription: "A fully-fledged Learning Management System (LMS) with strict Role-Based Access Control (RBAC). \n\n👨‍🎓 Students can browse and purchase courses, stream video lectures, download notes, join live classes, and access a dedicated doubt-clearing portal.\n\n👨‍🏫 Educators utilize a dedicated dashboard to upload curriculum, host live sessions, and track real-time enrollment analytics.\n\n🛡️ Administrators have complete oversight through a master dashboard to monitor revenue, manage course lifecycles, handle teacher approvals (upgrading default student accounts to educator status), and revoke access when necessary. Deployed securely on AWS using Nginx.",
      // Using a premium Unsplash image that represents online education/laptops
      image: '/images/studentnagri.png?q=80&w=1000&auto=format&fit=crop', 
      // githubLink: "https://github.com/yourusername/student-nagri", // Update if you have a repo
      liveLink: "https://studentnagri.com",
      tags: [
        { name: "react", color: "text-[#61DAFB]" },
        { name: "node", color: "text-[#339933]" },
        { name: "postgresql", color: "text-blue-400" },
        { name: "aws", color: "text-[#FF9900]" },
        { name: "firebase", color: "text-yellow-400" },
      ]
    },
    {
      title: "StreamPost",
      description: "A full-stack, production-ready video hosting platform featuring seamless media uploads, polymorphic interactions, and nested comment threads.",
      fullDescription: "A comprehensive video streaming and community platform built entirely from scratch using a modern MERN stack architecture.\n\n🎥 Video Ecosystem: Complete control over video uploads, dynamic watch history, custom playlist management, and secure media processing handled via Cloudinary.\n\n💬 Advanced Interactions: Engineered a highly efficient, YouTube-style nested comment architecture, paired with a polymorphic like/dislike system that seamlessly spans videos, comments, and community tweets.\n\n👥 Creator Community: Features dedicated channel profiles, robust subscription tracking, and a dynamic 'Community Tab' allowing creators to post text-based updates to engage their audience.\n\n⚙️ Backend Mastery: Secured with rigorous JWT authentication, powered by highly complex MongoDB aggregation pipelines, and architected for scalable performance.",
      // Premium Unsplash image representing video streaming/media production
      image: "/images/streampost.png?q=80&w=1000&auto=format&fit=crop", 
      githubLink: "https://github.com/praphulksingh/StreamPost", // Update with your actual repo
      // liveLink: "https://chaitube.yourdomain.com", // Update with your actual live link
      tags: [
        { name: "react", color: "text-[#61DAFB]" },
        { name: "node", color: "text-[#339933]" },
        { name: "mongodb", color: "text-[#47A248]" },
        { name: "tailwind", color: "text-[#38B2AC]" },
        { name: "cloudinary", color: "text-blue-500" },
      ]
    },
    {
      title: "EventSync",
      description: "An AI-driven event management platform streamlining academic event lifecycles, biometric attendance, and automated credentialing.",
      fullDescription: "A cutting-edge Event Management System equipped with strict Role-Based Access Control (Student, Faculty, HOD) and seamless AI integration. \n\n👨‍🎓 Students can browse upcoming campus events, manage their registrations, enroll their biometric facial data via webcam, and download dynamically generated digital certificates.\n\n👨‍🏫 Faculty utilize a dedicated dashboard to propose events, monitor real-time registrations, and deploy an advanced browser-based AI Face Scanner (powered by TensorFlow/face-api.js) for instant, contactless attendance tracking.\n\n🛡️ Administrators (HODs) hold complete oversight to approve or reject event proposals, monitor campus-wide attendance metrics, provision secure user accounts, and trigger automated bulk PDF certificate generation. Built with a highly responsive, dark-mode supported UI using modern state management.",
      // Using a premium Unsplash image representing a modern tech conference/event
      image: "/images/eventsync.png?q=80&w=1000&auto=format&fit=crop", 
      githubLink: "https://github.com/praphulksingh/eventsync", 
      liveLink: "", // Add your live link once deployed
      tags: [
        { name: "react", color: "text-[#61DAFB]" },
        { name: "node.js", color: "text-[#339933]" },
        { name: "mongodb", color: "text-[#47A248]" },
        { name: "tailwind", color: "text-[#38B2AC]" },
        { name: "ai / face-api", color: "text-purple-400" },
      ]
    },
    {
      title: "Interactive Developer Portfolio",
      description: "A highly optimized, animated personal portfolio featuring a custom theme system and glassmorphism UI.",
      fullDescription: "A premium, fully responsive personal developer portfolio designed to showcase full-stack and cloud engineering capabilities. It features a custom-engineered semantic Dark/Light color system, glassmorphism UI components, and fluid scroll animations powered by Framer Motion. The architecture includes interactive popup modals for projects and credentials, and a serverless contact system integrated via Web3Forms.",
      // 👇 Pro-Tip: Take a screenshot of your finished site and save it as portfolio-preview.png
      image: "/images/portfolio.png?q=80&w=1000&auto=format&fit=crop", 
      githubLink: "https://github.com/praphulksingh/My-Portfolio", // Add your repo
      liveLink: "https://praphulkumar-portfolio.netlify.app/", // Add your live domain
      tags: [
        { name: "react", color: "text-[#61DAFB]" },
        { name: "tailwind", color: "text-teal-400" },
        { name: "framer-motion", color: "text-purple-500" },
        { name: "vite", color: "text-yellow-400" }
      ]
    },
    {
      title: "ResumeStrike - ATS Optimizer",
      description: "A serverless AI application that dynamically tailors resumes and generates cover letters to bypass ATS filters.",
      fullDescription: "A 100% client-side, AI-powered ATS Resume Optimizer built to solve the modern job search pipeline.\n\n📄 Smart Parsing: Integrates Google's Gemini 2.5 Flash multimodal AI to directly process Base64-encoded PDFs without a backend server, ensuring fast processing and data privacy.\n\n✨ Live Feedback: Engineered a custom Regex engine for dynamic job-description keyword highlighting and automated ATS match scoring.\n\n✍️ Seamless Editing: Utilized HTML5 contentEditable for a WYSIWYG editing experience, backed by React useEffect hooks and browser localStorage for robust session persistence and auto-saving.",
      // You can take a screenshot of the app and save it in your public/images folder
      image: '/images/ResumeStrike.png?q=80&w=1000&auto=format&fit=crop', 
      githubLink: "https://github.com/praphulksingh/ResumeStrike", // Update with your actual repo name
      liveLink: "", // Add your Vercel/Netlify link once deployed
      tags: [
        { name: "react", color: "text-[#61DAFB]" },
        { name: "gemini ai", color: "text-blue-500" },
        { name: "tailwind", color: "text-[#38B2AC]" },
        { name: "vite", color: "text-yellow-400" }
      ]
    },
    {
      title: "Neon Arcade Game Center",
      description: "A fully responsive, retro-themed web arcade featuring 6 classic mini-games built with HTML5 Canvas, CSS Grid, and Vanilla JavaScript.",
      fullDescription: "A cohesive, retro-cyberpunk arcade platform showcasing a mastery of DOM manipulation, algorithmic logic, and 2D frame physics.\n\n🎮 Game Ecosystem: Features 6 fully playable classics—Snake, Tic-Tac-Toe, Sudoku, Brick Breaker, Pong (vs. AI), and Space Invaders.\n\n✨ Modern UI/UX: Engineered a unified CSS variable design system with neon glow effects, fully responsive CSS Grid layouts, and a custom JavaScript Toast Notification engine for a seamless user experience.\n\n🧠 Algorithmic Mastery: Implemented complex 2D array management for collision detection, a dynamic Sudoku puzzle generator, and a recursive backtracking algorithm for the interactive Sudoku Solver.\n\n⚡ Performance: Utilized the HTML5 Canvas API and requestAnimationFrame for smooth, 60fps rendering in the physics-based games without external libraries.",
      // Pro-Tip: Take a screenshot of the main dashboard grid and save it to your images folder
      image: "/images/games.png?q=80&w=1000&auto=format&fit=crop", 
      githubLink: "https://github.com/praphulksingh/Game-Center", // Update with your actual repo name
      liveLink: "", // Add your live link if you host it on Netlify/Vercel/GitHub Pages
      tags: [
        { name: "vanilla js", color: "text-yellow-400" },
        { name: "html5 canvas", color: "text-orange-500" },
        { name: "css grid", color: "text-blue-400" },
        { name: "algorithms", color: "text-purple-400" },
      ]
    },
  ]
};

export const experience = {
  title: "Work Experience",
  experiences: [
    {
      title: "Web Developer Intern",
      company: "Agrix Agrotech Private Limited",
      duration: "Feb 2026 - May 2026",
      // location: "Remote ",
      description: "Developed and optimized responsive web applications and dashboard features using React.js, Node.js and databases, improving user experience and supporting scalable digital platform operations.Worked on API integration, backend functionality and cloud-based deployment workflows while gaining hands-on experience in real-world product development and performance optimization.Collaborated on modern web solutions involving data management, automation and secure application development, strengthening skills in full-stack development, debugging and system scalability.",
    },
    {
      title: "Freelancer Web Developer",
      // company: "xyz company",
      duration: "Dec 2023 - Present",
      // location: "Remote ",
      description: "Gained hands-on experience in full stack web development, optimizing front-end performance, and contributing to core product features.",
    },
    {
      title: "Web Developer Trainee",
      company: "O7 Services",
      duration: "45 Days",
      // location: "Training",
      description: "Completed an intensive training program focused on modern web development architectures, practical implementations, and UI/UX design.",
    }
  ]
};

export const contactInfo = {
  title: "Contact Me ☎️",
  subtitle: "Discuss a project, a tech stack, or just want to say hi? My inbox is open for all.",
  number: "+91 6207237599",
  email_address: "praphulkumar130@gmail.com"
};