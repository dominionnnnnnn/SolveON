# SolveON site: launch checklist

Everything still open on the site, in one place. Updated with every page we build.
Tick items off (`[x]`) as they're done.

**Legend:** 🟢 needs content from you · 🟡 needs a decision from you · 🔵 technical, I'll do it (some are blocked on a 🟢/🟡 item)

---

## 1. Content needed from you 🟢

### Brand and contact (`src/lib/site.ts`)
- [ ] Real email address (currently `hello@solveon.com`, a placeholder)
- [ ] **WhatsApp number** (`whatsapp`, digits only, e.g. `2348012345678`). Contact shows `[+234 000 000 0000]` until set; then the tile opens a WhatsApp chat.
- [ ] **Booking link** (`calendarUrl`, e.g. Cal.com or Calendly). Contact shows `[calendar link]` until set.
- [ ] **Reply time** (`replyTime`), shown on Contact: `[one working day]`.
- [x] **Founder 1** (`src/lib/content.ts`): Adebiyi AbdulQuawiy, Backend & Architecture, photo, portfolio/GitHub/LinkedIn icons, bio.
- [ ] **Co-founder** (`src/lib/content.ts`): name, initial, role, short bio, photo (portrait, any size; drop it in `public/team/`) and any of portfolio / GitHub / LinkedIn links.

### Home page (`src/components/home/`)
- [ ] **Stats** (`stats.tsx`): "Products shipped" and "Clients served" show `[00]`. Real numbers, or tell me to remove those two.
- [ ] **Case studies** (`src/lib/projects.ts`, one list for Home and Work): 6 projects, each with name, client, one-line tagline, two-line summary, tags and filter categories. Home shows the first four, so order matters. Real screenshots can replace the drawn illustrations later.
- [ ] **Testimonials** (`testimonials.tsx`): 4 quotes, each with name, role and company.
- [ ] **FAQ answers** (`faq.tsx`): 6 answers, all placeholders.
- [ ] **Insights cards**: now come from the articles list (first three non-featured); see Resources below.

### About page (`src/components/about/about-sections.tsx`)
- [ ] **Founding story**: two short paragraphs (why you started; how you work differently).
- [ ] Check the local-skills tags are true for you: Paystack & Flutterwave, WhatsApp Business API, offline-friendly apps.

### Services page (`src/components/services/services-sections.tsx`)
- [ ] **Typical first-phase timelines** per service (design defaults: 4–6, 4–6, 3–5, 2–4, 2–3, 4–6 weeks). Once confirmed, remove the "[Adjust to your real delivery times.]" note.
- [ ] **Support after launch**: confirm the number of days of fixes included (shows `[30]`). One setting, `supportDays` in `src/lib/content.ts`, used on Services and Pricing.

### Work + case-study pages (`src/lib/projects.ts`)
- [ ] For each project, the **case-study page** content: year, timeline, the problem (2–3 sentences), what you built (3 points), results (3 numbers with labels), tech stack, optional client quote and live link.
- [ ] Give each project a real **slug** (its URL, e.g. `/work/lekki-salon-bookings`) and set **`draft: false`** once it's real. Drafts can be previewed but are hidden from Google and the sitemap.

### Pricing page (`src/components/pricing/pricing-sections.tsx`)
- [ ] **Starting prices** for MVP Sprint, Product Build (per phase) and Ongoing Partner (per month); all show `₦ [—]`. The hero's sample quote card also shows `₦ [—]`.
- [ ] **Proposal turnaround**: "usually within `[3]` days".
- [ ] **Pricing FAQ answers**: 5 answers, all placeholders.

