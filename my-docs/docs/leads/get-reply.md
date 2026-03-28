---
sidebar_position: 4
---

import ApiPlayground from '@site/src/components/ApiPlayground';

# GET /v1/replies/:id

<div className="endpoint-header">
  <span className="method-pill method-get">GET</span>
  <code>/v1/replies/:id</code>
</div>

<span className="tag tag-scope">scope: leads.read</span>
<span className="tag tag-free">0 credits</span>

Fetch a specific reply with full thread context. Useful when an external tool or LLM needs the complete conversation history to generate a response.

## Try it

<ApiPlayground
  method="GET"
  endpoint="/v1/replies/{id}"
  params={[
    { name: 'id', in: 'path', required: true, description: 'Reply UUID', example: 'uuid-here' },
  ]}
/>

## Response

```json
{
  "reply": {
    "id": "uuid",
    "from_email": "john@acme.com",
    "from_name": "John Doe",
    "campaign_name": "Q1 SaaS Outreach",
    "body": "Can we schedule a call?",
    "classification": "hot",
    "received_at": "2026-03-20T14:30:00Z"
  },
  "thread": [
    { "role": "outbound", "content": "Hi John, I noticed Acme Corp is scaling...", "sent_at": "2026-03-18T09:00:00Z" },
    { "role": "reply", "content": "Can we schedule a call?", "received_at": "2026-03-20T14:30:00Z" }
  ],
  "thread_length": 2
}
```
