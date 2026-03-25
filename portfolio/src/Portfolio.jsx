import React, { useState } from 'react';
import { motion as Motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Cpu,
  Award,
  Phone,
  Sun,
  Moon,
  ChevronDown,
  Trophy,
  Star,
  BookOpen,
  Layers
} from 'lucide-react';

import profile from '../src/assets/profile.png';
import cloudcomputing from '../src/assets/Cloud Computing.jpg';
import iotCert from '../src/assets/Introduction to Internet of Things.jpg';
import industryIotCert from '../src/assets/Introduction To Industry 4.0 And Industrial Internet Of Things.jpg';
import techEnglishCert from '../src/assets/Technical English For Engineers.jpg';
import pythonCert from '../src/assets/The Joy of Computing using Python.jpg';
import mongoCert from '../src/assets/MongoDB Certificate.jpg';
import networkCert from '../src/assets/Network addressing.jpg';
import snowflakeCert from '../src/assets/Snowpro certificate.jpg';
import resume from '../src/assets/Joel_Resume.pdf';

const projectsData = [
  {
    title: 'AcadCore – Academic ERP System',
    description:
      'Built a React + SQL ERP that unifies attendance, internal marks, CBCS registration, staff allocation, and academic reporting with Redis caching, JWT/OAuth auth, and CORS/CSRF protection.',
    github: 'https://github.com/RamPrasathM-2005/ACADCORE',
    demo: '#',
    tech: ['React.js', 'SQL', 'Redis', 'JWT', 'OAuth']
  },
  {
    title: 'AI Assisted Event Management System',
    description:
      'Created a Flutter app for end-to-end event planning with role-based access for customers, organizers, and vendors, plus conflict-free booking and payments.',
    github: 'https://github.com/JoelA-07/Event-management-system',
    demo: '#',
    tech: ['Flutter', 'SQL', 'Role-based Login', 'Payments']
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'Designed a responsive React portfolio with projects, certifications, achievements, and direct contact links for a complete professional overview.',
    github: 'https://github.com/JoelA-07',
    demo: '#',
    tech: ['React.js', 'Tailwind', 'Framer Motion']
  }
];

const certsData = [
  {
    title: 'Cloud Computing',
    issuer: 'NPTEL',
    platform: 'Course Certification',
    details: 'Completed core cloud concepts covering deployment models, virtualization, and service architecture.',
    image: cloudcomputing
  },
  {
    title: 'Introduction to Internet of Things',
    issuer: 'NPTEL',
    platform: 'Course Certification',
    details: 'Covered IoT ecosystem, connected devices, communication protocols, and practical use cases.',
    image: iotCert
  },
  {
    title: 'Technical English for Engineers',
    issuer: 'NPTEL',
    platform: 'Course Certification',
    details: 'Strengthened formal communication and technical writing for professional engineering environments.',
    image: techEnglishCert
  },
  {
    title: 'The Joy of Computing using Python',
    issuer: 'NPTEL',
    platform: 'Course Certification',
    details: 'Applied Python programming concepts to logic building and problem-solving exercises.',
    image: pythonCert
  },
  {
    title: 'Industry 4.0 & Industrial IoT',
    issuer: 'NPTEL',
    platform: 'Course Certification',
    details: 'Learned Industry 4.0 foundations, smart manufacturing workflows, and industrial IoT integration.',
    image: industryIotCert
  },
  {
    title: 'MongoDB Basics',
    issuer: 'MongoDB',
    platform: 'Course Certification',
    details: 'Covered CRUD operations, indexing, aggregation basics, and schema design essentials.',
    image: mongoCert
  },
  {
    title: 'Networking Basics',
    issuer: 'Cisco',
    platform: 'Course Certification',
    details: 'Learned IP addressing, subnetting, network components, and foundational routing concepts.',
    image: networkCert
  },
  {
    title: 'SnowPro Core',
    issuer: 'Snowflake',
    platform: 'Course Certification',
    details: 'Introduced Snowflake architecture, data loading, and core warehouse concepts.',
    image: snowflakeCert
  }
];

const skillsData = {
  Languages: ['C', 'C++', 'Java'],
  'Web & App': ['HTML', 'CSS','Java Script','React.js', 'Node.js', 'Flutter'],
  Databases: ['MySQL', 'MongoDB'],
  Core: ['Data Structures', 'Algorithms', 'OOPs', 'DBMS', 'Computer Networks']
};

const achievementsData = [
  {
    period: '2024 - 2026',
    title: '1500+ Problems Solved on Skillrack',
    description: 'Strengthened problem-solving speed and consistency across diverse topics.'
  },
  {
    period: '2024 - 2026',
    title: '100+ DSA Problems Solved',
    description: 'Solved on LeetCode and GeeksforGeeks with interview-focused practice.'
  }
];

