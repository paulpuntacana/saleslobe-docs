---
sidebar_position: 1
---

import ApiPlayground from '@site/src/components/ApiPlayground';

# GET /v1/leads

<div className="endpoint-header">
  <span className="method-pill method-get">GET</span>
  <code>/v1/leads</code>
</div>

<span className="tag tag-scope">scope: leads.read</span>
<span className="tag tag-free">0 credits</span>

List leads with filters and pagination.

:::info
Leads are aggregated from replies — one lead = unique email + campaign combination.
:::

## Query parameters

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `campaign_id` | uuid | — | Filter by campaign |
| `classification` | string | — | `hot`, `warm`, `cold`, `not_interested`, `ooo` |
| `since` | ISO 8601 | — | Only leads with replies after this date |
| `limit` | integer | 50 | Max 100 |
| `offset` | integer | 0 | Pagination offset |

## Try it

<ApiPlayground
  method="GET"
  endpoint="/v1/leads"
  params={[
    { name: 'campaign_id', in: 'query', type: 'string', description: 'Filter by campaign UUID' },
    { name: 'classification', in: 'query', type: 'string', description: 'hot · warm · cold · not_interested · ooo', example: 'hot' },
    { name: 'limit', in: 'query', type: 'number', description: 'Max 100', example: '20' },
    { name: 'offset', in: 'query', type: 'number', description: 'Pagination offset', example: '0' },
  ]}
/>

## Response

```json
{
  "leads": [{
    "email": "john@acme.com",
    "name": "John Doe",
    "campaign_id": "abc-123",
    "campaign_name": "Q1 SaaS Outreach",
    "client_name": "Agency Client A",
    "classification": "hot",
    "reply_count": 3,
    "last_reply_at": "2026-03-19T14:30:00Z"
  }],
  "count": 1,
  "total_count": 147,
  "limit": 20,
  "offset": 0,
  "has_more": true
}
```
