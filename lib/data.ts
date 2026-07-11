export const personalData = {
  name: "Rizal Ramadhan",
  title: "Fullstack & Networking",
  heroTagline: "Membangun solusi digital dari frontend hingga infrastruktur",
  about: [
    "Seorang Fullstack Developer dan Networking enthusiast yang bersemangat dengan pengalaman dalam membangun aplikasi web modern dan mengelola infrastruktur jaringan. Saya suka mengubah masalah yang kompleks menjadi solusi yang sederhana, indah, dan intuitif.",
    "Saat ini sedang mencari kesempatan magang di mana saya dapat mengasah keterampilan dalam pengembangan web, konfigurasi jaringan, dan administrasi sistem sambil terus belajar dan berkembang.",
  ],
  email: "muhamadrizalramadhan28@gmail.com",
  location: "Indonesia",
  social: {
    github: "https://github.com/rizalramadhan",
    linkedin: "https://linkedin.com/in/rizalramadhan",
    email: "mailto:muhamadrizalramadhan28@gmail.com",
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
    { name: "WordPress", icon: "SiWordpress" },
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
    { name: "Antigravity", icon: "SiAntigravity" },
    { name: "Kiro", icon: "SiKiro" },
  ],
};

export const projects = [
  {
    title: "Sapa Desa Wadas",
    description:
      "Platform digital desa Wadas dengan fitur login dan panel admin untuk pengelolaan data layanan masyarakat desa.",
    image: "/images/projects/sapa-desa.jpg.png",
    tags: ["PHP", "MySQL", "Bootstrap", "Admin Panel"],
    demoUrl: "https://sapa-desawadas.infinityfreeapp.com/public/login",
  },
  {
    title: "Klinik Kemala",
    description:
      "Sistem informasi klinik dengan panel admin untuk pengelolaan data pasien, jadwal dokter, dan layanan kesehatan.",
    image: "/images/projects/klinik-kemala.jpg.png",
    tags: ["PHP", "MySQL", "Bootstrap", "Admin Panel"],
    demoUrl: "https://klinik-kemala.freedev.app/users/dashboard_admin.php",
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