const profileSummary =
  'Computer Science Engineering student with strong problem-solving skills and experience in full-stack and mobile application development. Solved 1500+ coding problems across competitive platforms and builds scalable systems focused on performance, security, and real-world applications.';

const educationData = [
  {
    institution: 'National Engineering College',
    period: '2023 - 2027',
    detail: 'B.E. Computer Science Engineering',
    highlight: 'CGPA: 9.05'
  },
  {
    institution: 'Rosemary Matric Higher Secondary School',
    period: '2020 - 2023',
    detail: 'HSC',
    highlight: '96%'
  }
];

const leadershipData = [
  {
    title: 'Joint Secretary, CSE Association',
    detail: 'Organized and coordinated technical events, workshops, and student activities.'
  },
  {
    title: 'Member, IEEE',
    detail: 'Active participant in technical sessions, seminars, and collaborative learning initiatives.'
  }
];

const SectionTitle = ({ icon, title }) => (
  <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
    {icon}
    {title}
  </h2>
);

const ProjectCard = ({ project, theme }) => (
  <Motion.div whileHover={{ y: -8 }} className={`rounded-[2rem] p-6 md:p-7 ${theme.card} h-full flex flex-col`}>
    <h3 className="text-xl font-bold leading-tight mb-3">{project.title}</h3>
    <p className={`text-sm leading-relaxed ${theme.secondary}`}>{project.description}</p>

    <div className="flex flex-wrap gap-2 mt-5">
      {project.tech.map((t) => (
        <span key={t} className="text-[10px] bg-teal-500/10 px-2.5 py-1 rounded text-teal-500 font-bold uppercase tracking-wide">
          {t}
        </span>
      ))}
    </div>

    <div className="flex gap-3 mt-auto pt-6">
      <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-teal-500/10 text-teal-500 hover:bg-teal-500 hover:text-white transition-colors">
        <Github size={18} />
      </a>
      {/* <a href={project.demo} target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white px-5 py-2 rounded-full font-semibold flex items-center gap-2 text-sm hover:bg-teal-600 transition-colors">
        Live Demo <ExternalLink size={14} />
      </a> */}
    </div>
  </Motion.div>
);

const CertFlipCard = ({ cert, theme }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => setIsFlipped((prev) => !prev);

  return (
    <div
      className="relative h-96 w-full cursor-pointer [perspective:1200px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={toggleFlip}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleFlip();
        }
      }}
      aria-label={`View certificate for ${cert.title}`}
    >
      <Motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="relative w-full h-full [transform-style:preserve-3d]"
      >
        <div
          className={`absolute inset-0 [backface-visibility:hidden] rounded-[2rem] p-7 md:p-8 flex flex-col justify-between shadow-xl border ${theme.card} border-transparent hover:border-teal-500/40 transition-all`}
        >
          <div>
            <div className="w-14 h-14 bg-teal-500/10 rounded-2xl flex items-center justify-center mb-6">
              <Award className="text-teal-500" size={28} />
            </div>

            <h3 className="text-xl font-bold mb-2 leading-tight">{cert.title}</h3>
            <p className={`text-sm leading-relaxed mt-3 ${theme.secondary}`}>{cert.details}</p>
          </div>
        </div>

        <div className="absolute inset-0 [backface-visibility:hidden] rounded-[2rem] bg-slate-950 [transform:rotateY(180deg)] overflow-hidden shadow-2xl group">
          <img
            src={cert.image}
            alt={`${cert.title} certificate`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
          </div>
        </div>
      </Motion.div>
    </div>
  );
};

