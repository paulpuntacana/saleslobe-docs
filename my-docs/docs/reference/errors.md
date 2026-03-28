---
sidebar_position: 1
---

# Error Codes

All errors use the format:
```json
{"error": {"code": "...", "message": "..."}}
```

| Code | HTTP | Description |
|------|------|-------------|
| `missing_api_key` | 401 | X-SalesLobe-Key header missing |
| `invalid_api_key` | 401 | Key not found or invalid format |
| `key_disabled` | 403 | Key has been revoked |
| `key_expired` | 403 | Key has expired |
| `plan_required` | 403 | Requires Pro or Agency plan |
| `scope_denied` | 403 | Key lacks the required scope |
| `rate_limit_exceeded` | 429 | Too many requests per minute. Includes `Retry-After` header. |
| `ip_rate_limit_exceeded` | 429 | Too many requests from this IP address |
| `daily_credit_limit_exceeded` | 429 | Daily API credit limit reached |
| `payload_too_large` | 413 | Request body exceeds 50KB |
| `insufficient_credits` | 402 | Not enough neural credits |
| `invalid_request` | 400 | Request body invalid or required field missing |
| `invalid_classification` | 400 | Classification value not recognized |
| `limit_reached` | 400 | Maximum number of resources reached (e.g. 10 webhooks) |
| `not_found` | 404 | Resource not found |
| `already_sent` | 409 | Reply has already been sent |
| `not_available` | 501 | Endpoint not yet available |
| `ai_error` | 502 | AI generation failed |
| `smartlead_error` | 502 | Smartlead API call failed |
| `internal_error` | 500 | Internal server error |
