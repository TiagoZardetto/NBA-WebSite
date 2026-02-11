# NBA Landing Page - Technical Documentation

> **Version:** 1.0
> **Last Updated:** February 10, 2026
> **Author:** Development Team

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Project Structure](#3-project-structure)
4. [Architecture](#4-architecture)
5. [Component Reference](#5-component-reference)
6. [Design System](#6-design-system)
7. [External APIs](#7-external-apis)
8. [State Management](#8-state-management)
9. [Performance Optimizations](#9-performance-optimizations)
10. [Build & Development](#10-build--development)
11. [Deployment](#11-deployment)
12. [Git History & Versioning](#12-git-history--versioning)

---

## 1. Project Overview

A modern, fully responsive single-page application (SPA) that serves as a showcase for the NBA universe — featuring player profiles, team directories, historical milestones, and league statistics. Built with a component-based architecture using React 19 and styled with Tailwind CSS 4, all bundled through Vite 6.

**Primary Language:** Portuguese (pt-BR)

---

## 2. Tech Stack

### Core

| Technology | Version | Purpose |
|---|---|---|
| React | 19.0.0 | UI component library |
| React DOM | 19.0.0 | DOM rendering |
| React Router | 7.3.0 | Client-side routing |
| Vite | 6.2.2 | Build tool & dev server |

### Styling

| Technology | Version | Purpose |
|---|---|---|
| Tailwind CSS | 4.0.14 | Utility-first CSS framework |
| @tailwindcss/vite | 4.0.14 | Vite integration for Tailwind |
| Google Fonts | - | Custom typefaces (Bebas Neue, DM Sans, Playfair Display, Anton, Russo One, Orbitron) |

### Code Quality

| Technology | Version | Purpose |
|---|---|---|
| ESLint | 9.22.0 | JavaScript linting |
| Prettier | 3.5.3 | Code formatting |
| eslint-plugin-react | 7.37.4 | React-specific lint rules |
| eslint-plugin-react-hooks | 5.2.0 | Hooks rules enforcement |
| prettier-plugin-tailwindcss | 0.6.11 | Tailwind class sorting |

### Dev Dependencies

| Technology | Version | Purpose |
|---|---|---|
| @vitejs/plugin-react | 4.3.4 | React support for Vite (Babel-based) |
| @types/react | 19.0.10 | TypeScript definitions for IDE support |
| @types/react-dom | 19.0.4 | TypeScript definitions for IDE support |
| globals | 16.0.0 | Global variable definitions for ESLint |

---

## 3. Project Structure

```
NBA-landingpage/
├── public/                          # Static assets (served as-is)
│   └── images/                      # Player photos and logos
│       ├── lebron-3.jpg
│       ├── curry-teste1.jpg
│       ├── doncic-teste.webp
│       ├── durant-teste1.jpg
│       └── nba-6.svg
│
├── src/                             # Application source code
│   ├── assets/                      # React-managed assets (SVGs)
│   │   └── react.svg
│   │
│   ├── components/
│   │   └── ui/                      # Presentational UI components
│   │       ├── button.jsx           # Reusable button (3 variants)
│   │       ├── cards.jsx            # Player carousel card
│   │       ├── explore-section.jsx  # Explore section with info cards
│   │       ├── footer.jsx           # Site footer
│   │       ├── hero.jsx             # Hero banner section
│   │       ├── information-card.jsx # Reusable info card
│   │       ├── league-section.jsx   # Teams & conferences display
│   │       ├── modal.jsx            # Player detail modal overlay
│   │       ├── navbar.jsx           # Navigation bar
│   │       ├── stats-ticker.jsx     # Scrolling stats ticker
│   │       └── timeline.jsx         # Historical timeline
│   │
│   ├── layouts/
│   │   └── index-layout.jsx         # Root layout with <Outlet />
│   │
│   ├── pages/
│   │   └── index/
│   │       └── page.jsx             # Main page (players data + carousel logic)
│   │
│   ├── App.jsx                      # Router configuration
│   ├── index.css                    # Global styles, animations, Tailwind directives
│   └── main.jsx                     # React DOM entry point
│
├── dist/                            # Production build output
│   ├── assets/
│   │   ├── index-C5UHHMoq.css      # Bundled CSS (~41KB)
│   │   └── index-OcGs_kD3.js       # Bundled JS (~249KB)
│   ├── images/                      # Copied static images
│   └── index.html                   # Production HTML
│
├── index.html                       # Dev HTML entry point
├── package.json                     # Dependencies & scripts
├── vite.config.js                   # Vite configuration
├── eslint.config.js                 # ESLint flat config
├── prettier.config.js               # Prettier configuration
└── .gitignore                       # Git exclusions
```

---

## 4. Architecture

### Component Tree

```
<BrowserRouter>
  └── <App />
      └── <Routes>
          └── <Route element={<IndexLayout />}>        ← Layout wrapper
              └── <Route index element={<IndexPage />}> ← Main page
                  ├── <Navbar />                        ← Fixed navigation
                  ├── <Hero />                          ← Full-screen hero
                  ├── <StatsTicker />                   ← Scrolling ticker
                  ├── <PlayersSection />                ← Carousel + cards
                  │   ├── <CarouselCard /> × N          ← Individual player card
                  │   └── <Modal />                     ← Player detail overlay
                  ├── <ExploreSection />                ← Info cards grid
                  │   └── <Information /> × 4           ← Individual info card
                  ├── <Timeline />                      ← Historical milestones
                  │   └── <TimelineItem /> × 10         ← Individual event
                  ├── <LeagueSection />                 ← Teams directory
                  └── <Footer />                        ← Site footer
```

### Data Flow Pattern

```
IndexPage (data source: static arrays)
    │
    ├──→ PlayersSection (receives players array)
    │       │
    │       ├──→ CarouselCard (receives player object + onClick callback)
    │       │       └── onClick → setSelected(player)
    │       │
    │       └──→ Modal (receives selected player + onClose callback)
    │               └── onClose → setSelected(null)
    │
    ├──→ Timeline (self-contained data)
    │
    └──→ LeagueSection (self-contained data, fetches logos from CDN)
```

### Routing Configuration

```jsx
// App.jsx
<BrowserRouter>
  <Routes>
    <Route element={<IndexLayout />}>
      <Route index element={<IndexPage />} />
    </Route>
  </Routes>
</BrowserRouter>
```

The routing is set up with React Router v7 using a layout pattern (`IndexLayout` wraps all child routes via `<Outlet />`). Currently single-page, but the structure supports future route expansion without refactoring.

---

## 5. Component Reference

### Navbar (`components/ui/navbar.jsx`)

**Behavior:**
- Fixed positioning (`fixed top-0 z-50`)
- Background transitions from transparent → `nba-navy/95` with backdrop blur on scroll (threshold: 50px)
- Smooth scroll to sections via `scrollIntoView({ behavior: 'smooth' })`
- Mobile hamburger menu with slide-in animation

**Key State:**
- `isOpen` (boolean) — mobile menu toggle
- `scrolled` (boolean) — triggers background change

**Event Listeners:**
- `window.scroll` — attached in `useEffect`, updates `scrolled` state

---

### Hero (`components/ui/hero.jsx`)

**Behavior:**
- Full viewport height (`min-h-screen`)
- Animated blob elements in the background (CSS animated)
- Staggered text entrance animations using CSS `animation-delay`
- Responsive headline with fluid typography: `clamp(4rem, 12vw, 11rem)`
- Stats counter row: 78 seasons / 30 franchises / infinite legends

**Sections:**
- Background blobs (decorative, `animate-pulse`)
- Main headline with SVG underline stroke animation
- CTA buttons (primary + secondary variants)
- Stats row with dividers
- Scroll indicator with bounce animation

---

### StatsTicker (`components/ui/stats-ticker.jsx`)

**Behavior:**
- Infinite horizontal scroll using CSS `@keyframes ticker`
- Content duplicated 2x to create seamless loop
- Gradient fade on left/right edges via `mask-image`
- 8 NBA facts displayed

**Animation:**
```css
@keyframes ticker {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

---

### Cards / CarouselCard (`components/ui/cards.jsx`)

**Behavior:**
- Displayed inside an infinite carousel container
- Array is duplicated (`[...players, ...players]`) to create seamless loop
- CSS animation `ticker` scrolls the container horizontally
- Animation pauses on:
  - Mouse hover over carousel area
  - Modal open state

**Props:**
```jsx
{
  name: string,        // Player name
  subtitle: string,    // Nickname/title
  image: string,       // Image URL
  number: string,      // Jersey number
  accent: string,      // Tailwind color class for accent line
  onClick: function    // Callback to open modal
}
```

**Hover Effects:**
- Scale up to 1.04
- Player name, subtitle, and accent line slide in
- "VER PERFIL" prompt appears
- Background gradient intensifies

---

### Modal (`components/ui/modal.jsx`)

**Behavior:**
- Full-screen overlay with backdrop blur (`backdrop-blur-sm`)
- Two-column layout: image (left) + content (right)
- Prevents body scroll when open (`overflow: hidden`)
- Close on X button click

**Props:**
```jsx
{
  player: {
    name: string,
    subtitle: string,
    image: string,
    number: string,
    bio: string,
    stats: [{ label: string, value: string }]
  },
  onClose: function
}
```

**Layout:**
```
┌──────────────────────────────────┐
│ [Gold gradient accent bar]        │
├────────────────┬─────────────────┤
│                │  Close [X]       │
│  Player        │  #{number}       │
│  Image         │  Player Name     │
│  (gradient     │  Subtitle        │
│   overlay)     │  Bio text...     │
│                │                  │
│                │  ┌──┐ ┌──┐ ┌──┐ │
│                │  │S1│ │S2│ │S3│ │ ← Stats grid
│                │  └──┘ └──┘ └──┘ │
└────────────────┴─────────────────┘
```

---

### ExploreSection (`components/ui/explore-section.jsx`)

**Behavior:**
- 4 information cards in a responsive grid
- Staggered entrance animation using Intersection Observer
- Each card receives emoji, title, and description

---

### InformationCard (`components/ui/information-card.jsx`)

**Props:**
```jsx
{
  emoji: string,       // Display emoji
  title: string,       // Card heading
  description: string  // Card body text
}
```

**Hover Effects:**
- Border transitions to gold
- Bottom accent line appears
- Text color shifts

---

### Timeline (`components/ui/timeline.jsx`)

**Behavior:**
- Vertical timeline with 10 historical milestones (1946-2024)
- Alternating left/right positioning based on index (even/odd)
- Center line with year indicator dots
- Scroll-triggered animations via Intersection Observer

**Data Structure:**
```jsx
{
  year: string,         // "1946"
  title: string,        // "O Começo de Tudo"
  description: string,  // Detailed text
  side: "left" | "right"
}
```

---

### LeagueSection (`components/ui/league-section.jsx`)

**Behavior:**
- Displays NBA teams organized by conference (East / West)
- Fetches team logos from NBA CDN: `https://cdn.nba.com/logos/nba/{teamId}/global/L/logo.svg`
- Fun facts row with 4 statistics
- Geometric background patterns (diagonal lines, grid)

**Data:** Static arrays of team objects with `name`, `city`, and `id` (NBA API team IDs)

---

### Footer (`components/ui/footer.jsx`)

**Layout:** 4-column grid (Brand | Explore | Categories | Connect) with copyright bar at bottom.

---

### Button (`components/ui/button.jsx`)

**Variants:**
| Variant | Background | Text | Border |
|---|---|---|---|
| `primary` | nba-gold | nba-dark | none |
| `secondary` | transparent | nba-white | nba-silver |
| `ghost` | transparent | nba-gold | none |

**Props:**
```jsx
{
  children: ReactNode,
  variant: "primary" | "secondary" | "ghost",
  className: string,    // Additional Tailwind classes
  ...rest              // Spread to <button>
}
```

---

## 6. Design System

### Color Palette

```css
--color-nba-navy:   #0c1a3a    /* Primary background (dark blue) */
--color-nba-deep:   #06101f    /* Deepest background */
--color-nba-blue:   #1d428a    /* Accent blue */
--color-nba-red:    #c8102e    /* NBA red */
--color-nba-gold:   #fdb927    /* Primary accent (gold) */
--color-nba-cream:  #f0e6d3    /* Cream accent */
--color-nba-silver: #8a8d8f    /* Gray/silver */
--color-nba-white:  #f5f5f5    /* Off-white text */
--color-nba-dark:   #0a0a0a    /* Near-black */
```

### Typography

| Font | Weight | Usage |
|---|---|---|
| Bebas Neue | 400 | Primary headlines, large display text |
| DM Sans | 400, 500, 700 | Body text, UI elements, descriptions |
| Playfair Display | 400, 700 | Serif accents, elegant display |
| Anton | 400 | Heavy impact headings |
| Russo One | 400 | Bold accent text |
| Orbitron | 400-900 | Futuristic/tech accent text |

### Custom Animations

| Animation | Duration | Usage |
|---|---|---|
| `fade-up` | 0.8s ease-out | Section entrance (translate Y + opacity) |
| `fade-in` | 0.6s ease-out | Generic fade entrance |
| `slide-left` | 0.8s ease-out | Slide from right to position |
| `slide-right` | 0.8s ease-out | Slide from left to position |
| `glow-pulse` | 2s ease-in-out infinite | Gold box-shadow pulsing |
| `ticker` | 30s linear infinite | Horizontal infinite scroll |
| `float` | 3s ease-in-out infinite | Gentle vertical floating |
| `scale-in` | 0.5s ease-out | Scale from 0.8 + opacity |
| `bounce-subtle` | 2s ease-in-out infinite | Gentle bounce effect |

### Utility Classes

```css
.text-outline {
  -webkit-text-stroke: 2px var(--color-nba-gold);
  color: transparent;
}

.grain-overlay {
  /* SVG-based noise texture overlay */
  background-image: url("data:image/svg+xml,...");
  opacity: 0.03;
}

.diagonal-lines {
  /* Repeating diagonal stripe pattern */
  background: repeating-linear-gradient(
    45deg, transparent, transparent 10px,
    rgba(253,185,39,0.03) 10px, rgba(253,185,39,0.03) 11px
  );
}
```

---

## 7. External APIs

### NBA Player Headshots

```
GET https://cdn.nba.com/headshots/nba/latest/1040x760/{playerId}.png
```

| Player | Player ID |
|---|---|
| Giannis Antetokounmpo | 203507 |
| Nikola Jokic | 203999 |
| Shai Gilgeous-Alexander | 1628983 |
| Jayson Tatum | 1628369 |
| Anthony Edwards | 1630162 |
| Ja Morant | 1629630 |
| Victor Wembanyama | 1641705 |
| Devin Booker | 1626164 |

**Note:** Some players (LeBron, Curry, Doncic, Durant) use local images from `/public/images/` instead for artistic reasons (full-body or action shots).

### NBA Team Logos

```
GET https://cdn.nba.com/logos/nba/{teamId}/global/L/logo.svg
```

Used in `LeagueSection` for all 30 NBA teams. Team IDs follow the NBA's official identification system (e.g., `1610612738` = Boston Celtics).

---

## 8. State Management

The application uses **local component state** exclusively via React hooks. No external state management library is used.

### State by Component

| Component | State Variable | Type | Purpose |
|---|---|---|---|
| Navbar | `isOpen` | boolean | Mobile menu toggle |
| Navbar | `scrolled` | boolean | Background transition trigger |
| IndexPage | `selected` | object/null | Currently selected player for modal |
| IndexPage | `isPaused` | boolean | Carousel pause state |

### Side Effects (useEffect)

| Component | Effect | Dependency |
|---|---|---|
| Navbar | Scroll listener for background | `[]` (mount only) |
| Hero | Intersection Observer for animations | `[]` |
| ExploreSection | Intersection Observer for staggered reveal | `[]` |
| Timeline | Intersection Observer for scroll reveal | `[]` |
| PlayersSection | Body overflow toggle when modal open | `[selected]` |

### Refs (useRef)

Used in Hero, ExploreSection, and Timeline for targeting DOM elements with Intersection Observer callbacks.

---

## 9. Performance Optimizations

| Optimization | Implementation | Impact |
|---|---|---|
| **Lazy loading** | `loading="lazy"` on carousel images | Reduces initial page load |
| **CSS animations** | All animations use `transform`/`opacity` | GPU-accelerated, no layout thrash |
| **Intersection Observer** | Scroll animations only trigger when visible | Avoids constant scroll event processing |
| **Tailwind CSS purging** | Vite plugin strips unused classes | Minimal CSS output (~41KB) |
| **Vite code splitting** | Tree-shaking and minification | Single JS bundle ~249KB |
| **CDN images** | Player headshots from NBA CDN | Leverages NBA's global CDN caching |
| **Duplicated array for carousel** | `[...players, ...players]` vs infinite JS loop | Pure CSS animation, zero JS overhead |

### Bundle Analysis

```
dist/
├── index.html          ~1KB
├── assets/
│   ├── index.css       ~41KB   (Tailwind + custom styles)
│   └── index.js        ~249KB  (React + all components)
└── images/             ~2MB    (local player photos)

Total JS + CSS: ~290KB (before gzip)
```

---

## 10. Build & Development

### Prerequisites

- Node.js >= 18.x
- npm >= 9.x

### Setup

```bash
git clone https://github.com/<user>/NBA-landingpage.git
cd NBA-landingpage
npm install
```

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server with HMR (default: `http://localhost:5173`) |
| `npm run build` | Production build → `dist/` folder |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint across all source files |

### Configuration Files

| File | Purpose |
|---|---|
| `vite.config.js` | Vite build config (React plugin, Tailwind plugin) |
| `eslint.config.js` | ESLint flat config (React rules, Prettier integration) |
| `prettier.config.js` | Prettier settings (Tailwind class sorting) |
| `.gitignore` | Excludes node_modules, dist, env files, IDE settings |

---

## 11. Deployment

### Current Status

No CI/CD pipeline is configured. The project builds to a static `dist/` folder ready for any static hosting provider.

### Recommended Deployment Options

**Option A: Vercel (Recommended)**
```bash
npm i -g vercel
vercel
# Zero config needed — auto-detects Vite
```

**Option B: Netlify**
```bash
# Build command: npm run build
# Publish directory: dist
```

**Option C: GitHub Pages**
```js
// vite.config.js — add base path
export default defineConfig({
  base: '/NBA-landingpage/',
  // ...
})
```

### Environment Variables

None required. The application uses no server-side APIs or secret keys. All external API calls are to public NBA CDN endpoints.

---

## 12. Git History & Versioning

### Commit Convention

The project follows **Conventional Commits**:
- `feat:` — New features
- `refactor:` — Code restructuring
- `style:` — Visual/CSS changes
- `chore:` — Tooling and config

### Key Milestones

| Commit | Description |
|---|---|
| Initial | React + Vite + Tailwind boilerplate |
| Early | Added ESLint, Prettier, React Router setup |
| `0fbdda7` | Established NBA color palette, typography, and animation system |
| `52531b8` | Button component with variant system |
| `f57bc20` | Player cards with hover effects |
| `5146b5e` | Information cards with props-driven design |
| `3e120fa` | Modal with animations and stats display |
| `4a5da91` | Full page restructure — modular component architecture |
| `130ce02` | CSS custom properties for color system |
| `1f14cac` | NBA team logos integration (CDN) |
| **`6cc396c`** | **Infinite carousel refactor** (latest major feature) |

### Branch Strategy

- `main` — Production-ready code
- Feature development done directly on `main` (single developer workflow)

---

*End of Technical Documentation*
