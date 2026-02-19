# Contributing to Openly

Thanks for your interest in contributing!

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/openly.git`
3. Install dependencies: `pnpm install`
4. Copy `.env.example` to `.env` and fill in values
5. Start Docker services: `cd infrastructure/docker && docker-compose up -d`
6. Run migrations: `pnpm db:migrate`
7. Start dev servers: `pnpm dev`

## Branch Naming

- `feat/description` — New features
- `fix/description` — Bug fixes
- `docs/description` — Documentation
- `refactor/description` — Code refactoring

## Pull Requests

- Write clear PR descriptions
- Add tests for new features
- Ensure CI passes before requesting review
- Keep PRs focused and small
