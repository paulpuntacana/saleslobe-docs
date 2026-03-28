---
sidebar_position: 3
---

# Rate Limits & Security

## Per-key limits

Rate limits and daily credit caps are configured per API key — not per plan. Set them when generating a key in **Settings → Connections → API Keys**.

| Limit | Default | Configurable range | Description |
|-------|---------|-------------------|-------------|
| Rate limit | `100/min` | 10 – 2,000 | Requests per minute for this key |
| Daily credit limit | `100/day` | 10 – 10,000 | Max AI credits consumed per day via this key |

## Additional limits

| Limit | Details |
|-------|---------|
| IP rate limit | 120 requests/min per IP — applies to all requests including unauthenticated ones. Error: `ip_rate_limit_exceeded` |
| Request body | Maximum 50KB. Larger payloads rejected with `payload_too_large` (413) |
| Timeout | 30 second hard limit per request. Long-running AI calls return `ai_error` if exceeded |
