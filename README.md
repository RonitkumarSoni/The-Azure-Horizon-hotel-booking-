# The Azure Horizon

A polished portfolio and agency website built with **Next.js**, **TypeScript**, **Tailwind CSS**, and a modern UI component system.

## Overview

This project is a responsive, content-driven website with animated sections, client-side navigation, and reusable UI components. It is designed for showcasing services, products, portfolio items, and contact details in a professional format.

## Key Features

- Next.js 15 application with server-side rendering and optimized static assets
- TypeScript for strong typing and safer development
- Tailwind CSS for utility-first styling
- Radix UI component primitives for accessible UI patterns
- Framer Motion and GSAP animations
- Modular, reusable sections and page layouts
- Dynamic routes for portfolio and product pages

## Project Structure

```
.
├── public/
│   ├── images/
│   └── videos/
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── portfolio/
│   │   │   └── [slug]/
│   │   ├── products/
│   │   │   └── [brand]/
│   │   ├── services/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   ├── motion/
│   │   ├── sections/
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   ├── portfolio/
│   │   │   ├── products/
│   │   │   └── services/
│   │   └── ui/
│   ├── hooks/
│   └── lib/
│       └── data/
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Getting Started

### Requirements

- Node.js 20.x or later
- npm 10.x or later

### Install Dependencies

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Open the app at `http://localhost:3000`.

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

### Lint the Project

```bash
npm run lint
```

## Useful Files

- `src/app/layout.tsx` — application shell and page structure
- `src/components/layout/Navigation.tsx` — main navigation component
- `src/components/sections/PortfolioStrip.tsx` — portfolio section
- `src/components/ui` — reusable UI primitives and design system components
- `src/lib/data` — static content for brands, projects, services, and team

## Deployment

This app is compatible with Vercel, Netlify, or any platform that supports Next.js deployments.

## Author

**Riya Soni**

Built and maintained by Riya Soni with a professional design system and polished content layout.
