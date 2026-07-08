# Design Guidelines - Portfolio Website

## 1. Design Philosophy
**Minimalis Modern** — Clean, profesional, fokus ke konten.
Setiap elemen punya tujuan. Tidak ada yang berlebihan.

## 2. Color Palette

### Dark Mode (Default)
```css
--background: #0a0a0a
--foreground: #e5e7eb
--card: #111111
--card-border: #1f2937
--accent: #2563eb       /* Blue-600 */
--accent-hover: #1d4ed8 /* Blue-700 */
--accent-light: #3b82f6 /* Blue-500 */
--muted: #6b7280
```

### Light Mode
```css
--background: #ffffff
--foreground: #1f2937
--card: #f9fafb
--card-border: #e5e7eb
--accent: #2563eb       /* Blue-600 */
--accent-hover: #1d4ed8 /* Blue-700 */
--accent-light: #3b82f6 /* Blue-500 */
--muted: #9ca3af
```

## 3. Typography
| Element | Font | Weight | Size |
|---|---|---|---|
| Heading 1 | Inter | 700 (Bold) | text-5xl / text-6xl |
| Heading 2 | Inter | 600 (Semibold) | text-3xl / text-4xl |
| Heading 3 | Inter | 600 (Semibold) | text-xl / text-2xl |
| Body | Inter | 400 (Regular) | text-base / text-lg |
| Small / Muted | Inter | 400 | text-sm |

## 4. Spacing
- Section padding: `py-20` / `py-24`
- Container max-width: `max-w-6xl`
- Gap antar item card: `gap-6` / `gap-8`
- Section gap: antar section `py-16`

## 5. Components Style

### Navbar
- Sticky, blur background on scroll
- Transparent → solid on scroll
- Logo (nama) kiri, nav links kanan
- Theme toggle di pojok kanan

### Hero
- Fullscreen (`min-h-screen`)
- Nama besar di tengah
- Title dengan typing animation atau gradient text
- CTA buttons: Primary (solid blue), Secondary (outline)
- Background: subtle grid pattern atau gradient

### About
- Layout: foto kiri, teks kanan (desktop) / stacked (mobile)
- Foto:圆形, border accent
- Bio: 2-3 paragraf singkat
- Download CV button

### Skills
- Grid: 2 kolom (desktop) / 1 kolom (mobile)
- Per kategori: Frontend, Backend, Networking, Tools
- Tiap skill: ikon + nama, badge style

### Projects
- Grid: 2-3 kolom card (desktop) / 1 kolom (mobile)
- Card: image thumbnail, title, description, tech stack tags, link buttons
- Hover: subtle scale + shadow

### Experience
- Timeline vertikal dengan dot
- Kiri: tahun / tanggal
- Kanan: title, institusi, deskripsi
- Alternating (kiri/kanan) di desktop

### Contact
- Form: input field minimalis (name, email, message)
- Submit button: primary blue
- Social links (LinkedIn, GitHub, Email) dengan ikon
- Background: subtle berbeda dari section lain

## 6. Animations (Framer Motion)
| Element | Animation | Trigger |
|---|---|---|
| Hero text | Fade in + slide up | On load |
| Section title | Fade in + slide up | Scroll masuk viewport |
| Cards | Stagger fade in | Scroll masuk viewport |
| Timeline | Slide in from left/right | Scroll masuk viewport |
| Navbar | Background blur | On scroll |
| Theme toggle | Rotate icon | On click |

## 7. Responsive Breakpoints
| Breakpoint | Width | Notes |
|---|---|---|
| Mobile | < 640px | Single column, stacked |
| Tablet | 640px - 1024px | 2 column grids |
| Desktop | > 1024px | Full layout, 3 column grids |

## 8. SEO
- Setiap page: unique title & meta description
- Open Graph tags untuk social sharing
- Semantic HTML (header, main, section, article, footer)
- Alt text di semua gambar
- Sitemap.xml (Next.js built-in)
