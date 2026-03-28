# SalesLobe API Documentation

Static documentation site for the [SalesLobe](https://saleslobe.com) REST API — covering authentication, AI suggestions, leads, campaigns, webhooks, and the partner API.

## Structure

```
saleslobe-docs/
├── index.html   # Full API reference (single-page)
├── 404.html     # Custom 404 error page
└── README.md    # This file
```

## Sections

- **Getting Started** — Overview, authentication, rate limits, quickstart
- **AI** — `/suggest` and `/suggest/feedback` endpoints
- **Leads & Replies** — CRUD operations for leads and reply threads
- **Campaigns & Reports** — List campaigns and fetch reports
- **Webhooks** — Register, list, and delete webhook endpoints
- **Webhook Reference** — Event types, payloads, signatures, retry policy
- **Reference** — Error codes, credits & billing, code examples, Make.com guide, Partner API

## Deployment

This site is a static single-page app — deploy to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages).

**Vercel (recommended):**
```bash
vercel deploy --prod
```

**GitHub Pages:** Push to `main` and enable Pages in repository settings (root `/` as source).

## Local preview

```bash
npx serve .
# or
python3 -m http.server 8080
```

Open `http://localhost:8080`.
