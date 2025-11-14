
📦 Motion — Framer Motion Next.js Demo

Motion is a modern, animated Next.js demo project that showcases smooth, component-driven animations using Framer Motion. It combines the App Router, React components (TSX/JSX mix), and Tailwind/PostCSS for styling to deliver a responsive, production-ready UI scaffold.

---

🚀 Core Technologies

- **Next.js (App Router):** Full-stack React framework (v15.x used in this repo)
- **React 19:** Interactive, component-driven UI
- **TypeScript / JavaScript:** Mix of `*.tsx` and `*.jsx` components
- **Tailwind CSS + PostCSS:** Utility-first styling
- **Framer Motion:** Motion library for animations and micro-interactions
- **ESLint:** Linting and code quality checks

---

✨ Project Features

- **Animated Hero & Sections:** Hero, HowItWorks, KeyFeatures and other sections powered by Framer Motion
- **Component-Based Layout:** Reusable components in `components/` such as `Navbar`, `Footer`, `HeroSection`, `KeyFeatures`, `PricingPlans`, and `Testimonials`
- **Responsive Design:** Global styles in `app/globals.css` and Tailwind for mobile-first responsiveness
- **App Router (Next.js):** Pages implemented with the Next.js App Router pattern under `app/`
- **Mix of TSX/JSX:** Gradual adoption of TypeScript — `Navbar.tsx` alongside `*.jsx` components

---

⚡ Getting Started

Prerequisites:

- Node.js 18 or higher
- npm (bundled with Node) or yarn

Clone the repository:

```bash
git clone https://github.com/MohammedIhsaan28/Motion.git
cd Motion
```

Install dependencies:

```bash
npm install
# or
# yarn
```

Available scripts (from `package.json`):

- **dev:** `npm run dev` — Starts Next.js dev server (uses Turbopack)
- **build:** `npm run build` — Builds the production app
- **start:** `npm run start` — Starts the production server after build
- **lint:** `npm run lint` — Runs ESLint checks

Run the development server:

```powershell
npm run dev
```

Open the app in your browser:

http://localhost:3000

Notes on environment variables:

- This repository does not require any special environment variables to run the basic demo.
- If you integrate third-party services (auth, analytics, payments), add `.env.local` with the required keys.

---

**Project Structure (high-level)**

- `app/` — App Router pages and global styles (`globals.css`) and assets
- `components/` — Reusable UI components and sections
- `public/` — Static assets
- `package.json` — Scripts and core dependency versions
- `postcss.config.mjs`, `tailwind.config.*` — Tailwind/PostCSS configuration

---

🙏 Acknowledgments

- Next.js — https://nextjs.org
- React — https://react.dev
- Framer Motion — https://www.framer.com/motion/
- Tailwind CSS — https://tailwindcss.com

---

