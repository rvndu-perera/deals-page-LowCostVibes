# Low Cost Vibes — Mysterious Vibes in Transylvania

A modern, responsive, high-converting travel deal landing page built for **Low Cost Vibes**. The application showcases an all-inclusive travel experience to Bucharest and Transylvania, featuring day-by-day itineraries, luxury hotel previews, bespoke excursions, transparent payment schedules, interactive FAQs, and customer feedback.

---

## 🔗 Project Links

| Resource                   | Link                                                                                                |
| :------------------------- | :-------------------------------------------------------------------------------------------------- |
| 🌐 **Live Demo (Netlify)** | `low-cost-vibe-deals-page.netlify.app`                                                              |
| 🎨 **Figma Design File**   | `https://www.figma.com/design/JTobpWrsmTmZgzSSbVQL8r/rvndu-design?node-id=0-1&t=qDs6dRBZpy9UbAqY-1` |
| 💻 **Source Repository**   | `https://github.com/rvndu-perera/deals-page-LowCostVibes.git`                                       |

---

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Typography:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
- **Iconography:** [Google Material Symbols Rounded](https://fonts.google.com/icons)
- **HTML Sanitization:** [sanitize-html](https://www.npmjs.com/package/sanitize-html)
- **Architecture:** Headless JSON Data Layer (`deal-page-data.json`)

---

## ✨ Features & Section Highlights

1. **Header & Navigation (`Navbar.tsx`):**
   - Brand logo and main navigation links with dropdown indicators.
   - Mobile-first responsive hamburger menu with drawer navigation.
   - Quick "Contact" and "Get started" action buttons with Google Material Symbols.

2. **Hero Section (`Hero.tsx`):**
   - Immersive hero gallery with gradient overlay.
   - Dynamic deal badges (`3 Nights in Bucharest - Super Deal`).
   - Inclusions bar featuring dedicated Google icons for flights, 4-star accommodation, and complimentary tours.
   - Desktop and mobile floating price pill with discount calculations and instant booking CTA.

3. **Sticky Section Navigation (`SectionNav.tsx`):**
   - Full-width distributed tabs with smooth active highlighting and hover feedback.
   - Real-time scroll-spy that highlights the active section in view.
   - Constrained strictly to the left content column with synchronized sticky positioning.

4. **Sticky Deal Sidebar (`DealSidebar.tsx`):**
   - Sticky promotional deal banner matching the exact top position of the section navbar.
   - Contact our agents cards:
     - **E-Mail:** `@` icon (`alternate_email`)
     - **Enquiry:** High-priority exclamation badge (`error`)
     - **Call:** Direct telephone dialer (`phone_in_talk`)

5. **Overview & Highlights (`Overview.tsx`, `Highlights.tsx`):**
   - 2×2 visual grid with frosted pill badges.
   - 3-card highlights layout showcasing city tours, legendary castle visits, and ski slope experiences.

6. **Interactive Itinerary (`Itinerary.tsx`):**
   - Day-by-day horizontal snap slider with navigation controls.
   - High-resolution imagery paired with rich destination itineraries.

7. **Hotel Showcase (`Hotel.tsx`):**
   - 4.0 Star rating badge and hotel photo slider with left/right controls.
   - 3×3 room amenities grid with custom icons (_Air Conditioned, Room Services, Housekeeping, Mini Bar, Private Bathrooms, Telephone Connection, Free Wi-Fi, Laundry Services, Safe Guaranteed_).

8. **Destinations & Map View (`Destinations.tsx`):**
   - Card deck highlighting key stops (_Bucharest, Trans Lavinia, Unirii Square_).
   - Embedded regional transit map preview with direct access link to Google Maps.

9. **Activities & Excursions (`Excursions.tsx`):**
   - Tailored excursion options with transparent per-person pricing pills and checkmark indicators.
   - Featured full-height Transylvania promotional banner.

10. **Transparent Payment Schedule (`Payment.tsx`):**
    - Security hero banner with centered accepted payment methods pill (_Visa, Mastercard, Amex, Google Pay, Apple Pay, PayPal_).
    - Structured deposit cards (25% initial deposit, monthly balance, 35% final settlement).
    - Quick payment action button.

11. **FAQs from Guests (`Faqs.tsx`):**
    - Collapsible interactive accordion cards with Google Material Symbol `add`/`remove` indicators.
    - Subtle divider line and muted blue text for expanded responses.

12. **Customer Feedback (`Testimonials.tsx`):**
    - 3-column feedback card grid with real human avatar integration via `i.pravatar.cc`.
    - Harmonized typography aligned with global section standards.

13. **Full-Bleed Enquiry (`Enquiry.tsx`):**
    - High-impact castle background with 24/7 availability callout.
    - Quick enquiry form with name, email, and purpose input fields.

14. **Footer (`Footer.tsx`):**
    - 4-column layout covering office locations, customer care, corporate policies, and licensing.
    - Accepted payments showcase and social media navigation.

---

## 📁 Project Directory Structure

```text
low-cost-vibe/
├── frontend/
│   ├── public/
│   │   ├── icons/            # Brand and social icon assets
│   │   ├── images/           # High-resolution deal and destination photos
│   │   └── light-logo.png    # Primary brand logo
│   ├── src/
│   │   ├── app/
│   │   │   ├── globals.css   # Tailwind v4 theme, font & icon definitions
│   │   │   ├── layout.tsx    # Root layout with Plus Jakarta Sans & Google Icons
│   │   │   └── page.tsx      # Landing page composition & 2-column grid
│   │   ├── components/
│   │   │   ├── layout/       # Navbar, Footer, SectionNav
│   │   │   └── sections/     # Hero, Overview, Highlights, Itinerary, Hotel,
│   │   │                     # Destinations, Excursions, Payment, Faqs,
│   │   │                     # Testimonials, Enquiry, DealSidebar
│   │   ├── data/
│   │   │   └── deal-page-data.json # Headless JSON data source
│   │   ├── lib/              # Formatting, sanitization, and data access helpers
│   │   └── types/            # TypeScript interfaces and data models
│   ├── next.config.ts        # Image domain patterns & Turbopack configurations
│   ├── package.json          # Project scripts and dependencies
│   └── tsconfig.json         # Strict TypeScript configuration
└── README.md                 # Project documentation
```

---

## 🛠️ Getting Started & Local Setup

### Prerequisites

- **Node.js:** `v18.18.0` or higher (Node 20+ recommended)
- **Package Manager:** `npm`, `pnpm`, or `yarn`

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/low-cost-vibe.git
cd low-cost-vibe
```

### 2. Navigate to the Frontend Directory

```bash
cd frontend
```

### 3. Install Dependencies

Using `npm`:

```bash
npm install
```

Or using `pnpm`:

```bash
pnpm install
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📜 Available Scripts

Inside the `frontend` directory, you can run:

| Command            | Description                                                  |
| :----------------- | :----------------------------------------------------------- |
| `npm run dev`      | Starts the Next.js development server with Turbopack.        |
| `npm run build`    | Compiles the production build.                               |
| `npm run start`    | Starts the production server after building.                 |
| `npm run lint`     | Runs ESLint to check for code quality and style issues.      |
| `npx tsc --noEmit` | Runs the TypeScript compiler to verify all type definitions. |

---

## ☁️ Deployment Guide

### Deploying to Netlify

1. Link your GitHub repository in the [Netlify Dashboard](https://app.netlify.com/).
2. Set the build configuration:
   - **Base directory:** `frontend`
   - **Build command:** `npm run build`
   - **Publish directory:** `frontend/.next`
3. Netlify's Next.js Runtime plugin will automatically configure the serverless functions and asset caching.
4. Once deployed, paste your live domain link into the [Project Links](#-project-links) section of this README.

### Deploying to Vercel

1. Import the project into [Vercel](https://vercel.com/).
2. Select the `frontend` directory as the root folder.
3. Vercel automatically detects Next.js settings. Click **Deploy**.

---

## 🎨 Design System & Guidelines

- **Typography:** Plus Jakarta Sans is applied globally across all headings, labels, and paragraphs.
- **Color Palette:**
  - Primary Brand Navy: `#16385c` / `#173f68`
  - Accent / Warnings: `#920404` (Enquiry Crimson), `#22c55e` (Verification Green), `#f59e0b` (Amber Star Rating)
  - Backgrounds: `#efefef` (Page canvas), `#ffffff` (Cards), `#f8fafc` (Amenity tiles)
- **Icon System:** Google Material Symbols Rounded (`.material-symbols-rounded`) loaded via Google Fonts CDN.
- **Zero Borders Rule:** Structural definition is achieved through rounded corners (`rounded-2xl`, `rounded-3xl`) and subtle drop shadows (`shadow-xs`), avoiding harsh borders.

---

## 📄 License

This project is proprietary and built for **Low Cost Vibes**. All rights reserved.
