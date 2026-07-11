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
    whatsapp: "https://wa.me/6281293431634",
    instagram: "https://www.instagram.com/rizallramadhaan",
    youtube: "https://www.youtube.com/@muhamadrizalramadhan3013",
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
    githubUrl: "",
  },
  {
    title: "Klinik Kemala",
    description:
      "Sistem informasi klinik dengan panel admin untuk pengelolaan data pasien, jadwal dokter, dan layanan kesehatan.",
    image: "/images/projects/klinik-kemala.jpg.png",
    tags: ["PHP", "MySQL", "Bootstrap", "Admin Panel"],
    demoUrl: "https://klinik-kemala.freedev.app/users/dashboard_admin.php",
    githubUrl: "",
  },
];

export const experiences = [
  {
    type: "education",
    title: "Informatika",
    organization: "Universitas Singaperbangsa Karawang",
    period: "2024 - Present",
    description:
      "Menempuh studi informatika dengan fokus pengembangan web, jaringan komputer, dan rekayasa perangkat lunak.",
  },
  {
    type: "project",
    title: "Proyek Akhir - Pemrograman Berbasis Web",
    organization: "Sistem Pengelolaan Klinik Kemala",
    period: "2024",
    description:
      "Mengembangkan sistem manajemen data klinik menggunakan PHP dan MySQL untuk proses administrasi kesehatan.",
  },
  {
    type: "project",
    title: "Proyek Akhir - Rekayasa Perangkat Lunak",
    organization: "Sistem Absensi Perangkat Desa Wadas",
    period: "2024",
    description:
      "Merancang sistem absensi berbasis web untuk pemerintahan desa, meningkatkan akurasi pencatatan kehadiran.",
  },
  {
    type: "project",
    title: "Proyek Akhir - Interaksi Manusia dan Komputer",
    organization: "Website E-Commerce Sneakers",
    period: "2024",
    description:
      "Merancang antarmuka dan alur pengguna untuk platform jual-beli sepatu berbasis web.",
  },
  {
    type: "project",
    title: "Proyek Akhir - Pemrograman Berorientasi Objek",
    organization: "Sistem Booking Lapangan Badminton",
    period: "2024",
    description:
      "Mengembangkan aplikasi desktop menggunakan Java untuk mengelola reservasi dan jadwal lapangan.",
  },
  {
    type: "project",
    title: "Proyek Akhir - Jaringan Komputer",
    organization: "Konfigurasi Jaringan Hotspot",
    period: "2023",
    description:
      "Mensimulasikan infrastruktur jaringan dengan Cisco Packet Tracer dan sistem voucher hotspot menggunakan Mikhmon.",
  },
];
