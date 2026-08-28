# Sumant Cloud — website

React + Vite + Tailwind CSS v4.

## Run it locally

```bash
npm install
npm run dev
```

Open the printed localhost URL. For a production build:

```bash
npm run build
npm run preview
```

## What's in here

- `src/components/Hero.jsx` — headline, subhead, and the stat row
- `src/components/Services.jsx` — the six service lines
- `src/components/Products.jsx` — CMMS / PEM / EP2P / CMS / WMS
- `src/components/Approach.jsx` — the four-stage process
- `src/components/About.jsx`, `CTA.jsx`, `Footer.jsx` — company info and contact
- `src/components/TideDivider.jsx` — the recurring wave-line motif used
  between sections
- `src/index.css` — all design tokens (colors, fonts) live in the `@theme`
  block at the top of this file

## Design system — "Tidewater"

| Token | Hex | Use |
|---|---|---|
| `ink` | `#0A1628` | Dark section backgrounds |
| `foam` | `#F4F7F6` | Light section backgrounds |
| `tide` | `#17B8A6` | Primary accent (teal) |
| `laterite` | `#C1592B` | Secondary accent (Goa red-earth) |
| `sand` | `#E8DCC4` | Neutral texture, used sparingly |

Display type is **Space Grotesk**, body is **Inter**, labels/eyebrows use
**JetBrains Mono** — loaded from Google Fonts in `index.css`.

## Deploying

This is a static Vite build — `npm run build` outputs to `dist/`, which you
can deploy to Vercel, Netlify, GitHub Pages, or any static host. Point your
domain (sumantcloud.com) at the host once it's live.

## Swapping in real content

- Contact details, address, and phone are wired to `mailto:` / `tel:` links
  in `CTA.jsx` and `Footer.jsx` — update if these change.
- Add real screenshots or client logos in `Hero.jsx` / a new `Work.jsx`
  section once you have case studies to show.
