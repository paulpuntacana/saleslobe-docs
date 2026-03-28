---
sidebar_position: 2
---

# Credits & Billing

Only AI endpoints consume neural credits. Your balance is returned in every `/suggest` response as `credits_remaining`. Each API key has a configurable daily credit limit (default 100) to prevent accidental overuse.

| Endpoint | Credits |
|----------|---------|
| POST /v1/suggest | 1 credit |
| All other endpoints | 0 credits |
