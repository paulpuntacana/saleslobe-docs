---
sidebar_position: 1
---

# GET /v1/campaigns

<div className="endpoint-header">
  <span className="method-pill method-get">GET</span>
  <code>/v1/campaigns</code>
</div>

<span className="tag tag-scope">scope: campaigns.read</span>
<span className="tag tag-free">0 credits</span>

List campaigns with statistics.

**Query params:** `status` (active|paused|completed), `limit` (default 50, max 100), `offset`

## Response

```json
{
  "campaigns": [{
    "id": "abc-123",
    "name": "Q1 SaaS Outreach",
    "status": "active",
    "sent": 500,
    "replied": 47,
    "reply_rate": 9.4,
    "open_rate": 64.0,
    "client": { "id": "client-456", "name": "Agency Client A" },
    "stats_last_synced_at": "2026-03-20T12:00:00Z"
  }],
  "count": 5,
  "total_count": 23,
  "has_more": false
}
```
