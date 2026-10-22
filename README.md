# SolveON website

Marketing site for SolveON, built with **Next.js 16 (App Router)**, **Tailwind CSS v4** and **TypeScript**. Every page is prerendered as static HTML for speed and SEO.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
npx prettier --write .   # format
```

## Where things live

| Path | What |
| --- | --- |
| `src/lib/site.ts` | Brand name, contact details, site URL and all navigation. Change details here, not in components. |
| `src/app/globals.css` | Brand tokens (`@theme`) and the core design classes from the handoff: `.wrap`, `.disp`, `.mk`, `.eb`, `.btn`, `.tint`, `.dark`, `.gridbg`, `.section` |
| `src/components/` | Shared UI: `header.tsx` (desktop dropdowns + mobile menu), `footer.tsx`, `logo.tsx` (wordmark, light/dark) |
| `src/app/<page>/page.tsx` | One folder per page, each with its own SEO metadata |
| `src/lib/content.ts` | Content shared across pages: founders, the five phases |
| `src/lib/articles.ts` | Insights articles for Resources (all, with the featured one) and Home (first three) |
| `src/app/api/newsletter/route.ts` | Newsletter sign-up endpoint (connect an email provider here) |
| `src/lib/projects.ts` | Case studies for Home (first four), Work (all) and each `/work/<slug>` page. `draft: true` hides a project page from Google |
| `src/components/home/`, `about/`, `services/`, `work/`, `pricing/`, `resources/` | Page sections. Placeholder content (stats, testimonials, FAQ answers, articles) is in plain arrays at the top of each file, marked `TODO` |
| `src/app/sitemap.ts`, `robots.ts` | Generated `sitemap.xml` and `robots.txt` |
| `src/fonts/` | Self-hosted Geist and Plus Jakarta Sans: the Google Fonts files (via Fontsource), so text measures exactly as in the design |
| `public/` | Assets: `brand/` (logo + icon), `icons/`, `illustrations/`, `tech/`. Favicons live in `src/app/` (`favicon.ico`, `icon.svg`, `apple-icon.png`) |

## Design system

- **Colours:** ink `#111111`, green `#4ADE80` (hover `#22C55E`, text `#15803D`), green soft `#F3FAF4`, sage `#F8F8EC`, black `#0B0B0B`. Available as Tailwind colours: `text-ink`, `bg-green`, `bg-green-soft`, `bg-sage`, `bg-black`, `text-muted`, etc.
- **Fonts:** Plus Jakarta Sans for headings (`font-display`), Geist for body (`font-sans`).
- **Breakpoints:** `phone:` applies above 640px, `tab:` above 960px (matching the design's mobile-first breakdown).
- **Headings:** `.disp` plus `.mk` on the highlighted half (`.mk-d` on black sections).

## Environment

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Production URL, used for canonical links, Open Graph and the sitemap. Set this in Vercel once the domain is live. |
| `NEWSLETTER_PROVIDER` (+ provider API key) | Turns on newsletter sign-ups once a provider is connected in `src/app/api/newsletter/route.ts` |

## Status

See [`CHECKLIST.md`](CHECKLIST.md) for everything still open: content needed, decisions, and deferred items.

- [x] Foundation: tokens, fonts, assets, header, mobile menu, footer, SEO basics, all routes
- [x] Home (full design)
- [x] About
- [x] Services
- [x] Work (+ case-study pages)
- [x] Pricing
- [x] Resources
- [ ] Contact
- [x] Real logo and favicons
- [ ] Real contact details, team photos, projects and prices
