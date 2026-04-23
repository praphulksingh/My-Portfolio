import { FaReact, FaNodeJs, FaDocker, FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaAws, FaHtml5 } from "react-icons/fa";
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
  resumeLink: "/images/myResume.pdf", 
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
      title: "Full Stack Web Development", 
      issuer: "Udemy / Coursera", 
      date: "Dec 2024", 
      logo: "🎓",
      relatedField: "Frontend & Backend Architecture",
      image: "/images/cert-web.png" // Replace with your actual image filename
    },
    { 
      title: "AWS Certified Developer", 
      issuer: "Amazon Web Services", 
      date: "May 2025", 
      logo: "☁️",
      relatedField: "Cloud Computing & DevOps",
      image: "/images/cert-aws.png" // Replace with your actual image filename
    }
  ]
};
export const projectsHeader = {
  title: "Featured Projects",
  description: "Click on any project card to view full details, source code, and live demos.",
  projects: [
    {
      title: "SPAV-SmartEvent",
      description: "IoT-powered Event Management System automating campus event lifecycles.",
      fullDescription: "A comprehensive IoT and Web integrated system. It automates the entire campus event lifecycle using ESP32 microcontrollers for physical QR scanning, combined with a robust MERN stack backend. Features include role-based access for HOD approvals, real-time attendance tracking, and dynamic certificate generation.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1000&auto=format&fit=crop", 
      githubLink: "https://github.com",
      liveLink: "https://your-demo-link.com",
      tags: [
        { name: "react", color: "text-blue-500" },
        { name: "mongodb", color: "text-green-500" },
        { name: "iot", color: "text-pink-500" },
      ]
    },
    {
      title: "Modern Blogging App",
      description: "A fast, scalable MERN-stack blogging website featuring secure CRUD operations.",
      fullDescription: "This scalable blogging platform utilizes Appwrite for secure backend authentication and database management. It features a rich text editor for post creation, image uploading capabilities, and a highly responsive grid layout built entirely with Tailwind CSS v4 and React.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000&auto=format&fit=crop",
      githubLink: "https://github.com",
      liveLink: "https://your-demo-link.com",
      tags: [
        { name: "react", color: "text-blue-500" },
        { name: "appwrite", color: "text-purple-500" },
        { name: "tailwind", color: "text-teal-500" },
      ]
    },
  ]
};

export const experience = {
  title: "Work Experience",
  experiences: [
    {
      title: "Junior Web Developer Internship",
      company: "xyz company",
      duration: "Mar 2026 - Jul 2026",
      location: "Remote / On-site",
      description: "Gained hands-on experience in full stack web development, optimizing front-end performance, and contributing to core product features.",
    },
    {
      title: "Web Developer Trainee",
      company: "O7 Services",
      duration: "45 Days",
      location: "Training",
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