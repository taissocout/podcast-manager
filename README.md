# 🎙️ Podcast Manager API

> Node.js REST API built with TypeScript and the native HTTP module — no frameworks, no Express, no Fastify. Pure Node.js architecture following clean layered design.

Built as part of the **DIO Node.js Bootcamp** challenge. Inspired by the reference project from [@felipeAguiarCode](https://github.com/felipeAguiarCode/node-ts-webapi-without-frameworks-podcast-menager), extended with AppSec/DevSecOps security layers.

## Features

- List all podcast episodes organized by category
- Filter episodes by podcast name via query string
- Health check endpoint
- Zero external runtime dependencies (native Node.js HTTP module only)
- OWASP security headers applied natively (no Helmet needed)
- In-memory rate limiting (60 req/min per IP)
- Full TypeScript strict mode
- Layered architecture: Controller → Service → Repository

## Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/health` | Health check |
| GET | `/api/list` | List all podcast episodes |
| GET | `/api/episode?podcastName=flow` | Filter episodes by podcast name |

## Stack

| Technology | Purpose |
|------------|---------|
| Node.js | Runtime (native HTTP module) |
| TypeScript 5 | Language — strict mode enabled |
| tsup | Build/bundle |
| tsx | Dev server with hot reload |

## Project Structure

```
src/
├── server.ts
├── routes/router.ts
├── controllers/podcast.controller.ts
├── services/podcast.service.ts
├── repositories/podcast.repository.ts
├── models/podcast.model.ts
├── middlewares/security.middleware.ts
└── utils/
    ├── http-status-code.util.ts
    └── routes.util.ts
```

## How to Run

```bash
npm install
cp .env.example .env
npm run start:dev   # development
npm run build       # production build
npm start           # run built version
```

## Security

See [SECURITY_REPORT.md](./SECURITY_REPORT.md) for full details.

| Layer | Implementation |
|-------|----------------|
| Security Headers | X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, CSP |
| Rate Limiting | 60 req/min per IP (in-memory token bucket) |
| Input Sanitization | Query params trimmed and lowercased before processing |
| No Stack Trace Exposure | Errors return only safe messages |
| TypeScript Strict | `strict: true` catches null/undefined at compile time |

## License

MIT
