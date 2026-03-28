---
sidebar_position: 2
---

import ApiPlayground from '@site/src/components/ApiPlayground';

# GET /v1/reports

<div className="endpoint-header">
  <span className="method-pill method-get">GET</span>
  <code>/v1/reports</code>
</div>

<span className="tag tag-scope">scope: reports.read</span>
<span className="tag tag-free">0 credits</span>

List available reports.

**Query params:** `type` (friday|monday), `limit` (default 20, max 50), `offset`

## Try it

<ApiPlayground
  method="GET"
  endpoint="/v1/reports"
  params={[
    { name: 'type', in: 'query', description: 'friday · monday' },
    { name: 'limit', in: 'query', type: 'number', description: 'Max 50', example: '20' },
    { name: 'offset', in: 'query', type: 'number', example: '0' },
  ]}
/>

## Response

```json
{
  "reports": [{
    "id": "uuid",
    "title": "Friday Intelligence Brief — 21 mrt 2026",
    "brief_type": "friday",
    "executive_summary": "Corty improved 3 campaigns...",
    "period_start": "2026-03-17",
    "generated_at": "2026-03-21T17:00:00Z"
  }],
  "count": 1,
  "total_count": 12,
  "has_more": true
}
```
