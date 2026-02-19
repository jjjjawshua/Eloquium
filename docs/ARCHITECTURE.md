# Architecture

## Overview

Openly is a monorepo using Turborepo with three main layers:

### Frontend (apps/)
- **web**: Next.js 14 with App Router, Tailwind CSS
- **mobile**: React Native with Expo and Expo Router

### Backend (services/)
- **api**: Fastify REST API with Prisma ORM on PostgreSQL
- **workers**: Background jobs (video transcoding, emails, analytics)

### Shared (packages/)
- **shared**: TypeScript types, validators, formatters, constants
- **ui**: Design tokens (colors, typography, spacing)

## Data Flow

```
[Web/Mobile] → [Fastify API] → [PostgreSQL]
                    ↕               ↕
              [Redis Cache]    [S3 Storage]
                    ↕
              [Stripe Connect]
```

## Key Design Decisions

1. **Monorepo**: Shared types ensure frontend/backend stay in sync
2. **Fastify over Express**: Better performance, TypeScript-native
3. **Prisma**: Type-safe database queries, easy migrations
4. **Stripe Connect**: Each creator gets their own Stripe account
5. **Expo**: Single codebase for iOS and Android
