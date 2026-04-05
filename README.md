# Aakash Shah — Portfolio

A modern, animated developer portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Live Preview

[https://aakashshah.dpdns.org](https://aakashshah.dpdns.org/)

## Features

- Smooth scroll-based animations and parallax effects
- Custom animated cursor with hover interactions
- Responsive design — mobile to desktop
- Animated counters, staggered reveals, and timeline components
- Tech stack showcase with categorized skill badges
- Project cards with screenshots, GitHub links, and live demo links
- Experience timeline with tech tags
- Education & certifications section
- Scrolling marquee ticker between sections
- Contact section with email, phone, and social links

## Tech Stack

| Category   | Technologies                              |
| ---------- | ----------------------------------------- |
| Framework  | Next.js 14, React 18                      |
| Language   | TypeScript                                |
| Styling    | Tailwind CSS                              |
| Animations | Framer Motion                             |
| Icons      | Lucide React                              |
| Fonts      | Bebas Neue, DM Mono (Google Fonts)        |
| Deployment | Vercel (recommended)                      |

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/AakashShah07/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Home page composing all sections
│   └── globals.css         # Global styles & custom cursor
├── components/
│   ├── AnimatedCursor.tsx   # Custom cursor with trailing ring
│   ├── Marquee.tsx          # Scrolling tech ticker
│   ├── NavDots.tsx          # Side navigation dots
│   └── sections/
│       ├── Hero.tsx         # Landing section with name animation
│       ├── About.tsx        # Bio, stats, and info pills
│       ├── TechStack.tsx    # Categorized skills grid
│       ├── Services.tsx     # What I do — service cards
│       ├── Projects.tsx     # Project showcase with images
│       ├── Testimonials.tsx # Experience timeline
│       ├── Education.tsx    # Education & certifications
│       └── Contact.tsx      # Contact info & social links
├── lib/
│   └── data.ts             # All portfolio content & data
└── public/
    └── project_images/     # Project screenshots
```

## Sections

1. **Hero** — Animated name reveal, greeting, CTA buttons, social links
2. **About** — Bio, location/role badges, animated stat counters
3. **Tech Stack** — 6 categorized skill groups with color-coded badges
4. **Services** — 4 service cards (Web Dev, API & Backend, Cloud, Database)
5. **Projects** — 3 featured projects with screenshots and links
6. **Experience** — Timeline with 4 internship roles and tech tags
7. **Education** — Degree cards and certification badges
8. **Contact** — Email, phone, location cards, and social icons

## Customization

All content is centralized in `lib/data.ts`. Update the exported objects to personalize:

- `personalInfo` — name, bio, email, social links
- `techStack` — skill categories and items
- `services` — service cards
- `projects` — project details, images, and links
- `experiences` — work history with tech tags
- `education` — degrees and grades
- `certifications` — credential cards

## Contact

- **Email:** aakashshah0707@gmail.com
- **LinkedIn:** [aakash-shah-822070224](https://www.linkedin.com/in/aakash-shah-822070224/)
- **GitHub:** [AakashShah07](https://github.com/AakashShah07)

---

Built with Next.js & Framer Motion
