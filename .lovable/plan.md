# Skritch™ Launch Landing Page — Build Plan

## Goal
Ship a single premium, responsive landing page at `/` that positions Skritch™ as a serious consumer robotics + pet comfort product. Apple-style restraint, warm pet-care emotion, no novelty/cartoon energy.

## Design system (src/styles.css)
Replace default tokens with a calm, premium palette in oklch:
- `--background`: soft white
- `--surface-warm`: warm off-white / beige
- `--surface-metal`: light silver-gray
- `--foreground`: near-black graphite
- `--muted-foreground`: warm gray
- `--primary`: subtle muted blue accent (CTA)
- `--primary-foreground`: white
- `--border`: silver-gray
- `--ring`: muted blue
- Gradients: `--gradient-hero-glow` (radial soft blue/white), `--gradient-warm` (off-white → beige)
- Shadows: `--shadow-soft`, `--shadow-card`, `--shadow-float`
- Radius: bumped to 1rem base for soft rounded cards

Typography: Inter via Google Fonts (system-font stack fallback). Tight tracking on display sizes, generous line-height on body. Large hero type (clamp 3rem → 5.5rem).

Animations: fade-in-up, scale-in, soft-float for hero cards. IntersectionObserver-based reveal hook (`useReveal`) for scroll-triggered fades.

## Route structure
Single-page landing with smooth-scroll anchors (this is the explicit single-page launch case — header links and CTAs scroll within the page). All in `src/routes/index.tsx` composed of section components.

```
src/routes/index.tsx                      → assembles sections, sets head() SEO
src/components/skritch/Header.tsx         → sticky translucent nav
src/components/skritch/Hero.tsx
src/components/skritch/Problem.tsx
src/components/skritch/HowItWorks.tsx
src/components/skritch/Features.tsx
src/components/skritch/Community.tsx
src/components/skritch/Roadmap.tsx
src/components/skritch/Partners.tsx
src/components/skritch/Signup.tsx
src/components/skritch/Footer.tsx
src/components/skritch/Reveal.tsx         → wrapper for scroll fade-in
src/hooks/use-reveal.ts                   → IntersectionObserver hook
```

## Content per section
Implements verbatim copy from the brief:
1. **Header** — sticky, `backdrop-blur`, translucent white. Logo placeholder (Skritch™ wordmark slot) left; nav links + "Join the Waitlist" primary button right. Mobile: hamburger → sheet.
2. **Hero** — split layout, headline + subhead + 2 CTAs + trust line. Right: hero render placeholder with radial glow + 3 floating chips (Soft robotic hand / Safety pad active / App connected).
3. **Problem** — 3 icon cards, third (Skritch™) elevated with subtle blue ring + lift.
4. **How It Works** — 4 numbered steps, horizontal connector line on desktop, stacked on mobile.
5. **Features** — 8-card grid (4/2/1 cols), line icons from lucide-react, hover lift.
6. **Community Scritches** — split: warm-beige background block, copy + CTA left, shelter dashboard mockup right with trust badges.
7. **Roadmap** — 3 columns (Launch / Premium / Future), thin horizontal timeline desktop, vertical mobile, with 4 product render thumbnails (launch / wall-mounted / bed / mobile).
8. **Partners** — 5-card credible grid + "Start a Conversation" CTA.
9. **Signup** — 3 form cards with all specified fields, rounded inputs, primary button each. Static (no backend), but structured for later wiring (named inputs, semantic `<form>`).
10. **Footer** — minimal, soft-gray, brand + tagline + links + disclaimer.

## Images (generated via imagegen, saved to src/assets/)
All `fast` model unless noted; warm bright modern home aesthetic, no cartoon, soft natural light:
1. `hero-skritch-home.jpg` — premium product render with calm dog (standard quality, hero)
2. `robotic-hand-closeup.jpg` — soft silicone robotic hand attachment
3. `app-mockup.jpg` — iPhone showing video call + "Start Scritch" button (premium quality for legible UI text)
4. `safety-pad.jpg` — pad close-up with subtle pressure sensor graphic overlay
5. `shelter-scene.jpg` — clean modern kennel with device
6. `roadmap-launch.jpg`, `roadmap-wall.jpg`, `roadmap-bed.jpg`, `roadmap-mobile.jpg` — product variant renders
7. `shelter-dashboard.jpg` — premium dashboard mockup (premium quality for UI legibility)

Imported as ES6 modules; `alt` text descriptive for accessibility.

## Functional behavior
- Anchor IDs: `#how`, `#features`, `#shelters`, `#roadmap`, `#partners`, `#waitlist`. CSS `scroll-behavior: smooth` + `scroll-margin-top` on sections to clear sticky header.
- Header CTAs and section CTAs link to `#waitlist` / `#shelters` / `#partners`.
- Forms are non-submitting (`onSubmit={(e)=>e.preventDefault()}`) with toast confirmation via existing `sonner` if available, else inline success state — wired so swapping to a real handler is one function later.
- Mobile nav: shadcn `Sheet` for the menu.
- Reveal animation respects `prefers-reduced-motion`.

## SEO (head())
Title: "Skritch™ — Robotic pet comfort for dogs at home"
Description: comfort-focused, <160 chars.
og:title / og:description / og:image (hero render) / twitter:card summary_large_image.

## Out of scope
- No backend, no auth, no Lovable Cloud (forms are static placeholders per brief).
- No Lovable logo anywhere.
- No real Skritch logo asset — leave a clean labeled placeholder slot in header.

## Verification
After build: read console for runtime errors, view preview at desktop + mobile viewports, confirm all 9 sections render, images load, anchors scroll, and no placeholder boilerplate remains in `index.tsx`.