# Security Report — Podcast Manager API

## npm audit

```
$ npm audit
found 0 vulnerabilities
```

## HTTP Security Headers (OWASP A05)

```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Content-Security-Policy: default-src 'none'
Referrer-Policy: no-referrer
```

## Rate Limiting (OWASP A04)

- Strategy: in-memory token bucket per IP
- Limit: 60 req/min — returns HTTP 429 with Retry-After: 60 on exceed

## Input Sanitization (OWASP A03)

Query params trimmed and lowercased before use. Empty/undefined returns 204 safely.

## No Stack Trace Exposure (OWASP A05)

All error responses return only safe messages — no paths, no stack traces.

## TypeScript Strict Mode

`"strict": true` — strictNullChecks, noImplicitAny, strictFunctionTypes.

## Zero Runtime Dependencies

No external runtime packages — smaller attack surface.

## OWASP Top 10 Coverage

| OWASP Risk | Coverage |
|------------|----------|
| A01 — Broken Access Control | Unknown routes → 404 |
| A03 — Injection | Input trimmed and validated |
| A04 — Insecure Design | Rate limiting |
| A05 — Security Misconfiguration | OWASP headers; no stack traces |
| A06 — Vulnerable Components | 0 npm vulnerabilities |
