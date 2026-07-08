# PRD - Portfolio Website

## 1. Ringkasan
Portfolio website personal untuk apply magang di bidang **Fullstack Development & Networking**.
Website ini akan menjadi living resume yang menampilkan skill, proyek, dan pengalaman secara profesional dan modern.

## 2. Tujuan
- Menampilkan profil profesional sebagai calon intern
- Memudahkan HR / hiring manager melihat portofolio secara online
- Mendemonstrasikan kemampuan teknis (fullstack, modern stack, performa)
- SEO friendly agar mudah ditemukan

## 3. Target Audiens
- HR / Talent Acquisition
- Hiring Manager / Tech Lead
- Rekan developer / komunitas

## 4. Tech Stack
| Layer | Teknologi | Alasan |
|---|---|---|
| Framework | Next.js 14 (App Router) | React, SEO friendly, SSR/SSG, advanced |
| Bahasa | TypeScript | Type safety, best practice industri |
| Styling | Tailwind CSS | Utility-first, cepat, modern |
| Animasi | Framer Motion | Smooth animations, ringan |
| Ikon | Lucide Icons | Modern, konsisten |
| Font | Inter (Google Fonts) | Clean, readable, modern |
| Deployment | Vercel | Gratis, auto-deploy dari GitHub |
| CMS (opsional) | — | Cukup hardcode data untuk MVP |

## 5. Halaman / Section
### 5.1 Homepage (Single Page)
| Section | Konten |
|---|---|
| **Hero** | Fullscreen, nama, title (Fullstack & Networking), animated tagline, CTA buttons (Contact, Download CV) |
| **About** | Foto profil, bio singkat, link download CV |
| **Skills** | Grid ikon per kategori: Frontend, Backend, Networking, Tools |
| **Projects** | Card grid: screenshot, nama, deskripsi, tech stack, link demo/github |
| **Experience** | Timeline vertikal: pendidikan, organisasi, pengalaman kerja |
| **Contact** | Form kontak (name, email, message) + social links (LinkedIn, GitHub, Email) |

### 5.2 Blog (Future Enhancement)
- Artikel singkat seputar tech & networking

## 6. Fitur
| Fitur | Prioritas |
|---|---|
| ✅ Responsive (mobile-first) | P0 |
| ✅ Dark mode / Light mode (system preference) | P0 |
| ✅ SEO optimized (meta tags, Open Graph) | P0 |
| ✅ Smooth scroll + entry animations | P1 |
| ✅ Download CV PDF | P1 |
| ✅ Contact form (client-side) | P1 |
| ✅ Performa cepat (Lighthouse 90+) | P0 |
| ✅ Accessibility (ARIA labels, semantic HTML) | P1 |
| ⏳ Blog section | Future |

## 7. Design Guidelines
- **Tema**: Minimalis modern
- **Warna Dasar**: Dark (`#0a0a0a`) / Light (`#ffffff`)
- **Warna Accent**: Blue / Navy
- **Tipografi**: Inter
- **Animasi**: Halus, tidak berlebihan

## 8. Struktur Project
```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout (metadata, font, providers)
│   ├── page.tsx            # Homepage (semua sections)
│   └── globals.css         # Global styles + Tailwind directives
├── components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ExperienceSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── ThemeToggle.tsx
│   └── SectionWrapper.tsx   # Layout wrapper + animasi
├── lib/
│   └── data.ts              # Data skills, projects, experience
├── public/
│   ├── images/
│   │   ├── profile.jpg
│   │   └── projects/
│   └── cv.pdf
└── ...config files
```

## 9. User Flow
1. Buka website → Hero section (kesan pertama)
2. Scroll → About (kenalan)
3. Scroll → Skills (lihat kemampuan)
4. Scroll → Projects (lihat hasil karya)
5. Scroll → Experience (lihat riwayat)
6. Scroll → Contact (hubungi)

## 10. Success Metrics
- Lighthouse score ≥ 90 (Performance, Accessibility, SEO)
- Load time < 2 detik
- Responsive di semua device
