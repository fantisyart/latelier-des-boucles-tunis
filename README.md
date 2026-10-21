# Latelier des Boucles — Luxury Hair Salon Website

A polished, editorial-style website for **Latelier des Boucles Tunis**, a
fictional luxury hair salon built with **Next.js (App Router)**, **React**,
**TypeScript**, and **Tailwind CSS**. It is fully responsive, accessible,
conversion-focused, and ready to deploy to static hosting such as Hostinger.

> The site is built on top of the local Arena Next.js starter which uses
> PostgreSQL via Drizzle for its healthcheck — the salon website itself is
> stateless and does **not** require a database at runtime. The build emits a
> static homepage alongside the dynamic `/api/health` route.

---

## ✨ Highlights

- Warm ivory + deep olive-charcoal editorial design system
- Animated hero, blush marquee, lightbox gallery, accordion FAQ
- Accessible booking inquiry form with `mailto:` fallback (no backend needed)
- Configurable business details (email, phone, address, hours, social, map)
- Tunable service catalogue grouped into Cut & Style, Color & Dimension, Care
  & Treatments, and Special Occasions
- Editable demo testimonials clearly labeled as demonstration content
- Comprehensive SEO metadata (title, description, Open Graph, canonical, sitemap)
- `prefers-reduced-motion` respected everywhere
- Keyboard-accessible mobile menu, gallery lightbox, and accordion

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Design tokens & utility classes
│   ├── layout.tsx           # Root layout, metadata, fonts
│   └── page.tsx             # Home page composition
├── components/              # All sections of the homepage
├── data/                    # services, testimonials, gallery, faqs, …
└── lib/
    ├── salon-config.ts      # Single source of truth for business details
    └── useReveal.ts         # Lightweight scroll-reveal hook
public/
└── images/                  # Locally hosted salon photography
```

---

## 🚀 Getting Started

### Requirements

- Node.js 18.18+ (Node 20 LTS recommended)
- npm 9+

### Install & run the dev server

```bash
npm install
npm run dev
```

Visit <http://localhost:3000>.

### Production build & start

```bash
npm run build
npm run start
```

The build outputs a fully static homepage (see Next.js's output listing the
`/` route as `○ (Static)`).

---

## ☁️ Deploying to Hostinger

1. Run `npm run build` locally or in your CI of choice.
2. The compiled static output for the homepage lives in `.next/` together with
   the static `public/` assets. For pure static hosting you can either:
   - Use Hostinger's **Node.js hosting** and simply point the entry to
     `npm run start` after uploading the project, **or**
   - Use Hostinger's **static file manager**, copy `public/` contents and the
     compiled assets from `.next/static/` and `.next/server/app/` into your
     `public_html/` directory following the standard Next.js standalone output
     layout.
3. In Hostinger's control panel, set the production domain. Update
   `NEXT_PUBLIC_SITE_URL` to your real domain before the final build so the
   Open Graph + canonical tags point at the live URL:

```bash
NEXT_PUBLIC_SITE_URL="https://your-domain.com" npm run build
```

> If you'd prefer a fully static export, add `output: "export"` to
> `next.config.ts` and run `npx next build`. After that, the entire site is in
> the `out/` directory — drag-and-drop that folder into Hostinger's File
> Manager. _Note: with `output: 'export'` the optional `/api/health` route is
> removed, which is fine for a salon site._ A future commit can flip this on.

---

## 🧩 Customising the Salon

All business details live in **`src/lib/salon-config.ts`**:

```ts
phone, email, address, hours[], bookingUrl, mapEmbedUrl, social.instagram
```

Replace these placeholder values with the real salon's information before
launch. The optional `bookingUrl` value, when set, becomes a future integration
point for an external online-booking system.

Service catalogue, testimonials, gallery images, FAQs, and "Why choose us"
features live in:

```
src/data/services.ts        # Featured + grouped services
src/data/testimonials.ts    # Demo testimonials (clearly labeled as such)
src/data/gallery.ts         # Gallery image metadata
src/data/faqs.ts            # FAQ content
src/data/whyChooseUs.ts     # Three trust features
```

Swap the images in `public/images/` for the salon's own photography. Filenames
are referenced inside the component files for easy find-and-replace.

---

## 🎨 Design System

| Token                | Value     | Use                                  |
| -------------------- | --------- | ------------------------------------ |
| `--color-ivory`      | `#F7F3ED` | Page background                      |
| `--color-cream`      | `#FCF9F5` | Secondary surfaces                   |
| `--color-blush`      | `#D7B8AA` | Decorative dividers, accents         |
| `--color-olive`      | `#292B20` | Dark contrasting sections            |
| `--color-text`       | `#292720` | Primary text                         |
| `--color-muted`      | `#777168` | Eyebrows & secondary text            |
| `--color-border`     | `#D9CEC3` | Hairlines & borders                  |
| `--color-champagne`  | `#CBB5A3` | Subtle accent                        |

Typography pairs **Cormorant Garamond** (editorial serif) with **DM Sans**
(clean sans-serif). They are loaded via `next/font/google` for self-hosting and
zero CLS.

---

## ♿ Accessibility

- Skip-friendly keyboard navigation
- Visible focus states (`:focus-visible`) with the brand blush outline
- ARIA-labelled dialog for the mobile menu and gallery lightbox
- Accordion uses `aria-expanded` + `aria-controls` and panels use `role="region"`
- `prefers-reduced-motion` disables marquee + hero zoom + reveals
- Status region announces form submission status to assistive technologies

---

## 🖼 Imagery

All photographs live under `public/images/`. They were generated or sourced
for the demonstration site only. Replace them with the salon's own imagery
before launch. Filenames are stable; the components reference them by file path.

---

## 📜 License & Credits

Demo content (services, testimonials, FAQs) is provided as configurable
placeholder text — replace with the real salon's voice before launch.