const ContactIcon = ({ icon, label, href }) => (
  <Motion.a href={href} target="_blank" rel="noopener noreferrer" whileHover={{ y: -4 }} className="flex flex-col items-center gap-2 cursor-pointer group">
    <div className="p-5 rounded-2xl bg-teal-500/10 text-teal-500 group-hover:bg-teal-500 group-hover:text-white transition-all">{icon}</div>
    <span className="text-xs font-bold uppercase tracking-tighter opacity-60">{label}</span>
  </Motion.a>
);

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { scrollY } = useScroll();

  const avatarSize = useTransform(scrollY, [0, 260], [210, 92]);
  const avatarY = useTransform(scrollY, [0, 260], [0, -6]);
  const avatarBorder = useTransform(scrollY, [0, 260], ['5px', '2px']);
  const avatarOpacity = useTransform(scrollY, [0, 160, 260], [1, 0.6, 0]);

  const smoothAvatarSize = useSpring(avatarSize, { stiffness: 130, damping: 22, mass: 0.25 });
  const smoothAvatarY = useSpring(avatarY, { stiffness: 140, damping: 20, mass: 0.2 });
  const smoothAvatarBorder = useSpring(avatarBorder, { stiffness: 140, damping: 20, mass: 0.2 });
  const smoothAvatarOpacity = useSpring(avatarOpacity, { stiffness: 140, damping: 20, mass: 0.2 });

  const theme = {
    bg: darkMode ? 'bg-[#0f172a]' : 'bg-slate-50',
    text: darkMode ? 'text-slate-200' : 'text-slate-800',
    card: darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200 shadow-lg shadow-slate-200/50',
    secondary: darkMode ? 'text-slate-400' : 'text-slate-500'
  };

  const sectionClass = 'max-w-6xl mx-auto px-6 py-16 md:py-20';
  const revealProps = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  return (
    <div className={`${theme.bg} ${theme.text} min-h-screen transition-colors duration-500 selection:bg-teal-500/30 overflow-x-hidden`}>
      <nav className="fixed top-0 w-full z-[100] h-20 flex items-center px-6">
        <div className="max-w-6xl mx-auto w-full flex justify-between items-center">
          <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-full ${theme.card} hover:scale-110 transition-transform`}>
            {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
          </button>

          <div className="relative">
            <button
              type="button"
              onClick={() => setIsNavOpen(!isNavOpen)}
              className={`w-11 h-11 md:w-12 md:h-12 rounded-full border border-teal-500 p-1 bg-[#0f172a] overflow-hidden cursor-pointer shadow-2xl flex items-center justify-center ${theme.card}`}
              aria-label="Open menu"
            >
              <img src={profile} alt="Profile" className="w-full h-full rounded-full object-cover bg-slate-700" />
              <span className="sr-only">Menu</span>
            </button>
            <AnimatePresence>
              {isNavOpen && (
                <Motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className={`absolute right-0 mt-3 w-48 py-2 rounded-2xl ${theme.card} backdrop-blur-xl z-[101] shadow-2xl`}>
                  {[
                    { id: 'hero', label: 'home' },
                    { id: 'profile', label: 'profile' },
                    { id: 'education', label: 'education' },
                    { id: 'projects', label: 'projects' },
                    { id: 'skills', label: 'skills' },
                    { id: 'certs', label: 'certifications' },
                    { id: 'leadership', label: 'leadership' },
                    { id: 'awards', label: 'achievements' },
                    { id: 'contact', label: 'contact' }
                  ].map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setIsNavOpen(false)}
                      className="block px-6 py-2 hover:bg-teal-500 hover:text-white transition-colors text-sm font-medium capitalize"
                    >
                      {item.label}
                    </a>
                  ))}
                </Motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>

      <header id="hero" className="pt-64 pb-20 px-6 text-center">
        <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-semibold mb-4 tracking-[0.18em] uppercase leading-tight font-['Playfair_Display']">
            Joel A <br />
          </h1>
          <p className={`text-lg md:text-xl ${theme.secondary} mb-3`}>Full-Stack and Mobile Developer</p>
          <p className={`text-sm md:text-base ${theme.secondary} mb-10`}>Strong in problem-solving, DSA, and building real-world software systems.</p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${theme.card}`}>Tirunelveli, Tamil Nadu</span>
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${theme.card}`}>B.E CSE (2023-2027)</span>
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${theme.card}`}>CGPA: 9.05</span>
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${theme.card}`}>1500+ Problems Solved</span>
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${theme.card}`}>100+ DSA Problems</span>
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href={resume}
              download
              className="bg-teal-600 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-teal-500/20 hover:scale-105 transition-transform inline-flex items-center gap-2"
            >
              Download Resume
            </a>
            <a href="#contact" className={`px-8 py-3 rounded-full font-bold border ${theme.card} hover:border-teal-500 transition-all`}>
              Get In Touch
            </a>
          </div>
        </Motion.div>
      </header>

      <div className="fixed top-4 left-0 right-0 z-[110] pointer-events-none flex justify-center">
        <Motion.button
          type="button"
          style={{ width: smoothAvatarSize, height: smoothAvatarSize, y: smoothAvatarY, borderWidth: smoothAvatarBorder, opacity: smoothAvatarOpacity }}
          className="rounded-full border-teal-500 p-1.5 bg-[#0f172a] overflow-hidden pointer-events-auto cursor-pointer shadow-2xl"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <img src={profile} alt="Profile" className="w-full h-full rounded-full object-cover bg-slate-700" />
        </Motion.button>
      </div>

      <Motion.section id="profile" className={sectionClass} {...revealProps}>
        <SectionTitle icon={<BookOpen className="text-teal-500" />} title="Profile" />
        <div className={`p-8 md:p-10 rounded-[2rem] ${theme.card}`}>
          <p className={`text-base md:text-lg leading-relaxed ${theme.secondary}`}>{profileSummary}</p>
        </div>
      </Motion.section>

      <Motion.section id="education" className={sectionClass} {...revealProps}>
        <SectionTitle icon={<BookOpen className="text-teal-500" />} title="Education" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu) => (
            <Motion.div key={edu.institution} whileHover={{ y: -6 }} className={`p-6 rounded-3xl ${theme.card}`}>
              <p className="text-teal-500 text-xs font-bold uppercase tracking-wider mb-2">{edu.period}</p>
              <h3 className="text-lg font-bold leading-tight">{edu.institution}</h3>
              <p className={`text-sm font-semibold mt-1 ${theme.secondary}`}>{edu.detail}</p>
              <p className={`text-sm mt-4 leading-relaxed ${theme.secondary}`}>{edu.highlight}</p>
            </Motion.div>
          ))}
        </div>
      </Motion.section>

      <Motion.section id="projects" className={sectionClass} {...revealProps}>
        <SectionTitle icon={<Layers className="text-teal-500" />} title="Projects" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} theme={theme} />
          ))}
        </div>
      </Motion.section>

      <Motion.section id="certs" className={sectionClass} {...revealProps}>
        <SectionTitle icon={<Award className="text-teal-500" />} title="Certifications" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certsData.map((cert, index) => (
            <CertFlipCard key={index} cert={cert} theme={theme} />
          ))}
        </div>
      </Motion.section>

      <Motion.section id="skills" className={sectionClass} {...revealProps}>
        <SectionTitle icon={<Cpu className="text-teal-500" />} title="Technical Toolkit" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {Object.keys(skillsData).map((cat) => (
            <div key={cat} className={`p-6 rounded-3xl ${theme.card}`}>
              <h3 className="font-bold text-teal-500 mb-4">{cat}</h3>
              <ul className={`space-y-2 text-sm ${theme.secondary}`}>
                {skillsData[cat].map((skill) => (
                  <li key={skill}>- {skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Motion.section>

      <Motion.section id="leadership" className={sectionClass} {...revealProps}>
        <SectionTitle icon={<Star className="text-teal-500" />} title="Leadership" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadershipData.map((lead) => (
            <Motion.div key={lead.title} whileHover={{ y: -6 }} className={`p-6 rounded-3xl ${theme.card}`}>
              <h3 className="text-lg font-bold leading-tight">{lead.title}</h3>
              <p className={`text-sm mt-4 leading-relaxed ${theme.secondary}`}>{lead.detail}</p>
            </Motion.div>
          ))}
        </div>
      </Motion.section>

      <Motion.section id="awards" className={sectionClass} {...revealProps}>
        <SectionTitle icon={<Trophy className="text-teal-500" />} title="Achievements" />
        <div className="space-y-6">
          {achievementsData.map((a) => (
            <Motion.div whileHover={{ x: 8 }} key={a.title} className={`p-8 rounded-3xl ${theme.card} flex flex-col md:flex-row justify-between items-center gap-4`}>
              <div>
                <span className="text-teal-500 font-bold text-sm">{a.period}</span>
                <h3 className="text-xl font-bold">{a.title}</h3>
                <p className={theme.secondary}>{a.description}</p>
              </div>
            </Motion.div>
          ))}
        </div>
      </Motion.section>

      <Motion.section id="contact" className={sectionClass} {...revealProps}>
        <div className={`rounded-[2.5rem] p-8 md:p-12 ${theme.card} text-center relative overflow-hidden`}>
          <h2 className="text-4xl font-bold mb-6">Let&apos;s Connect</h2>
          <p className={`${theme.secondary} mb-10`}>Open to internships, placements, and meaningful software collaborations.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <ContactIcon icon={<Github />} label="GitHub" href="https://github.com/JoelA-07" />
            <ContactIcon icon={<Mail />} label="Email" href="mailto:ajjoel07@gmail.com" />
            <ContactIcon icon={<Phone />} label="Phone" href="tel:+919042484400" />
            <ContactIcon icon={<Linkedin />} label="Resume" href={resume} />
          </div>
        </div>
      </Motion.section>

      <footer className="py-10 text-center opacity-50 text-sm">Built with React & Tailwind - 2026</footer>
    </div>
  );
};

export default Portfolio;
