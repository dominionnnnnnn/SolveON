# SolveON site: launch checklist

Everything still open on the site, in one place. Updated with every page we build.
Tick items off (`[x]`) as they're done.

**Legend:** 🟢 needs content from you · 🟡 needs a decision from you · 🔵 technical, I'll do it (some are blocked on a 🟢/🟡 item)

---

## 1. Content needed from you 🟢

### Brand and contact (`src/lib/site.ts`)
- [ ] Real email address (currently `hello@solveon.com`, a placeholder)
- [ ] WhatsApp number (empty; the design shows one on Contact)
- [ ] **Founders** (`src/lib/content.ts`, one list used on Home and About): names, initials, roles, short bios, photos. Photos go in `public/team/` (portrait, at least 800px tall); the placeholder boxes switch to the photo automatically.

### Home page (`src/components/home/`)
- [ ] **Stats** (`stats.tsx`): "Products shipped" and "Clients served" show `[00]`. Real numbers, or tell me to remove those two.
- [ ] **Case studies** (`work-cards.tsx`): 4 cards with `[Project name]`, `[Client logo]`, one-line summary, two-line description. Real screenshots would replace the drawn mockups.
- [ ] **Testimonials** (`testimonials.tsx`): 4 quotes, each with name, role and company.
- [ ] **FAQ answers** (`faq.tsx`): 6 answers, all placeholders.
- [ ] **Insights articles** (`insights.tsx`): 3 article cards (title, date, summary). Can wait until Resources has real articles.

### About page (`src/components/about/about-sections.tsx`)
- [ ] **Founding story**: two short paragraphs (why you started; how you work differently).
- [ ] Check the local-skills tags are true for you: Paystack & Flutterwave, WhatsApp Business API, offline-friendly apps.

### Services page (`src/components/services/services-sections.tsx`)
- [ ] **Typical first-phase timelines** per service (design defaults: 4–6, 4–6, 3–5, 2–4, 2–3, 4–6 weeks). Once confirmed, remove the "[Adjust to your real delivery times.]" note.
- [ ] **Support after launch**: confirm the number of days of fixes included (shows `[30]`).

### Other pages
- [ ] Pricing figures (design shows `₦ [—]`)
- [ ] Privacy policy and Terms text (`/privacy` and `/terms` exist as placeholders, hidden from Google)

---

## 2. Decisions needed from you 🟡

- [ ] **Production domain.** Needed for canonical links, the sitemap and social previews. Set `NEXT_PUBLIC_SITE_URL` in Vercel once decided. Until then the code assumes `https://solveon.vercel.app`.
- [ ] **Hosting.** Vercel (like your portfolio) is the natural fit. Connecting the repo is a one-time step in your Vercel account.
- [ ] **Contact form destination.** Where should enquiries go: email, WhatsApp, a Google Sheet, a CRM? Decides how I build the Contact form.
- [ ] **Placeholder sections at launch.** If testimonials/case studies aren't ready, hide those sections or launch with them? (Recommend hiding: placeholder text looks unfinished to visitors.)

---

## 3. Deliberately left out or deferred 🔵

| Item | Why it's deferred | Unblocked by |
|---|---|---|
| FAQ structured data (Google rich results) | Would publish the placeholder answers to Google | FAQ answers |
| Social share image (Open Graph) | Should use final copy and brand; easy to add once pages settle | Before launch |
| Review/rating structured data | Needs real testimonials | Testimonials |
| Section links in the nav (`/pricing#faq`, `/#testimonials` from other pages) | Target sections don't exist until those pages are built; links land on the page top. `/about#team`, `/about#how-we-work` and all `/services#…` links now work | Building each page |
| Service "Explore →" links go to Contact without saying which service | The design links every row to Contact. Once the contact form exists, each row can pre-select its service | Contact form |
| Insights cards link to `/resources`, not real articles | No articles yet | Articles |
| 5 "high" `npm audit` warnings | All in build/dev tooling, not in code that ships to visitors. Revisit when Next.js updates | Routine updates |

---

## 4. Build progress

| Page | Status |
|---|---|
| Foundation (header, mobile menu, footer, fonts, tokens, SEO basics) | ✅ Done |
| Logo + favicons | ✅ Done |
| Home | ✅ Built to design. Content placeholders above |
| Services | ✅ Built to design. Content placeholders above |
| Work | ⬜ Next |
| Pricing | ⬜ |
| About | ✅ Built to design. Content placeholders above |
| Resources | ⬜ |
| Contact | ⬜ |
| Launch: domain, Vercel, final SEO pass | ⬜ |

## Design notes (kept for reference)

- The headline on Home has an explicit line break after "around" on tablet and desktop. The self-hosted font renders slightly narrower than the design tool's, so a natural wrap would put "what" on line one.
- The design's ≤960px rule pinned the services panel at `top: 0` under a sticky 64px header. The build uses `top: 64px` there so the header doesn't cover it.
- The design turned off the services scroll animation on windows 1400px+ tall. That also caught zoomed-out browsers and large monitors, so the effect silently disappeared. The build pins whenever the panel fits on screen and only falls back to tap-to-open on very short windows (phone held sideways).
- About hero: in the design, the float animation overrides the cards' tilt, so they display straight. The build matches that (straight cards, still floating).
- Inner pages fade the hero grid straight down (`.gridbg-down`); Home keeps its radial fade, as in the design.
- About team section: "Specialists on demand" card removed at your request; the two founder cards sit two across.
- Services hero: as on About, the float animation overrides the cards' tilt in the design, so they display straight. The build matches that.
- About and Services heroes keep their full 80px/96px padding on phones, as the design renders (its phone padding rule doesn't reach these heroes).
- Services page publishes each core service as structured data for search engines (real content, so no placeholder risk).
- Desktop nav items with chevrons open dropdowns (the design only showed the chevrons). The sub-links match the mobile menu.
