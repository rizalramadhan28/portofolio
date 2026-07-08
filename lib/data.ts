export const personalData = {
  name: "Rizal Ramadhan",
  title: "Fullstack & Networking",
  heroTagline: "Building digital solutions from frontend to infrastructure",
  about: [
    "A passionate Fullstack Developer and Networking enthusiast with experience in building modern web applications and managing network infrastructure. I love turning complex problems into simple, beautiful, and intuitive solutions.",
    "Currently seeking an internship opportunity where I can contribute my skills in web development, network configuration, and system administration while continuing to learn and grow.",
  ],
  email: "rizal@example.com",
  location: "Indonesia",
  social: {
    github: "https://github.com/rizalramadhan",
    linkedin: "https://linkedin.com/in/rizalramadhan",
    email: "mailto:rizal@example.com",
  },
  cvUrl: "/cv.pdf",
};

export const skills = {
  Frontend: [
    { name: "React", icon: "SiReact" },
    { name: "Next.js", icon: "SiNextdotjs" },
    { name: "Tailwind CSS", icon: "SiTailwindcss" },
    { name: "HTML/CSS", icon: "SiHtml5" },
    { name: "JavaScript", icon: "SiJavascript" },
  ],
  Backend: [
    { name: "Node.js", icon: "SiNodedotjs" },
    { name: "Express", icon: "SiExpress" },
    { name: "MySQL", icon: "SiMysql" },
    { name: "MariaDB", icon: "SiMariadb" },
    { name: "REST API", icon: "SiPostman" },
    { name: "Prisma", icon: "SiPrisma" },
  ],
  Networking: [
    { name: "Cisco", icon: "SiCisco" },
    { name: "Security", icon: "SiSecurityscorecard" },
  ],
  Tools: [
    { name: "Git", icon: "SiGit" },
    { name: "VS Code", icon: "SiVisualstudiocode" },
    { name: "Figma", icon: "SiFigma" },
    { name: "Vercel", icon: "SiVercel" },
  ],
};

export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with payment integration, admin dashboard, and real-time inventory management.",
    image: "/images/projects/ecommerce.jpg",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/rizalramadhan/ecommerce",
  },
  {
    title: "Network Monitoring Dashboard",
    description:
      "Real-time network monitoring dashboard with live traffic visualization, alerting system, and device management.",
    image: "/images/projects/network-monitor.jpg",
    tags: ["React", "Node.js", "WebSocket", "D3.js", "Docker"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/rizalramadhan/network-monitor",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates, drag-and-drop, and team workspace features.",
    image: "/images/projects/taskapp.jpg",
    tags: ["Next.js", "TypeScript", "MongoDB", "Socket.io", "Tailwind"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/rizalramadhan/taskapp",
  },
];

export const experiences = [
  {
    type: "education",
    title: "Informatics",
    organization: "University Singaperbangsa Karawang",
    period: "2022 - Present",
    description:
      "Studying informatics with focus on software development and computer networking.",
  },
  {
    type: "organization",
    title: "Lab Assistant",
    organization: "Computer Network Laboratory",
    period: "2023 - Present",
    description:
      "Assisting students in network configuration labs, maintaining lab infrastructure, and developing learning materials.",
  },
  {
    type: "experience",
    title: "Freelance Web Developer",
    organization: "Self-employed",
    period: "2023 - Present",
    description:
      "Built multiple web applications for clients using React, Next.js, and modern web technologies.",
  },
  {
    type: "organization",
    title: "Member",
    organization: "Developer Student Club",
    period: "2022 - Present",
    description:
      "Active member participating in tech workshops, hackathons, and community projects.",
  },
];
