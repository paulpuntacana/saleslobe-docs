---
sidebar_position: 4
---

# Event Types

All events share the same base structure: `event`, `timestamp`, `workspace_id`, and a `data` object with event-specific fields.

| Event | Description |
|-------|-------------|
| `lead.created` | First reply from a new email address in a campaign |
| `lead.replied` | Lead sends any reply in an active campaign |
| `lead.bounced` | Email bounced (hard or soft) |
| `lead.updated` | Lead classification updated via API or UI |
| `reply.sent` | Reply sent from SalesLobe to a lead |
| `corty.suggested` | Corty generates an AI reply suggestion |
| `corty.learned` | User edits a suggestion — Corty learns from the correction |
| `report.generated` | Monday Brief or Friday Report is ready |
| `test.ping` | Test event sent from Settings → Connections → Webhooks |
