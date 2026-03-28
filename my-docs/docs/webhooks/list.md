---
sidebar_position: 2
---

import ApiPlayground from '@site/src/components/ApiPlayground';

# GET /v1/webhooks

<div className="endpoint-header">
  <span className="method-pill method-get">GET</span>
  <code>/v1/webhooks</code>
</div>

<span className="tag tag-scope">scope: webhooks.manage</span>
<span className="tag tag-free">0 credits</span>

List all registered webhooks.

## Try it

<ApiPlayground method="GET" endpoint="/v1/webhooks" />

## Response

```json
{
  "webhooks": [{
    "id": "wh-abc123",
    "name": "Make.com Lead Sync",
    "events": ["lead.replied"],
    "is_active": true,
    "failure_count": 0,
    "disabled_reason": null
  }]
}
```
