---
sidebar_position: 3
---

# GET /v1/reports/:id

<div className="endpoint-header">
  <span className="method-pill method-get">GET</span>
  <code>/v1/reports/:id</code>
</div>

<span className="tag tag-scope">scope: reports.read</span>
<span className="tag tag-free">0 credits</span>

Fetch full report content.

## Response

```json
{
  "report": {
    "id": "abc-123",
    "title": "Friday Intelligence Brief — 21 mrt 2026",
    "brief_type": "friday",
    "target_role": "owner",
    "executive_summary": "Corty improved 3 campaigns, caught 2 deliverability issues.",
    "summary_bullets": ["2,340 emails sent · 8.2% reply rate", "12 hot leads · 28 warm"],
    "stats_snapshot": { "emails_sent": 2340, "reply_rate": 8.2 },
    "period_start": "2026-03-17",
    "period_end": "2026-03-21",
    "generated_at": "2026-03-21T17:00:00Z"
  }
}
```
