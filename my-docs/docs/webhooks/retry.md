---
sidebar_position: 7
---

# Retry Policy

| Retry | Timing |
|-------|--------|
| 1st retry | 1 minute after initial failure |
| 2nd retry | 5 minutes after initial failure |
| 3rd retry | 30 minutes after initial failure — final attempt |
| Auto-disable | After 10 consecutive failures across events, the webhook is deactivated. Re-enable in Settings → Connections → Webhooks. |

Delivery logs are retained for 30 days and visible per webhook in the Settings UI.
