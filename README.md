# Cloudways Velocity — Landing Page (React)

A Vite + React build of the Cloudways Velocity marketing landing page, with a
small Express server so it runs as a Node.js app rather than needing separate
static hosting.

## Project structure

```
├── index.html            # Vite HTML entry
├── server.js              # Production entry file — serves the built app
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css           # All styles (ported 1:1 from the design prototype)
    └── components/
        ├── Nav.jsx
        ├── Hero.jsx
        ├── WhyVelocity.jsx
        ├── Features.jsx
        ├── TrustBar.jsx
        ├── Frameworks.jsx
        ├── ICP.jsx
        ├── Pricing.jsx
        ├── Compare.jsx
        ├── FAQ.jsx
        ├── FinalCTA.jsx
        └── Footer.jsx
```

## Local development

```bash
npm install
npm run dev
```

Opens on http://localhost:5173 with hot reload.

## Production build (what runs on the server)

```bash
npm run build   # builds the static app into ./dist
npm start        # runs server.js, which serves ./dist on process.env.PORT
```

`server.js` is a plain Express static file server — it's the "entry file" a
Node.js host needs, and it works the same way locally or in production.

## Deploying via Cloudways Velocity (Git deploy)

1. Push this repo to GitHub.
2. In Velocity, connect the repository and select the branch to deploy.
3. When prompted for app settings:
   - **Node.js version:** 22.x or 24.x
   - **Build command:** `npm run build`
   - **Start command:** `npm start`
   - **Entry file:** `server.js`
4. Deploy. Every subsequent push to the connected branch redeploys
   automatically with zero downtime.

No environment variables are required for the page itself. If you later wire
up the CTA buttons to a real signup flow or an API, add those keys through
Velocity's environment variable UI rather than committing them here.

## Editing content

All copy lives in small data arrays at the top of each component
(`src/components/*.jsx`) — e.g. `PLANS` in `Pricing.jsx`, `FAQS` in
`FAQ.jsx`, `FEATURES` in `Features.jsx`. Update the arrays; the layout
re-renders automatically.

## Known open items (carried over from the design review)

- Starter base price is shown as $20/mo per the pricing mockup; an earlier
  brief and blog post said $21 — confirm before this goes live.
- Bandwidth overage is shown as $0.02/GB; customer-feedback notes flagged a
  possible $0.04/GB elsewhere — confirm.
- The "Get Started Free" / open-signup framing assumes Public Preview is
  open by ship date. If it's still invite-gated, swap the CTA copy and the
  "How do I get started?" FAQ answer.
- Trial mechanics (card required or not, per-app vs. per-account) aren't
  confirmed yet — affects the copy on the Starter/Professional plan cards.
