# Alger Makiputin — Personal Portfolio

This is my personal portfolio, I'm Software Engineering Team Lead and Full Stack Developer with 8+ years of experience across retail, e-commerce, and banking.

**Live site:** [algermakiputin.com](https://algermakiputin.com)

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **UI Library:** Material UI v7
- **Styling:** Plain CSS + MUI `sx` props, CSS custom properties
- **Forms:** Formspree + Google reCAPTCHA v3
- **Analytics:** Google Analytics (GA4)

## Features

- Dark / light mode toggle
- Responsive across mobile, tablet, and desktop
- Reveal animations on scroll
- Sections: Hero, Projects, Skills, Industries, Process, Reviews, Blog, Contact
- Schema.org structured data (`Person`) for SEO
- Open Graph and Twitter card metadata

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                |
| --------------- | -------------------------- |
| `npm run dev`   | Start development server   |
| `npm run build` | Build for production       |
| `npm start`     | Serve the production build |

## Project Structure

```
src/
├── app/          # Next.js App Router (routes, layout, metadata)
├── views/        # Page-level view components
│   └── home/     # Homepage sections (hero, projects, services, …)
├── components/   # Shared UI components
├── context/      # Theme context (dark/light)
├── hooks/        # Custom hooks
└── theme/        # MUI dark and light theme definitions
```
