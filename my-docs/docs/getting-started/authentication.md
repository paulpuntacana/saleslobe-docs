---
sidebar_position: 2
---

# Authentication

All API requests require an API key via the `X-SalesLobe-Key` header. Generate keys in **Settings → Connections → API Keys**.

:::warning
Keep your API key secret — never expose it client-side or in public repositories. Rotate immediately if compromised.
:::

```bash
curl https://<base>/v1/leads \
  -H "X-SalesLobe-Key: sl_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" \
  -H "Content-Type: application/json"
```

## Key types

| Prefix | Type | Description |
|--------|------|-------------|
| `sl_live_xxxxx` | Production | Full access within your configured scopes |
| `sl_test_xxxxx` | Test | Test events only, no production data affected |
| `sl_partner_xxxxx` | Partner | Limited to specific scopes — for white-label integrations |

## Scopes

| Scope | Grants access to |
|-------|-----------------|
| `suggest` | POST /v1/suggest, POST /v1/suggest/feedback |
| `leads.read` | GET /v1/leads, GET /v1/replies/:id |
| `leads.write` | PATCH /v1/leads/:id |
| `replies.send` | POST /v1/replies/:id/send |
| `campaigns.read` | GET /v1/campaigns |
| `reports.read` | GET /v1/reports, GET /v1/reports/:id |
| `webhooks.manage` | POST/GET/DELETE /v1/webhooks |
| `*` | All endpoints (default for live keys) |