### Resources page (`src/lib/articles.ts`, one list for Resources and Home)
- [ ] **Articles**: 1 featured (title, summary, date, read time, two-line cover text; the design's is "Build vs / buy.") and 6 more (title, summary, category, date). Categories: Cost & planning, Product, Engineering, Case notes.

### Contact page
- [ ] **Budget ranges** for the form dropdown (`src/lib/contact.ts`): `[Range 1]`, `[Range 2]`, `[Range 3]`.
- [ ] **Contact FAQ answers** (`src/components/contact/contact-sections.tsx`): 3 answers.

### Other pages
- [ ] Privacy policy and Terms text (`/privacy` and `/terms` exist as placeholders, hidden from Google)

---

## 2. Decisions needed from you 🟡

- [x] **Work headline wrap.** Decided: keep the copy and type size; the text column is wider on Work so each line fits (two clean lines from tablet up).
- [x] **Case-study pages.** Decided: yes. Built at `/work/<slug>`; all project cards on Home and Work link there.
- [ ] **Newsletter provider.** The sign-up form works but isn't connected to an email service, so it honestly replies "Sign-ups aren't open yet." Options: **Brevo** (free up to 300 emails/day, good for Nigeria-based senders), **Mailchimp**, **Buttondown** (simple, writer-focused) or **Kit/ConvertKit**. Pick one and I'll connect it (`src/app/api/newsletter/route.ts`).
- [ ] **Article pages (`/resources/<slug>`).** Not in the design; cards link to Resources for now. My recommendation: write articles as **MDX files in the repo** (`content/insights/*.mdx`), which is free, fast, versioned in GitHub, with a `draft` flag like case studies. If your partner (non-developer) will write them, a **headless CMS** (e.g. Sanity, free tier) is friendlier. Your call on who writes, then I'll build it.
- [ ] **Production domain.** Needed for canonical links, the sitemap and social previews. Set `NEXT_PUBLIC_SITE_URL` in Vercel once decided. Until then the code assumes `https://solveon.vercel.app`.
- [ ] **Hosting.** Vercel (like your portfolio) is the natural fit. Connecting the repo is a one-time step in your Vercel account.
- [ ] **Contact form destination. ⚠ Launch blocker.** The form is built and validated, but enquiries aren't delivered anywhere yet; it tells visitors to email you instead. Options: **email to your inbox via Resend** (free up to 3,000/month, my recommendation), plus optionally a **Google Sheet** row per enquiry for tracking, or a CRM if you use one. Pick and I'll connect it (`src/app/api/contact/route.ts`).
- [ ] **Booking tool** for "book a call": Cal.com (free, open source) or Calendly. Just send the link.
- [ ] **Placeholder sections at launch.** If testimonials/case studies aren't ready, hide those sections or launch with them? (Recommend hiding: placeholder text looks unfinished to visitors.)

---

## 3. Deliberately left out or deferred 🔵

| Item | Why it's deferred | Unblocked by |
|---|---|---|
| FAQ structured data (Google rich results), Home and Pricing | Would publish the placeholder answers to Google | FAQ answers |
| Social share image (Open Graph) | Should use final copy and brand; easy to add once pages settle | Before launch |
| Review/rating structured data | Needs real testimonials | Testimonials |
| Article cards (Resources + Home) link to `/resources`, not to individual articles | No article pages yet | Your decision on article pages |
| 5 "high" `npm audit` warnings | All in build/dev tooling, not in code that ships to visitors. Revisit when Next.js updates | Routine updates |

---

## 4. Build progress

| Page | Status |
|---|---|
| Foundation (header, mobile menu, footer, fonts, tokens, SEO basics) | ✅ Done |
| Logo + favicons | ✅ Done |
| Home | ✅ Built to design. Content placeholders above |
| Services | ✅ Built to design. Content placeholders above |
| Work | ✅ Built to design. Content via projects list |
| Case-study pages (`/work/<slug>`) | ✅ Built (no design; uses the site's own components). Content via projects list |
| Pricing | ✅ Built to design. Content placeholders above |
| About | ✅ Built to design. Content placeholders above |
| Resources | ✅ Built to design. Content via articles list |
| Contact | ✅ Built to design. Form works; delivery waits on your decision |
| Launch: domain, Vercel, final SEO pass | ⬜ |

## Design notes (kept for reference)

- The headline on Home has an explicit line break after "around" on tablet and desktop. The self-hosted font renders slightly narrower than the design tool's, so a natural wrap would put "what" on line one.
- Below 960px the pinned services block sits under the sticky 64px header (`top: 64px`), not at `top: 0` as in the design.
- **Home "What we build" panels.** The panel area is fitted to the screen height (max 560px) instead of a fixed 560px, so the section pins and scrolls through all six cards on laptops and phones too. (Earlier versions only pinned when the full 800px block fit, which silently disabled it on most laptops.) Desktop panels open sideways as designed; **on phones they stack vertically and each card rises from the bottom** (your request). The decorative tag rows drop to one or none on short screens so they never cover the text. Only extremely short windows (phone held sideways) fall back to tap-to-open.
- About hero: in the design, the float animation overrides the cards' tilt, so they display straight. The build matches that (straight cards, still floating).
- Inner pages fade the hero grid straight down (`.gridbg-down`); Home keeps its radial fade, as in the design.
- About team section: "Specialists on demand" card removed at your request; the two founder cards sit two across.
- Services hero: as on About, the float animation overrides the cards' tilt in the design, so they display straight. The build matches that.
- About and Services heroes keep their full 80px/96px padding on phones, as the design renders (its phone padding rule doesn't reach these heroes).
- Services page publishes each core service as structured data for search engines (real content, so no placeholder risk).
- Work filters: the design only drew the buttons; in the build they filter by each project's categories (All 6 · Web 3 · Mobile 1 · Backend 3 · AI & WhatsApp 1 with the current placeholders).
- Case-study cards on phones: in the design the illustration covers the tagline (and the mobile export overflows sideways). The build shrinks the illustration into the bottom-right corner on phones, on both Home and Work.
- Home and Work cards share one component and one project list; the illustrations keep each page's exact sizes from the design.
- Work hero: the text column is wider than on other pages (680px vs 520px basis) so "Products that had to" fits on one line; the illustration column narrows to fit.
- Case-study pages have no design. They're built from the site's existing pieces (hero, facts row, the project's card image at full width, problem / what we built, dark results band, stack, quote, next case study, the Work CTA). Draft projects get `noindex`; real ones also publish CreativeWork structured data.
- Unknown `/work/...` URLs return a real 404 with the site's 404 page.
- **Type metrics match the design exactly.** Both fonts are the Google Fonts files the design uses (self-hosted via Fontsource), and line heights follow the design's browser default instead of Tailwind's built-in 1.5 and per-size values. Measured with real fonts on both sides, every desktop section on Home, About, Services and Pricing is within 2px of the design.
- **Phones: stacked instead of squeezed.** In several places the design's phone layout squeezes 3–5 columns into a 390px screen (Home stats and phases, About values, Pricing "In every phase" and "How pricing works"), leaving one word per line. Its phone rules never take effect. The build stacks those into readable rows, which is what the rules intended.
- Home and Pricing FAQs share one component; Pricing FAQ has the `#faq` anchor the nav and Home link to.
- Resources filters and "Load more" work (the design drew them as static buttons). Filtering also applies to the featured article. "Load more" only appears when there are more than 6 articles in the current filter, so with today's 6 placeholders it's hidden.
- Resources hero "Pricing FAQ" button goes straight to `/pricing#faq`.
- Newsletter form: real email validation, a status message under the form (positioned so it doesn't shift the layout), and an honest "not open yet" reply until a provider is connected.
- Contact form: the design's fields, service buttons and dropdowns were static. The build validates required fields and email, lets you pick several services, has a hidden spam trap, and shows field-level errors and a status message. Services rows link to `/contact?service=…`, which pre-selects that service.
- Contact on phones: the design keeps the form fields and contact tiles two-across, which cuts off placeholders ("you@compan…"). The build stacks them full width.
- About team cards: the photo slot is 5:4 instead of the design's fixed 300px strip, so portrait photos keep the whole head in view. Each founder can have portfolio / GitHub / LinkedIn icon links (any left out are hidden). Real founders are also listed in the Organization structured data with their profile links.
- Location is "Nigeria" everywhere (not Lagos): the founders are based in Ogun State and Lagos.
- Desktop nav items with chevrons open dropdowns (the design only showed the chevrons). The sub-links match the mobile menu.
