<div align="center">

<img src="logos/Eloquium_Logo_Full.svg" alt="Eloquium — Where Ideas Take Root" width="400" />

<br />

**A calmer space for independent creators to blog, vlog, and host discussions.**

Own your audience. Get paid fairly. No algorithms gaming you.

[![MIT License](https://img.shields.io/badge/license-MIT-2D6A4F?style=flat-square)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Next.js](https://img.shields.io/badge/Next.js-14-1B1B1B?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org)
[![React Native](https://img.shields.io/badge/React_Native-Expo-000020?style=flat-square&logo=expo&logoColor=white)](https://expo.dev)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat-square&logo=postgresql&logoColor=white)](https://postgresql.org)
[![Stripe](https://img.shields.io/badge/Stripe-Connect-635BFF?style=flat-square&logo=stripe&logoColor=white)](https://stripe.com)

---

[Features](#features) · [Tech Stack](#tech-stack) · [Quick Start](#quick-start) · [Project Structure](#project-structure) · [Contributing](#contributing)

</div>

## Why Eloquium?

The creator economy is broken. Substack hosts extremist content and locks in your audience. Medium's payouts are opaque and shrinking. Both lack real community tools. Neither supports video.

**Eloquium is the alternative.** One platform where creators can write long-form posts, record sub-60-second vlogs, and host threaded discussions — all while keeping 85–90% of their revenue.

## Features

### Blog
Full rich-text editor with multimedia embedding, drafts, scheduling, SEO tools, and version history. Write once, own it forever.

### Vlog
Record and share sub-60-second videos directly in-app. Built-in trimming, captions, and filters. No external software needed.

### Discuss
Threaded group discussions built into every creator's page. Topic channels, pinned threads, moderation tools, and live/async modes. Replaces the need for Discord or Slack.

### Fair Monetization
- **Subscriptions** — Creators set their own price, keep 85–90%
- **Micropayments** — Readers pay $0.50–$3.00 per piece without subscribing
- **Tipping** — Appreciation tips from $0.50 to $50
- **Bundles** — Subscribe to 3–5 creators at a discount

### Discovery
- **New Creator Spotlight** — Algorithmic boosts for creators under 1K subscribers
- **Topic-based Explore feed** — Browse by category, content type, or trending
- **Personalized For You feed** — Recommendations based on reading history

### Creator Ownership
- Export your full subscriber list anytime (CSV)
- Custom domains and branded pages
- Transparent analytics with read-time heatmaps
- Real human customer support (< 24hr response)

## Tech Stack

| Layer | Technology |
|:------|:-----------|
| **Web** | Next.js 14 (App Router), React 18, Tailwind CSS |
| **Mobile** | React Native, Expo SDK 51, Expo Router |
| **API** | Node.js, Fastify, TypeScript |
| **Database** | PostgreSQL 16 (Prisma ORM), Redis |
| **Payments** | Stripe Connect |
| **Storage** | AWS S3 / Cloudflare R2 |
| **Search** | Meilisearch |
| **Monorepo** | Turborepo + pnpm workspaces |
| **CI/CD** | GitHub Actions |

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org) 20+
- [pnpm](https://pnpm.io) 9+ — `npm install -g pnpm`
- [Docker Desktop](https://docker.com/products/docker-desktop) (for Postgres + Redis)

### Setup

```bash
# Clone
git clone https://github.com/jjjjawshua/eloquium.git
cd eloquium

# Install dependencies
pnpm install

# Start database services
cd infrastructure/docker && docker-compose up -d && cd ../..

# Configure environment
cp .env.example .env
cp .env services/api/.env
# Edit .env with your Stripe keys, etc.

# Run database migrations
pnpm db:migrate

# Start development servers
pnpm dev
```

### Development URLs

| Service | URL |
|:--------|:----|
| Web App | http://localhost:3000 |
| API Server | http://localhost:4000 |
| Prisma Studio | `pnpm db:studio` → http://localhost:5555 |
| Mobile | Expo Go app (scan QR code from terminal) |

## Project Structure

```
eloquium/
├── apps/
│   ├── web/                  # Next.js web application
│   │   ├── src/app/          # Pages and layouts
│   │   ├── src/components/   # React components
│   │   ├── src/hooks/        # Custom hooks
│   │   └── src/lib/          # Utilities
│   └── mobile/               # React Native (Expo) app
│       ├── app/              # Screens (Expo Router)
│       ├── components/       # Mobile components
│       └── hooks/            # Mobile hooks
│
├── packages/
│   ├── shared/               # Shared TypeScript types, validators, formatters
│   └── ui/                   # Design tokens (colors, typography, spacing)
│
├── services/
│   ├── api/                  # Fastify REST API
│   │   ├── prisma/           # Database schema and migrations
│   │   └── src/routes/       # API endpoints
│   └── workers/              # Background jobs (video, email, analytics)
│
├── infrastructure/
│   └── docker/               # Docker Compose for local dev
│
└── docs/                     # Architecture, contributing, guides
```

## Design System

Eloquium uses a calming, nature-inspired color palette:

| Token | Hex | Usage |
|:------|:----|:------|
| Accent | `#2D6A4F` | Primary actions, links, branding |
| Dark | `#1B1B1B` | Headings, primary text |
| Background | `#FAFDF7` | Page background |
| Yellow | `#FEF9E7` | Highlights, callouts, warm accents |
| Muted | `#6B7280` | Secondary text, metadata |
| Border | `#E2E8D9` | Dividers, card borders |

Typography: **Georgia** (serif) for headings, **DM Sans** for body text.

## Database Schema

The Prisma schema includes 10 models:

`User` · `Post` · `Vlog` · `Discussion` · `Thread` · `Reply` · `Comment` · `Like` · `Subscription` · `Payment`

View the full schema: [`services/api/prisma/schema.prisma`](services/api/prisma/schema.prisma)

## Scripts

| Command | Description |
|:--------|:-----------|
| `pnpm dev` | Start all dev servers |
| `pnpm build` | Build all packages |
| `pnpm lint` | Lint all packages |
| `pnpm test` | Run all tests |
| `pnpm db:migrate` | Run Prisma migrations |
| `pnpm db:studio` | Open Prisma Studio (DB GUI) |

## Roadmap

- [x] Monorepo scaffold with Turborepo
- [x] Shared types, validators, design tokens
- [x] Database schema (10 models)
- [x] Next.js web app with home page
- [x] Expo mobile app with tab navigation
- [x] Fastify API with starter routes
- [x] Docker Compose dev environment
- [ ] Auth system (NextAuth.js + JWT)
- [ ] Rich text blog editor (TipTap)
- [ ] Vlog recording (Expo Camera / MediaRecorder)
- [ ] Stripe Connect integration
- [ ] Discussion forums
- [ ] Search (Meilisearch)
- [ ] Analytics dashboard
- [ ] Import tools (Substack, Medium, WordPress)
- [ ] Bundled subscriptions
- [ ] Email notifications

## Contributing

See [CONTRIBUTING.md](docs/CONTRIBUTING.md) for setup instructions and guidelines.

## License

[MIT](LICENSE) — built with care by the Eloquium team.
