# junaid-dastgir-portfolio

Personal portfolio website for **Junaid Dastgir** — Mechanical Engineer specializing in CAD/CAM design, FEA/CFD simulation, robotics, and sustainable engineering systems.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- Fully responsive, dark mode, zero external dependencies

## Local Setup

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
junaid-dastgir-portfolio/
├── app/
│   ├── globals.css       # Global styles, animations, utility classes
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Main page (assembles all sections)
├── components/
│   ├── Navbar.tsx        # Sticky nav with smooth scroll + mobile menu
│   ├── Hero.tsx          # Animated canvas hero with stats + CTAs
│   ├── About.tsx         # Bio, education timeline, languages
│   ├── Projects.tsx      # Featured projects + additional work grid
│   ├── Experience.tsx    # Tabbed work experience panel
│   ├── Skills.tsx        # Animated skill bars + certifications
│   ├── Contact.tsx       # Contact links + call to action
│   └── Footer.tsx        # Minimal footer
├── public/               # Static assets
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
└── tsconfig.json
```

## Sections

| # | Section    | Description |
|---|------------|-------------|
| 1 | **Hero**   | Tagline, animated particle canvas, key stats, CTAs |
| 2 | **About**  | Bio, education timeline (Polimi, LUT, NUST), languages |
| 3 | **Projects** | 3 featured cards (bearing research, ORC system, 3D-printed filter) + 4 additional |
| 4 | **Experience** | Tabbed panel: Al Ameen Trading, IEMA Consultants, Karachi Shipyard |
| 5 | **Skills** | Animated bars across 4 categories + 6 certifications |
| 6 | **Contact** | Email, LinkedIn, Upwork links + open-to-work CTA |

## Design

- **Aesthetic:** Dark blueprint / engineering precision
- **Palette:** Navy `#0a0f1e`, Steel Blue `#3b82f6`, Amber `#f59e0b`
- **Typography:** Inter (body) + JetBrains Mono (code/labels)
- **Animations:** Scroll-reveal, animated skill bars, canvas particle network, hover lift effects
